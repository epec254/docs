---
title: What is real-time ML?
sidebar_position: 0
---

**Real-time ML** is machine learning that delivers predictions in *direct response* to end-user behavior.  These predictions are exposed in:
* applications (website, mobile app, etc)
* messaging surfaces (text, chat, etc)
* business processes (credit decisions, support workflows, etc). 

Real-time ML delivers predictions that are based data representing the *current* state of the world.  This does not mean the input data values must be computed in real-time, but rather, that the values are reflective of the most recently available data. For example, a user's age can be computed once a year, but a user's clicks must be recomputed every few milliseconds.

In contrast, **analytical ML** exposes predictions in manually generated reports or BI dashboard tools, often with predictions that are generated using data that reflects a weeks to months old state of the world.

# The business case for real-time ML
We believe all businesses can increase their ML ROI by switching to real-time ML even if a use case *can* be served by analytical ML.  Intuitively, this makes sense: actioning a likely-to-churn customer in the moment we think that customer might churn rather than every 3 weeks when Joe in Marketing gets a report will increase the number of customers retained.   Quantitatively, here is one [example](https://engineering.linkedin.com/blog/2022/near-real-time-features-for-near-real-time-personalization) from LinkedIn.

To name a few examples:

|  | 🕰️  Analytical ML  | 🏪  Real-time ML  | Business case|
| --- | --- | --- | --- |
| **Customer retention** | Retention programs are implemented based on likelihood to churn computed every few weeks | Dynamic retention offers are sent in-app based on how the customer's current interactions and historical interactions that inform their probability of churning | ⬆️ retention |
| **Fraud detection** | Offline review of transactions after they happened | Fraudulent transactions are identified and triaged the moment they happen | ⬇️ fraud rate |
| **Upsell via customer support** | Product recommendations are based on the customer’s profile as of N weeks ago | Product recommendations take into account the context of the current interaction |⬆️ revenue/ customer |
| **Lead routing** | Leads are routed based on the rep’s close rate over the past year | Leads are routed based on every rep’s current load, their performance with similar customers to the current lead, and to reduce the number of miles driven based on their meetings this week | ⬆️ close rate|