import{a as s,c as f}from"./chunk-Q3AAKXVO.js";import{a as T}from"./chunk-7EY5SCBH.js";import{Ea as b,L as I}from"./chunk-AMFBRYZX.js";import"./chunk-SERUZOGH.js";import"./chunk-KTETFJNC.js";import"./chunk-2ADUYUI4.js";import"./chunk-XQOJIQLP.js";import"./chunk-5JX67CVA.js";import"./chunk-HO7ZJLVP.js";import"./chunk-U2ZBADSX.js";import"./chunk-XBPWOUK6.js";import"./chunk-3A6TGOFP.js";import"./chunk-MWGJZC2B.js";import"./chunk-Y5DSDVWB.js";import"./chunk-Q2CJBZ36.js";import"./chunk-IEC36PYL.js";import"./chunk-RCTFQ5RY.js";import"./chunk-H7XHGTRT.js";import"./chunk-FFSCLU3N.js";import"./chunk-6OGAEY46.js";import"./chunk-ZS5DCR5N.js";import"./chunk-YQDK2KIS.js";import"./chunk-B5X6OJ4M.js";import"./chunk-UWMKBOBS.js";import"./chunk-CFJPS3RY.js";import"./chunk-6OURT4HP.js";import"./chunk-GWUVAKX4.js";import"./chunk-VGFG26AC.js";import"./chunk-64SFTQTZ.js";import"./chunk-6QNUOYSW.js";import"./chunk-3D6TIEIV.js";import"./chunk-MDYMDZNO.js";import"./chunk-TUQYLFS7.js";import"./chunk-G3SJLT24.js";import"./chunk-DR6UT56S.js";import"./chunk-I4O7QVCI.js";import"./chunk-BDQDDHRI.js";import"./chunk-PRCCLR5N.js";import"./chunk-JHSMRLRR.js";import{c as C,d as h}from"./chunk-EW3NOMMT.js";import{eb as l,m as o}from"./chunk-AXFDOJRV.js";import"./chunk-HBMWL2L6.js";import"./chunk-TEXQAPAF.js";import"./chunk-HPOIQOE7.js";import"./chunk-RL5NICHE.js";import"./chunk-DZSKJQUR.js";import"./chunk-IEY2ZFRQ.js";import"./chunk-BCKEKIIT.js";import"./chunk-GYYECUZK.js";import"./chunk-FDJQKATD.js";import"./chunk-OGTXJ4NL.js";import{Ib as g,lb as c,tb as x}from"./chunk-MP5PPKB7.js";import"./chunk-LV3AOIIH.js";import"./chunk-LT72WXA6.js";import{Da as a,Ia as B,Q as y,c as M}from"./chunk-NRW4C74H.js";import"./chunk-2POO4JJE.js";import"./chunk-PQWATTJB.js";import"./chunk-OLIHMAK6.js";import{f as v,h as u,n as d}from"./chunk-YJSZZTEX.js";u();d();var n=v(M());var P=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
`,D=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`,S=o(l).attrs({size:28,weight:500,color:a.colors.legacy.textPrimary})`
  margin: 16px;
`,V=o(l).attrs({size:14,weight:400,lineHeight:17,color:a.colors.legacy.textSecondary})`
  max-width: 275px;

  span {
    color: white;
  }
`,$=({networkId:t,token:r})=>{let{t:i}=y(),{handleHideModalVisibility:m}=b(),p=(0,n.useCallback)(()=>{m("insufficientBalance")},[m]),w=t&&x(g(c.getChainID(t))),{canBuy:k,openBuy:F}=I({caip19:w||"",context:"modal",analyticsEvent:"fiatOnrampFromInsufficientBalance"}),e=t?c.getTokenSymbol(t):i("tokens");return n.default.createElement(P,null,n.default.createElement("div",null,n.default.createElement(D,null,n.default.createElement(T,{type:"failure",backgroundWidth:75}),n.default.createElement(S,null,i("insufficientBalancePrimaryText",{tokenSymbol:e})),n.default.createElement(V,null,i("insufficientBalanceSecondaryText",{tokenSymbol:e})),r?n.default.createElement(B,{borderRadius:8,gap:1,marginTop:32,width:"100%"},n.default.createElement(s,{label:i("insufficientBalanceRemaining")},n.default.createElement(f,{color:a.colors.legacy.accentAlert},`${r.balance} ${e}`)),n.default.createElement(s,{label:i("insufficientBalanceRequired")},n.default.createElement(f,null,`${r.required} ${e}`))):null)),k?n.default.createElement(h,{primaryText:i("buyAssetInterpolated",{tokenSymbol:e}),onPrimaryClicked:F,secondaryText:i("commandCancel"),onSecondaryClicked:p}):n.default.createElement(C,{onClick:p},i("commandCancel")))},L=$;export{$ as InsufficientBalance,L as default};
//# sourceMappingURL=InsufficientBalance-YRJS7TB5.js.map
