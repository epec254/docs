---
title: What does Raptor do?
sidebar_position: 2
---
# What is Raptor?



Raptor addresses these challenges and makes building [real-time ML](./real_time_ml.md) accessible to any data scientist who understands Python.  With Raptor, the productionization process is simplified, engineers and data scientists have a common language, and the timeline is drastically reduced.








Raptor abstracts away *where* the data comes from


# Introduction

real-time ML: User-facing functionality within an application that is based on machine learning predictions.  Predictions are exposed individually to the end-user.  Without the predictions, the functionality would not work or would be severely diminished.

There are unlimited examples of real-time ML, but to name a few:
Product recommendations
Dynamic routing of customer support tickets 
In-app toolbar personalization
Fraud detection 
Personalized offers to drive customer retention


A data scientst uses Raptor's Python SDK to decorate their imperative Python feature code and model training code, defining how data flows between data sources, features, and models in a Pythonic experience.  All aspects of the end-to-end production system are declared by the data scientist's code.

For model training, Raptor compiles the data scientist's code to Pandas (for local development) or Spark (for training in the cloud with big data).

For production, Raptor compiles the data scientist's code to kubectl deployable YAMLs.

Raptor's Kubernetes controller then implements ML and Data engineering best practices to connect to and generate features from your operational and analytical data sources.  Raptor passes features to models hosted by your cloud provider's model servers, returning the predictions via scalable, production ready APIs that can be directly integrated into your applications.
