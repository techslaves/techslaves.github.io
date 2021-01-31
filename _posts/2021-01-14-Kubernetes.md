---
layout: post
title:  "01: Bootstrap Kubernetes cluster with underlying PV as NFS"
excerpt:
  "In this post we will cover how to Bootstrap Kubernetes cluster using Kubeadm with underlying
  persistent volume as NFS"
date:   2021-01-14 17:40:40 +0530
image: /assets/images/2021/01/api_course_header_7.png
categories:
  - "Devops"
tags:
  - Kubernetes
---
**Setup was done as below:**

1) Create three ec2 instance \
Master node : centos \
Worker node: centos \
NFS server : ubuntu

**Steps to create NFS Server**

a) Login to ubuntu server (Created on ec2 instance in step 1c) \
b) `$ sudo su ` \
c) `$ apt install nfs-kernel-server nfs-common portmap` \
d) `$ systemctl start nfs-server ` \
e) `$ cd /srv/`  \
f) `$ chmod -R 777 nfs` \
g) `vi /etc/exports 
       /srv/nfs/mydata *(rw,sync,no_subtree_check,no_root_squash,insecure)` \

![](/images/kubernetes/post01/NFS1.JPG)

h) `exportfs -rv ` \
i) `showmount -e` \

![](/images/kubernetes/post01/NFS2.JPG)

j) `systemctl restart nfs-server` \
k) Make sure you have below inbound rules for NFS client to ping to NFS server and mount directory on client-server

![](/images/kubernetes/post01/NFS3.JPG)

**Setup Master node (control plane)**

1) Install docker

   `sudo yum install -y yum-utils
    sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo 
    sudo yum install docker-ce docker-ce-cli containerd.io 
    sudo systemctl start docker 
    sudo docker --version 1` \

2) Setup Kubernetes

Installing kubeadm, kubelet and kubectl

`
cat <<EOF | sudo tee /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://packages.cloud.google.com/yum/repos/kubernetes-el7-\$basearch
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://packages.cloud.google.com/yum/doc/yum-key.gpg https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg
exclude=kubelet kubeadm kubectl
EOF`

3) # Set SELinux in permissive mode (effectively disabling it)
`$sudo setenforce 0`

4) `sudo sed -i 's/^SELINUX=enforcing$/SELINUX=permissive/' /etc/selinux/config`

5) `sudo yum install -y kubelet kubeadm kubectl --disableexcludes=kubernetes`

6) `sudo systemctl enable --now kubelet`

7) `sudo systemctl start docker.service`

8) `sudo systemctl enable docker.service`

9) Initialize cluster networking:
kubectl apply -f https://raw.githubusercontent.com/cloudnativelabs/kube-router/master/daemonset/kubeadm-kuberouter.yaml

![](/images/kubernetes/post01/NFS4.JPG)

![](/images/kubernetes/post01/NFS5.JPG)

10) Add below Inbound rules with masternode of kubernetes cluster

![](/images/kubernetes/post01/NFS6.JPG)

**Setup Worker Node**

Install Docker, kubeadm, kubelet and kubectl as done in above steps for master node

1) Login to worker node

2) Add below inbound rules on worker nodes (Without adding port TCP/UDP 2049/111 you won't be able to mount worker node on NFSdirectory)

![](/images/kubernetes/post01/NFS7.JPG)

3) Run token which you got from kubeadm init command:
 `$ kubeadm join 1X2.3X.4.XXX:6443 --token XXXXXXXXXXXXXXXXXXXXXXX\ --discovery-token-ca-cert-hash sha256:XXXXXXXXXXXXX`

4) `$ sudo yum install nfs-util `

![](/images/kubernetes/post01/NFS8.JPG)

![](/images/kubernetes/post01/NFS9.JPG)

5) `mount -t nfs :/srv/nfs/mydata /mnt `
6) `mount | grep mydata`

![](/images/kubernetes/post01/NFS10.JPG)

### Contents of yaml can be found at [TechSlaves Repo: deployment-pv-nfs](https://github.com/techslaves/kubernetes/tree/main/deployment-pv-nfs)

### Create PV, PVC and POD's to Use NFS server as underlying storage:

1) Login back to master node 

2) Run $kubectl get nodes (this should list one master and worker node as Ready) 

3) Create storageclass.yaml, pv.yaml, pvc.yaml, deployment.yaml 

### Create default storageclass.yaml 

[centos@ip-XX-XX-XX-XX~]$ cat storageclass.yaml 
![](/images/kubernetes/post01/nfs-storageclass-yaml.PNG)


### Create pv.yaml file with below contents

[centos@ip-XX-XX-XX-XX ~]$ cat pv.yaml
![](/images/kubernetes/post01/nfs-pv-yaml.PNG)


### Create pvc.yaml
[centos@ip-XX-XX-XX-XX ~]$ cat pvc.yaml
![](/images/kubernetes/post01/nfs-pvc-yaml.PNG)


### Create deployment.yaml
[centos@ip-XX-XX-XX-XX ~]$ cat nfs-deployment.yaml
![](/images/kubernetes/post01/nfs-deployment-yaml.PNG)

4) `$ kubectl apply -f storageclass.yaml`

5) `$ kubectl apply -f pvc.yaml`

6) `$ kubectl apply -f pv.yaml`

7) `$ kubectl apply -f deployment.yaml`

8) `$ kubectl get pods` : find the pod name and exec into it

9) `$ kubectl exec -it <pod-name> -- /bin/bash`

10) `$ cd /usr/share/nginx/html`

11) `$ touch index.html` - Any file created on location /usr/share/nginx/html will be backed up on NFS server location /srv/nfs/mydata