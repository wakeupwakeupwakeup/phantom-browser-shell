import{a as P}from"./chunk-T35YC3WF.js";import{a as V,b as y}from"./chunk-VYF6PWAW.js";import{a as I}from"./chunk-PVXA4KA7.js";import{T as E,l as x}from"./chunk-VGFG26AC.js";import{ba as L,m as g}from"./chunk-AXFDOJRV.js";import{na as v}from"./chunk-LT72WXA6.js";import{c as w}from"./chunk-NRW4C74H.js";import{f as M,h,n as b}from"./chunk-YJSZZTEX.js";h();b();var t=M(w());h();b();var o=M(w());h();b();var u=M(w());var B=g.div`
  visibility: ${e=>e.isHidden?"hidden":"visible"};
  model-viewer {
    --poster-color: transparent;
    --progress-bar-color: transparent;
    --progress-mask: transparent;
    width: ${e=>e.width}px;
    height: ${e=>e.height}px;
  }
`,D=!1;function O(){D||(D=!0,import("./model-viewer-EDJR62LM.js"))}var T=({src:e,alt:s,autoRotate:i,autoPlay:l,cameraControls:r,loading:n,width:d=154,height:c=154,onLoad:a=v,onError:p=v,isHidden:C=!1})=>{O();let f=(0,u.useRef)(null);return(0,u.useEffect)(()=>{let m=f.current;if(m)return m.addEventListener("load",a),m.addEventListener("error",p),()=>{m.removeEventListener("load",a),m.removeEventListener("error",p)}},[p,a,f]),u.default.createElement(B,{width:d,height:c,isHidden:C},u.default.createElement("model-viewer",{alt:s,loading:n??"eager","auto-rotate-delay":0,"auto-rotate":i||void 0,autoplay:l||void 0,"camera-controls":r||void 0,ref:f,src:e}))},S=T;var $=o.default.memo(e=>{let{uri:s,width:i,height:l,isCameraControlsEnabled:r}=e,[n,d]=(0,o.useState)(!0),[c,a]=(0,o.useState)(!1);return o.default.createElement(o.default.Fragment,null,c?o.default.createElement(I,null,o.default.createElement(L,null)):o.default.createElement(I,null,o.default.createElement(S,{src:s,autoRotate:!0,autoPlay:!0,cameraControls:r,onLoad:()=>{d(!1),a(!1)},onError:()=>{d(!1),a(!0)},width:i,height:l,isHidden:n})),n?o.default.createElement(V,{showBadge:!1}):null)});var A=328,U=g.div`
  width: ${e=>e.width}px;
  height: ${e=>e.height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  position: relative;
`,re=t.default.memo(({media:e,collectibleChainData:s,width:i=328,height:l=328})=>{let r=e?.type??"image",n=E(e,r,!0),d=E(e,"image",!1,"large"),c=r==="image",a=r==="video",p=r==="audio",C=r==="model",f=r==="other"||a||p,m=(0,t.useMemo)(()=>{if(n)return t.default.createElement(t.default.Fragment,null,c?t.default.createElement(y,{width:A,height:A,uri:n,isZoomControlsEnabled:!0,showSkeletonBadge:!1}):C?t.default.createElement($,{uri:n,width:i,height:l,isCameraControlsEnabled:!0}):f?t.default.createElement(y,{uri:d??"",width:i,height:l}):null);if(x(s))return t.default.createElement(P,{...s.utxoDetails})},[s,l,c,C,f,n,d,i]);return t.default.createElement(U,{width:i,height:l},m)});export{re as a};
//# sourceMappingURL=chunk-QJTDA2VU.js.map
