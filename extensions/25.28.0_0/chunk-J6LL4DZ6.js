import{a as u,b as H,c as g}from"./chunk-Q3AAKXVO.js";import{I as B,M as E,d as U,n as _,s as z}from"./chunk-AMFBRYZX.js";import{o as c,s as J}from"./chunk-HO7ZJLVP.js";import{a as K}from"./chunk-B5X6OJ4M.js";import{A as N,z as O}from"./chunk-3D6TIEIV.js";import{a as h}from"./chunk-I4O7QVCI.js";import{a as q}from"./chunk-JHSMRLRR.js";import{db as V,eb as y,m as i}from"./chunk-AXFDOJRV.js";import{md as P}from"./chunk-MP5PPKB7.js";import{Ba as l,Da as f,Ia as b,Ja as I,c as C,db as D}from"./chunk-NRW4C74H.js";import{f as v,h as w,n as T}from"./chunk-YJSZZTEX.js";w();T();var o=v(C());w();T();var n=v(C());var so=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 83px;
  padding: 16px;
`,ao=i.div`
  margin-left: 12px;
  width: 100%;
`,po=i(y).attrs({size:14,weight:400,color:f.colors.legacy.textSecondary,textAlign:"left"})``,fo=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,uo=i(y).attrs({size:28,lineHeight:32,weight:600,color:f.colors.legacy.textPrimary,textAlign:"left"})`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,L=({title:r,network:a,tokenType:p,symbol:m,logoUri:d,tokenAddress:k,amount:t,amountUsd:e})=>n.default.createElement(so,null,n.default.createElement(z,{image:{type:"fungible",src:d,fallback:m||k},size:44,tokenType:p,chainMeta:a}),n.default.createElement(ao,null,n.default.createElement(fo,null,n.default.createElement(po,null,r),n.default.createElement(U,{value:e,font:"caption",color:"textSecondary"})),n.default.createElement(uo,null,t)));var s={screen:l({overflow:"auto"}),body:l({display:"flex",flexDirection:"column",justifyContent:"space-between"}),content:l({display:"flex",flexDirection:"column",width:"100%"}),assets:l({backgroundColor:"bgRow",borderRadius:6,width:"100%"}),line:l({backgroundColor:"bgWallet",width:"100%",height:1}),button:l({width:"100%",height:48})},x=i(V).attrs({color:q.grayLight,size:14})`
  text-align: left;
  line-height: normal;
  max-width: 100%;
  margin: 16px 0;
`,W=i.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  color: ${r=>r.theme.purple};
  text-decoration: none;
  cursor: pointer;
`,go=({isJitoSOL:r,feeFootnoteText:a,feeFootnoteDescriptionText:p,feeFootnoteTooltipText:m,showUKDisclaimer:d})=>r?o.default.createElement(x,null,o.default.createElement(h,{i18nKey:"liquidStakeReviewConversionFootnote"},"When you stake Solana tokens in exchange for JitoSOL you'll receive a slightly lesser amount of JitoSOL.",o.default.createElement(W,{href:O},"Learn more"))):d?o.default.createElement(E,{disclaimers:[],showUKDisclaimer:!0,marginTop:16}):o.default.createElement(o.default.Fragment,null,o.default.createElement(x,null,o.default.createElement(J,{tooltipAlignment:"topLeft",iconSize:12,lineHeight:17,fontWeight:400,info:o.default.createElement(H,{tooltipContent:o.default.createElement(c,null,m)}),textColor:f.colors.legacy.textSecondary},a)),o.default.createElement(x,null,p)),wo=()=>o.default.createElement(x,null,o.default.createElement(h,{i18nKey:"liquidStakeDepositStakeDisclaimer"},"You'll receive JitoSOL in 10 hours.",o.default.createElement(W,{href:N},"Learn more"))),Bo=o.default.memo(({process:r,headerTitle:a,onBack:p,openExternalLink:m,onPrimaryButtonPress:d,canSubmit:k,payAsset:t,receiveAsset:e,account:j,providerName:M,apy:A,networkFee:Y,isLoading:F,networkFeeErrorMsg:$,isJitoSOL:G,strings:Q,showUKDisclaimer:S})=>{let{accountLabelText:X,providerLabelText:Z,apyLabelText:R,apyLabelTextTooltip:oo,networkFeeLabelText:eo,primaryButtonText:to,feeFootnoteText:io,feeFootnoteDescriptionText:no,feeFootnoteTooltipText:ro}=Q,lo=[e?o.default.createElement(u,{key:"account-row",label:X},o.default.createElement(g,null,o.default.createElement(I,{font:"body",children:P(j,4)}))):null,o.default.createElement(u,{key:"provider-row",label:Z},o.default.createElement(g,null,M)),o.default.createElement(u,{key:"apy-row",label:R,tooltipContent:o.default.createElement(c,null,oo)},o.default.createElement(g,null,A)),o.default.createElement(u,{key:"network-fee-row",label:eo,isLoading:F,error:$},o.default.createElement(g,null,Y))];return o.default.createElement("div",{className:s.screen},o.default.createElement(_,{leftButton:{type:"back",onClick:p},titleSize:"regular"},a),o.default.createElement("div",{className:s.body},m&&S?o.default.createElement(b,{marginBottom:"base"},o.default.createElement(B,{navigateToExternalLink:m,paddingTop:8})):null,o.default.createElement("div",{className:s.content},o.default.createElement("div",{className:s.assets},t?o.default.createElement(L,{title:t.title,amount:t.amount+" "+t.symbol,amountUsd:t.amountUsd,logoUri:t.logoUri,symbol:t.symbol,tokenType:t.tokenType,tokenAddress:t.tokenAddress,network:t.network}):null,o.default.createElement("div",{className:s.line}),e?o.default.createElement(L,{title:e.title,amount:e.amount+" "+e.symbol,amountUsd:e.amountUsd,logoUri:e.logoUri,symbol:e.symbol,tokenType:e.tokenType,tokenAddress:e.tokenAddress,network:e.network}):null),o.default.createElement(b,{borderRadius:8,gap:1,overflow:"hidden",marginTop:"base"},lo),r==="mint"?o.default.createElement(go,{isJitoSOL:G,feeFootnoteText:io,feeFootnoteDescriptionText:no,feeFootnoteTooltipText:ro,showUKDisclaimer:S}):o.default.createElement(wo,null)),o.default.createElement(K,null,o.default.createElement(D,{className:s.button,theme:"primary",disabled:!k||F,onClick:d},to))))});export{Bo as a};
//# sourceMappingURL=chunk-J6LL4DZ6.js.map
