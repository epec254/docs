---
title: What problem does Raptor solve?
sidebar_position: 1
---

## Building real-time ML is *hard*
Building [real-time ML](./real_time_ml.md) is a labor-intensive (number of people) and time consuming (months) process that requires significant collaboration between data scientists and engineers.

Teams face two top-level challenges:
1. How to enable collaboration between data scientists and engineers so each can deliver their work product independently & effectively share requirements with the other?
2. How to reduce the long and involved productionization timeline so more ideas can be tested and time-to-value reduced?

**Go [here](./what_does_raptor_do) if you'd like to skip to how Raptor addresses these challenges.**

## The impact

For the individuals building models, it takes forever to see the impact of their work in production.  It's difficult to get quick, iterative feedback on how their ideas do/don’t work in the real world.

For the leaders, this creates a serious drag on the ROI of data science teams.  The lengthy process increases the time to market (months to release any new model/features to production), the people cost of each release (ad-hoc data science + engineering resources), and prevents teams from working on all of the potential opportunities presented by the business.
## Why is building real-time ML hard?

**TLDR; models are trained with data from analytical data sources, but when deployed in production as APIs, must use data from operational data sources.  The process of translating from code that works on analytical data sources to code that works on operational data sources is time-consuming and difficult.**

<img src="/img/problem.png"></img>

To deploy [real-time ML](./real_time_ml.md) inside an application, in addition to model & feature development, you must build an API service (i.e., HTTP endpoint), that can take a business-level query from the application, and return a business-level prediction.  For example, an API that takes a query such as "what is the probability that transaction ID #XYZ is fraudulent?", and returns a prediction such as “not fraud (medium confidence).”

Building this service requires developing a program that:

1. Takes a query as input
2. Translates the query into a data structure that can be used by the ML model:
    * Fetch relevant data from production data sources
    * Sometimes, merge that data with data from the query
    * Manipulate the data (join/aggregate/transform/etc) to match the dataset that the ML model expects
3. Runs the ML model on the transformed dataset
4. Optionally, transforms the prediction based on business logic
5. Returns the (transformed) prediction

Like any modern production service, this program must be:
* Scalable
* Reliable
* Secure
* Fast enough to be used in production (e.g., low latency)

#1, #4, #5 are straightforward - there are many libraries that let you quickly stand up an API endpoint (FastAPI, AWS Lambda, etc) that contain arbitrary code/business logic - but do require engineering know-how (Docker, etc).  

#3 is not easy, but many tools greatly simplify the process of capturing and serving the ML model itself (Sagemaker endpoints, Vertex AI serving, BentoML, kServe, Seldon, etc).

#2 is quite challenging.  Preparing data for model training (feature engineering / pre-processing) is a straightforward, albeit time consuming, process typically done using data from analytical data sources (Snowflake, S3, Databricks, etc).  The challenge comes when translating the feature/data preparation logic used in model training to logic that can run in the production infrastructure within the aforementioned API (feature productionization).

Why? Production data lives in a variety of sources: REST APIs, application databases like Postgres, streams e.g. Kafka, and more) which are different from the analytical data sources used during model training.  

The batch-oriented feature engineering code written by data scientists for model training often can’t run directly in production.  A few examples:
* Querying a production database (Postgres, etc) is considered an anti-pattern in modern software. The commonly accepted pattern is to query against the application's exposed APIs, requiring the queries to be modified to work against the internal APIs.
* Logic that depends upon the presence of historical data must be modified to work in production where only the most recent data is available.
* When production data is only available as a stream (e.g., events, etc), the use of caches/intermediate value stores is required to do aggregations and joins that are first-class citizens in analytical engines
* Sometimes, production data must be supplemented with data that only exists in analytical sources (e.g. derived facts also used for BI, 3rd party data appends, etc).  Analytical sources are not designed for low-latency access that a production service requires, requiring the use of intermediate low-latency caches (e.g., Redis, etc).

Because of this, significant work is required to productionize each and every feature:
* Figure out which production data source has the input data used in the feature
* Identify the correct engineering approach to access and process this data (Flink, custom APIs, Scala, etc, etc)
* Translate the feature engineering logic to run in this system
* Verify and validate the logic produces equivalent data

While these steps are all technically possible - they require significant expertise in both production software engineering (backend), data engineering, and systems infrastructure. Said differently, it requires an experienced engineer to collaborate with the data scientists designing the business logic and algorithms, resulting in a situation where neither party can release their work independently.

