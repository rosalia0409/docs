"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[11974],{7822:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});a(67294);var n=a(85893),s=a(11151);const i={title:"Dapp Architectures on the Flow Blockchain",sidebar_title:"Dapp Architectures on the Flow Blockchain"},o=void 0,r={unversionedId:"tutorials/DappArchitectures",id:"tutorials/DappArchitectures",title:"Dapp Architectures on the Flow Blockchain",description:"Introduction",source:"@site/docs/tutorials/DappArchitectures.mdx",sourceDirName:"tutorials",slug:"/tutorials/DappArchitectures",permalink:"/docs/next/tutorials/DappArchitectures",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/tutorials/DappArchitectures.mdx",tags:[],version:"current",lastUpdatedBy:"Giovanni Sanchez",lastUpdatedAt:1690815991,formattedLastUpdatedAt:"Jul 31, 2023",frontMatter:{title:"Dapp Architectures on the Flow Blockchain",sidebar_title:"Dapp Architectures on the Flow Blockchain"},sidebar:"docsSidebar",previous:{title:"Developer Onboarding",permalink:"/docs/next/tutorials/intro"},next:{title:"NFT Drop Strategies",permalink:"/docs/next/tutorials/NFT-drop-styles"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Dapp Architectures",id:"dapp-architectures",level:2},{value:"Non-Custodial Flow Dapp Architecture",id:"non-custodial-flow-dapp-architecture",level:3},{value:"Custodial Flow Dapp Architecture",id:"custodial-flow-dapp-architecture",level:3},{value:"Backend-less Flow Dapp Architecture",id:"backend-less-flow-dapp-architecture",level:3},{value:"Dapp Interaction Sequences",id:"dapp-interaction-sequences",level:2},{value:"NFT Purchase in a Non-Custodial Dapp",id:"nft-purchase-in-a-non-custodial-dapp",level:3},{value:"NFT Purchase in a Custodial App",id:"nft-purchase-in-a-custodial-app",level:3},{value:"Appendix",id:"appendix",level:2},{value:"Ethereum Dapp Architecture",id:"ethereum-dapp-architecture",level:3}];function h(e){const t=Object.assign({h2:"h2",p:"p",a:"a",h3:"h3",img:"img",ul:"ul",li:"li",strong:"strong",ol:"ol"},(0,s.ah)(),e.components),{Callout:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"This document showcases the common solution architectures that the Flow blockchain dapps can follow. In addition, it shows interaction sequences between the solution components for the common user journeys."}),"\n",(0,n.jsx)(t.p,{children:"The audience for this document is someone who is at the beginning of the Flow dapp development process. For developers with Ethereum experience, we also contrast Ethereum dapp architecture with Flow dapp architecture."}),"\n",(0,n.jsxs)(t.p,{children:["Read this document as a companion guide to the ",(0,n.jsx)(t.a,{href:"https://docs.google.com/document/d/14eQE0wq60IRgD3N5jtwpW8RxexFt_hB3EHnDg_uBl8k/edit",children:"Flow Developer Onboarding Guide"}),"."]}),"\n",(0,n.jsx)(i,{type:"info",children:(0,n.jsx)(t.p,{children:"We mention various third-party services and software products in this document.That is not an endorsement. Developers should evaluate these products independently according to their needs."})}),"\n",(0,n.jsx)(t.h2,{id:"dapp-architectures",children:"Dapp Architectures"}),"\n",(0,n.jsx)(t.h3,{id:"non-custodial-flow-dapp-architecture",children:"Non-Custodial Flow Dapp Architecture"}),"\n",(0,n.jsx)(t.p,{children:"Non-custodial dapps let their users hold NFTs and other assets in user-controlled wallets like Blocto wallet."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(66351).Z+"",loading:"lazy",alt:"Non-custodial flow dapp architecture diagram",width:"960",height:"540"})}),"\n",(0,n.jsx)(t.p,{children:"In non-custodial scenarios, note the following aspects of the dapp design :"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Interaction with wallets"}),": Flow Client Library (FCL) abstracts out the wallet interactions for Flow dapps.\nIntegrating with FCL makes a dapp wallet-agnostic, and any future FCL-compatible wallet will be able to use it."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Managing blockchain transactions"}),": User transactions will typically be submitted to the blockchain by the FCL code in the UI client after obtaining signatures from the wallet services.\nBut sometimes, dapps need to submit transactions to the blockchain from their backend (minting NFTs, for example).\nSeveral SDKs are available to interact with the Flow blockchain, including some that are community-run. The SDKs interact with the access nodes of the Flow blockchain.\nWe recommend maintaining a queuing infrastructure within the dapp\u2019s backend to handle the scalability surge.\nThere are some third-party services available that make managing transactions from the dapp backend easier :"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.quicknode.com/chains/flow",children:"QuickNode"}),": QuickNode provides a reliable node service to access Flow blockchain. QuickNode's service is designed to optimize developer productivity by eliminating the complexities of setting up and maintaining their own nodes. By leveraging QuickNode's infrastructure, developers can focus on building and deploying decentralized applications (dApps) without the hassle of managing the underlying blockchain infrastructure."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.alchemy.com/flow",children:"Alchemy"}),": To get a dedicated Flow blockchain access node, Alchemy provides a managed access node service for the Flow dapp developers.\nAlchemy can allow dapp devs to bypass the rate limits imposed by official Flow access nodes without the operational overhead of running an access node."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://apidoc.tatum.io/",children:"Tatum"}),": Tatum provides REST APIs to let dapps perform high-level blockchain operations like creating Flow accounts, sending NFTs, or FLOW tokens to an address.\nIn some cases, Tatum will totally obviate the need to use the Flow SDK, or implement your own smart contract."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/flow-hydraulics/flow-wallet-api/",children:"Wallet-API"}),": Wallet-API can be a convenient way to manage both the transactions and the keys for your admin accounts in the backend."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Organizing/accessing blockchain data"}),": Dapps often have their business logic respond to the current and past events and transactions on the Flow blockchain.\nOne option is to listen to the events, maintain them, and index them.\nThird-party services like ",(0,n.jsx)(t.a,{href:"https://graffle.io/",children:"Graffle"})," and Tatum also provide REST APIs, and programmatic notifications/webhooks to receive Flow blockchain data such as events and transactions.\nSpecifically, Graffle can provide easy access to the past and real-time events on the Flow blockchain.\nThese third-party services can insulate your application from the requirement of being aware of ",(0,n.jsx)(t.a,{href:"/docs/next/concepts/nodes/node-operation/spork#past-and-upcoming-sporks",children:"sporks"}),".\nOtherwise, you will have to add logic in your application to navigate across ",(0,n.jsx)(t.a,{href:"/docs/next/concepts/nodes/node-operation/spork#past-and-upcoming-sporks",children:"past sporks"})," when looking up past blockchain data."]}),"\n"]}),"\n",(0,n.jsx)(i,{type:"info",children:(0,n.jsx)(t.p,{children:"With any of these payment rails choices, dapp developers should do their own legal/compliance due diligence."})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Payment rails"}),":"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Dapp-User payments"}),": If a dapp is selling an item directly to the user, it can use either of these two approaches:"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Credit Card/ACH"}),": Dapps can process payments using traditional Web2.0 methods and transfer NFTs if the payment completes successfully. Some payment processors, like ",(0,n.jsx)(t.a,{href:"https://www.moonpay.com/buy/flow",children:"Moonpay"}),", offer turnkey solutions to enable simple NFT purchases using credit cards."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Crypto/Stablecoin"}),": Users can pay dapps using FLOW token or stablecoins like USDC from their wallets."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"User-User (P2P) payments"}),": P2P payments (most commonly seen on the marketplace dapps) will involve users paying each other using FLOW tokens or stablecoins like USDC held in their wallets."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"custodial-flow-dapp-architecture",children:"Custodial Flow Dapp Architecture"}),"\n",(0,n.jsx)(t.p,{children:"Custodial dapps will store keys for the Flow accounts of their users in their backend, which insulates users from managing wallet accounts."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{src:a(97727).Z+"",loading:"lazy",alt:"Custodial flow dapp architecture diagram",width:"960",height:"540"}),")"]}),"\n",(0,n.jsx)(t.p,{children:"In custodial scenarios, note the following aspects of the dapp design:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Interaction with wallets"}),": Custodial wallets do not involve external user wallets.\nBut, the dapp backend needs to maintain \u201cwallets\u201d for each user by storing and managing their Flow account keys.\nWe provide a turnkey solution called Wallet API for managing custodial wallets and submitting/managing transactions for those custodial wallets.\nWhen using \u201cWallet API\u201d, make sure that your UI client/frontend is integrated with the \u201cFCL shim\u201d for \u201cWallet API\u201d. This will allow you to easily switch between custodial and non-custodial wallets in the event of a design change.\nAlways store users\u2019 Flow account private keys in a KMS or a similar secure key vault product. Usage of KMS makes sure the private keys never see the light of the day. \u201cWallet API\u201d is already integrated with Google Cloud KMS."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Managing blockchain transactions"}),": This is exactly the same as managing blockchain transactions with ",(0,n.jsx)(t.a,{href:"#non-custodial-flow-dapp-architecture",children:"non-custodial dapp architecture"}),", note that the \u201cWallet API\u201d module does most of the heavy lifting for submitting and managing transactions."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Organizing/accessing blockchain data"}),": Accessing blockchain data works exactly the same way as in ",(0,n.jsx)(t.a,{href:"#non-custodial-flow-dapp-architecture",children:"non-custodial dapp architecture"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Payment rails"}),":\nWith any of these payment rails choices, dapp developers should ",(0,n.jsx)(t.strong,{children:"do their own legal and compliance due diligence"}),".\nWith payment providers like Stripe, there might be a risk of being de-platformed at the payment providers' whim.\nAlso, when hosting a P2P marketplace, there may be Money Service Business (MSB) licensing issues."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Dapp-User payments"}),": If a dapp is selling an item to the user, the dapp can follow either of two approaches:"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Credit Card/ACH"}),": Dapps can process payments using traditional Web2.0 methods and transfer NFTs if the payment is successful."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Crypto/Stablecoin"}),": This can work in two ways:\nLoad Crypto/Stablecoin in the Flow account: Dapps will have to expose the Flow account details to the user, and the user will load up crypto/stablecoin in that account using an on-ramp like ",(0,n.jsx)(t.a,{href:"https://www.moonpay.com/buy/flow",children:"MoonPay"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Send Crypto/Stablecoin to the payment processor"}),": If the dapp\u2019s payment processor also accepts crypto, then the dapp developer will be able to accept payment in crypto from the user without saddling the user with the Flow account details."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"User-to-User (P2P) payments"}),":\n",(0,n.jsx)(t.strong,{children:"Credit Card/ACH"}),": With this approach, sellers are on-boarded onto the payment processor\u2019s system, potentially as sub-merchants, and the buyers pay using a credit card or ACH through the payment processor.\nAll the money settlement happens in FIAT.\nOnly NFT gets transferred on the blockchain upon successful transaction completion."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Crypto/Stablecoin"})," With this approach, buyers will directly send USDC or FLOW to the sellers.\nDapps will have to expose the flow account details to the user and the users will load up crypto/stablecoin in their account using on-ramps like ",(0,n.jsx)(t.a,{href:"https://www.moonpay.com/buy/flow",children:"MoonPay"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"backend-less-flow-dapp-architecture",children:"Backend-less Flow Dapp Architecture"}),"\n",(0,n.jsx)(t.p,{children:"For some use-cases, developers can create a backend-less dapp.\nTo interact with a dapp without a backend, a user typically interacts with a static webpage."}),"\n",(0,n.jsx)(t.p,{children:"For such a dapp all the business logic will reside on the blockchain smart contracts and the frontend. Dapp state however, is saved on the blockchain.  For efficiently querying past blockchain data, these dapps can rely on external services like Graffle."}),"\n",(0,n.jsx)(t.p,{children:"Dapp developers and admins will configure and update their dapps by directly interacting with the blockchain.\nBackend-less dapps provide a high degree of decentralization. These dapps can continue providing services to their users even when the dapp development teams are no longer around."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(54002).Z+"",loading:"lazy",alt:"Non-custodial flow dapp architecture diagram",width:"960",height:"540"})}),"\n",(0,n.jsx)(t.h2,{id:"dapp-interaction-sequences",children:"Dapp Interaction Sequences"}),"\n",(0,n.jsx)(t.h3,{id:"nft-purchase-in-a-non-custodial-dapp",children:"NFT Purchase in a Non-Custodial Dapp"}),"\n",(0,n.jsx)(t.p,{children:"The following sequence diagrams show how two different NFT purchase flows can happen in a non-custodial dapp:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"NFT buyer pays using a credit card through the dapp\u2019s payment processor, and the dapp developer receives payment in FIAT."}),"\n",(0,n.jsx)(t.li,{children:"NFT buyer pays the dapp developer using crypto/stablecoin tokens."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(9201).Z+"",loading:"lazy",alt:"Non-custodial flow dapp architecture diagram",width:"766",height:"705"})}),"\n",(0,n.jsxs)(t.p,{children:["You can find the diagram ",(0,n.jsx)(t.a,{href:"https://sequencediagram.org/index.html#initialData=C4S2BsFMAIDFwPYHdoDkEDsC0BhArgM7AIAmIAhuNACLkAOdasAKtAAp4BOAxgBbkEYSML2g5OkMsBzlOJAFzQA8nVCZoAYgCMAKD3luxTtACC4EN0h66s0NxA2MwaACIAQokMIAOhgAU8MjQAOqUUM4AypCcAG4WkACULtAC0EhhkMB6Ojacdg7kTq60DL5+wZAARqYMSSkENPR01rYWBUUuqCzQEUaQAGacmMC+EQC2tmLDnAYj-oEoHgjcANZ85CAYdaldzNkA5kN4jG54AJ5MezqHCMdiEuTAMAum3IbQANoqahiUfpgwUBjGCYcBnBIAXR0ZniAB4sAA+dLgcKKajIDCIcgkaCVTzEFIMaHmSzwpEZYCKcSQR4wPHLAkGbi3Jy+QibfbQSATEBUbEkCQEAg6SAYEh6DAIJ7QBAxaKmEmQAA0jQYijYQziBBA6hhlgA5A0XkznP0EMZgLxAWc6CD+pcGgQEOAcZULpaYCVmnrIIivYoolB3h7LtACZVzsS4X6muryBczRaraH2RhOdwJFJoNxZDi-L1OA5EjpJdLZfLkeEVbtFMwZhgCP15SHdmGEAr4oaQhTsqKSEA",children:"source here"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(68188).Z+"",loading:"lazy",alt:"Non-custodial flow dapp architecture diagram",width:"950",height:"793"})}),"\n",(0,n.jsxs)(t.p,{children:["You can find the diagram ",(0,n.jsx)(t.a,{href:"https://sequencediagram.org/index.html#initialData=C4S2BsFMAIDFwPYHdoDkEDsC0BhArgM7AIAmIAhuNACLkAOdasAKtAAp4BOAxgBbkEYSML2g5OkMsBzlOJAFzQA8nVCZoAYgBMAKD2QMoYAE9oAWQSY65Y3vLdinaAEFwIbpD3XOobiGuG0ABEAEKIDggAOhgAFPDI0ADqlFDA0ADKkJwAbu6QAJRB0ALQSCmQwHo63r7+5IFBtAzRMYmQAEYuDIXFBDT0dF6ytQFpQagsGY6QAGacmMDR6QC2w2ILnPaLsfEoYQjcANZ85CAYPSUTzFUA5vN4jOKQ5MAw9STQADII5B+7LtwHDpXHkADxYAB8ZXAqUU1GQGEQv2g7XCxGKDGBbg84Kh5WAiieLxgqIO6Ps3AQeEM0UIZxu0EgqxAVF+JAkBAIegwCFe0AQ2Sy5ksGGsxgANKV8YoQnhTLAAKrpajQOkYBlPKQyOQ6AwkPR3KmMWWmK5VLF5SHQ2Hsea5AggdT-CnbGYIJzAXgwEx0GAIGZMZgEaIEBDgD7tUyemDUZyYkEeSFNOiKTJQByB6Do9py7m8v2CpzWiqSq6KACM+WgzE2GAIMyFiuV0BikAAjnhKFmEFmvdA6Jw8vyA1cq3MEMsXNjIAByPrF7ZaKs1+r1oVXbtTvJzpL46IAZirTZVID6wFra84Eg+6Oj-QYO4X0XQr0Urio-t7b3aApgREgdB9Nw9QojAJCYDAZzFNADrqlAxTEMs7gouExz8FBwAAB4YFUepAA",children:"source here"})]}),"\n",(0,n.jsx)(i,{type:"info",children:(0,n.jsx)(t.p,{children:"NFT buyers may also use on-ramp providers like Moonpay, Wyre, or Ramp to purchase crypto using their credit cards."})}),"\n",(0,n.jsxs)(t.p,{children:["The sequence diagrams above show interactions with the mobile app version of the Blocto wallet.\nYou can use the Blocto wallet purely from the web as well, inside of the dapp, giving a compelling user experience (see ",(0,n.jsx)(t.a,{href:"https://vault.cnn.com/",children:"Vault by CNN"}),")."]}),"\n",(0,n.jsx)(t.h3,{id:"nft-purchase-in-a-custodial-app",children:"NFT Purchase in a Custodial App"}),"\n",(0,n.jsx)(t.p,{children:"The following diagram shows NFT purchases using a credit card in a custodial dapp environment. Payment processing is done off-chain and the dapp collects the payment in FIAT.\nThe only transactions that happen on the blockchain are the NFT minting (and storage for those dapps holding an inventory), and transfers to the buyer\u2019s account."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(81108).Z+"",loading:"lazy",alt:"Non-custodial flow dapp architecture diagram",width:"937",height:"678"})}),"\n",(0,n.jsxs)(t.p,{children:["You can find the diagram ",(0,n.jsx)(t.a,{href:"https://sequencediagram.org/index.html#initialData=C4S2BsFMAIDFwPYHdoDkEDsC0BhArgM7AIAmIAhuNACLkAOdasAKtAAp4BOAxgBbkEYSML2g5OkMsBzlOJAFzQA8nVCZoAYgBMAKD2QMoYAE9oAWQSY65Y3vLdinaAEFwIbpD3XOobiGuG0ABEAEKIDggAOhgAFPDI0ADqlFDA0ADKkJwAbu6QAJRB0ALQSCmQwHo63r7+5IFBtAzRMYmQAEYuDIXFBDT0dF6ytQFpQagsGY6QAGacmMDR6QC2w2ILnPaLsfEoYQjcANZ85CAYPSUTzFUA5vN4jOKQ5MAw9STQADII5B+7LtwHDpXHkADxYAB8ZXAqUU1GQGEQv2g7XCxGKDGBbg84Kh5WAiieLxgqIO6Ps3AQeEM0UIZxu0EgqxAVF+JAkBAIegwCFe0AQ2Sy5ksGGsxgANKV8YoQnhTLAAKrpajQOkYBlPKQyOQ6AwkPR3KmMWWmK5VLF5SHQ2Hsea5AggdT-CnbGYIJzAXgwEx0GAIGZMZgEaIEBDgD7tUyemDUZyYkEeSFNOiKTJQByB6Do9py7m8v2CpzWiqSq6KACM+WgzE2GAIMyFiuV0BikAAjnhKFmEFmvdA6Jw8vyA1cq3MEMsXNjIAByPrF7ZaKs1+r1oVXbtTvJzpL46IAZirTZVID6wFra84Eg+6Oj-QYO4X0XQr0Urio-t7b3aApgREgdB9Nw9QojAJCYDAZzFNADrqlAxTEMs7gouExz8FBwAAB4YFUepAA",children:"source here"})]}),"\n",(0,n.jsx)(t.h2,{id:"appendix",children:"Appendix"}),"\n",(0,n.jsx)(t.h3,{id:"ethereum-dapp-architecture",children:"Ethereum Dapp Architecture"}),"\n",(0,n.jsx)(t.p,{children:"Ethereum is one of the major general-purpose smart contract blockchain platforms. Dapps developing on Ethereum are primarily focused on decentralization. We discuss some of the common patterns with Ethereum dapps and what are their equivalents on the Flow blockchain."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(89367).Z+"",loading:"lazy",alt:"Non-custodial flow dapp architecture diagram",width:"960",height:"540"})}),"\n",(0,n.jsx)(t.p,{children:"Common themes among dapps built on Ethereum:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Interaction with wallets"}),": Most Ethereum dapps integrate with the web3js library in the frontend to abstract out interaction with wallets. Due to web3js, the dapps do not have to be aware of the intricacies of individual wallets. On the Flow blockchain, the equivalent of web3js is FCL."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Managing blockchain transactions"}),": There is no official Ethereum node offering access APIs for submitting transactions. Ethereum dapp projects generally do not run their own full node. Instead, they rely on a service like that from Infura (or Alchemy) to reliably submit and manage their transactions. Alchemy provides services for the Flow blockchain as well. Tatum and Graffle provide equivalent services on the Flow blockchain as Infura on Ethereum."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Organizing/accessing blockchain data"}),": There are many mature Ethereum ecosystem projects like Etherscan that collect, maintain, and index blockchain data, and provide blockchain access services through APIs. Most Ethereum dapps use these services for querying the blockchain. Graffle and Flowscan are the equivalents of Etherscan on the Flow blockchain."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Payment rails"}),": Due to the focus on decentralization Ethereum dapps mostly rely on tokens including stablecoins for payment on-ramp/off-ramp."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The following diagram shows an example interaction sequence with an Ethereum Dapp."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(22512).Z+"",loading:"lazy",alt:"Non-custodial flow dapp architecture diagram",width:"989",height:"900"})}),"\n",(0,n.jsxs)(t.p,{children:["You can find the diagram ",(0,n.jsx)(t.a,{href:"https://sequencediagram.org/index.html#initialData=C4S2BsFMAIFFgBaQE6QK4FtoBECGAHfaAOQDEAVaABTWQGMFcBnGAVReWlPAHsB3AFADIAO1DAAntABEsAB4NcIgOaQAOiIAUAYR4gRAI2aQAlNOjM4CxisgDoA3HWA9OAQXAg6d-LmSg6EF8xGQ8vSAByJmgAdVxwKGANTQBZSGBcFOYAazMLaLSMrKZsoV9-LyClYBk8QmSYyANoN0I8yzr8Mr8AqpDpMkoAZRdUDSGMHuhdMWQnJK14JFRMdujBoREeYBgeADcUFs9vABorRVsALmgARhNoIZBlETQiADNXCxELOjoeNDEGgATPcAOI8aCIZD-ZQICzQADSAE1tNAGJA6NkNABme4AGX02UhSGgRhERKcfwBwCYm22uwO7mOkDOhUyOWud2gAEkREwMgliTBIHIdnyQDxvh9OAxoRh1CIQdBQaIULgdl8ACbQJi4A7wliQbX4BBzFgCZTQ17QABCaCkrCG2G0AjC3gAtAA+eQXVTXO0Op0un02VRe6Bs4rZa54ni4bWO53QSXQPjxRLCESaoQWq1EAMkCiu5lezrXIaQKDOQuUFyk+0CTpeyMch6ibXAOZ8+YSqWfAj4aF7eLF8LN9LskrXVqD-YwTtKXXOXsCFslL2Da7kLtMN6HRMuwbjoqt7eLvecDbthxAA",children:"source here"})]})]})}const d=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}},81108:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image1-2ccc230c7f6ca5930cf56948ccb66895.png"},97727:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image2-c896b7cb9a6f731df7b20b9b3fe102ba.png"},54002:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image3-43a3594b082925a4c417efcc67e2e199.png"},66351:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image4-f440c531eadd3e7c5c326fa69da65a18.png"},22512:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image5-07238cf42ca24c56daf21704ace7d004.png"},89367:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image6-9ab003fb7864f61f4eee3ac9ec99b4f3.png"},9201:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image7-3f4c7cbb09770e8733e80b898ab47d5e.png"},68188:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image8-eb75cf525a10dc06ba88021de73af711.png"}}]);