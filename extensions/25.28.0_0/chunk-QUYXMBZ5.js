import{n as _,u as O}from"./chunk-GYYWNCQR.js";import{Ea as H}from"./chunk-AMFBRYZX.js";import{f as L,h as N}from"./chunk-ZS5DCR5N.js";import{c as w}from"./chunk-6OURT4HP.js";import{b as C}from"./chunk-6QNUOYSW.js";import{c as T,ea as $,fa as I,l as d,m as o}from"./chunk-AXFDOJRV.js";import{Da as D,c as v}from"./chunk-NRW4C74H.js";import{f as k,h as l,n as m}from"./chunk-YJSZZTEX.js";l();m();var e=k(v());l();m();var f=k(v());var M=5,S=5,p=2,U=S+2*p,A=14,X=A+2*p,V=S+2*p,G=o.div`
  display: flex;
  justify-content: ${t=>t.shouldCenter?"center":"flex-start"};
  align-items: center;
  position: relative;
  overflow: hidden;
  width: ${t=>(t.maxVisible-1)*U+X}px;
`,q=o.div`
  align-items: center;
  display: flex;
  ${t=>t.shouldShift&&d`
      transform: translateX(calc(-${V}px * ${t.shiftAmount}));
      transition: transform 0.3s ease-in-out;
    `}
`,z=o.div`
  align-items: center;
  background-color: ${D.colors.legacy.textSecondary};
  border-radius: 95px;
  display: flex;
  height: ${M}px;
  justify-content: center;
  margin: 0 ${p}px;
  min-width: ${S}px;
  transition: all 0.3s ease-in-out;
  ${t=>t.isActive&&d`
      min-width: ${A}px;
    `}
  ${t=>t.isSmall&&d`
      min-width: 3px;
      margin: 0 ${p}px;
      height: 3px;
    `}
`,F=o.div`
  width: ${A}px;
  height: ${M}px;
  border-radius: 95px;
  position: absolute;
  margin: 0 ${p}px;
  background-color: ${D.colors.legacy.accentPrimary};
  transition: transform 0.3s ease-in-out;
  ${t=>t.position&&d`
      transform: translateX(${t.position*V}px);
    `}
`,J=({numOfItems:t,currentIndex:i,maxVisible:a=5})=>{let n=t>a?i>a-3:!1,c=n?i-(a-3):0;return f.default.createElement(G,{shouldCenter:a>t,maxVisible:a},f.default.createElement(q,{shouldShift:n,shiftAmount:c},Array.from({length:t}).map((b,s)=>{let u=(s===i-2||s===i+2)&&n;return f.default.createElement(z,{key:`pagination-dot-${s}`,isActive:i===s,isSmall:u})}),f.default.createElement(F,{position:i})))},B=J;var K=o.div`
  height: 0;
  transition: height 0.2s ease-in-out;
  width: 100%;
  ${t=>t.animate?`height: ${t.shouldCollapse?t.itemHeight+26:t.itemHeight+46}px`:""}
`,Q=o.div`
  transition: transform 0.5s ease;
  width: 100%;
`,E=o(w)``,W=o.div`
  visibility: ${t=>t.isVisible?"visible":"hidden"};
`,Y=o.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`,Z=o.ul`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
  transition: transform 0.5s ease;
  transform: ${t=>`translateX(${t.currentIndex*-100}%)`};
`,R=o.li`
  align-items: center;
  display: flex;
  flex: 0 0 100%;
  padding: ${t=>t.isActive?"0":t.isNext||t.isPrevious?"0 6px":"0"};
  height: ${t=>t.isActive?t.itemHeight:.9*t.itemHeight}px; /* 0.9 is taken from parallaxAdjacentItemScale from the carousel on mobile */
`,ut=({items:t,onIndexChange:i,itemHeight:a})=>{let[n,c]=(0,e.useState)(0),b=(0,e.useCallback)(()=>{c(r=>r+1)},[]),s=(0,e.useCallback)(()=>{c(r=>r-1)},[]),u=n<t.length-1,x=n>0;(0,e.useEffect)(()=>{!t.length||n>t.length-1||i(n)},[t,i,n]),(0,e.useEffect)(()=>{t.length>0&&n>=t.length&&c(t.length-1)},[n,t]);let h=t.length<=1;return e.default.createElement(K,{animate:t.length>0,shouldCollapse:h,itemHeight:a},e.default.createElement(Q,null,e.default.createElement(Z,{currentIndex:n},t.map((r,y)=>e.default.createElement(R,{key:r.key,isActive:n===y,isNext:n+1===y,isPrevious:n-1===y,itemHeight:a},r.node))),!h&&e.default.createElement(Y,null,e.default.createElement(W,{isVisible:x},e.default.createElement(E,{onClick:s},e.default.createElement($,null))),e.default.createElement(B,{numOfItems:t.length,currentIndex:n,maxVisible:5}),e.default.createElement(W,{isVisible:u},e.default.createElement(E,{onClick:b},e.default.createElement(I,null))))))};l();m();var g=k(v());l();m();var j=t=>{if(t==="Settings: Security & Privacy")return O;if(t==="Settings: Currency")return _};var nt=g.default.lazy(()=>import("./FungibleDetailPage-VRDLYXR2.js")),wt=()=>{let{showSettingsMenu:t}=N(),{handleShowModalVisibility:i}=H(),{pushDetailView:a}=L(),n=T();return(0,g.useCallback)((b,s)=>{let{destinationType:u,url:x,caip19:h}=s;switch(u){case"External Link":C({url:x});break;case"Buy":i("onramp");break;case"Collectibles":n("/",{state:{defaultTab:"collectibles",nonce:Date.now()}});break;case"Explore":n("/explore");break;case"Swapper":n("/swap");break;case"Settings: Claim Username":i("quickClaimUsername");break;case"Settings: Import Seed Phrase":C({url:"onboarding.html?append=true"});break;case"Connect Hardware Wallet":C({url:"connect_hardware.html"});break;case"Convert to Jito":i("mintPSOLInfo",{presentNext:!0});break;case"Token":{if(!h)return;a(g.default.createElement(nt,{caip19:h,title:void 0,entryPoint:"actionBanner"}));break}default:{let r=j(u);if(!r)return;t(b,g.default.createElement(r,null))}}},[n,t,i,a])};export{wt as a,ut as b};
//# sourceMappingURL=chunk-QUYXMBZ5.js.map
