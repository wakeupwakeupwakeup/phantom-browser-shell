import{a as v}from"./chunk-B5X6OJ4M.js";import{c as A}from"./chunk-6OURT4HP.js";import{hb as u}from"./chunk-G3SJLT24.js";import{c as k}from"./chunk-EW3NOMMT.js";import{S as b,eb as C,m as e}from"./chunk-AXFDOJRV.js";import"./chunk-FDJQKATD.js";import"./chunk-OGTXJ4NL.js";import"./chunk-MP5PPKB7.js";import"./chunk-LV3AOIIH.js";import"./chunk-LT72WXA6.js";import{Da as c,Ha as d,Ia as T,Q as h,Yb as w,c as I}from"./chunk-NRW4C74H.js";import"./chunk-2POO4JJE.js";import"./chunk-PQWATTJB.js";import"./chunk-OLIHMAK6.js";import{f as H,h as f,n as y}from"./chunk-YJSZZTEX.js";f();y();var o=H(I());var F=16,D=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  height: 100%;
`,P=e.div`
  overflow: scroll;
`,M=e.div`
  margin: 45px 16px 16px 16px;
  padding-top: 16px;
`,$=e(A)`
  left: ${F}px;
  position: absolute;
`,z=e.div`
  align-items: center;
  background: ${c.colors.legacy.bgWallet};
  border-bottom: 1px solid ${c.colors.legacy.borderSecondary};
  display: flex;
  height: 46px;
  padding: ${F}px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,S=e.div`
  display: flex;
  flex: 1;
  justify-content: center;
`,W=e.footer`
  margin-top: auto;
  flex-shrink: 0;
  min-height: 16px;
`,B=e(C).attrs(r=>({margin:r.margin??"12px 0px"}))`
  text-align: left;
`,G=e(C).attrs({size:16,weight:500,lineHeight:25})``;function L(r){let{actions:i,shortcuts:p,trackAction:n,onClose:s}=r;return(0,o.useMemo)(()=>{let a=i.more.map(t=>{let x=d[u(t.type)],l=t.isDestructive?"accentAlert":"textPrimary";return{start:o.default.createElement(x,{size:18,type:t.type,color:l}),topLeft:{text:t.text,color:l},onClick:()=>{n(t),s(),t.onClick(t.type)}}}),m=p?.map(t=>{let x=d[u(t.type)],l=t.isDestructive?"accentAlert":"textPrimary";return{start:o.default.createElement(x,{size:18,color:l}),topLeft:{text:t.text,color:l},onClick:()=>{n(t),s(),t.onClick(t.type)}}})??[];return[{rows:a},{rows:m}]},[i,s,p,n])}function N(r){let{t:i}=h(),{headerText:p,hostname:n,shortcuts:s}=r,g=L(r);return o.default.createElement(D,null,o.default.createElement(P,null,o.default.createElement(z,{onClick:r.onClose},o.default.createElement($,null,o.default.createElement(b,null)),o.default.createElement(S,null,o.default.createElement(G,null,p))),o.default.createElement(M,null,o.default.createElement(T,{gap:"section"},g.map((a,m)=>o.default.createElement(w,{key:`group-${m}`,rows:a.rows}))),o.default.createElement(W,null,n&&s&&s.length>0&&o.default.createElement(B,{color:c.colors.legacy.textSecondary,size:14,lineHeight:17},i("shortcutsWarningDescription",{url:n})))),o.default.createElement(v,{removeFooterExpansion:!0},o.default.createElement(k,{onClick:r.onClose},i("commandClose")))))}var Y=N;export{N as CTAModal,Y as default};
//# sourceMappingURL=Modal-WY7NJSNA.js.map
