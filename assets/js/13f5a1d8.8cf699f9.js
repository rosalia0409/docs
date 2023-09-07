"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[73167],{30093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});n(67294);var o=n(85893),i=n(11151);const s={title:"Flow Port Staking Guide"},r=void 0,a={unversionedId:"building-on-flow/nodes/flow-port/staking-guide",id:"building-on-flow/nodes/flow-port/staking-guide",title:"Flow Port Staking Guide",description:"This guide provides step-by-step instructions for using the Flow Port to stake your FLOW tokens and start earning rewards.",source:"@site/docs/building-on-flow/nodes/flow-port/staking-guide.md",sourceDirName:"building-on-flow/nodes/flow-port",slug:"/building-on-flow/nodes/flow-port/staking-guide",permalink:"/docs/next/building-on-flow/nodes/flow-port/staking-guide",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/building-on-flow/nodes/flow-port/staking-guide.md",tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1694107593,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{title:"Flow Port Staking Guide"},sidebar:"buildingOnFlow",previous:{title:"Flow Port",permalink:"/docs/next/building-on-flow/nodes/flow-port/"},next:{title:"Slashing Conditions",permalink:"/docs/next/building-on-flow/nodes/slashing"}},d={},l=[{value:"First Step",id:"first-step",level:2},{value:"Stake a Node",id:"stake-a-node",level:2},{value:"Pre-requisites",id:"pre-requisites",level:4},{value:"Begin Staking",id:"begin-staking",level:3},{value:"Existing Node Operators",id:"existing-node-operators",level:3},{value:"Delegating",id:"delegating",level:2},{value:"Pre-requisites",id:"pre-requisites-1",level:4},{value:"Enter a Node Operator ID",id:"enter-a-node-operator-id",level:3},{value:"Enter an amount",id:"enter-an-amount",level:3},{value:"Returning to Port",id:"returning-to-port",level:2},{value:"Re-staking",id:"re-staking",level:2},{value:"Withdraw your Rewards",id:"withdraw-your-rewards",level:2}];function c(e){const t=Object.assign({p:"p",a:"a",h2:"h2",strong:"strong",img:"img",ul:"ul",li:"li",h4:"h4",h3:"h3"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["This guide provides step-by-step instructions for using the Flow Port to stake your FLOW tokens and start earning rewards.\nCurrently, Flow Port only supports staking or delegating using tokens held in Blocto or Ledger wallets.\nIf you're new to the concepts of staking and delegating you can ",(0,o.jsx)(t.a,{href:"/docs/next/building-on-flow/run-and-secure/staking/",children:"read this guide"})," to learn more."]}),"\n",(0,o.jsx)(t.h2,{id:"first-step",children:"First Step"}),"\n",(0,o.jsxs)(t.p,{children:["When you arrive in Port, select ",(0,o.jsx)(t.strong,{children:"Stake & Delegate"})," from the left-hand menu. You should be taken to this page."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(73527).Z+"",loading:"lazy",alt:"Flow Port Staking pt. 0",width:"2559",height:"1293"})}),"\n",(0,o.jsx)(t.p,{children:"From here you can decide whether to stake or delegate."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Select ",(0,o.jsx)(t.strong,{children:"Stake"})," if you plan to stake a node you're running."]}),"\n",(0,o.jsxs)(t.li,{children:["Select ",(0,o.jsx)(t.strong,{children:"Delegate"})," to delegate your stake to another Node Operator. You don't need to know which Node Operator, you'll be provided with a list to choose from. If you are not running your own node you scan skip directly to the ",(0,o.jsx)(t.a,{href:"#delegating",children:"delegation section"})]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"stake-a-node",children:"Stake a Node"}),"\n",(0,o.jsx)(t.p,{children:"Users who will be running their own nodes can stake them using the Flow Port."}),"\n",(0,o.jsx)(t.h4,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,o.jsx)(t.p,{children:"In order to stake your node, you'll need to have the required amount of FLOW for your node type.\nYou'll also need the following information about your node:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Node ID"}),"\n",(0,o.jsx)(t.li,{children:"Network Address"}),"\n",(0,o.jsx)(t.li,{children:"Networking Key"}),"\n",(0,o.jsx)(t.li,{children:"Staking Key"}),"\n",(0,o.jsx)(t.li,{children:"Machine Account Public Key (for collection/consensus nodes only)"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["If you don't have this information, go ",(0,o.jsx)(t.a,{href:"/docs/next/building-on-flow/nodes/node-operation/node-bootstrap#step-1---run-genesis-bootstrap",children:"here"})," for instructions on how to acquire it."]}),"\n",(0,o.jsx)(t.h3,{id:"begin-staking",children:"Begin Staking"}),"\n",(0,o.jsx)(t.p,{children:"First, select the type of node you'll be running by choosing from the list. You must have the required amount of locked FLOW in your account."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(84561).Z+"",loading:"lazy",alt:"Flow Port Staking",width:"2555",height:"1294"})}),"\n",(0,o.jsx)(t.p,{children:"Once you selected your node type, click next and specify how much you'd like to stake. The minimum amount for your node type is required,\nbut you may stake as much as you like beyond that. Here's the screen you should see:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(43227).Z+"",loading:"lazy",alt:"Flow Port Staking",width:"2560",height:"1291"})}),"\n",(0,o.jsxs)(t.p,{children:["Clicking next will take you to the final screen, where you'll need to enter information about your node you previously obtained.\nIf you don't have this information, go ",(0,o.jsx)(t.a,{href:"/docs/next/building-on-flow/nodes/node-operation/node-bootstrap#step-1---run-genesis-bootstrap",children:"here"})," for instructions on how to acquire it.\nHere's the screen you should see:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(43008).Z+"",loading:"lazy",alt:"Flow Port Staking",width:"2016",height:"1097"})}),"\n",(0,o.jsx)(t.p,{children:"Clicking next will take you to a confirmation screen. This is your chance to double-check that you've entered your information correctly. If you're ready, check the\nbox confirming your information and click submit to send the transaction that will stake your node! You should see a transaction status screen like this:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(49353).Z+"",loading:"lazy",alt:"Flow Port Staking",width:"2147",height:"1227"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note:"})," If your transaction fails, double-check the information you provided. ",(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(t.p,{children:"If you return to the home screen, you'll be able to see your staking request in progress!"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(10530).Z+"",loading:"lazy",alt:"Flow Port Staking",width:"1600",height:"805"})}),"\n",(0,o.jsx)(t.h3,{id:"existing-node-operators",children:"Existing Node Operators"}),"\n",(0,o.jsx)(t.p,{children:"If you are already a node operator with a staked node, you will first need to upgrade your account to a Staking Collection. On the Stake & Delegate page you will see a card which will walk you through submitting the transaction to upgrade your account to Staking Collection."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(76421).Z+"",loading:"lazy",alt:"Flow Port Staking",width:"1854",height:"1356"})}),"\n",(0,o.jsxs)(t.p,{children:["Once this is done, you can now create a ",(0,o.jsx)(t.a,{href:"/docs/next/building-on-flow/nodes/node-operation/machine-existing-operator",children:"Machine Account"}),' by clicking the "Upgrade Node" button on the Stake & Delegate page.']}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(52852).Z+"",loading:"lazy",alt:"Flow Port Staking",width:"2114",height:"1355"})}),"\n",(0,o.jsxs)(t.p,{children:["You can follow the guide ",(0,o.jsx)(t.a,{href:"/docs/next/building-on-flow/nodes/node-operation/machine-existing-operator",children:"here"})," to create your Machine Account."]}),"\n",(0,o.jsx)(t.h2,{id:"delegating",children:"Delegating"}),"\n",(0,o.jsx)(t.p,{children:"Delegating is the process of staking your locked FLOW to nodes which are being run by another party."}),"\n",(0,o.jsx)(t.h4,{id:"pre-requisites-1",children:"Pre-requisites"}),"\n",(0,o.jsxs)(t.p,{children:["In order to delegate your stake to another node, you'll need to know the ",(0,o.jsx)(t.strong,{children:"node operator ID"})," of the operator who is running the nodes you wish to stake.\nHere is a list of node operator IDs you can delegate to: ",(0,o.jsx)(t.a,{href:"https://github.com/onflow/flow/blob/master/nodeoperators/NodeOperatorList.md",children:"List of Available Node Operators"})]}),"\n",(0,o.jsx)(t.h3,{id:"enter-a-node-operator-id",children:"Enter a Node Operator ID"}),"\n",(0,o.jsx)(t.p,{children:"Simply enter the ID of the node operator of your choice and click next."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(78130).Z+"",loading:"lazy",alt:"Flow Port Staking",width:"2547",height:"1289"})}),"\n",(0,o.jsx)(t.h3,{id:"enter-an-amount",children:"Enter an amount"}),"\n",(0,o.jsx)(t.p,{children:"Next you'll enter an amount of FLOW you would like to delegate. When delegating you may send any amount to the node operator."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(83845).Z+"",loading:"lazy",alt:"Flow Port Staking",width:"2554",height:"1294"})}),"\n",(0,o.jsx)(t.p,{children:"Click next to reach the confirmation screen. Confirm the details of your delegation request and click submit!"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(27201).Z+"",loading:"lazy",alt:"Flow Port Staking",width:"2556",height:"1292"})}),"\n",(0,o.jsx)(t.p,{children:"Once your transaction is submitted, you can monitor its status from this screen, or return to the Flow Port home screen."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(20146).Z+"",loading:"lazy",alt:"Flow Port Staking",width:"2556",height:"1290"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note:"})," If you transaction fails, double-check the information you provided. ",(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(t.p,{children:"That's it! You've successfully delegated stake to your chosen node operator!"}),"\n",(0,o.jsx)(t.h2,{id:"returning-to-port",children:"Returning to Port"}),"\n",(0,o.jsx)(t.p,{children:"Within Flow Port, navigate to the \u2018Stake & Delegate\u2019 page to see details about your existing staked and/or delegated tokens.\nThis will also show you the rewards you have earned for your staked/delegated tokens."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(94431).Z+"",loading:"lazy",alt:"Flow Port Staking pt. 1",width:"1600",height:"805"})}),"\n",(0,o.jsx)(t.p,{children:"From here, you can do a few different things with your rewards:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["You can choose to ",(0,o.jsx)(t.strong,{children:"re-stake"})," them to the associated node."]}),"\n",(0,o.jsxs)(t.li,{children:["You can choose to ",(0,o.jsx)(t.strong,{children:"withdraw"})," them to your wallet."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"re-staking",children:"Re-staking"}),"\n",(0,o.jsx)(t.p,{children:"Flow Port will not automatically re-stake your rewards.\nTo re-stake your rewards, simply hover your cursor over the 3 dots next to the rewards field:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(7333).Z+"",loading:"lazy",alt:"Flow Port Re-Staking",width:"1600",height:"838"})}),"\n",(0,o.jsx)(t.p,{children:"Click on the Restake option. This will take you to a screen that looks like the below. Input the amount of rewards you want to re-stake, acknowledge the transaction inputs and click submit:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(78581).Z+"",loading:"lazy",alt:"Flow Port Re-Staking",width:"1600",height:"805"})}),"\n",(0,o.jsx)(t.p,{children:"Once the transition is processed, you can reference the Stake & Delegate page again to see the pending stake now:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(10530).Z+"",loading:"lazy",alt:"Flow Port Re-Staking",width:"1600",height:"805"})}),"\n",(0,o.jsx)(t.h2,{id:"withdraw-your-rewards",children:"Withdraw your Rewards"}),"\n",(0,o.jsx)(t.p,{children:"To withdraw your rewards, simply hover your cursor over the 3 dots next to the rewards field, and click on \u2018Withdraw\u2019."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(25316).Z+"",loading:"lazy",alt:"Flow Port Re-Staking",width:"1600",height:"838"})}),"\n",(0,o.jsx)(t.p,{children:"Input the amount that you want to withdraw to your wallet, acknowledge the transaction inputs and click submit:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(43960).Z+"",loading:"lazy",alt:"Flow Port Re-Staking",width:"1600",height:"805"})}),"\n",(0,o.jsx)(t.p,{children:"Once the transition is processed, you can now see the withdrawn rewards in your balance and you are now free to do other actions with them (send them to other accounts, delegate to a node, etc)."})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}},52852:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/machine-account-50a19dfa56b90773388b3ef775feeea1.png"},78130:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/port-delegate-1-1ca9effbfed4491f8eb74bc789b23fd6.png"},83845:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/port-delegate-2-ce86317bccedc87ba69a60dd86190424.png"},27201:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/port-delegate-3-1e23cd6033ad6769a16bae70a48f3347.png"},20146:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/port-delegate-4-f2cfdf332ed864627842f929e6457e53.png"},73527:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/port-stake-0-00-15c75f58a27d277620ad56e79959274d.png"},84561:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/port-stake-0-02-ec632972b71f3d1cc02500b1d696101b.png"},43227:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/port-stake-0-03-7365204b6912f08d81ff9f3127121c5b.png"},43008:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/port-stake-0-04-72ee335247ea972bff2a6d207cb27562.png"},49353:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/port-stake-0-05-c5c93efbe7b4a58126c2afb3b7b6bcd7.png"},94431:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/port-stake-1-97173e61152cf4e4511a10e12e8a0ab6.png"},7333:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/port-stake-2-af524896a940797144a6fadda3804408.png"},78581:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/port-stake-3-1710037da8e37cfeebc6593dfdb30e5a.png"},10530:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/port-stake-4-91a68814d26e24a5ad2e1d3df28a9eab.png"},25316:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/port-stake-5-af524896a940797144a6fadda3804408.png"},43960:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/port-stake-6-11d724c6fc65a64fa87b99df83bfeaa5.png"},76421:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/staking-collection-fb0ec5b1cf119f259739d49e23c083c4.png"}}]);