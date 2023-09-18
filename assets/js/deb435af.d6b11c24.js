"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[34872],{67793:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});i(67294);var n=i(85893),s=i(11151);const a={title:"Options for Building Staking Integrations",sidebar_label:"Technical Staking Options"},o=void 0,r={unversionedId:"architecture/staking/staking-options",id:"architecture/staking/staking-options",title:"Options for Building Staking Integrations",description:"This document describes two different methods for staking at a high level.",source:"@site/docs/architecture/staking/13-staking-options.mdx",sourceDirName:"architecture/staking",slug:"/architecture/staking/staking-options",permalink:"/docs/next/architecture/staking/staking-options",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/architecture/staking/13-staking-options.mdx",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1695074937,formattedLastUpdatedAt:"Sep 18, 2023",sidebarPosition:13,frontMatter:{title:"Options for Building Staking Integrations",sidebar_label:"Technical Staking Options"},sidebar:"architecture",previous:{title:"Staking FAQ",permalink:"/docs/next/architecture/staking/faq"},next:{title:"Staking Collection Guide",permalink:"/docs/next/architecture/staking/staking-collection"}},c={},l=[];function d(t){const e=Object.assign({p:"p",h1:"h1",a:"a",code:"code"},(0,s.ah)(),t.components),{Callout:i}=e;return i||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"This document describes two different methods for staking at a high level."}),"\n",(0,n.jsx)(i,{type:"warning",children:(0,n.jsx)(e.p,{children:"We highly recommended you use the Staking Collection paradigm,\nas this will be the most supported method for staking with any set up."})}),"\n",(0,n.jsx)(e.h1,{id:"staking-collection",children:"Staking Collection"}),"\n",(0,n.jsx)(e.p,{children:"A Staking Collection is a resource that allows its owner to manage multiple staking\nobjects in a single account via a single storage path, and perform staking actions\nusing Flow. It also supports machine accounts, a necessary feature for Flow epoch node operation."}),"\n",(0,n.jsx)(e.p,{children:"The staking collection paradigm is the most flexible of the three choices\nand will receive the most support in the future. It is the set-up that Flow Port and many other staking providers use."}),"\n",(0,n.jsxs)(e.p,{children:["The staking collection setup and guide is detailed in the ",(0,n.jsx)(e.a,{href:"/docs/next/architecture/staking/staking-collection",children:"staking collection guide."})]}),"\n",(0,n.jsx)(e.h1,{id:"staking",children:"Staking"}),"\n",(0,n.jsxs)(e.p,{children:["The basic method to stake is to stake directly with the ",(0,n.jsx)(e.code,{children:"FlowIDTableStaking"})," smart contract.\nThis would involve calling the node or delegator registration functions directly in the staking\ncontract and storing the staking objects directly in account storage."]}),"\n",(0,n.jsx)(e.p,{children:"This is probably the simplest way to implement this, but it is not very flexible\nand not recommended."}),"\n",(0,n.jsxs)(e.p,{children:["The basic staking guide is detailed ",(0,n.jsx)(e.a,{href:"/docs/next/architecture/staking/staking-guide",children:"here"})]})]})}const h=function(t){void 0===t&&(t={});const{wrapper:e}=Object.assign({},(0,s.ah)(),t.components);return e?(0,n.jsx)(e,Object.assign({},t,{children:(0,n.jsx)(d,t)})):d(t)}}}]);