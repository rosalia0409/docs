"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3379],{92730:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});i(67294);var n=i(85893),o=i(11151);const s={title:"Kitty Items",description:"A CryptoKitties Sample App",sidebar_title:"Introduction"},a=void 0,r={unversionedId:"tutorials/kitty-items/index",id:"tutorials/kitty-items/index",title:"Kitty Items",description:"A CryptoKitties Sample App",source:"@site/docs/tutorials/kitty-items/index.md",sourceDirName:"tutorials/kitty-items",slug:"/tutorials/kitty-items/",permalink:"/docs/tutorials/kitty-items/",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/tutorials/kitty-items/index.md",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1684253869,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{title:"Kitty Items",description:"A CryptoKitties Sample App",sidebar_title:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"In-dapp Payments on Flow",permalink:"/docs/tutorials/in-dapp-payments"},next:{title:"Install",permalink:"/docs/tutorials/kitty-items/install"}},l={},c=[{value:"Video Walkthrough",id:"video-walkthrough",level:2},{value:"Live Demo",id:"live-demo",level:2},{value:"Project overview",id:"project-overview",level:2},{value:"1. Front End",id:"1-front-end",level:3},{value:"2. Back End",id:"2-back-end",level:3},{value:"3. Flow Network (Smart Contracts)",id:"3-flow-network-smart-contracts",level:3}];function d(e){const t=Object.assign({p:"p",a:"a",ul:"ul",li:"li",h2:"h2",img:"img",h3:"h3",em:"em"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Kitty Items is a complete NFT marketplace inspired by ",(0,n.jsx)(t.a,{href:"https://www.cryptokitties.co/",children:"CryptoKitties"}),", a web3 game that put NFTs on the map. You can use it as a blueprint for your own marketplace and to learn how to develop on Flow."]}),"\n",(0,n.jsxs)(t.p,{children:["The following chapters use the project to explain the components and concepts of the Flow blockchain and its programming language ",(0,n.jsx)(t.a,{href:"/docs/cadence/intro",children:"Cadence"}),". At the end, you will be able to:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"deploy and update smart contracts"}),"\n",(0,n.jsx)(t.li,{children:"mint and transfer NFTs"}),"\n",(0,n.jsx)(t.li,{children:"add a new kind of NFT to the marketplace"}),"\n",(0,n.jsx)(t.li,{children:"interact with the Flow blockchain from within a web application"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"video-walkthrough",children:"Video Walkthrough"}),"\n",(0,n.jsx)(t.p,{children:"Below is a 5-part video walkthrough that covers all the contents of this tutorial. You are welcome to watch or skip the video walkthrough depending on your style of learning. The embed below contains the whole series as a playlist, and the first video is dedicated to this introductory section. Each of the following pages will directly embed the corresponding video in the series."}),"\n",(0,n.jsx)("iframe",{width:"100%",height:"450",src:"https://www.youtube.com/watch?v=0oWWcuoZ6EI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,n.jsx)(t.h2,{id:"live-demo",children:"Live Demo"}),"\n",(0,n.jsxs)(t.p,{children:["By the end of the tutorial, you will have your own instance of Kitty Items. You can use our ",(0,n.jsx)(t.a,{href:"https://kitty-items.onflow.org/",children:"deployed demo instance"})," to explore the project."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://kitty-items.onflow.org/",children:(0,n.jsx)(t.img,{src:i(70357).Z+"",loading:"lazy",alt:"Kitty Items - Landing Page",width:"2783",height:"1320"})})}),"\n",(0,n.jsx)(t.h2,{id:"project-overview",children:"Project overview"}),"\n",(0,n.jsx)(t.p,{children:"The project consists of 3 key components:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(51975).Z+"",loading:"lazy",alt:"Project overview",width:"1931",height:"1393"})}),"\n",(0,n.jsx)(t.h3,{id:"1-front-end",children:"1. Front End"}),"\n",(0,n.jsxs)(t.p,{children:["This is a complete web application built with NextJS and React that demonstrates how to build a website that connects directly to the Flow blockchain using ",(0,n.jsx)(t.a,{href:"/docs/tooling/fcl-js/",children:"FCL"}),". FCL handles authentication and authorization of ",(0,n.jsx)(t.a,{href:"/docs/concepts/start-here/accounts-and-keys",children:"Flow accounts"}),", ",(0,n.jsx)(t.a,{href:"/docs/concepts/start-here/transaction-signing",children:"signing transactions"}),", and querying data using using Cadence scripts."]}),"\n",(0,n.jsx)(t.h3,{id:"2-back-end",children:"2. Back End"}),"\n",(0,n.jsx)(t.p,{children:"We love decentralization, but servers are still very useful, and this one's no exception. The backend API helps preserve the separation of concerns, so that your process and business logic doesn't have to implemented on the front-end. Backend operations are necessary to ensure secure handling of accounts and associated keys and to streamline blockchain interactions."}),"\n",(0,n.jsxs)(t.p,{children:["The code in this project demonstrates how to connect to Flow using ",(0,n.jsx)(t.a,{href:"/docs/tooling/fcl-js/",children:"FCL"})," from a Node JS backend. It's also chock-full of handy patterns you'll probably want to use for more complex and feature-rich blockchain applications, like storing and querying events using a SQL database (SQLite). The API demonstrates how to send transactions to the Flow blockchain, specifically for minting ",(0,n.jsx)(t.a,{href:"https://github.com/onflow/kitty-items/blob/master/cadence/contracts/KittyItems.cdc",children:"Kitty Items"})," (non-fungible tokens)."]}),"\n",(0,n.jsx)(t.h3,{id:"3-flow-network-smart-contracts",children:"3. Flow Network (Smart Contracts)"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/cadence/intro",children:"Cadence"})," smart contracts, scripts & transactions for your viewing pleasure. This is where all of the blockchain logic for the marketplace application lives. Here you will find examples of ",(0,n.jsx)(t.a,{href:"https://github.com/onflow/flow-ft",children:"fungible token"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/onflow/flow-nft",children:"non-fungible token (NFT)"})," smart contract implementations, as well as the scripts and transactions that interact with them. It also contains examples of how to ",(0,n.jsx)(t.em,{children:"test"})," your Cadence code."]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},51975:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/kitty-items-diagram-89ac01b0569508856800a5ae33c13320.png"},70357:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/landing-page-f88954c36c88ef18b2a5697088f7f7e2.png"}}]);