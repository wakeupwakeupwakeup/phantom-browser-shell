import{Ea as g}from"./chunk-AMFBRYZX.js";import"./chunk-SERUZOGH.js";import"./chunk-KTETFJNC.js";import"./chunk-2ADUYUI4.js";import"./chunk-XQOJIQLP.js";import"./chunk-5JX67CVA.js";import"./chunk-HO7ZJLVP.js";import"./chunk-U2ZBADSX.js";import"./chunk-XBPWOUK6.js";import"./chunk-3A6TGOFP.js";import"./chunk-MWGJZC2B.js";import"./chunk-Y5DSDVWB.js";import"./chunk-Q2CJBZ36.js";import"./chunk-IEC36PYL.js";import"./chunk-RCTFQ5RY.js";import"./chunk-H7XHGTRT.js";import"./chunk-FFSCLU3N.js";import"./chunk-6OGAEY46.js";import"./chunk-ZS5DCR5N.js";import"./chunk-YQDK2KIS.js";import"./chunk-B5X6OJ4M.js";import"./chunk-UWMKBOBS.js";import"./chunk-CFJPS3RY.js";import"./chunk-6OURT4HP.js";import{ua as S,vb as y}from"./chunk-GWUVAKX4.js";import"./chunk-VGFG26AC.js";import"./chunk-64SFTQTZ.js";import"./chunk-6QNUOYSW.js";import"./chunk-3D6TIEIV.js";import"./chunk-MDYMDZNO.js";import"./chunk-TUQYLFS7.js";import"./chunk-G3SJLT24.js";import"./chunk-DR6UT56S.js";import{a as w}from"./chunk-I4O7QVCI.js";import"./chunk-BDQDDHRI.js";import"./chunk-PRCCLR5N.js";import"./chunk-JHSMRLRR.js";import{d as T}from"./chunk-EW3NOMMT.js";import{eb as a,ga as u,m as o}from"./chunk-AXFDOJRV.js";import"./chunk-HBMWL2L6.js";import"./chunk-TEXQAPAF.js";import"./chunk-HPOIQOE7.js";import"./chunk-RL5NICHE.js";import"./chunk-DZSKJQUR.js";import"./chunk-IEY2ZFRQ.js";import"./chunk-BCKEKIIT.js";import"./chunk-GYYECUZK.js";import"./chunk-FDJQKATD.js";import"./chunk-OGTXJ4NL.js";import"./chunk-MP5PPKB7.js";import"./chunk-LV3AOIIH.js";import"./chunk-LT72WXA6.js";import{Da as i,Q as f,c as x,x as p,y as d}from"./chunk-NRW4C74H.js";import"./chunk-2POO4JJE.js";import"./chunk-PQWATTJB.js";import"./chunk-OLIHMAK6.js";import{f as C,h as l,n as m}from"./chunk-YJSZZTEX.js";l();m();var e=C(x());var O=o.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding: 16px;
`,k=o.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -20px;
`,h=o(a).attrs({size:28,weight:500,color:i.colors.legacy.textPrimary})`
  margin-top: 24px;
`,P=o(a).attrs({size:16,weight:500,color:i.colors.legacy.textSecondary})`
  padding: 0px 5px;
  margin-top: 9px;
  span {
    color: ${i.colors.legacy.textPrimary};
  }
  label {
    color: ${i.colors.legacy.accentPrimary};
    cursor: pointer;
  }
`,b=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
`,A=o.div`
  margin-top: auto;
  width: 100%;
`,B=()=>{let{t:n}=f(),{mutateAsync:t}=y(),{handleHideModalVisibility:r,handleShowModalVisibility:s}=g(),v=(0,e.useCallback)(()=>{s("swapConfirmation",void 0,{event:"showSwapModal",payload:{data:{uiContext:"SwapConfirmation"}}}),r("swapTermsOfService")},[s,r]),c=S({goToConfirmation:v});return{onAgreeClick:(0,e.useCallback)(()=>{t(!0),c()},[t,c]),onCancelClick:()=>{r("swapTermsOfService")},t:n}},M=()=>{self.open(p,"_blank")},F=()=>{self.open(d,"_blank")},L=e.default.memo(({onAgreeClick:n,onCancelClick:t,t:r})=>e.default.createElement(O,null,e.default.createElement(k,null,e.default.createElement(b,null,e.default.createElement(u,null),e.default.createElement(h,null,r("termsOfServicePrimaryText")),e.default.createElement(P,null,e.default.createElement(w,{i18nKey:"termsOfServiceDiscliamerFeesEnabledInterpolated"},"We have revised our Terms of Service. By clicking ",e.default.createElement("span",null,'"I Agree"')," you agree to our new",e.default.createElement("label",{onClick:M},"Terms of Service"),".",e.default.createElement("br",null),e.default.createElement("br",null),"Our new Terms of Service include a new ",e.default.createElement("label",{onClick:F},"fee structure")," for certain products.")))),e.default.createElement(A,null,e.default.createElement(T,{primaryText:r("termsOfServiceActionButtonAgree"),secondaryText:r("commandCancel"),onPrimaryClicked:n,onSecondaryClicked:t})))),_=()=>{let n=B();return e.default.createElement(L,{...n})},X=_;export{_ as SwapTermsOfServicePage,X as default};
//# sourceMappingURL=SwapTermsOfServicePage-Z3CXW333.js.map
