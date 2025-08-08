import{Ea as v,n as T}from"./chunk-AMFBRYZX.js";import"./chunk-SERUZOGH.js";import"./chunk-KTETFJNC.js";import"./chunk-2ADUYUI4.js";import"./chunk-XQOJIQLP.js";import"./chunk-5JX67CVA.js";import"./chunk-HO7ZJLVP.js";import"./chunk-U2ZBADSX.js";import"./chunk-XBPWOUK6.js";import"./chunk-3A6TGOFP.js";import"./chunk-MWGJZC2B.js";import"./chunk-Y5DSDVWB.js";import"./chunk-Q2CJBZ36.js";import"./chunk-IEC36PYL.js";import"./chunk-RCTFQ5RY.js";import"./chunk-H7XHGTRT.js";import"./chunk-FFSCLU3N.js";import"./chunk-6OGAEY46.js";import"./chunk-ZS5DCR5N.js";import{a as A}from"./chunk-YQDK2KIS.js";import{a as B}from"./chunk-B5X6OJ4M.js";import"./chunk-UWMKBOBS.js";import"./chunk-CFJPS3RY.js";import"./chunk-6OURT4HP.js";import{Ma as W,xa as C,ya as H,za as L}from"./chunk-GWUVAKX4.js";import"./chunk-VGFG26AC.js";import"./chunk-64SFTQTZ.js";import"./chunk-6QNUOYSW.js";import"./chunk-3D6TIEIV.js";import"./chunk-MDYMDZNO.js";import"./chunk-TUQYLFS7.js";import"./chunk-G3SJLT24.js";import"./chunk-DR6UT56S.js";import"./chunk-I4O7QVCI.js";import"./chunk-BDQDDHRI.js";import"./chunk-PRCCLR5N.js";import"./chunk-JHSMRLRR.js";import{c as U}from"./chunk-EW3NOMMT.js";import{eb as F,ka as V,l as E,m as g}from"./chunk-AXFDOJRV.js";import"./chunk-HBMWL2L6.js";import"./chunk-TEXQAPAF.js";import"./chunk-HPOIQOE7.js";import"./chunk-RL5NICHE.js";import"./chunk-DZSKJQUR.js";import"./chunk-IEY2ZFRQ.js";import"./chunk-BCKEKIIT.js";import"./chunk-GYYECUZK.js";import"./chunk-FDJQKATD.js";import"./chunk-OGTXJ4NL.js";import"./chunk-MP5PPKB7.js";import"./chunk-LV3AOIIH.js";import"./chunk-LT72WXA6.js";import{Da as r,Ia as a,Ja as s,La as b,Q as P,Xb as w,c as O,db as k,sb as $}from"./chunk-NRW4C74H.js";import"./chunk-2POO4JJE.js";import"./chunk-PQWATTJB.js";import"./chunk-OLIHMAK6.js";import{f as I,h,n as S}from"./chunk-YJSZZTEX.js";h();S();var D=I(O());h();S();var p=I(O());var G=g.div`
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
`,J=g.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 16px;
  width: 100%;
`,K=g(F).attrs({size:28,lineHeight:32,weight:600,color:r.colors.legacy.textPrimary})`
  margin: 20px 0 12px;
`,N=g(F).attrs({size:16,lineHeight:18,weight:400,color:r.colors.legacy.textSecondary})`
  margin-bottom: 32px;
`,Q=g.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 2px;
  width: 100%;
  background-color: ${t=>t.theme.backgroundDark};
`,Z=g.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 10px 8px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${t=>t.selected?r.colors.legacy.accentPrimary:"transparent"};
  cursor: pointer;
`,j=g(F).attrs(t=>({size:14,lineHeight:18,weight:t.selected?600:500,color:t.selected?r.colors.legacy.bgWallet:r.colors.legacy.textPrimary}))`
  text-align: center;
`,R=g(F).attrs(t=>({size:14,lineHeight:18,weight:500,color:t.severity==="critical"?r.colors.legacy.accentAlert:r.colors.legacy.accentWarning}))`
  align-self: stretch;
  margin-top: 8px;
  text-align: left;
`,tt=g.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`,et=g.input`
  background: transparent;
  color: ${r.colors.legacy.bgWallet};
  ::placeholder {
    color: ${r.colors.legacy.textTertiary};
  }
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  text-align: right;
  border: none;
  padding: 0;
`,ot=()=>{let{handleHideModalVisibility:t}=v(),n=(0,p.useCallback)(()=>{t("swapSettings")},[t]);return C({onDismiss:n})},nt=({options:t,selectedIndex:n,customSlippageValue:o,i18nStrings:i,error:d,submitDisabled:f,onConfirm:m,onSelectOption:c,onChangeCustomSlippage:u,onDismiss:y})=>p.default.createElement(G,null,p.default.createElement(T,{leftButton:{type:"close",onClick:y},titleSize:"small"},i.title),p.default.createElement(J,null,p.default.createElement(A,{diameter:96,color:r.colors.legacy.bgArea},p.default.createElement(V,{width:38,fill:r.colors.legacy.bgArea})),p.default.createElement(K,null,i.title),p.default.createElement(N,null,i.subtitle),p.default.createElement(lt,{options:t,selectedIndex:n,customOptionLabel:i.custom,customOptionValue:o,onSelectOption:c,onCustomOptionChange:u}),d?p.default.createElement(R,{severity:d.severity},d.message):null),p.default.createElement(U,{disabled:f,theme:"primary",onClick:m},i.button)),it=()=>{let t=ot();return p.default.createElement(nt,{...t})},z=it,rt=({value:t,onChangeText:n})=>{let o=i=>{i.target.validity.valid?n(i.target.value):i.preventDefault()};return p.default.createElement(tt,null,p.default.createElement(et,{autoFocus:!t,placeholder:"0.00%",value:t??"",style:t?{width:`${t.length*10}px`,textAlign:"right"}:{width:"100%",textAlign:"center"},onChange:o}),p.default.createElement(j,{selected:!0},t?"%":""))},lt=({options:t,selectedIndex:n,customOptionLabel:o,customOptionValue:i,onSelectOption:d,onCustomOptionChange:f})=>p.default.createElement(Q,null,t.map((m,c)=>{let u=c===n,y=c===t.length-1&&u,x=()=>d(c);return p.default.createElement(Z,{key:`segment-control-option-${c}`,selected:u,onClick:x},y?p.default.createElement(rt,{value:i,onChangeText:f}):p.default.createElement(j,{selected:u},m==="custom"?o:m))}));h();S();var l=I(O());var st=g.input`
  background: transparent;
  text-align: center;
  border: none;
  padding: 0;
  font-style: ${r.typography.font.bodySemibold.letterSpacing};
  font-size: ${r.typography.font.bodySemibold.fontSize};
  font-weight: ${r.typography.font.bodySemibold.fontWeight};
  line-height: ${r.typography.font.bodySemibold.lineHeight};
  color: ${r.colors.legacy.textPrimary};
  ::placeholder {
    color: ${r.colors.legacy.textTertiary};
  }
`,at=({value:t,onChangeText:n})=>{let o=i=>{i.target.validity.valid?n(i.target.value):i.preventDefault()};return l.default.createElement(a,{display:"flex",direction:"row",alignItems:"center",justifyContent:"center",width:"100%"},l.default.createElement(st,{autoFocus:!t,placeholder:"0.00%",value:t??"",style:t?{width:`${t.length*10}px`,textAlign:"right"}:{width:"100%",textAlign:"center",minWidth:r.space.positive[48]},onChange:o}),t&&l.default.createElement(s,{font:"bodySemibold",color:"textPrimary"},"%"))},ct=({options:t,selectedIndex:n,customOptionLabel:o,customOptionValue:i,onSelectOption:d,onCustomOptionChange:f})=>l.default.createElement(a,{display:"flex",direction:"row",alignItems:"center",justifyContent:"center",borderRadius:"row",width:"100%"},t.map((m,c)=>{let u=c===n,y=c===t.length-1&&u,x=()=>d(c);return l.default.createElement(a,{key:`segment-control-option-${c}`,display:"flex",flex:1,direction:"row",paddingX:20,paddingY:14,alignItems:"center",justifyContent:"center",borderRadius:"row",backgroundColor:u?"bgRow":void 0,onPress:x,minWidth:24},y?l.default.createElement(at,{value:i,onChangeText:f}):l.default.createElement(s,{font:"bodySemibold",color:u?"textPrimary":"textSecondary",align:"center"},m==="custom"?o:m))})),dt=({customSlippageValue:t,error:n,i18nStrings:o,options:i,selectedIndex:d,submitDisabled:f,isAutoEnabled:m,autoLearnMoreUrl:c,onSelectOption:u,onChangeCustomSlippage:y,onConfirm:x,onToggleAutoSlippage:_,onDismiss:q})=>l.default.createElement(a,{height:"100%",overflowY:"auto",display:"flex",direction:"column",justifyContent:"space-between",padding:"screen"},l.default.createElement("div",null,l.default.createElement(T,{leftButton:{type:"close",onClick:q},titleSize:"small"},o.title),l.default.createElement(a,{display:"flex",gap:24,direction:"column",alignItems:"center",width:"100%"},l.default.createElement(a,{display:"flex",direction:"column",alignItems:"center"},l.default.createElement(A,{diameter:96,color:r.colors.legacy.bgArea},l.default.createElement(V,{width:38,fill:r.colors.legacy.bgArea})),l.default.createElement(s,{font:"heading2Semibold",color:"textPrimary",marginTop:20},o.title)),l.default.createElement(a,{width:"100%"},l.default.createElement(b,{rounded:!0,topLeft:o.auto,end:l.default.createElement(w,{id:"auto-slippage-switch",value:m,onChange:_})}),l.default.createElement(s,{marginTop:8,font:"caption",color:"textSecondary"},o.autoSubtitle," ",l.default.createElement(s,{font:"caption",color:"accentPrimary",onPress:()=>self.open(c,"_blank")},o.learnMore))),!m&&l.default.createElement(a,{gap:8,display:"flex",direction:"column",alignItems:"center"},l.default.createElement(ct,{options:i,selectedIndex:d,customOptionLabel:o.custom,customOptionValue:t,onSelectOption:u,onCustomOptionChange:y}),l.default.createElement(s,{font:"caption",color:"textSecondary"},o.subtitle),n&&l.default.createElement(s,{font:"caption",color:n.severity==="critical"?"accentAlert":"accentWarning",alignSelf:"stretch"},n.message)))),l.default.createElement(k,{disabled:f,theme:"primary",onClick:x},o.button)),pt=()=>{let{handleHideModalVisibility:t}=v(),n=(0,l.useCallback)(()=>{t("swapSettings")},[t]);return C({onDismiss:n})},Y=()=>{let t=pt();return l.default.createElement(dt,{...t})};h();S();var e=I(O());var mt=g.input`
  background: transparent;
  text-align: center;
  border: none;
  padding: 0;
  font-style: ${r.typography.font.bodySemibold.letterSpacing};
  font-size: ${r.typography.font.bodySemibold.fontSize};
  font-weight: ${r.typography.font.bodySemibold.fontWeight};
  line-height: ${r.typography.font.bodySemibold.lineHeight};
  color: ${r.colors.legacy.textPrimary};
  ::placeholder {
    color: ${r.colors.legacy.textTertiary};
  }
`,ut=({value:t,onChangeText:n})=>{let o=i=>{i.target.validity.valid?n(i.target.value):i.preventDefault()};return e.default.createElement(a,{display:"flex",direction:"row",alignItems:"center",justifyContent:"center",width:"100%"},e.default.createElement(mt,{autoFocus:!t,placeholder:"0.00%",value:t??"",style:t?{width:`${t.length*10}px`,textAlign:"right"}:{width:"100%",textAlign:"center",minWidth:r.space.positive[48]},onChange:o}),t&&e.default.createElement(s,{font:"bodySemibold",color:"textPrimary"},"%"))},gt=({options:t,selectedIndex:n,customOptionLabel:o,customOptionValue:i,onSelectOption:d,onCustomOptionChange:f})=>e.default.createElement(a,{display:"flex",direction:"row",alignItems:"center",justifyContent:"center",borderRadius:"row",width:"100%"},t.map((m,c)=>{let u=c===n,y=c===t.length-1&&u,x=()=>d(c);return e.default.createElement(a,{key:`segment-control-option-${c}`,display:"flex",flex:1,direction:"row",paddingX:20,paddingY:14,alignItems:"center",justifyContent:"center",borderRadius:"row",backgroundColor:u?"bgRow":void 0,onPress:x,minWidth:24},y?e.default.createElement(ut,{value:i,onChangeText:f}):e.default.createElement(s,{font:"body",color:u?"textPrimary":"textSecondary",align:"center"},m==="custom"?o:m))})),ft=({slippageSettingsProps:t,priorityFeeSettingsProps:n,tipSettingsProps:o,onConfirm:i,onDismiss:d,submitDisabled:f,swapSettingsMode:m})=>{let{t:c}=P();return e.default.createElement(a,{height:"100%",display:"flex",direction:"column",justifyContent:"space-between"},e.default.createElement(a,{flex:1,overflowY:"auto",padding:"screen"},e.default.createElement("div",null,e.default.createElement(T,{leftButton:{type:"close",onClick:d},titleSize:"small"},c("swapSettingsTitle")),e.default.createElement(a,{display:"flex",gap:24,direction:"column",width:"100%"},e.default.createElement(a,{width:"100%"},e.default.createElement(s,{font:"title3",align:"left",color:"textSecondary",marginBottom:12},t.i18nStrings.title),e.default.createElement(b,{rounded:!0,topLeft:t.i18nStrings.auto,end:e.default.createElement(w,{id:"auto-slippage-switch",value:t.isAutoEnabled,onChange:t.onToggleAutoSlippage})}),e.default.createElement(s,{marginTop:8,font:"caption",color:"textSecondary"},t.i18nStrings.autoSubtitle," ",e.default.createElement(s,{font:"caption",color:"accentPrimary",onPress:()=>self.open(t.autoLearnMoreUrl,"_blank")},t.i18nStrings.learnMore))),!t.isAutoEnabled&&e.default.createElement(a,{gap:8,display:"flex",direction:"column",alignItems:"center"},e.default.createElement(gt,{options:t.options,selectedIndex:t.selectedIndex,customOptionLabel:t.i18nStrings.custom,customOptionValue:t.customSlippageValue,onSelectOption:t.onSelectOption,onCustomOptionChange:t.onChangeCustomSlippage}),e.default.createElement(s,{font:"caption",color:"textSecondary"},t.i18nStrings.subtitle),t.error&&e.default.createElement(s,{font:"caption",color:t.error.severity==="critical"?"accentAlert":"accentWarning",alignSelf:"stretch"},t.error.message)),e.default.createElement(a,{width:"100%"},e.default.createElement(s,{font:"title3",align:"left",color:"textSecondary",marginBottom:12},n.i18nStrings.title),e.default.createElement(b,{rounded:!0,topLeft:n.i18nStrings.auto,end:e.default.createElement(w,{id:"auto-priority-fee-switch",value:n.isAutoEnabled,onChange:n.onToggleAutoPriorityFee})}),e.default.createElement(s,{marginTop:8,font:"caption",color:"textSecondary"},n.i18nStrings.autoSubtitle)),!n.isAutoEnabled&&e.default.createElement(a,{gap:8,display:"flex",direction:"column"},e.default.createElement($,{id:"priority-fee-input",label:"priority-fee-input","data-testid":"priority-fee-input",showLabel:!1,placeholder:"0.00",selectOnFocus:!0,value:n.customPriorityFeeValue??"",setValue:n.onChangeCustomPriorityFee,end:"SOL"}),e.default.createElement(s,{font:"caption",color:"textSecondary",align:"left",marginTop:8},n.customPriorityFeeValueInDollars),n.i18nStrings.subtitle&&e.default.createElement(s,{font:"caption",color:"textSecondary",align:"left",marginTop:8},n.i18nStrings.subtitle),e.default.createElement(a,{minHeight:32},n.error&&e.default.createElement(s,{font:"caption",color:n.error.severity==="critical"?"accentAlert":"accentWarning",alignSelf:"stretch"},n.error.message))),m==="autoWithPriorityFeesAndTips"&&e.default.createElement(e.default.Fragment,null,e.default.createElement(a,{width:"100%"},e.default.createElement(s,{font:"title3",align:"left",color:"textSecondary",marginBottom:12},o.i18nStrings.title),e.default.createElement(b,{rounded:!0,topLeft:o.i18nStrings.auto,end:e.default.createElement(w,{id:"auto-tip-switch",value:o.isAutoEnabled,onChange:o.onToggleAutoTip})}),e.default.createElement(s,{marginTop:8,font:"caption",color:"textSecondary"},o.i18nStrings.autoSubtitle)),!o.isAutoEnabled&&e.default.createElement(a,{gap:8,display:"flex",direction:"column"},e.default.createElement($,{id:"tip-input",label:"tip-input","data-testid":"tip-input",showLabel:!1,placeholder:"0.00",selectOnFocus:!0,value:o.customTipValue??"",setValue:o.onChangeCustomTip,end:"SOL"}),e.default.createElement(s,{font:"caption",color:"textSecondary",align:"left",marginTop:8},o.customTipValueInDollars),o.i18nStrings.subtitle&&e.default.createElement(s,{font:"caption",color:"textSecondary",align:"left",marginTop:8},o.i18nStrings.subtitle),e.default.createElement(a,{minHeight:32},o.error&&e.default.createElement(s,{font:"caption",color:o.error.severity==="critical"?"accentAlert":"accentWarning",alignSelf:"stretch"},o.error.message))))))),e.default.createElement(B,{removeFooterExpansion:!1,cssOverride:E`
          background: ${r.colors.legacy.bgRow};
          display: flex;
          justify-content: center;
        `},e.default.createElement(a,{paddingX:16,paddingBottom:12,width:"100%"},e.default.createElement(k,{disabled:f,theme:"primary",onClick:i},t.i18nStrings.button))))},yt=()=>{let{handleHideModalVisibility:t}=v(),n=(0,e.useCallback)(()=>{t("swapSettings")},[t]),o=C({onDismiss:n}),i=H({onDismiss:n}),d=L({onDismiss:n}),f=(0,e.useCallback)(()=>{o.onConfirm(),i.onConfirm(),d.onConfirm()},[o,i,d]),m=(0,e.useCallback)(()=>{o.onDismiss(),i.onDismiss(),d.onDismiss()},[o,i,d]),c=(0,e.useMemo)(()=>o.submitDisabled||i.submitDisabled||d.submitDisabled,[o.submitDisabled,i.submitDisabled,d.submitDisabled]);return{slippageSettingsProps:o,priorityFeeSettingsProps:i,tipSettingsProps:d,onConfirm:f,onDismiss:m,submitDisabled:c}},X=({swapSettingsMode:t})=>{let n=yt();return e.default.createElement(ft,{...n,swapSettingsMode:t})};var ht=()=>{let t=W();switch(t){case"autoWithPriorityFees":case"autoWithPriorityFeesAndTips":return D.default.createElement(X,{swapSettingsMode:t});case"auto":return D.default.createElement(Y,null);default:return D.default.createElement(z,null)}},te=ht;export{ht as SwapSettings,te as default};
//# sourceMappingURL=SwapSettings-IVWY2TXL.js.map
