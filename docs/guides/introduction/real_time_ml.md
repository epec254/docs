---
title: Real-time ML
sidebar_position: 0
---

# What is real-time ML?

**Real-time ML** is machine learning that delivers predictions in *direct response* to user behavior.  Real-time ML predictions are exposed to an end-user within an application (website, mobile app, etc), messaging surface (text, chat, etc), or as the result of a business process (credit decisions, etc).

Real-time models use a combination of static (infrequently changing) and dynamic (frequently changing) features.  Regardless of how frequently a feature changes, predictions are dynamically generated based on features that represent the *current* state of the world (e.g., data is fresh not stale).

There are unlimited examples of real-time ML, but to name a few:
* Product recommendations
* Dynamic routing of customer support tickets 
* In-app toolbar personalization
* Fraud detection 
* Personalized offers to drive customer retention

In contrast, **analytical ML** exposes predictions in manually generated reports or BI dashboard tools.

# Why use real-time ML?

At Raptor, we believe the majority of machine learning use cases can maximize their ROI by shifting to real-time ML.  Even if a use case is served today by analytical ML, we believe there is significant ROI impact by shifting to real-time ML.  To quote a senior cloud architect at one of the big 3 cloud providers: *“there is one reason that companies come to us to upgrade their data infrastructure: they want to make real time decisions using AI.”*

For example, today, marketing analytics workloads (customer LTV, churn prediction, offer segmentation, etc) typically are analytical ML.  If these predictions could be based on up-to-the-minute information, intuitively, there is significant value: actioning a likely-to-churn customer in the moment we know that customer might churn rather than every 3 weeks when Joe in Marketing gets a report will increase the number of customers retained.  

Some other examples:

|  | 🕰️  Analytical ML  | 🏪  Real-time ML  |
| --- | --- | --- |
| Customer retention | Retention programs are implemented based on likelihood to churn computed every few weeks | Dynamic retention offers are sent the moment a customer has a probability of churning |
| Marketing offers | Send marketing campaigns that are based on the user’s lifetime value calculated N months ago | Marketing campaigns are sent based on LTV that is recalculated whenever the data inputs change |
| Fraud detection | Offline review of transactions after they happened | Fraudulent transactions are identified and triaged the moment they happen |
| Upsell via customer support | Product recommendations are based on the customer’s profile as of N weeks ago | Product recommendations take into account the context of the current interaction |
| Lead routing | Leads are routed based on the rep’s close rate over the past year | Leads are routed based on every rep’s current load, their performance with similar customers to the current lead, and to reduce the number of miles driven based on their meetings this week |