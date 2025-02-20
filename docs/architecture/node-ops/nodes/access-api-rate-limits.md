---
title: Flow Access API rate limits
sidebar_label: Access API Rate Limits
sidebar_position: 2
---

Following are the current rate limits for the [Access Node gRPC API](./access-api.md) in total across all public access nodes.
Once the limit has reached, the client will receive an RPC error `ResourceExhausted` in the gRPC response.

Please note, these limits only apply to the public (community) access nodes.

### Mainnet

---

The public access nodes are hosted by [QuickNode](https://www.quicknode.com/chains/flow).

> If you require higher limits, you can either run your own Access node (see this [guide](./node-operation/access-node-setup.md)) or use [QuickNode](https://www.quicknode.com/chains/flow) to run a fully-managed access node.


|                 gRPC API                             | Total requests per second per client IP        |
|:-----------------------------------------------------|:---------------------------------------------:|
| flow.access.AccessAPI/Ping                           |                   100                         |
| flow.access.AccessAPI/GetLatestBlockHeader           |                   100                         |
| flow.access.AccessAPI/GetBlockHeaderByID             |                   100                         |
| flow.access.AccessAPI/GetBlockHeaderByHeight         |                   100                         |
| flow.access.AccessAPI/GetLatestBlock                 |                   100                         |
| flow.access.AccessAPI/GetBlockByID                   |                   100                         |
| flow.access.AccessAPI/GetBlockByHeight               |                   100                         |
| flow.access.AccessAPI/GetCollectionByID              |                   100                         |
| flow.access.AccessAPI/SendTransaction                |                   50                          |
| flow.access.AccessAPI/GetTransaction                 |                   100                         |
| flow.access.AccessAPI/GetTransactionResult           |                   100                         |
| flow.access.AccessAPI/GetAccount                     |                   100                         |
| flow.access.AccessAPI/GetAccountAtLatestBlock        |                   100                         |
| flow.access.AccessAPI/GetAccountAtBlockHeight        |                   100                         |
| flow.access.AccessAPI/ExecuteScriptAtLatestBlock     |                   5                           |
| flow.access.AccessAPI/ExecuteScriptAtBlockID         |                   5                           |
| flow.access.AccessAPI/ExecuteScriptAtBlockHeight     |                   5                           |
| flow.access.AccessAPI/GetEventsForHeightRange        |                   30                          |
| flow.access.AccessAPI/GetEventsForBlockIDs           |                   30                          |
| flow.access.AccessAPI/GetNetworkParameters           |                   100                         |
| flow.access.AccessAPI/GetLatestProtocolStateSnapshot |                   100                         |


_The rate limits are the same for the gRPC-web interface and the REST API_


### Testnet

---


The public access nodes are hosted by Flow Foundation.

|                 gRPC API                             | Total request per second per IP               |
|:-----------------------------------------------------|:---------------------------------------------:|
| flow.access.AccessAPI/Ping                           |                   2000                        |
| flow.access.AccessAPI/GetLatestBlockHeader           |                   2000                        |
| flow.access.AccessAPI/GetBlockHeaderByID             |                   2000                        |
| flow.access.AccessAPI/GetBlockHeaderByHeight         |                   2000                        |
| flow.access.AccessAPI/GetLatestBlock                 |                   2000                        |
| flow.access.AccessAPI/GetBlockByID                   |                   2000                        |
| flow.access.AccessAPI/GetBlockByHeight               |                   2000                        |
| flow.access.AccessAPI/GetCollectionByID              |                   2000                        |
| flow.access.AccessAPI/SendTransaction                |                   2000                        |
| flow.access.AccessAPI/GetTransaction                 |                   2000                        |
| flow.access.AccessAPI/GetTransactionResult           |                   2000                        |
| flow.access.AccessAPI/GetAccount                     |                   2000                        |
| flow.access.AccessAPI/GetAccountAtLatestBlock        |                   2000                        |
| flow.access.AccessAPI/GetAccountAtBlockHeight        |                   2000                        |
| flow.access.AccessAPI/ExecuteScriptAtLatestBlock     |                   200                         |
| flow.access.AccessAPI/ExecuteScriptAtBlockID         |                   200                         |
| flow.access.AccessAPI/ExecuteScriptAtBlockHeight     |                   200                         |
| flow.access.AccessAPI/GetEventsForHeightRange        |                   100                         |
| flow.access.AccessAPI/GetEventsForBlockIDs           |                   100                         |
| flow.access.AccessAPI/GetNetworkParameters           |                   2000                        |
| flow.access.AccessAPI/GetLatestProtocolStateSnapshot |                   4                          |

_The rate limits are the same for the gRPC-web interface and the REST API_

Please note: The rate limits are applied by each of the access nodes behind a load balancer and limits listed here are the aggregate total from all the access nodes. Actual limits may be somewhat less depending on how the requests are routed.
