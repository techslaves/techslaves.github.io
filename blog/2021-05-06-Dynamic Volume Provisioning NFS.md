---
title:  Post 02 - Kubernetes Dynamic Provisioning, Persistent Volume on demand (Using helm charts)
excerpt: "In this post we will cover how to create storage volume (Persistent Volume) on demand in Kubernetes."
date:   2021-05-06 17:40:40 +0530
tags:
  - Kubernetes
---

In this post I will be covering details of configuring NFS dynamic provisioner on Bare Metal VM's. This article is part of series of Harbor High Availability

1) Harbor High Availability deployment on Kubernetes \
[Post 01 - Harbor High Availability deployment on Kubernetes](2021-05-14-Harbor%20High%20Availability%20deployment%20on%20Kubernetes.md) \

2) Kubernetes Dynamic Provisioning - Persistent Volume on demand (Using helm charts) (this post)

3) High available Redis (Using helm charts)

4) High available PostgreSQL database (Using helm charts) \
[Post 04 - PostgreSQL High Availability deployment on Kubernetes](2021-05-15-PostgeSQL%20High%20Availability%20deployment%20on%20Kubernetes.md) \

5) Harbor High Availability deployment in action on Kubernetes using helm chart. \

#### *This article can also be used to configure NFS Dynamic Provisioning even if you are not installing Harbor High Availability.*

**Prerequisite**

NFS server is up and running.

Read my previous post to create NFS server and bootstrap kubernetes using kubeadm.

- [Bootstrap Kubernetes cluster with PV as NFS ](2021-01-14-Kubernetes.md)

***What is NFS dynamic provisioning***

NFS dynamic provisioning allows PersistentVolume to be created on demand. There can be multiple storage class within a Kubernetes cluster which provide dynamic provisioning.

One option is we have default storage class configured for the cluster and each time a PVC is raised a PV is automatically created.
Storageclass can be marked as default using annotations under metadata.

annotations:
    storageclass.kubernetes.io/is-default-class=true

Other option is we have multiple dynamic provisioner configured and each time a PVC is raised it should be mentioned in yaml which provisioner user want to use to create underlying PV.
This can be achieved through mentioning storageclass in the yaml.

Usually each cloud provider provides a Volume plugin which is used as provisioner in storageclass yaml to define where underlying PV will be created for PVC on demand.

***Using helm chart for dynamic provisioning***

<script src="https://gist.github.com/techslaves/7f75665d4e31f68bd6ab9895dc47382f.js"></script>
	
**Default values of helm chart which are modified:**

*storageClass.reclaimPolicy :*
Default value is "Delete", incase if you want to retain the pv for future use override this value to "Retain". This will help to reclaim the obsoleted volume
For instance you have a statefulset and you reduce the number of replica.
Then again increase the number of replicas the old pv will still be lying and will automatically be attached with the new increased replica.
							 
*storageClass.archiveOnDelete :*
default value is true, which will result in archiving the pv data lying on NFS server.

Above two overriden values will help to retain data with pv incase you uninstall and reinstall a same helm chart.

*replicaCount :*
Increasing replica count to 3 for high availability. Which defaults to 1.

*storageClass.accessModes :*
default value is ReadWriteOnce(RWO). Other posssible values are ReadOnlyMany(ROX) and ReadWriteMany(RWX)
ReadWriteMany should be used when you want multiple pods(lying on multiple nodes) to write on same pv.
NFS, CephFS and Glusterfs only supports all three types of access modes.

Run $kubectl get sc

You should be able to see storage class with name `nfs-client`.

*Using --kubeconfig parameter as I am installing helm chart from powershell from my Windows laptop on remote kubernetes cluster.*

**Test automatic PV creation on NFS server***

Create below PVC and check if underlying PV is created on NFS server automatically

<script src="https://gist.github.com/techslaves/5212e35f209a71a347d3c0b7bd576103.js"></script>

Run $  kubectl get pv, pvc

Above command will show PVC created from above yaml and underlying pv.
Go to the nfs server on mount directory and one can find underlying pv folder.

**NOTE**
 This usecase was implemented was done on bare-metal cluster.
