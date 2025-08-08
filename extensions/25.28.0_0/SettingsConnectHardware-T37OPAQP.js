import{a as N,c as D,d as F,g as G}from"./chunk-TATERBEQ.js";import{a as S}from"./chunk-6BTBETHT.js";import"./chunk-7EY5SCBH.js";import{a as T}from"./chunk-YY2IADVO.js";import"./chunk-G7U5MM5C.js";import"./chunk-EXPADA3D.js";import"./chunk-S2SKIGNC.js";import"./chunk-FYALWXL4.js";import"./chunk-AMFBRYZX.js";import"./chunk-SERUZOGH.js";import"./chunk-KTETFJNC.js";import"./chunk-2ADUYUI4.js";import"./chunk-XQOJIQLP.js";import{a as L}from"./chunk-5JX67CVA.js";import"./chunk-HO7ZJLVP.js";import"./chunk-U2ZBADSX.js";import"./chunk-XBPWOUK6.js";import"./chunk-3A6TGOFP.js";import"./chunk-MWGJZC2B.js";import"./chunk-Y5DSDVWB.js";import"./chunk-Q2CJBZ36.js";import"./chunk-IEC36PYL.js";import"./chunk-RCTFQ5RY.js";import"./chunk-H7XHGTRT.js";import"./chunk-FFSCLU3N.js";import"./chunk-6OGAEY46.js";import{c as _}from"./chunk-ZS5DCR5N.js";import{a as u}from"./chunk-YQDK2KIS.js";import"./chunk-B5X6OJ4M.js";import"./chunk-QEL6D6X4.js";import{a as f}from"./chunk-3C5B7LFA.js";import"./chunk-UWMKBOBS.js";import"./chunk-CFJPS3RY.js";import"./chunk-6OURT4HP.js";import"./chunk-T32FBIHY.js";import"./chunk-GWUVAKX4.js";import"./chunk-VGFG26AC.js";import"./chunk-64SFTQTZ.js";import"./chunk-6QNUOYSW.js";import"./chunk-3D6TIEIV.js";import"./chunk-MDYMDZNO.js";import"./chunk-TUQYLFS7.js";import"./chunk-G3SJLT24.js";import"./chunk-DR6UT56S.js";import"./chunk-I4O7QVCI.js";import"./chunk-BDQDDHRI.js";import"./chunk-PRCCLR5N.js";import"./chunk-JHSMRLRR.js";import"./chunk-EW3NOMMT.js";import{m as s,v as O}from"./chunk-AXFDOJRV.js";import"./chunk-HBMWL2L6.js";import"./chunk-TEXQAPAF.js";import"./chunk-HPOIQOE7.js";import"./chunk-RL5NICHE.js";import"./chunk-DZSKJQUR.js";import"./chunk-IEY2ZFRQ.js";import"./chunk-BCKEKIIT.js";import"./chunk-GYYECUZK.js";import"./chunk-FDJQKATD.js";import"./chunk-OGTXJ4NL.js";import{ef as B,lf as E}from"./chunk-MP5PPKB7.js";import"./chunk-LV3AOIIH.js";import{g as v}from"./chunk-LT72WXA6.js";import{Da as e,Na as P,Ra as $,c as H}from"./chunk-NRW4C74H.js";import"./chunk-2POO4JJE.js";import"./chunk-PQWATTJB.js";import"./chunk-OLIHMAK6.js";import{f as A,h as n,n as i}from"./chunk-YJSZZTEX.js";n();i();var t=A(H());n();i();var a=A(H());n();i();var I=s(u)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: background-color 200ms ease;
  background-color: ${o=>o.$isExpanded?e.colors.legacy.black:e.colors.legacy.bgButton} !important;
  :hover {
    background-color: ${e.colors.legacy.gray};
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${o=>o.$isExpanded?"white":e.colors.legacy.textSecondary};
    transition: fill 200ms ease;
    position: relative;
    ${o=>o.top?`top: ${o.top}px;`:""}
    ${o=>o.right?`right: ${o.right}px;`:""}
  }
`;var V=s(L).attrs({justify:"space-between"})`
  background-color: ${e.colors.legacy.bgWallet};
  padding: 10px 16px;
  border-bottom: 1px solid ${e.colors.legacy.borderSecondary};
  height: 46px;
  opacity: ${o=>o.opacity??"1"};
`,q=s.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,M=s.div`
  width: 24px;
  height: 24px;
`,W=({onBackClick:o,totalSteps:c,currentStepIndex:l,isHidden:d,showBackButtonOnFirstStep:r,showBackButton:g=!0})=>a.default.createElement(V,{opacity:d?0:1},g&&(r||l!==0)?a.default.createElement(I,{right:1,onClick:o},a.default.createElement(O,null)):a.default.createElement(M,null),a.default.createElement(q,null,v(c).map(p=>{let m=p<=l?e.colors.legacy.accentPrimary:e.colors.legacy.bgButton;return a.default.createElement(u,{key:p,diameter:12,color:m})})),a.default.createElement(M,null));n();i();var K=()=>{let{mutateAsync:o}=E(),{hardwareStepStack:c,pushStep:l,popStep:d,currentStep:r,setOnConnectHardwareAccounts:g,setOnConnectHardwareDone:y,setExistingAccounts:p}=N(),{data:m=[],isFetched:x,isError:k}=B(),C=_(c,(h,U)=>h?.length===U.length),X=c.length>(C??[]).length,b=C?.length===0,j={initial:{x:b?0:X?150:-150,opacity:b?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}},J=(0,t.useCallback)(()=>{r()?.props.preventBack||(r()?.props.onBackCallback&&r()?.props.onBackCallback?.(),d())},[r,d]);return T(()=>{g(async h=>{await o(h),await f.set(S,!await f.get(S))}),y(()=>self.close()),l(t.default.createElement(G,null))},c.length===0),(0,t.useEffect)(()=>{p({data:m,isFetched:x,isError:k})},[m,x,k,p]),t.default.createElement(D,null,t.default.createElement(W,{totalSteps:3,onBackClick:J,showBackButton:!r()?.props.preventBack,currentStepIndex:c.length-1}),t.default.createElement(P,{mode:"wait"},t.default.createElement($.div,{style:{display:"flex",flexGrow:1},key:`${c.length}_${C?.length}`,...j},t.default.createElement(F,null,r()))))},Po=K;export{Po as default};
//# sourceMappingURL=SettingsConnectHardware-T37OPAQP.js.map
