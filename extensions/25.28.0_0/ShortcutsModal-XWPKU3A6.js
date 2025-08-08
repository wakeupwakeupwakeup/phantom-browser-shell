import{a as A,c as B}from"./chunk-RKJRDHBL.js";import{a as V}from"./chunk-PER5MVPJ.js";import{c as G}from"./chunk-EW3NOMMT.js";import{Aa as g,Ba as S,Ca as p,Da as f,Ea as x,Fa as k,Ga as y,Ha as w,Ia as L,Ja as T,Ka as v,La as C,Ma as M,Na as P,Oa as b,Pa as D,Qa as W,Ra as a,Sa as F,eb as O,m as o}from"./chunk-AXFDOJRV.js";import{c as d}from"./chunk-IEY2ZFRQ.js";import"./chunk-BCKEKIIT.js";import"./chunk-GYYECUZK.js";import"./chunk-OGTXJ4NL.js";import"./chunk-MP5PPKB7.js";import"./chunk-LV3AOIIH.js";import"./chunk-LT72WXA6.js";import{Da as I,Q as u,c as l}from"./chunk-NRW4C74H.js";import"./chunk-2POO4JJE.js";import"./chunk-PQWATTJB.js";import"./chunk-OLIHMAK6.js";import{f as h,h as i,n as c}from"./chunk-YJSZZTEX.js";i();c();var t=h(l());i();c();var N=h(l());var E={[V]:a,vote:L,"vote-2":T,stake:v,"stake-2":C,view:M,chat:P,tip:b,mint:D,"mint-2":W,"generic-link":a,"generic-add":F,discord:g,twitter:S,"twitter-2":p,x:p,instagram:f,telegram:x,leaderboard:w,gaming:k,"gaming-2":y};function U({icon:e,...n}){let s=E[e];return N.default.createElement(s,{...n})}var H=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -16px; // compensate for generic screen margins
`,Y=o.footer`
  margin-top: auto;
  flex-shrink: 0;
  min-height: 16px;
`,_=o.div`
  overflow: scroll;
`,j=o.ul`
  flex: 1;
  max-height: 350px;
  padding-top: 16px; // compensate for the override of the generic screen margins
`,q=o.li``,J=o.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;
`,K=o(O).attrs(e=>({margin:e.margin??"12px 0px"}))`
  text-align: left;
`;function Q({shortcuts:e,...n}){let{t:s}=u(),m=(0,t.useMemo)(()=>n.hostname.includes("//")?new URL(n.hostname).hostname:n.hostname,[n.hostname]);return t.default.createElement(H,null,t.default.createElement(_,null,t.default.createElement(j,null,e.map(r=>t.default.createElement(q,{key:r.uri},t.default.createElement(G,{type:"button",onClick:()=>{d.capture("walletShortcutsLinkOpenClick",A(n,r)),self.open(r.uri)},theme:"text",paddingY:6},t.default.createElement(J,null,t.default.createElement(U,{icon:B(r.uri,r.icon)})),r.label))))),t.default.createElement(Y,null,m&&t.default.createElement(K,{color:I.colors.legacy.textSecondary,size:14,lineHeight:17},s("shortcutsWarningDescription",{url:m}))))}var at=Q;export{Q as ShortcutsModal,at as default};
//# sourceMappingURL=ShortcutsModal-XWPKU3A6.js.map
