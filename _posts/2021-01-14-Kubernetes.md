---
layout: post
title:  "BootStrap Kubernetes Cluster with Kubeadm!!"
excerpt:
  "In this post we will cover how to Boot strap Kubernetes cluster using Kubeadm with underlying
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
h) `exportfs -rv ` \
i) `showmount -e` \
j) `systemctl restart nfs-server` \
k) Make sure you have below inbound rules for NFS client to ping to NFS server and mount directory on client-server

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

4) sudo sed -i 's/^SELINUX=enforcing$/SELINUX=permissive/' /etc/selinux/config

5) sudo yum install -y kubelet kubeadm kubectl --disableexcludes=kubernetes

6) sudo systemctl enable --now kubelet

7) sudo systemctl start docker.service

8) sudo systemctl enable docker.service

9) Initialize cluster networking:
kubectl apply -f https://raw.githubusercontent.com/cloudnativelabs/kube-router/master/daemonset/kubeadm-kuberouter.yaml

10) Add below Inbound rules with masternode of kubernetes cluster

**Setup Worker Node**

1) Login to worker node

2) Add below inbound rules on worker nodes (Without adding port TCP/UDP 2049/111 you won't be able to mount worker node on NFSdirectory)

3) Run token which you got from kubeadm init command:
 $ kubeadm join 1X2.3X.4.XXX:6443 --token XXXXXXXXXXXXXXXXXXXXXXX\ --discovery-token-ca-cert-hash sha256:XXXXXXXXXXXXX

4) $ sudo yum install nfs-util 













5) mount -t nfs :/srv/nfs/mydata /mnt 
6) mount | grep mydata



Create PV, PVC and POD's to Use NFS server as underlying storage:

1) Login back to master node 
2) Run $kubectl get nodes (this should list one master and worker node as Ready) 
3) Create storageclass.yaml, pv.yaml, pvc.yaml, deployment.yaml 
Create default storageclass.yaml 
[centos@ip-XX-XX-XX-XX~]$ cat storageclass.yaml 
apiVersion: storage.k8s.io/v1 
kind: StorageClass 
metadata: 
  name: local-storage
provisioner: kubernetes.io/no-provisioner 
volumeBindingMode: WaitForFirstConsumer


