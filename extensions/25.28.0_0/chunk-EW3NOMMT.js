import{c as w,l as s,m as p}from"./chunk-AXFDOJRV.js";import{Da as o,Na as C,Ra as $,c as S}from"./chunk-NRW4C74H.js";import{f as P,h as g,n as u}from"./chunk-YJSZZTEX.js";g();u();var i=P(S());var z=({width:e=44,trackColor:a=o.colors.legacy.bgArea,spinnerColor:n=o.colors.legacy.accentPrimary})=>i.default.createElement("svg",{width:e,height:e,viewBox:"0 0 26 26"},i.default.createElement("g",null,i.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 23.413c5.751 0 10.413-4.662 10.413-10.413S18.751 2.587 13 2.587 2.587 7.249 2.587 13 7.249 23.413 13 23.413zm0 2.315c7.03 0 12.727-5.699 12.727-12.728S20.03.273 13 .273C5.97.273.273 5.97.273 13 .273 20.03 5.97 25.728 13 25.728z",fill:a})),i.default.createElement("g",null,i.default.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.382 24.125a1.157 1.157 0 01.623-1.513 10.412 10.412 0 005.607-13.617 1.157 1.157 0 112.136-.89 12.726 12.726 0 01-6.853 16.643 1.157 1.157 0 01-1.513-.623z",fill:n}))),A=p.div`
  position: ${e=>e.position};
  height: ${e=>e.diameter}px;
  width: ${e=>e.diameter}px;
  animation: rotate 0.5s linear infinite;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`,y=({diameter:e=44,color:a,trackColor:n,position:l})=>i.default.createElement(A,{diameter:e,position:l},i.default.createElement(z,{width:e,spinnerColor:a,trackColor:n})),I=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,j=()=>i.default.createElement(I,null,i.default.createElement(y,null));g();u();var r=P(S());var N=p.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${e=>e.paddingY}px 0px;
  width: ${e=>e.width};
  height: ${e=>e.height};
  border-radius: ${e=>e.borderRadius};
  font-size: ${e=>e.fontSize}px;
  font-weight: ${e=>e.fontWeight};
  line-height: ${e=>e.lineHeight}px;
  color: ${o.colors.legacy.textPrimary};
  pointer-events: auto;
  border: none;
  outline-color: transparent;
  outline-style: none;
  cursor: ${e=>e.disabled?"auto":"pointer"};
  &:disabled {
    opacity: 0.4;
  }
  ${e=>e.noWrap&&s`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  ${e=>e.theme==="primary"?s`
          background: ${o.colors.legacy.accentPrimary};
          color: ${o.colors.legacy.bgWallet};
          &:hover:enabled {
            background: ${o.colors.legacy.accentPrimaryLight};
          }
        `:e.theme==="warning"?s`
            background: ${o.colors.legacy.accentAlert};
            color: ${o.colors.legacy.bgWallet};
            &:hover:enabled {
              background: ${o.colors.legacy.accentAlert};
            }
          `:e.theme==="dark"?s`
              background: ${o.colors.legacy.bgArea};
            `:e.theme==="metamask"?s`
                /* metamask brand color */
                background: #f5841f;
                &:hover:enabled {
                  /* metamask brand color */
                  background: #d0701a;
                }
              `:e.theme==="link"?s`
                  background: transparent;
                  color: ${o.colors.legacy.accentPrimary};
                  justify-content: flex-start;
                  &:hover:enabled {
                    color: ${o.colors.legacy.accentPrimary};
                  }
                `:e.theme==="text"?s`
                    background: transparent;
                    padding-left: 4px;
                    padding-right: 4px;
                    justify-content: flex-start;
                    &:hover:enabled {
                      background: ${o.colors.legacy.gray};
                    }
                  `:s`
                    background: ${o.colors.legacy.bgButton};
                    &:hover:enabled {
                      background: ${o.colors.legacy.gray};
                    }
                  `}
`,h=({children:e,loading:a,to:n,onClick:l,fontSize:d=16,fontWeight:t=600,lineHeight:c=19,paddingY:f=14,width:x="100%",borderRadius:b="16px",theme:B="default",type:k="button",noWrap:m=!0,...D})=>{let v={fontSize:d,fontWeight:t,lineHeight:c,paddingY:f,width:x,borderRadius:b,theme:B,type:k,noWrap:m,...D};return n?r.default.createElement(M,{loading:a,to:n,...v},e):r.default.createElement(N,{...v,onClick:l},a?r.default.createElement(y,{diameter:24,position:"absolute"}):e)};var M=({children:e,loading:a,to:n,...l})=>{let d=w();if(!n)throw new Error("ButtonWithNavigation requires a 'to' prop");return r.default.createElement(N,{...l,onClick:()=>d(n)},a?r.default.createElement(y,{diameter:24,position:"absolute"}):e)},T=p.div`
  display: flex;
  flex-direction: ${e=>e.vertical?"column-reverse":"row"};
  width: 100%;
  gap: 10px;
`;var L={fontSize:14,lineHeight:17,paddingY:10},U=({className:e,primaryText:a,secondaryText:n,onPrimaryClicked:l,onPrimaryHover:d,onSecondaryClicked:t,primaryTheme:c="primary",secondaryTheme:f="default",primaryDisabled:x=!1,primaryLoading:b,secondaryDisabled:B,buttonPairStyle:k="normal"})=>{let m=k==="normal"?{}:L;return r.default.createElement(T,{className:e},r.default.createElement(h,{theme:f,onClick:t,disabled:B,...m,"data-testid":"secondary-button"},n),r.default.createElement(h,{type:"submit",theme:c,disabled:x,loading:b,onClick:l,onMouseEnter:d,...m,"data-testid":"primary-button"},a))};var V=({buttons:e,buttonStyle:a,className:n,vertical:l})=>{let d=a==="small"?L:{};return r.default.createElement(T,{className:n,vertical:l},r.default.createElement(C,null,e.map((t,c)=>typeof t.hideButton>"u"?r.default.createElement(h,{key:t.key??(typeof t.text=="string"&&t.text?t.text:c),type:t.type??"button",theme:t.theme,onClick:t.onClick,disabled:t.disabled,loading:t.loading,className:t.className,"data-testid":t.testID,...d},t.text):t.hideButton?null:r.default.createElement($.div,{key:t.key??(typeof t.text=="string"&&t.text?t.text:c),initial:{opacity:0,scale:.8,width:0},exit:{opacity:0,width:0},animate:{height:"auto",opacity:1,scale:1,width:"100%"},transition:{ease:"easeInOut",duration:.3}},r.default.createElement(h,{type:t.type??"button",theme:t.theme,onClick:t.onClick,disabled:t.disabled,loading:t.loading,className:t.className,"data-testid":t.testID,...d},t.text)))))};export{y as a,j as b,h as c,U as d,V as e};
//# sourceMappingURL=chunk-EW3NOMMT.js.map
