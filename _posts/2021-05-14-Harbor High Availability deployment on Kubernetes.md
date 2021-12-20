---
layout: post
title:  Post 01 - Harbor High Availability deployment on Kubernetes
excerpt:
  "In this post I will be covering details of deployment of Harbor High Availability on Bare Metal VM's."
date:   2021-05-14 17:40:40 +0530
image: /images/kubernetes/HARBOR.PNG
categories:
  - "Devops"
tags:
  - Kubernetes
---

![](/images/kubernetes/HARBOR.PNG)

In this post I will be covering details of deployment of Harbor High Availability on Bare Metal VM's. This will be a series of article covering

1) Harbor High Availability deployment on Kubernetes (this post)

2) Kubernetes Dynamic Provisioning - Persistent Volume on demand (Using helm charts) \
[Kubernetes Dynamic Provisioning - Persistent Volume on demand (Using helm charts)]({% link _posts/2021-05-06-Dynamic Volume Provisioning NFS.md %}) \\

3) High available Redis (Using helm charts) \

4) High available PostgreSQL database (Using helm charts) \
[Post 04 - PostgreSQL High Availability deployment on Kubernetes]({% link _posts/2021-05-15-PostgeSQL High Availability deployment on Kubernetes.md %}) \

5) Harbor High Availability deployment in action on Kubernetes using helm chart. \

> Harbor is an open source registry that secures artifacts with policies and role-based access control, 
ensures images are scanned and free from vulnerabilities, and signs images as trusted. 
Harbor, a CNCF Graduated project, delivers compliance, performance, and interoperability to help you consistently
 and securely manage artifacts across cloud native compute platforms like Kubernetes and Docker. - Source (Harbor.io)

## Prerequisite

To install harbor using helm chart on Kubernetes cluster, we need to have 

#### *1) Kubernetes cluster 1.10+ :*
We need to have Kubernetes cluster. Refer my previous post for this - [Bootstrap Kubernetes cluster with PV as NFS ]({% link
  _posts/2021-01-14-Kubernetes.md %})

#### *2) Helm 2.8.0+ :* 
I have installed helm in my local windows machine and using cluster config file from .kube folder to remotely connect to cluster.
We can install helm chart on remote cluster using --kubeconfig parameter with value as path to config file.
Eg: --kubeconfig=D:\kubernetes\config

#### *3) High available PostgreSQL database :*
Harbor helm chart don't deploy PostgreSQL HA cluster and we need to pass IP address in values.yaml file of Harbor helm for its integration with Harbor.
This can be achieved using bitnami helm chart from this link - [PostgreSQL helm](https://github.com/bitnami/charts/tree/master/bitnami/postgresql-ha)

#### *4) High available Redis :*
Harbor helm chart don't deploy Redis HA cluster and we need to pass IP address in values.yaml file of Harbor helm for its integration with Harbor.
This can be achieved using bitnami helm chart from this link - [Redis Helm](https://github.com/bitnami/charts/tree/master/bitnami/redis)


#### *5) PVC that can be shared across nodes or external object storage :*
I will be using NFS as shared storage device across nodes. Along with this I will configure NFS dynamic Provisioner for automatically creating PV on demand on the NFS.


## Now lets discuss on details of POD's created using Harbor helm chart:

I did not enabled harbor-exporter for now. 

#### *1) harbor-chartmuseum -*
Harbor support storing helm chart along with docker Image. Incase you don't require helm chart support in your private Harbor repository you can disable this using harbor helm chart.

#### *2) harbor-core -*
Harbor Core is one of the main components of Harbor. It interacts with redis cluster. So, incase redis cluster integration is not successful this pod will not come up and in turn harbor-jobservice pod will not come.

#### *3) harbor-jobservice -* 
Harbor jobservice is one of the main components of Harbor. This is the last pod to come up in all the pods of helm chart.

#### *4) harbor-nginx -*
Nginx container is itself a Reverse Proxy in front of the core and the portal containers. If Harbor is exposed as Ingress, then nginx pod is not deployed.

#### *5) harbor-notary-server -*
Notary server is used for signing and verifying images. It is a optional pod and can be disabled used values.yaml in Harbor Helm charts.
This is used when you want to sign you image while pushing. 
Developer enable content trust and export server details.
export DOCKER_CONTENT_TRUST=1 and export DOCKER_CONTENT_TRUST_SERVER=https://IP_ADDRESS:4443

#### *6) harbor-notary-signer -*
Notary Signer cordinates with notary-server for signing image.

In the next post I will be configuring NFS-Dynamic provisioner which will create PV's on demand for PVC's created by Redis, PostgreSQL and Harbor Helm chart- \
[Kubernetes Dynamic Provisioning - Persistent Volume on demand (Using helm charts)]({% link _posts/2021-05-06-Dynamic Volume Provisioning NFS.md %})