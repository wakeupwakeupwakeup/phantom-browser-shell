import{a as w,b as N}from"./chunk-UAUWCJ3X.js";import{a as k}from"./chunk-XQOJIQLP.js";import{a as C}from"./chunk-5JX67CVA.js";import"./chunk-H7XHGTRT.js";import{a as u}from"./chunk-FFSCLU3N.js";import{j as P}from"./chunk-ZS5DCR5N.js";import"./chunk-CFJPS3RY.js";import"./chunk-6OURT4HP.js";import{c as g}from"./chunk-EW3NOMMT.js";import{eb as S,m as t}from"./chunk-AXFDOJRV.js";import"./chunk-DZSKJQUR.js";import{pd as h}from"./chunk-MP5PPKB7.js";import"./chunk-LV3AOIIH.js";import"./chunk-LT72WXA6.js";import{Da as p,Ja as y,Q as b,c as A}from"./chunk-NRW4C74H.js";import"./chunk-2POO4JJE.js";import"./chunk-PQWATTJB.js";import"./chunk-OLIHMAK6.js";import{f as x,h as l,n as c}from"./chunk-YJSZZTEX.js";l();c();var D=x(N()),o=x(A());l();c();var a=x(A());var v=t(g).attrs({borderRadius:"100px",width:"auto",fontSize:14,fontWeight:600})`
  flex-shrink: 0;
  padding: 5px 12px;
`,T=a.default.memo(s=>{let{copyText:e,className:d}=s,{buttonText:r,copy:n}=w(e),f=(0,a.useCallback)(m=>{m.stopPropagation(),n()},[n]);return a.default.createElement(v,{className:d,onClick:f,theme:"primary"},r)});var B=t(u).attrs({align:"center",justify:"space-between"})`
  height: 100%;
`,F=t(D.default)`
  padding: 8px;
  background: ${p.colors.legacy.white};
  border-radius: 6px;
`,E=t(C).attrs({align:"center",justify:"space-between"})`
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  padding: 12px 15px;
  background: ${p.colors.legacy.bgArea};
  border: 1px solid ${p.colors.legacy.borderSecondary};
  border-radius: 6px;
`,z=t(u).attrs({align:"center"})`
  ${E} {
    margin-top: 32px;
    margin-bottom: 11px;
  }
`,H=t(C)`
  p:first-child {
    margin-right: 6px;
  }
`,M=s=>{let{accountName:e,walletAddress:d,address:r,symbol:n,onClose:f}=s,m=n||(r?h(r):void 0),{t:i}=b();return{i18nStrings:(0,o.useMemo)(()=>({depositAssetInterpolated:i("depositAssetDepositInterpolated",{tokenSymbol:m}),secondaryText:i("depositAssetSecondaryText"),transferFromExchange:i("depositAssetTransferFromExchange"),depositAssetShareAddressError1:i("sendInvalidQRCodeLoadingError1"),depositAssetShareAddressError2:i("sendInvalidQRCodeLoadingError2"),close:i("commandClose")}),[i,m]),accountName:e,walletAddress:d,onClose:f}},Q=o.default.memo(s=>{let{i18nStrings:e,accountName:d,walletAddress:r,onClose:n}=s;return o.default.createElement(B,null,o.default.createElement(P,null,e.depositAssetInterpolated),o.default.createElement(z,null,r?o.default.createElement(o.default.Fragment,null,o.default.createElement(F,{value:r,size:160}),o.default.createElement(E,null,o.default.createElement(H,null,o.default.createElement(k,{name:d,publicKey:r})),o.default.createElement(T,{copyText:r})),o.default.createElement(S,{size:14,color:p.colors.legacy.textSecondary,lineHeight:20},e.secondaryText)):o.default.createElement(o.default.Fragment,null,o.default.createElement(y,{align:"center",font:"labelSemibold",children:e.depositAssetShareAddressError1}),o.default.createElement(y,{align:"center",font:"body",children:e.depositAssetShareAddressError2}))),o.default.createElement(u,null,o.default.createElement(g,{onClick:n},e.close)))}),$=o.default.memo(s=>{let e=M(s);return o.default.createElement(Q,{...e})}),to=$;export{to as default};
//# sourceMappingURL=DepositAddressPage-7ULPEQ2U.js.map
