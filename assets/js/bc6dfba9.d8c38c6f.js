"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[73888],{43819:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});t(67294);var s=t(85893),i=t(11151);const c={title:"Account Linking (FLIP 72)",sidebar_position:15},o="Overview",a={unversionedId:"concepts/account-linking/index",id:"concepts/account-linking/index",title:"Account Linking (FLIP 72)",description:"The Account Linking feature on Flow enables developers to provide seamless onboarding and in-app experiences while",source:"@site/docs/concepts/account-linking/index.mdx",sourceDirName:"concepts/account-linking",slug:"/concepts/account-linking/",permalink:"/docs/next/concepts/account-linking/",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/account-linking/index.mdx",tags:[],version:"current",lastUpdatedBy:"Vishal",lastUpdatedAt:1693846461,formattedLastUpdatedAt:"Sep 4, 2023",sidebarPosition:15,frontMatter:{title:"Account Linking (FLIP 72)",sidebar_position:15},sidebar:"concepts",previous:{title:"FLOW Token",permalink:"/docs/next/concepts/flow-token"},next:{title:"Building Walletless Applications Using Child Accounts",permalink:"/docs/next/concepts/account-linking/child-accounts"}},r={},l=[{value:"User Journey",id:"user-journey",level:3},{value:"See it in Action",id:"see-it-in-action",level:3},{value:"Why Care?",id:"why-care",level:3},{value:"Guides",id:"guides",level:3},{value:"Resources",id:"resources",level:3}];function d(e){const n=Object.assign({h1:"h1",p:"p",a:"a",ul:"ul",li:"li",code:"code",h3:"h3",ol:"ol",strong:"strong"},(0,i.ah)(),e.components),{Callout:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["The Account Linking feature on Flow enables developers to provide seamless onboarding and in-app experiences while\nsimultaneously empowering users with real ownership and self-sovereignty.\xa0With this ",(0,s.jsx)(n.a,{href:"https://forum.onflow.org/t/hybrid-custody/4016",children:"new custodial\nmodel"}),", developers can deliver the benefits of both app and self-custody\nin a unified experience."]}),"\n",(0,s.jsx)(n.p,{children:"The full user experience is enabled by three core components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Walletless Onboarding - App managed account creation, funding, and custody"}),"\n",(0,s.jsx)(n.li,{children:"Account Linking - App custodied accounts may delegate access to users wallet"}),"\n",(0,s.jsxs)(n.li,{children:["Core ",(0,s.jsx)(n.code,{children:"HybridCustody"})," contract - A standard contract enabling users to view and manage their linked accounts"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"user-journey",children:"User Journey"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The app creates, funds, and manages access to a Flow account initialized on user onboarding. This enables the app to\nabstract away the complexities of interacting with smart contract powered applications, and focus on creating slick\nuser experiences behind familiar Web2 authentication and fiat denominated payments."}),"\n",(0,s.jsx)(n.li,{children:"Once a user returns to the app with a self-custodial wallet, they can authenticate their wallet-managed account in\nthe app, allowing the app to give the user's main account delegated access to the app managed account (albeit with\nsome developer-defined restrictions)."}),"\n",(0,s.jsx)(n.li,{children:'Upon linking, the user\'s main account - now the "parent" account - adds the app created account - now the "child"\naccount - to a collection of all linked child accounts. At this point, Hybrid Custody is reached!'}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"see-it-in-action",children:"See it in Action"}),"\n",(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/0eYX_S4jUYM?start=846",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,s.jsx)(t,{type:"info",children:(0,s.jsxs)(n.p,{children:["Experience the magic of Account Linking in the arcade demo yourself ",(0,s.jsx)(n.a,{href:"https://walletless-arcade-game.vercel.app/",children:"here"}),"!"]})}),"\n",(0,s.jsx)(n.h3,{id:"why-care",children:"Why Care?"}),"\n",(0,s.jsxs)(n.p,{children:["Account Linking grants users access to their linked child accounts without needing to interface with the child account's\ncustodial app, ",(0,s.jsx)(n.strong,{children:"and"})," the custodial app can interact with the relevant assets in the child account on behalf of the\nuser in a frictionless UX free from transaction prompts."]}),"\n",(0,s.jsx)(t,{type:"success",children:(0,s.jsx)(n.p,{children:"All assets in the app account can now jump the walled garden to play in the rest of the Flow ecosystem. No transactions are needed to move assets from the child account to the parent account, as the parent account already has full access to the assets in the child account."})}),"\n",(0,s.jsx)(n.p,{children:"This shared control over the digital items in the in-app account enables users to establish real ownership of the items\nbeyond the context of the app, where they can use their self-custody wallet to view inventory, take the items to other\napps in the ecosystem, such as a marketplace or a game."}),"\n",(0,s.jsx)(n.p,{children:"Most importantly, users are able to do this without the need to transfer the digital items between accounts,\nmaking it seamless to continue using the original app while also using other apps."}),"\n",(0,s.jsx)(n.p,{children:"With account linking, developers can build walletless onboarding experiences for new users that provide a clear path to\nself-custody. Continue on to read our guides for more details on how you can use Account Linking to\nbuild spectacular experiences on Flow."}),"\n",(0,s.jsx)(n.h3,{id:"guides",children:"Guides"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/next/concepts/account-linking/child-accounts",children:"Building Walletless Applications Using Child Accounts"})," covers how apps can leverage Account Linking to create a seamless user\nexperience and enable future self-custody."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/next/concepts/account-linking/parent-accounts",children:"Working With Parent Accounts"})," covers features enabled by the core ",(0,s.jsx)(n.code,{children:"HybridCustody"})," contract to\naccess child account assets from parent accounts. This is useful for apps like marketplaces or wallets that are working with\naccounts that have potential child accounts."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://forum.onflow.org/t/hybrid-custody/4016",children:"Forum Post"})," where core concepts were introduced and discussed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/onflow/hybrid-custody",children:"GitHub repository"})," where ",(0,s.jsx)(n.code,{children:"HybridCustody"})," core contract is maintained.\nCheck out the repository for more advanced script or transaction examples."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/jribbink/magic-link-hc-sample/",children:"Example"})," Account Linking project with ",(0,s.jsx)(n.a,{href:"https://magic.link/",children:"Magic"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/Niftory/niftory-samples/tree/main/walletless-onboarding",children:"Starter template"})," for ",(0,s.jsx)(n.a,{href:"https://niftory.com/",children:"Niftory"})," Account\nLinking API."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/onflow/hybrid-custody-scaffold",children:"Scaffold"})," to start a new Account Linking project. Check out Flow CLI\n",(0,s.jsx)(n.a,{href:"/docs/next/tools/toolchains/flow-cli/super-commands#using-scaffolds",children:"Scaffolds"})," to get started."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/flow-hydraulics/flow-wallet-api/",children:"Wallet API"})," is a microservice that enables apps to custody accounts. This is useful if you\ndon't want to use a third-party service to manage user accounts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/onflow/walletless-arcade-example",children:"Walletless Arcade"})," example demonstrates Account Linking with a local key management solution."]}),"\n"]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);