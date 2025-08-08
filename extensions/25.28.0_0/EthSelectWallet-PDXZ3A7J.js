import{e as f,g as y,h as A,i as k}from"./chunk-GNIODN4T.js";import"./chunk-EXPADA3D.js";import{d as g}from"./chunk-Q2CJBZ36.js";import"./chunk-QEL6D6X4.js";import"./chunk-6QNUOYSW.js";import{eb as h,m as e,ra as x}from"./chunk-AXFDOJRV.js";import"./chunk-TEXQAPAF.js";import"./chunk-BCKEKIIT.js";import"./chunk-GYYECUZK.js";import{U as n}from"./chunk-LV3AOIIH.js";import"./chunk-LT72WXA6.js";import{Da as l,Ha as u,Q as m,c as T,db as p,ib as d}from"./chunk-NRW4C74H.js";import{f as S,h as a,n as c}from"./chunk-YJSZZTEX.js";a();c();var t=S(T());var _=e.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 6px;
`,w=e.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,I=e.div`
  background: ${l.colors.legacy.bgRow};
  border-radius: 6px;
  padding: 12px 16px;
`,W=e.div`
  display: flex;
  flex-direction: row;
  color: ${l.colors.legacy.textPrimary};
  cursor: pointer;
  font-size: 14px;
  width: fit-content;
  margin-bottom: 8px;

  > span {
    min-height: 14px !important;
    height: 14px !important;
    min-width: 14px !important;
    width: 14px !important;
    border-radius: 3px !important;
  }
`,b=e.div`
  display: flex;
  gap: 16px;
`,P=e.div`
  padding: 27px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,G=t.default.memo(({requestId:i})=>{let{t:r}=m(),s=f(),[o,C]=(0,t.useState)(!1),M=(0,t.useCallback)(()=>{s({jsonrpc:"2.0",id:i,result:o?n.user_selectEthWallet.result.enum.ALWAYS_USE_PHANTOM:n.user_selectEthWallet.result.enum.CONTINUE_WITH_PHANTOM})},[i,s,o]),E=(0,t.useCallback)(()=>{s({jsonrpc:"2.0",id:i,result:o?n.user_selectEthWallet.result.enum.ALWAYS_USE_METAMASK:n.user_selectEthWallet.result.enum.CONTINUE_WITH_METAMASK})},[i,s,o]);return t.default.createElement(A,null,t.default.createElement(y,{style:{display:"flex",alignItems:"center"}},t.default.createElement(P,null,t.default.createElement(g,{icon:t.default.createElement(b,null,t.default.createElement(u.LogoFill,{size:64,color:"accentPrimary"}),t.default.createElement(x,{width:64,height:64})),primaryText:r("whichExtensionToConnectWith"),headerStyle:"small"}))),t.default.createElement(k,{plain:!0},t.default.createElement(_,null,t.default.createElement(w,null,t.default.createElement(p,{onClick:E,testID:"select_wallet--metamask"},r("useMetaMask"))),t.default.createElement(w,null,t.default.createElement(p,{theme:"primary",onClick:M,testID:"select_wallet--phantom"},r("usePhantom"))),t.default.createElement(I,null,t.default.createElement(W,null,t.default.createElement(d,{checked:o,onChange:()=>C(!o),label:{text:r("dontAskMeAgain"),color:"textPrimary"},shape:"square"})),t.default.createElement(h,{color:l.colors.legacy.textSecondary,size:13,weight:500,lineHeight:16,textAlign:"left"},r("configureInSettings"))))))}),K=G;export{G as EthSelectWallet,K as default};
//# sourceMappingURL=EthSelectWallet-PDXZ3A7J.js.map
