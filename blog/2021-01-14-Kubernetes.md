---
title:  Bootstrap Kubernetes cluster with PV as NFS
excerpt: "In this post we will cover how to Bootstrap Kubernetes cluster using Kubeadm with underlying persistent volume as NFS"
date:   2021-01-14 17:40:40 +0530
tags:
  - Kubernetes
---
**Create three ec2 instance**

Master node : centos \
Worker node: centos \
NFS server : ubuntu

**Steps to create NFS Server on ubuntu instance**

<script src="https://gist.github.com/techslaves/70de4a76c0d72bf006c7d0572a081d1f.js"></script>

![](/img/kubernetes/post01/NFS1.JPG)

![](/img/kubernetes/post01/NFS2.JPG)

Make sure you have below inbound rules for NFS client to ping to NFS server and mount directory on client-server

![](/img/kubernetes/post01/NFS3.JPG)

**Setup Master node (control plane) - Install Docker and Kubernetes (kubeadm, kubectl, kubelet)**

<script src="https://gist.github.com/techslaves/b5830e4a9155e3f85fb199ebb5774329.js"></script>

![](/img/kubernetes/post01/NFS4.JPG)

![](/img/kubernetes/post01/NFS5.JPG)

Add below Inbound rules with masternode of kubernetes cluster

![](/img/kubernetes/post01/NFS6.JPG)

**Setup Worker Node**

Install Docker, kubeadm, kubelet and kubectl as done in above steps for master node

1) Login to worker node

2) Add below inbound rules on worker nodes (Without adding port TCP/UDP 2049/111 you won't be able to mount worker node on NFSdirectory)

![](/img/kubernetes/post01/NFS7.JPG)

3) Run token which you got from kubeadm init command:
 `$ kubeadm join 1X2.3X.4.XXX:6443 --token XXXXXXXXXXXXXXXXXXXXXXX\ --discovery-token-ca-cert-hash sha256:XXXXXXXXXXXXX`

4) `$ sudo yum install nfs-util `

![](/img/kubernetes/post01/NFS8.JPG)

![](/img/kubernetes/post01/NFS9.JPG)

5) `mount -t nfs :/srv/nfs/mydata /mnt `
6) `mount | grep mydata`

![](/img/kubernetes/post01/NFS10.JPG)

***Create PV, PVC and POD's to Use NFS server as underlying storage:***

1) Login back to master node 

2) Run
$kubectl get nodes (this should list one master and worker node as Ready) 

*Create default nfs-storageclass.yaml* 
<script src="https://gist.github.com/techslaves/44c423d5d887c1941df3ab23cbd37d3f.js"></script>


***Create nfs-pv.yaml file with below contents***
<script src="https://gist.github.com/techslaves/3bf0f8f6728cd46db7c9dead33bf5168.js"></script>


***Create pvc.yaml***
<script src="https://gist.github.com/techslaves/30229b3dfc3777d66cfdb3543215c06c.js"></script>

***Create nfs-deployment.yaml***
<script src="https://gist.github.com/techslaves/d1999bb64a02e767fb1f16c673e4af33.js"></script>

<script src="https://gist.github.com/techslaves/0a86d2c1479ce24bfa9158bf2499afef.js"></script>

Any file created on location /usr/share/nginx/html will be backed up on NFS server location /srv/nfs/mydata

***NOTE***
** Contents of yaml can be found at [TechSlaves Repo: deployment-pv-nfs](https://github.com/techslaves/kubernetes/tree/main/deployment-pv-nfs) **
