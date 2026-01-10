---
title:  Dive - Into docker images
excerpt: "In this post we will look into a tool called DIVE to understand and optimize docker images"
date:   2021-09-25 17:40:40 +0530
tags:
  - Kubernetes
  - Docker
---

**Docker Image Layers**

Usually when a developer looks into docker images docker image history `<image-id>` is used to understand each layer, size of each layer and other image.

Reducing image size is a common problem which is faced while building docker image and to overcome this problem we follow best practices like using multi stage build , using smaller base image, use && with RUN command to reduce number of layers.

DIVE is a tool which help in analysis of Image layers, Potential wasted Image, Image efficiency score. It help visualise each image layer and files added and modified in each layer.

It is supported on Windows, MacOs and Linux.

![](/img/devops/dive/Dive_Image_Inspection.JPG)

Various option of DIVE usage:

![](/img/devops/dive/Dive_Usage.JPG)


DIVE can also be integrated with CI tool to check if image passes highestUserWastedPercent (highest allowable percentage of bytes wasted), highestWastedBytes(highest allowable bytes wasted) and lowestEfficiency(lowest allowable image efficiency). If these criteria does not meet the expectation docker push to Docker Image repository will fail.

![](/img/devops/dive/Dive_CI_Integration.JPG)

Integration will fail incase docker image does not meet the specified criteria.

![](/img/devops/dive/Dive_CI_Failed.JPG)

DIVE can also be optimsed by placing .dive.yaml file in home directory.
