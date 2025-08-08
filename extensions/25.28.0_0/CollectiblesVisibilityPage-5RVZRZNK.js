import{a as Z}from"./chunk-QEIXIFWH.js";import{a as j}from"./chunk-T35YC3WF.js";import{a as G}from"./chunk-SHXHTBVY.js";import{a as U}from"./chunk-524UVX2M.js";import{b as F}from"./chunk-VYF6PWAW.js";import{b as $}from"./chunk-PVXA4KA7.js";import"./chunk-R4HIDXAJ.js";import{Ea as K}from"./chunk-AMFBRYZX.js";import{l as B}from"./chunk-SERUZOGH.js";import"./chunk-KTETFJNC.js";import"./chunk-2ADUYUI4.js";import"./chunk-XQOJIQLP.js";import{a as x}from"./chunk-5JX67CVA.js";import"./chunk-HO7ZJLVP.js";import"./chunk-U2ZBADSX.js";import"./chunk-XBPWOUK6.js";import"./chunk-3A6TGOFP.js";import"./chunk-MWGJZC2B.js";import"./chunk-Y5DSDVWB.js";import"./chunk-Q2CJBZ36.js";import"./chunk-IEC36PYL.js";import"./chunk-RCTFQ5RY.js";import"./chunk-H7XHGTRT.js";import{a as O}from"./chunk-FFSCLU3N.js";import{g as Q}from"./chunk-6OGAEY46.js";import"./chunk-ZS5DCR5N.js";import"./chunk-YQDK2KIS.js";import{a as V}from"./chunk-B5X6OJ4M.js";import"./chunk-UWMKBOBS.js";import"./chunk-CFJPS3RY.js";import"./chunk-6OURT4HP.js";import"./chunk-GWUVAKX4.js";import{P as E,T as A,V as D,W as _,l as P}from"./chunk-VGFG26AC.js";import"./chunk-64SFTQTZ.js";import"./chunk-6QNUOYSW.js";import"./chunk-3D6TIEIV.js";import"./chunk-MDYMDZNO.js";import"./chunk-TUQYLFS7.js";import"./chunk-G3SJLT24.js";import"./chunk-DR6UT56S.js";import"./chunk-I4O7QVCI.js";import"./chunk-BDQDDHRI.js";import"./chunk-PRCCLR5N.js";import"./chunk-JHSMRLRR.js";import{c as z}from"./chunk-EW3NOMMT.js";import{C as N,eb as y,m as s}from"./chunk-AXFDOJRV.js";import"./chunk-HBMWL2L6.js";import"./chunk-TEXQAPAF.js";import"./chunk-HPOIQOE7.js";import"./chunk-RL5NICHE.js";import"./chunk-DZSKJQUR.js";import"./chunk-IEY2ZFRQ.js";import"./chunk-BCKEKIIT.js";import"./chunk-GYYECUZK.js";import"./chunk-FDJQKATD.js";import"./chunk-OGTXJ4NL.js";import{Rc as M,vf as W}from"./chunk-MP5PPKB7.js";import"./chunk-LV3AOIIH.js";import"./chunk-LT72WXA6.js";import{Ab as L,Ba as v,Da as f,Ib as k,Q as p,c as H}from"./chunk-NRW4C74H.js";import"./chunk-2POO4JJE.js";import"./chunk-PQWATTJB.js";import"./chunk-OLIHMAK6.js";import{f as T,h as S,n as I}from"./chunk-YJSZZTEX.js";S();I();var t=T(H());S();I();var o=T(H());var J=v({marginLeft:4}),R=s(x).attrs({align:"center",padding:"10px"})`
  background-color: ${f.colors.legacy.bgRow};
  border-radius: 6px;
  height: 74px;
  margin: 4px 0;
`,Y=s.div`
  display: flex;
  align-items: center;
`,tt=s(O)`
  flex: 1;
  min-width: 0;
  text-align: left;
  align-items: normal;
`,et=s(y).attrs({size:16,weight:600,lineHeight:19,noWrap:!0,maxWidth:"175px",textAlign:"left"})``,ot=s(y).attrs({color:f.colors.legacy.textSecondary,size:14,lineHeight:17,noWrap:!0})`
  text-align: left;
  margin-top: 5px;
`,it=s.div`
  width: 55px;
  min-width: 55px;
  max-width: 55px;
  height: 55px;
  min-height: 55px;
  max-height: 55px;
  aspect-ratio: 1;
  margin-right: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,X=o.default.memo(e=>{let{t:n}=p(),{collection:i,unknownItem:m,isHidden:r,isSpam:a,onToggleHidden:d}=e,{name:c,id:g}=i,l=D(i),h=l?.chainData,C=_(i),u=A(l?.media,"image",!1,"small"),b=c||l?.name||m;return o.default.createElement(R,null,o.default.createElement(it,null,a&&r?o.default.createElement(Z,{width:32}):u?o.default.createElement(F,{uri:u}):P(h)?o.default.createElement(j,{...h.utxoDetails}):o.default.createElement($,{type:"image",width:42})),o.default.createElement(x,null,o.default.createElement(tt,null,o.default.createElement(Y,null,o.default.createElement(et,null,b),a?o.default.createElement(N,{className:J,fill:f.colors.legacy.accentWarning,height:16,width:16}):null),o.default.createElement(ot,null,n("collectiblesSearchNrOfItems",{nrOfItems:C})))),o.default.createElement(U,{id:g,label:`${c} visible`,checked:!r,onChange:w=>{d(w.target.checked?"show":"hide")}}))});var nt=74,lt=10,st=nt+lt,rt=20,at=s.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,mt=s.div`
  position: relative;
  width: 100%;
`,ct=()=>{let{handleHideModalVisibility:e}=K(),{data:n,isPending:i}=W(),{viewState:m,viewStateLoading:r}=E({account:n}),a=(0,t.useCallback)(()=>e("collectiblesVisibility"),[e]),d=(0,t.useMemo)(()=>({...m,handleCloseModal:a}),[a,m]),c=(0,t.useMemo)(()=>i||r,[i,r]);return{data:d,loading:c}},dt=t.default.memo(e=>{let{t:n}=p(),i=(0,t.useRef)(null);return(0,t.useEffect)(()=>{setTimeout(()=>i.current?.focus(),200)},[]),t.default.createElement(t.default.Fragment,null,t.default.createElement(mt,null,t.default.createElement(Q,{ref:i,tabIndex:0,placeholder:n("assetListSearch"),maxLength:M,onChange:e.handleSearch,value:e.searchQuery,name:"Search collectibles"})),t.default.createElement(B,null,t.default.createElement(L,null,({height:m,width:r})=>t.default.createElement(k,{style:{padding:`${rt}px 0`},scrollToIndex:e.searchQuery!==e.debouncedSearchQuery?0:void 0,height:m,width:r,rowCount:e.listItems.length,rowHeight:st,rowRenderer:a=>t.default.createElement(pt,{...a,data:e.listItems,unknownItem:n("assetListUnknownToken"),getIsHidden:e.getIsHidden,getIsSpam:e.getIsSpam,getSpamStatus:e.getSpamStatus,onToggleHidden:e.onToggleHidden})}))))}),pt=e=>{let{index:n,data:i,style:m,unknownItem:r,getIsHidden:a,getIsSpam:d,getSpamStatus:c,onToggleHidden:g}=e,l=i[n],h=a(l),C=d(l),u=c(l),b=(0,t.useCallback)(w=>g({item:l,status:w}),[g,l]);return t.default.createElement("div",{style:m},t.default.createElement(X,{collection:l,unknownItem:r,isHidden:h,isSpam:C,spamStatus:u,onToggleHidden:b}))},gt=()=>{let{data:e,loading:n}=ct(),{t:i}=p();return t.default.createElement(at,null,n?t.default.createElement(G,null):t.default.createElement(dt,{...e}),t.default.createElement(V,null,t.default.createElement(z,{onClick:e.handleCloseModal},i("commandClose"))))},$t=gt;export{gt as CollectiblesVisibilityPage,$t as default};
//# sourceMappingURL=CollectiblesVisibilityPage-5RVZRZNK.js.map
