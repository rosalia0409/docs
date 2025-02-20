---
title: Archive Access API rate limits on Dapper Labs Archive nodes
sidebar_label: Archive API Rate Limits
sidebar_position: 4
---

#### Rate limits

Following are the current rate limits for the [Archive Node gRPC API](./archive-access-api.md) in total across all Dapper Labs Archive nodes. The actual limits are enforced by each individual node. If you are using a load balanced endpoint, the limits below are the max rate, and may vary depending on how your requests are routed.

Once the limit has reached, the client will receive an RPC error `ResourceExhausted` in the gRPC response.

Please note, these limits only apply to the archive nodes hosted by Dapper Labs. Archive nodes run by other node operators will have different rate limits.
Also, all the gRPC endpoints listed below start with `flow.access.AccessAPI` due to the Archive Access API having the same gRPC protobuf definitions as the original Access API from our [Access Nodes](./node-operation/node-roles.md#access). For information on rate limitting of the Access API for Flow's Access Nodes please visit [this page](./access-api-rate-limits.md).

##### Mainnet

|                 gRPC API                             | Total request per second per client IP        |
|:-----------------------------------------------------|:---------------------------------------------:|
| flow.access.AccessAPI/GetAccountAtBlockHeight        |                   5                           |
| flow.access.AccessAPI/ExecuteScriptAtBlockID         |                   5                           |
| flow.access.AccessAPI/ExecuteScriptAtBlockHeight     |                   5                           |


##### Testnet

|                 gRPC API                             | Total request per second per IP               |
|:-----------------------------------------------------|:---------------------------------------------:|
| flow.access.AccessAPI/GetAccountAtLatestBlock        |                   5                           |
| flow.access.AccessAPI/ExecuteScriptAtBlockID         |                   5                           |
| flow.access.AccessAPI/ExecuteScriptAtBlockHeight     |                   5                           |



