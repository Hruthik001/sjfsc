(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[711],{55976:function(e,t,i){"use strict";i.d(t,{EQ:function(){return g},KP:function(){return u},zU:function(){return d}});var a=i(58261),n=i.n(a),r=i(3149),s=i(44693),o=i(27659);let l=(e,t)=>{let{term:i,type:a,widget:l,mode:c,size:p}=e,d=n()({keys:i,...a&&{type:a},...l&&{widget:l},...c&&{mode:c},...p&&{size:p}},{sort:r.U6});return(0,s.BN)("".concat(o.apiBaseUrl,"/api/v1/completion-topics?").concat(d),{abortSignal:t},!1)},c=(e,t)=>{let{term:i,teamAccess:a}=e;return a?(0,s.BN)("".concat(o.apiBaseUrl,"/api/v1/completion/team?keys=").concat(encodeURIComponent(i),"&pagesize=5"),{method:"POST",abortSignal:t}):(0,s.BN)("".concat(o.apiBaseUrl,"/api/v1/completion?keys=").concat(encodeURIComponent(i),"&pagesize=5"),{abortSignal:t},!1)},p=(e,t)=>{let{term:i,userId:a,teamAccess:n}=e;return n?(0,s.BN)("".concat(o.apiBaseUrl,"/api/v1/projects/search/team?keys=").concat(encodeURIComponent(i),"&autocomplete=1&pagesize=5&search_type=phrase_prefix").concat(a>1?"&account_uid=".concat(a):""),{method:"POST",abortSignal:t}):(0,s.BN)("".concat(o.apiBaseUrl,"/api/v1/projects/search?keys=").concat(encodeURIComponent(i),"&autocomplete=1&pagesize=5&search_type=phrase_prefix").concat(a>1?"&account_uid=".concat(a):""),{method:"POST",abortSignal:t})},d=e=>async function(t){let{signal:i}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return(await c({term:t,teamAccess:e},i)).json()}catch(e){return[]}},u=(e,t)=>async function(i){let{signal:a}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return(await p({term:i,userId:e,teamAccess:t})).json()}catch(e){return[]}},g=(e,t)=>async function(i){let{signal:a}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return(await l({term:i,type:e,widget:t},a)).json()}catch(e){return[]}}},40711:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return eb}});var a=i(85893),n=i(67294),r=i(45697),s=i.n(r),o=i(16550),l=i(76140),c=i(58261),p=i.n(c),d=i(88095),u=i(55976),g=i(93967),h=i.n(g),m=i(58808),f=i.n(m),b=i(41145),x=i(72608),v=i(76526),w=i(41501),y=i(80161),k=i(93044),S=i(13633),M=i(54435),C=i(24906),P=i(50223),E=i(49092),_=i(40322),I=i(23760);let T=(0,d.ZP)(P.Z).attrs({as:"div",$family:"base",$fontSize:"15px"}).withConfig({componentId:"sc-bda28246-0"})(["align-self:flex-start;border:1px solid;border-radius:14px;padding:2px 3px 3px 8px;margin:7px 8px 0 0;height:27px;line-height:18px;letter-spacing:normal;overflow:hidden;display:flex;align-items:center;flex-shrink:0;background-color:",";border-color:",";color:",";"," span{display:inline-block;white-space:nowrap;overflow:hidden;}.remove-button{border:none;cursor:pointer;padding:3px;background:none;&:after{content:'';height:16px;width:16px;vertical-align:middle;display:inline-block;","}}&.filter-tag{background-color:",";border-color:",";color:",";.remove-button:after{background-color:",";}}.color-tag{display:flex;align-items:center;span{display:inline-block;width:16px;height:16px;margin-right:4px;border-radius:50%;background-repeat:no-repeat;background-position:center;background-size:cover;}}"],_.Z.purple,_.Z.purple,_.Z.white,(0,b.fq)("$isTruncated",(0,d.iv)(["","{min-width:130px;}","{min-width:100px;}","{min-width:90px;}"],E.$x,E.ai,E.EW)),(0,I.Z)(M.ZP.SvgClose,_.Z.white),_.Z.white,_.Z.darkgray,_.Z.black,_.Z.black),O=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(null==e?void 0:e.length)||0;{let{innerWidth:i}=window;if(i<E.mo)return t>8?"".concat(e.substring(0,8).trim(),".."):e;if(i<=E.tu)return t>15?"".concat(e.substring(0,15).trim(),".."):e}return e},Z=e=>{let{className:t,children:i,onRemoveClick:r,...s}=e,[o,l]=n.useState(i);(0,C.n)(()=>{l(()=>O(i))},[i]),n.useEffect(()=>{let e=()=>{l(()=>O(i))};return window.addEventListener("resize",e,{passive:!0}),()=>{window.removeEventListener("resize",e,{passive:!0})}},[i]);let c=o!==i;return(0,a.jsxs)(T,{className:t,...s,$isTruncated:c,children:[(0,a.jsx)("span",{children:o}),(0,a.jsx)("button",{className:"remove-button",type:"button",onClick:r})]})};Z.propTypes={className:s().string,onRemoveClick:s().func.isRequired};var R=i(36811),N=i(85834),z=i(81299);let A=d.ZP.form.withConfig({componentId:"sc-bb9a3eb3-0"})(["position:relative;z-index:",";font-size:18px;width:100%;letter-spacing:0.5px;.wrapper{border:1px solid ",";border-radius:22px;padding:0 10px;display:flex;background-color:",";position:absolute;top:1px;left:1px;right:1px;&:focus-within{border-color:",";box-shadow:0 0 0 1px ",";}}.search-inputgroup-container{display:flex;}.search-input-container{display:flex;align-items:center;width:100%;min-width:0;> .search-icon{display:none;}.search-input-overflow{width:100%;min-width:200px;","{min-width:auto;}}}.search-icon{cursor:pointer;width:18px;flex-shrink:0;margin-left:4px;margin-right:9px;display:inline-block;background-color:",";mask:url(",") center / contain no-repeat;","{width:18px;}","{margin-right:4px;}}.input-with-tags{flex-grow:1;padding-right:100px;display:flex;flex-wrap:wrap;","{padding-right:0;max-width:100%;}}.search-options{",";font-size:18px;cursor:pointer;position:absolute;right:0;top:0;width:auto;","{font-size:16.5px;}","{font-size:16px;}li{color:",";",";margin-right:32px;display:",";}li:first-child{margin-right:8px;display:flex;white-space:nowrap;align-items:center;justify-content:right;&:after{content:'';border:4px solid transparent;border-top:4px solid ",";margin-right:8px;margin-left:8px;margin-top:5px;}}}.suggest-container{flex-grow:1;font-size:inherit;overflow:hidden;input{background-color:",";color:",";",";font-size:18px;display:block;border:none;outline:none;letter-spacing:0.5px;padding-left:5px;&::-webkit-search-cancel-button{display:none;}","{padding-left:4px;}&::placeholder{color:",";opacity:1;}","{font-size:16.5px;}","{font-size:16px;}}> div{width:100%;}}.suggest-list{padding-bottom:10px;padding-top:10px;}"," .clear-button{display:none;transition:margin 0s;&.is-image-search,&.is-topic-search,&.has-value{","{display:block;}}.rpx-icon{","{width:22px;height:22px;margin:0;}}}.cancel-button{visibility:hidden;display:none;margin-left:2px;","{display:block;margin-left:4px;padding:3px 5px;flex-shrink:0;}}",";","{.search-options{display:none;}.wrapper{.search-input-container{border-radius:50px;padding:0;flex-grow:1;height:38px;input{background:transparent;}.search-input-overflow{overflow-y:hidden;overflow-x:auto;input{margin-left:0;margin-right:0;}}}.suggest-container{padding-right:0;}}&.focused{background:",";position:fixed;z-index:",";top:0;left:0;bottom:0;right:0;height:auto;.wrapper{width:100vw;padding:6px 12px;margin:0;.search-input-container{padding:0 4px 0 10px;}> .search-icon{display:none;}","{border:0 none;border-color:",";box-shadow:none;}}.clear-button{margin-right:0;&:hover,&:active{background:",";border-color:",";color:",";}.rpx-icon{background:",";}}.cancel-button{visibility:visible;&:hover,&:active{background:",";border-color:",";}}.search-input-tag{display:none;}.search-input-container{border:1px solid ",";> .search-icon{display:inline-block;}}}}"],N.Z.troposphere,(0,b.rS)("palette.searchInput.border"),(0,b.rS)("palette.searchInput.background"),(0,b.fq)("$isDesign","#cfbaef",(0,b.rS)("palette.searchInput.borderFocus")),(0,b.fq)("$isDesign","#cfbaef",(0,b.rS)("palette.searchInput.borderFocus")),E.$x,(0,b.rS)("palette.searchInput.icon"),"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNDkxIDQ1OSAzNTQgMzM3YzMxLTM2IDQ4LTgyIDQ3LTEzMCAwLTI2LTYtNTEtMTYtNzUtMTAtMjMtMjUtNDMtNDMtNjEtMTgtMTctMzktMzEtNjItNDAtMjQtMTAtNDktMTUtNzUtMTQtMjYgNC01MiA2LTc1IDE2Uzg2IDU4IDY5IDc2Yy0xOCAxOC0zMSAzOS00MSA2Mi05IDI0LTE0IDQ5LTE0IDc1IDIgMTA2IDg5IDE5MSAxOTQgMTkxaDNjNDEtMSA3OS0xNCAxMTItMzhsMTQwIDEyNWM0IDQgOSA0IDEzIDRoMWM2IDAgMTEtMiAxNS03IDgtOCA3LTIxLTEtMjl6bS0yODAtOTdjLTg0IDEtMTUzLTY2LTE1NS0xNDktMS04NCA2Ni0xNTMgMTQ5LTE1NGgzYzgyIDAgMTUwIDY2IDE1MSAxNDkgMiA4My02NSAxNTItMTQ4IDE1NHoiLz48L3N2Zz4=",E.Mq,E.ai,E.$x,R.Z.base,E.PJ,E.yJ,(0,b.rS)("palette.searchInput.text"),R.Z.base,e=>e.$showOptions?"block":"none",(0,b.rS)("palette.searchInput.dropdown"),(0,b.rS)("palette.searchInput.background"),(0,b.rS)("palette.searchInput.text"),R.Z.light,E.ai,(0,b.rS)("palette.searchInput.placeholder"),E.PJ,E.yJ,e=>"body"===e.location&&(0,d.iv)(["height:46px;.settled-height{height:42px;}.option{height:24px;line-height:24px;margin-top:12px;}.option:first-child{margin-top:9px;margin-bottom:0;}.wrapper{min-height:","px;}.search-input-tag{margin-top:7px;}"],e.$showOptions?U(e.$optionsCount,24,12,9):0),E.$x,E.$x,E.$x,e=>"header"===e.location&&(0,d.iv)(["height:37px;.settled-height{height:35px;}.option{height:21px;line-height:21px;margin-top:14px;}.option:first-child{margin-top:7px;margin-bottom:0;}.wrapper{min-height:","px;}.search-input-tag{margin-top:4px;}","{font-size:17px;.wrapper{left:15px;right:15px;}.search-input-tag{margin-top:4px;margin-right:2px;}}","{height:42px;.wrapper{align-items:center;border-radius:50px;display:flex;margin:0 10px;padding:0 4px 0 10px;left:1px;right:1px;}.search-input-tag{margin-top:5px;margin-right:2px;}}"],e.$showOptions?U(e.$optionsCount,21,14,7):0,E.Mq,E.$x),E.$x,(0,b.rS)("palette.searchInput.wrapper"),N.Z.stratosphere,E.$x,_.Z.transparent,(0,b.rS)("palette.searchInput.iconHover"),(0,b.rS)("palette.searchInput.iconHover"),(0,b.rS)("palette.searchInput.text"),(0,b.rS)("palette.searchInput.icon"),(0,b.rS)("palette.searchInput.iconHover"),(0,b.rS)("palette.searchInput.iconHover"),(0,b.rS)("palette.searchInput.border")),U=(e,t,i,a)=>t*e+i*e+2*a,j=()=>null,q=(e,t)=>{let i,a=!1;return{cancel:()=>{a=!0,i&&i.abort()},run:async()=>{let n;if(await (0,x.Z)(110),a)return null;i=new AbortController;try{n=await (null==e?void 0:e.suggestionFetch(t,{signal:i.signal}))}catch(e){}return i=void 0,a?null:n}}},L={input:"input settled-height",container:"suggest-container",suggestionsList:"suggest-list"},$=e=>{let{className:t,value:i,option:r,onChange:s,onSetOption:o,children:l,location:c,tags:p,onRemoveTag:d,titleTag:u,onRemoveTitleTag:g,onFocus:m,...b}=e,x=(0,w.Z)(),C=(0,v.Z)(),P=(0,y.Z)(E._y),_=(0,n.useRef)(),I=n.useRef(),[T,O]=n.useState(!1),[R,N]=n.useState([]),[U,j]=n.useState(!1),$=x.params.keys||"",[G,D]=n.useMemo(()=>{let e=n.Children.toArray(l).map((e,t)=>({...e&&"string"!=typeof e&&"number"!=typeof e&&"props"in e?e.props:{},index:t})),t=e[r];return e.sort((e,i)=>(i===t?1:0)-(e===t?1:0)),[e,t]},[l,r]),Y=n.useCallback(()=>{O(!0)},[O]),B=n.useCallback(e=>{e&&e.preventDefault(),O(!1)},[O]);(0,n.useEffect)(()=>{T?"function"==typeof m&&m():_.current.blur()},[T,m]);let F=n.useCallback(()=>{I.current&&I.current.cancel()},[]),H=n.useCallback(async e=>{let{value:t}=e;F(),I.current=q(D,t);let i=await I.current.run();i&&N(i)},[D,F]),Q=n.useCallback((e,t)=>{e.preventDefault(),B(),null==D||D.onSuggestionClick(t.suggestion)},[B,D]),V=n.useCallback(()=>{F(),N([])},[F,N]),W=n.useCallback(()=>{j(!U)},[U]),X=n.useCallback(e=>{F(),e.preventDefault(),null==D||D.onSubmit(i),B()},[D,B,i,F]),K=n.useCallback(()=>{s(""),_.current.focus()},[s]),J=(0,n.useRef)();(0,n.useEffect)(()=>{if(U){let e=e=>{J.current.contains(e.target)||j(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}},[U]),(0,n.useEffect)(()=>{if(document.body.classList.toggle("overflow-hidden",T&&!P&&C),C&&(T||U)){let e=_.current,t=()=>{e.getBoundingClientRect().top<0&&(e.blur(),j(!1))};return document.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",t,{passive:!0}),()=>{document.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}},[T,U,P,C]);let ee=n.useMemo(()=>({value:i,ref:_,placeholder:(null==D?void 0:D.placeholder)||"Search",onFocus:Y,type:"search",onChange:(e,t)=>{let{newValue:i}=t;s(i)},onKeyDown:e=>{let{key:t}=e;"Backspace"===t&&!i&&p.length>0&&"function"==typeof d&&d(e,p[p.length-1])}}),[p,d,D,i,s,Y]),et=n.useCallback(e=>t=>{d(t,e)},[d]),ei=r===k.Y8&&!!i&&0===p.length,ea=r===k.Qn&&!!i&&0===p.length,en=n.useCallback(e=>(0,a.jsxs)("div",{className:"search-inputgroup-container",translate:"no",children:[(0,a.jsxs)("div",{className:"search-input-container",tabIndex:0,children:[(0,a.jsx)("span",{className:"search-icon settled-height",onClick:X}),(0,a.jsx)("div",{className:"search-input-overflow",children:(0,a.jsx)("input",{...e,size:Math.max(e.value.length-2,1)})}),(T||ei||ea)&&(0,a.jsx)(S.Z,{type:"button",onClick:K,layout:"icon",shape:"round",height:"30px",className:h()("clear-button",{"is-image-search":ei,"is-topic-search":ea,"has-value":!!(null==e?void 0:e.value)}),children:(0,a.jsx)(M.x8,{})})]}),T&&(0,a.jsx)(S.Z,{type:"button",className:"cancel-button",color:"clearsky",onClick:e=>{s($),B(e)},children:(0,a.jsx)(z.cC,{i18nKey:"searchinput-001",children:"Cancel"})})]}),[$,X,T,K,B,ei,ea,s]);return(0,a.jsx)(A,{className:h()(t,"search-input",{focused:T,"show-options":U},"location-".concat(c)),onSubmit:X,$showOptions:U,$optionsCount:G.length,location:c,action:"#",$isDesign:(null==D?void 0:D.label)==="Design topics"||(null==D?void 0:D.label)==="Designs",...b,children:(0,a.jsxs)("div",{className:"wrapper",translate:"no",children:[(0,a.jsx)("span",{className:"search-icon settled-height",onClick:X}),(0,a.jsxs)("div",{className:"input-with-tags",children:[p.map(e=>(0,a.jsx)(Z,{className:h()("search-input-tag",{"filter-tag":e.filter}),onRemoveClick:d?et(e):null,translate:"yes",children:e.label},e.key||e.tag)),!!u&&(0,a.jsx)(Z,{className:"search-input-tag",onRemoveClick:g,children:u},u),(0,a.jsx)(f(),{id:c,suggestions:R,onSuggestionSelected:Q,onSuggestionsFetchRequested:H,onSuggestionsClearRequested:V,renderSuggestion:null==D?void 0:D.suggestionRender,getSuggestionValue:null==D?void 0:D.suggestionValue,renderInputComponent:en,inputProps:ee,theme:L})]}),(0,a.jsx)("ul",{className:"search-options",ref:J,onClick:W,translate:"no",children:G.map(e=>(0,a.jsx)("li",{className:"option",onClick:()=>o(e.index),children:e.label},e.index))})]})})};$.defaultProps={option:0,value:"",location:"body",tags:[],titleTag:""},$.propTypes={location:s().oneOf(["header","body","sidebar"]),option:s().number,value:s().string.isRequired,onChange:s().func.isRequired,onSetOption:s().func.isRequired,children:s().node,tags:s().arrayOf(s().shape({label:s().oneOfType([s().string,s().node]),tag:s().string,queryKey:s().string})),onRemoveTag:s().func,titleTag:s().string,onRemoveTitleTag:s().func};var G=i(49053),D=i(92977),Y=i.n(D),B=i(32768),F=i.n(B),H=i(29688),Q=i(54857);let V=d.ZP.div.withConfig({componentId:"sc-f6d06c6b-0"})(["font-size:19px;line-height:36px;height:36px;cursor:pointer;white-space:nowrap;overflow:hidden;color:",";",";display:flex;align-items:center;letter-spacing:0;padding-left:10px;padding-right:10px;border-radius:18px;","{font-size:19px;}","{font-size:17px;}","{font-size:16px;padding-left:4px;padding-right:4px;}.board-image,.topic-image{width:24px;height:24px;border-radius:4px;margin-right:10px;}.topic-image{width:30px;object-fit:contain;}.topic-icon{width:24px;height:24px;margin-right:10px;}.myboard-icon,.private-icon{content:'';margin-left:12px;width:15px;height:15px;display:inline-block;background:",";}.myboard-icon{mask:url(",") center / contain no-repeat;}.private-icon{mask:url(",") center / contain no-repeat;}",""],(0,b.rS)("palette.searchInput.text"),R.Z.base,E.PJ,E.yJ,E.ai,(0,b.rS)("palette.searchInput.text"),F(),Y(),e=>e.$highlight&&(0,d.iv)(["background-color:",";"],(0,b.rS)("palette.searchInput.suggestionHighlightedBackground"))),W=e=>{let{value:t,highlight:i}=e;return(0,a.jsx)(V,{$highlight:i,children:t})};W.propTypes={highlight:s().bool,value:H.Oj};let X=e=>{var t;let{value:i,highlight:n}=e,{data:r}=(0,Q.aF)();return(0,a.jsxs)(V,{$highlight:n,children:[i.image_cover_uri&&(0,a.jsx)("img",{alt:i.name,className:"board-image",src:i.image_cover_uri}),(0,a.jsx)("span",{children:i.name}),!i.rawpixel_board&&(null==r?void 0:r.uid)&&(null===(t=i.owner)||void 0===t?void 0:t.type)==="user"&&i.owner.id===r.uid&&(0,a.jsx)("span",{className:"myboard-icon"}),i.private&&(0,a.jsx)("span",{className:"private-icon"})]})};X.propTypes={highlight:s().bool,value:H.eE};let K=e=>{let{value:t,highlight:i}=e;return(0,a.jsxs)(V,{$highlight:i,children:[t.image_cover_url&&(0,a.jsx)("img",{className:"topic-image",src:t.image_cover_url,alt:t.title_long}),(0,a.jsx)("span",{children:t.title_long})]})};K.propTypes={highlight:s().bool,value:H.ov};let J=(e,t)=>{let{isHighlighted:i}=t;return(0,a.jsx)(W,{highlight:i,value:e})},ee=(e,t)=>{let{isHighlighted:i}=t;return(0,a.jsx)(X,{highlight:i,value:e})},et=(e,t)=>{let{isHighlighted:i}=t;return(0,a.jsx)(K,{highlight:i,value:e})};var ei=i(39113),ea=i(98719),en=i(31841),er=i(71656),es=i(86977),eo=i(74309),el=i(60417),ec=i(27810),ep=i(83047),ed=i(79920),eu=i(869),eg=i(57650);let eh=(0,d.ZP)($).withConfig({componentId:"sc-ec607d8d-0"})([".input-with-tags{padding-right:100px;","{padding-right:0;}}.search-options{width:160px;.option{justify-content:flex-end;margin-right:32px;text-align:right;}li:first-child{display:flex;justify-content:flex-end;}}"],E.$x),em=ec._v.map(e=>e.tag),ef=e=>{var t;let{location:i,searchEntity:r,onImageSearch:s,onBoardSearch:c,onTopicSearch:d,type:g="elements_designs",...h}=e,m=(0,o.k6)(),f=(0,w.Z)(),{data:b}=(0,Q.aF)(),{placeholders:x,value:v,option:S,setValue:M,setOption:C}=(0,ei.Z)(),P=(0,y.Z)(E._y),[_,I]=(0,n.useState)(""),T=(0,ed.sh)(v),{showRawpixelTeam:O}=(0,en.ZP)(),Z=!!(null==b?void 0:null===(t=b.access)||void 0===t?void 0:t.show_rawpixel_team)&&O,{searchTags:R}=(0,ea.Z)(r,i),N=(0,n.useMemo)(()=>R.filter(e=>e.searchOption===S),[R,S]),A=(0,l.NL)(),U=!!(0,o.LX)(m.location.pathname,{path:"/search/:keys?",exact:!0}),q=!!(0,o.LX)(m.location.pathname,{path:"/create/search/:keys?",exact:!0}),L=(0,n.useCallback)(async e=>{var t;let i=m.location.pathname,{queries:a}=f,n=i.startsWith("/search")&&(null===(t=a.tags)||void 0===t?void 0:t.includes("$pngelements")),r=!!(0,o.LX)(i,{path:"/",exact:!0}),l=encodeURIComponent(e);if(!P&&n&&""===l){(0,G.V)(m,f,{to:el.C0});return}if("function"==typeof s)s(l,"elements");else if(U){(0,G.V)(m,f,{pathname:"/search".concat(l.length?"/".concat(l):""),extra:{[ep.Z.IMAGE.SIMILAR]:"",[ep.Z.COMMON.PAGE]:1,...(null==a?void 0:a.mode)==="story"&&{mode:"shop",[ep.Z.COMMON.SORT]:"curated"}}});let e={...f.queries,...l&&{[ep.Z.COMMON.KEYS]:l}};delete e[ep.Z.IMAGE.SIMILAR],await A.resetQueries({queryKey:er.O.Images(e),exact:!0})}else if(r&&P&&em.includes(a.tags)){let e=new eu.Z("_topics");a.tags&&e.pushFilter(a.tags,"search_filter"),(0,G.V)(m,f,{pathname:"/search".concat(l.length?"/".concat(l):""),extra:{[ep.Z.COMMON.PAGE]:1,[ep.Z.COMMON.SORT]:"curated",[ep.Z.IMAGE.TAGS]:null,type:null,[ep.Z.WEB.PATH]:(null==e?void 0:e.stringify())||null}})}else if(r&&!P&&"wallpapers"===a.type){let e=new eu.Z("_topics");e.pushFilter("$mobilewallpapers","tag"),(0,G.V)(m,f,{pathname:"/search".concat(l.length?"/".concat(l):""),extra:{[ep.Z.COMMON.PAGE]:1,[ep.Z.COMMON.SORT]:"curated",[ep.Z.IMAGE.TAGS]:null,type:null,[ep.Z.WEB.PATH]:(null==e?void 0:e.stringify())||null}})}else(0,G.V)(m,f,{pathname:"/search".concat(l.length?"/".concat(l):""),extra:{[ep.Z.WEB.PATH]:eo.bj,[ep.Z.COMMON.PAGE]:1,[ep.Z.COMMON.SORT]:"curated",type:null}})},[m,P,U,s,A,f]),$=n.useCallback(e=>{let t=encodeURIComponent(e);if("function"==typeof s)s(t,"designs");else if(q)(0,G.V)(m,f,{pathname:"/create/search".concat(t.length?"/".concat(t):""),extra:{[ep.Z.COMMON.PAGE]:1}});else{let e=null,a=ec.Oh.find(e=>{var t,i;return e.tag&&(null===(i=f.queries)||void 0===i?void 0:null===(t=i.tags)||void 0===t?void 0:t.includes(e.tag))});if((null==a?void 0:a.id)&&(e=new eu.Z(null==a?void 0:a.id)),r&&!U){var i;let t=new eu.Z(f.queries.path),a=(null==t?void 0:null===(i=t.pathParts)||void 0===i?void 0:i.map(e=>e.id))||[];e=eu.Z.createPathFromTopicEntity(r,!1,a,!1)}(0,G.V)(m,f,{pathname:"/create/search".concat(t.length?"/".concat(t):""),extra:{[ep.Z.COMMON.SORT]:"curated",[ep.Z.COMMON.PAGE]:1,[ep.Z.WEB.PATH]:(null==e?void 0:e.stringify())||null}})}},[m,r,f,q,s,U]),D=(0,n.useCallback)(e=>{let{url:t,url_relative:i}=e;m.push(i&&i.length?i:(0,eg.QN)(t))},[m]),Y=(0,n.useCallback)(e=>{let t=encodeURIComponent(e);if("function"==typeof c)c(t);else{var i;m.push("/boards".concat(t.length?"/".concat(t):"","?").concat(p()({[ep.Z.COMMON.PAGE]:1,[ep.Z.COMMON.SORT]:"rating",tab:(null===(i=f.queries)||void 0===i?void 0:i.tab)&&["community","my-boards","likes"].includes(f.queries.tab)?f.queries.tab:"/my-boards/liked"===f.path&&"likes"||"/my-boards/created"===f.path&&"my-boards"||"community",[ep.Z.COMMON.ACCOUNT_ID]:f.queries[ep.Z.COMMON.ACCOUNT_ID]||"/my-boards/created"===f.path&&(null==b?void 0:b.uid)||void 0,[ep.Z.COMMON.FLAGGED_BY]:f.queries[ep.Z.COMMON.FLAGGED_BY]||"/my-boards/liked"===f.path&&(null==b?void 0:b.uid)||void 0})))}},[m,c,f,null==b?void 0:b.uid]),B=(0,n.useCallback)(e=>{m.push("".concat(eo.j1.includes(e.type)?"/create":"","/search?").concat(ep.Z.COMMON.PAGE,"=1&").concat(ep.Z.COMMON.SORT,"=curated&").concat(ep.Z.WEB.PATH,"=").concat(eu.Z.createPathFromTopicEntity(e,!1,[],!1)))},[m]),F=(0,n.useCallback)(e=>{let t=encodeURIComponent(e);S===k.U_?m.push("/create/topics/search".concat(t.length?"/".concat(t):"","?").concat(ep.Z.COMMON.PAGE,"=1")):"function"==typeof d?d(t):m.push("/topics/search".concat(t.length?"/".concat(t):""))},[m,d,S]),H=(0,n.useCallback)((e,t)=>{var i,a,n,r;if(e.preventDefault(),!P){let{entity:e}=t;if((null==e?void 0:e.widgets)&&!T){let t=Object.values(e.widgets).find(e=>e.widget_id===eo.TW&&e.published);(0,G.V)(m,f,{to:t?el.C0:"/topics/search"});return}}if(!t.filter){let e=new eu.Z("_topics");(0,G.V)(m,f,{to:"".concat(f.path,"?page=1&path=").concat(e,"&sort=curated")});return}let s={...f.queries,[ep.Z.COMMON.PAGE]:1,[ep.Z.WEB.STORY]:void 0,mode:void 0};if(s[ep.Z.IMAGE.TAGS]=(null===(a=s[ep.Z.IMAGE.TAGS])||void 0===a?void 0:null===(i=a.split)||void 0===i?void 0:i.call(a,",").filter(e=>e!==t.tag).join(","))||void 0,s[ep.Z.IMAGE.TAGS_OR]=(null===(r=s[ep.Z.IMAGE.TAGS_OR])||void 0===r?void 0:null===(n=r.split)||void 0===n?void 0:n.call(r,",").filter(e=>e!==t.tag).join(","))||void 0,s[ep.Z.WEB.PATH]){let e=new eu.Z(s[ep.Z.WEB.PATH]);"color"===t.key&&e.clearFilters("color"),e.removeFilter(t.tag,"tag"),e.getFilters("tags_or").forEach(i=>{let a=i.valueArray().filter(e=>e!==t.tag);a.length?i.setValue(a.join(",")):e.removeFilter(i.value,i.type)}),t.tag===eo.du&&e.clearFilters("hearted"),s[ep.Z.WEB.PATH]=e.stringify()}s[ep.Z.IMAGE.TAGS]||delete s[ep.Z.IMAGE.TAGS],s[ep.Z.IMAGE.TAGS_OR]||delete s[ep.Z.IMAGE.TAGS_OR],s[ep.Z.COMMON.FLAGGED_BY]&&t.tag===eo.du&&delete s[ep.Z.COMMON.FLAGGED_BY],s[ep.Z.IMAGE.COLOR]&&delete s[ep.Z.IMAGE.COLOR],(0,G.V)(m,f,{to:"".concat(f.path,"?").concat(p()(s))})},[m,P,T,f]),V=(0,n.useCallback)(()=>I(""),[]),W=(0,l.NL)(),X=(0,n.useCallback)(async()=>{if(0===S){let e=[W.prefetchQuery({queryKey:er.O.SidebarFilters({id:"all"}),queryFn:(0,es.mB)()})];await Promise.all(e)}},[W,S]);return(0,a.jsxs)(eh,{value:T,option:S,onChange:M,onSetOption:C,tags:(U||q)&&N||[],location:i,onRemoveTag:H,titleTag:_,onRemoveTitleTag:V,onFocus:X,type:g,...h,children:[(0,a.jsx)(j,{suggestionValue:e=>e,suggestionRender:J,suggestionFetch:(0,u.zU)(Z),onSuggestionClick:L,onSubmit:L,label:(0,a.jsx)(z.cC,{i18nKey:"elementdesignssearchinput-001",children:"Elements"}),placeholder:x.elements||"Search elements"}),(0,a.jsx)(j,{suggestionValue:e=>e,suggestionRender:J,suggestionFetch:(0,u.zU)(Z),onSuggestionClick:$,onSubmit:$,label:(0,a.jsx)(z.cC,{i18nKey:"elementdesignssearchinput-002",children:"Designs"}),placeholder:x.designs||"Search designs"}),(0,a.jsx)(j,{suggestionValue:e=>e.title_long,suggestionRender:et,suggestionFetch:(0,u.EQ)(eo.c_),onSuggestionClick:B,onSubmit:F,label:(0,a.jsx)(z.cC,{i18nKey:"topicsearchinput-001",children:"Design topics"}),placeholder:x.design_topics||"Search topics"}),(0,a.jsx)(j,{suggestionValue:e=>e.title_long,suggestionRender:et,suggestionFetch:(0,u.EQ)(eo.yQ),onSuggestionClick:B,onSubmit:F,label:(0,a.jsx)(z.cC,{i18nKey:"topicsearchinput-002",children:"Element topics"}),placeholder:x.element_topics||"Search topics"}),(0,a.jsx)(j,{suggestionValue:e=>e.title,suggestionRender:ee,suggestionFetch:(0,u.KP)(null==b?void 0:b.uid,Z),onSuggestionClick:D,onSubmit:Y,label:(0,a.jsx)(z.cC,{i18nKey:"topicsearchinput-003",children:"Boards"}),placeholder:x.boards||"Search boards"})]})};ef.propTypes={location:s().oneOf(["body","header"]),type:s().oneOf(["design_topics","elements_designs","topics"]),onImageSearch:s().func,onBoardSearch:s().func,onTopicSearch:s().func};var eb=ef},98719:function(e,t,i){"use strict";i.d(t,{S:function(){return g}});var a=i(85893),n=i(67294),r=i(41501),s=i(83130),o=i(74309),l=i(83047),c=i(869),p=i(86977),d=i(63727);let u=(e,t,i,a,n,r)=>({label:e,tag:t,key:i,searchOption:a,entity:n,...r}),g=function(e,t,i){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(!e)return"";if("search_placeholder"===a&&t&&o.uw[t])return o.uw[t];if(t){let a=Object.keys(e.widgets).map(t=>e.widgets[t]).find(e=>{let{widget_tag:i}=e;return i===t});return(null==a?void 0:a.title)||i&&e[i]||e.title_long||e.title}return i&&e[i]||e.title_long||e.title};t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"body",{queries:i,path:h}=(0,r.Z)(),m=h.startsWith("/create/search"),f=(0,n.useMemo)(()=>new c.Z(i[l.Z.WEB.PATH]),[i]),{filterGroups:b=[]}=(0,s.Z)(),{data:x}=(0,p.B2)(o.GP),v=(0,n.useMemo)(()=>{var e;return(null==x?void 0:null===(e=x.value)||void 0===e?void 0:e.themes)||[]},[x]),w=n.useMemo(()=>{if("header"===t)return[];let e=i[l.Z.IMAGE.TAGS]?i[l.Z.IMAGE.TAGS].split(",").filter(e=>e!==i.topic&&e!==i.topic_group):[];if(i[l.Z.WEB.PATH]){let t=[...f.getFilters("tag","tags_or","color","theme").map(e=>e.value),...f.getFilters("tags_or").map(e=>e.valueArray()).flat()];e.push(...t),f.getFilter("hearted")&&e.push(o.du)}return(i[l.Z.IMAGE.TAGS_OR]&&e.push(...i[l.Z.IMAGE.TAGS_OR].split(",")),i[l.Z.COMMON.FLAGGED_BY]&&e.push(o.du),e.length)?b.reduce((e,t)=>[...e,...t.filters],[]).map(t=>{if("sizes"===t.tag){let t=d.Z.find(t=>e.includes(t.tag));if(t)return{...t,published:!0}}return t}).filter(t=>t.published&&(e.includes(t.tag)||"sizes"===t.tag&&d.Z.some(t=>e.includes(t.tag)))):[]},[b,i,t,f]);return n.useMemo(()=>{let n=[];if(e){let t=g(e,null,null,"search_placeholder");n.push(u(t,e.tag,"".concat(e.type,"-").concat(e.tag),m?1:0,e))}w.length&&w.forEach(e=>{n.push(u(e.name,e.tag,"".concat(e.name,"-").concat(e.tag),m?1:0,null,{filter:!0}))});let r=i[l.Z.IMAGE.TAGS]?i[l.Z.IMAGE.TAGS].split(",").filter(e=>e!==i.topic&&e!==i.topic_group):[];if("header"!==t){var s;let e=i[l.Z.IMAGE.COLOR]||(null===(s=f.getFilter("color"))||void 0===s?void 0:s.value);if(null==e?void 0:e.length)n.push(u((0,a.jsxs)("div",{className:"color-tag",children:[(0,a.jsx)("span",{style:{background:e}}),"Color"]}),null,"colorTag-"+e.replace("#",""),m?1:0,null,{filter:!0}));else if(v.length>0&&(null==r?void 0:r.length)>0&&v.some(e=>r.includes(e.tag))){let e=v.find(e=>r.includes(e.tag)),t=e.icon_url;(null==t?void 0:t.length)&&n.push(u((0,a.jsxs)("div",{className:"color-tag",children:[(0,a.jsx)("span",{style:{background:"url(".concat(t,")")}}),"Color"]}),e.tag,"theme-color-".concat(t,"-").concat(e.tag),0,null,{filter:!0}))}else if(f.getFilter("theme")){let e=f.getFilter("theme"),t=v.find(t=>t.tag===e.value).icon_url;(null==t?void 0:t.length)&&n.push(u((0,a.jsxs)("div",{className:"color-tag",children:[(0,a.jsx)("span",{style:{background:"url(".concat(t,")")}}),"Color"]}),e.value,"theme-color-".concat(t,"-").concat(e.value),0,null,{filter:!0}))}}return{placeholders:{},searchTags:n.filter((e,t,i)=>{if(i.findIndex(t=>t.tag===e.tag)===t)return!0}).slice(0,20)}},[e,w,i,t,m,f,v])}},29688:function(e,t,i){"use strict";i.d(t,{BH:function(){return r},HN:function(){return y},L3:function(){return f},LE:function(){return v},Oj:function(){return u},Zg:function(){return p},cC:function(){return c},co:function(){return s},eE:function(){return g},gl:function(){return x},iV:function(){return l},ov:function(){return h},qq:function(){return b},sV:function(){return m},t6:function(){return d},ws:function(){return o}});var a=i(45697),n=i.n(a);let r=n().shape({width:n().number.isRequired,height:n().number.isRequired,id:n().number.isRequired}),s=n().shape({width:n().number.isRequired,height:n().number.isRequired,id:n().string.isRequired,name:n().string.isRequired,alias:n().string.isRequired,images:n().shape({cover:n().shape({style_uri:n().string.isRequired})}),uid:n().number.isRequired,type:n().string.isRequired}),o=n().shape({width:n().number.isRequired,height:n().number.isRequired,id:n().string.isRequired,type:n().string});n().shape({id:n().number.isRequired,uid:n().oneOfType([n().number,n().bool]).isRequired,rawpixel_board:n().number.isRequired});let l=n().shape({id:n().number.isRequired,name:n().string.isRequired,created_by:n().number,created:n().number.isRequired,private:n().bool.isRequired,promoted:n().bool.isRequired,tags:n().arrayOf(n().string),rating:n().number,deleted_at:n().number,owner:n().shape({id:n().number.isRequired,type:n().string.isRequired}),cover:n().shape({uri:n().string,width:n().number,height:n().number,type:n().string,bucket:n().string,region:n().string})}),c=n().shape({title:n().string.isRequired,icon_url:n().string,id:n().number.isRequired}),p=n().shape({title:n().string.isRequired,type:n().string.isRequired,icon_url:n().string,id:n().number.isRequired}),d=n().shape({mid:n().number.isRequired,timestamp:n().number.isRequired,viewed:n().bool.isRequired,link:n().string,data:n().shape({content:n().string.isRequired})}),u=n().string.isRequired,g=n().shape({image_cover_uri:n().string,name:n().string.isRequired,private:n().bool.isRequired,owner:n().shape({id:n().number.isRequired,type:n().string.isRequired}),url:n().string.isRequired}),h=n().shape({image_cover_url:n().string,title_long:n().string.isRequired,title:n().string.isRequired}),m=n().shape({id:n().number,entity_id:n().number,uid:n().number,url:n().string,canSaveEntity:n().bool,hasSavedEntity:n().bool,status:n().oneOf([0,1]),image_cover_uri:n().string,name:n().string.isRequired}),f=n().shape({entities:n().arrayOf(m),status:n().oneOf(["loading","pending","error","idle","success"]).isRequired});n().shape({label:n().string.isRequired,id:n().string.isRequired});let b=n().shape({value:n().string.isRequired,isFilter:n().bool.isRequired}),x=n().shape({value:n().string.isRequired,secret:n().bool.isRequired,status:n().oneOf(["saving","error","pending"]).isRequired,errormsg:n().string}),v=n().arrayOf(n().shape({link:n().string,name:n().string,description:n().string,donate_link:n().string})),w=n().arrayOf(n().shape({uid:n().number,full_name:n().string,artist_credit:n().bool,copyright:n().string})),y=n().shape({id:n().number,pinterestImage:n().string,alias:n().string,url:n().string,metadata:n().shape({artists:w,keywords:n().arrayOf(n().string),fonts:n().shape({fonts:n().array,hasBundle:n().bool}),charities:v,download_options:n().arrayOf(n().shape({})),pinterest_description:n().string,licenseUrl:n().string,isFreeLicense:n().bool,isCC0License:n().bool,isPremiumLicense:n().bool})})},63727:function(e,t,i){"use strict";var a=i(61547),n=i(61979),r=i(27639),s=i.n(r),o=i(44939),l=i.n(o),c=i(94898),p=i.n(c),d=i(2933),u=i.n(d),g=i(12129),h=i.n(g),m=i(42839),f=i.n(m),b=i(91051),x=i.n(b),v=i(4560),w=i.n(v),y=i(53832),k=i.n(y),S=i(48423),M=i.n(S),C=i(91478),P=i.n(C),E=i(41454),_=i.n(E),I=i(86849),T=i.n(I),O=i(47991),Z=i.n(O),R=i(93741),N=i.n(R),z=i(53848),A=i.n(z),U=i(18727),j=i.n(U);let q=[(0,n.PU)({id:"frameshapes",tag:"$copyspaceshapepngelements",ratio:1.5,name:"Frame Shapes",list:["frame"]}),(0,n.PU)({id:"square",tag:"$1:1",ratio:1,name:"Square",list:["full","moodboard","background","frame","remix"]}),(0,n.PU)({id:"landscape",tag:"$landscape",ratio:1.5,name:"Landscape",list:["full","moodboard","background","frame","remix"]}),(0,n.PU)({id:"portrait",tag:"$portrait",ratio:2/3,name:"Portrait",list:["full","moodboard","background","frame","remix"]}),(0,n.PU)({id:"story",tag:"$9:16",ratio:9/16,name:"Story 9:16",list:["full","background","frame","remix"]}),(0,n.PU)({id:"desktop_wallpaper_ratio",tag:"$16:9",name:"Desktop wallpaper 16:9",ratio:2560/1440,icon:w(),size:(0,n.PU)({width:2560,height:1440,units:a.sY.PIXELS}),list:["full","background","frame","remix"]}),(0,n.PU)({id:"hd_wallpaper_ratio",tag:"$16:9hd",name:"HD wallpaper",ratio:3840/2160,icon:w(),size:(0,n.PU)({width:3840,height:2160,units:a.sY.PIXELS}),minimum_size:{width:3840,height:2160},list:["background","frame"]}),(0,n.PU)({id:"instagram_post",tag:"$instagrampostsizes",ratio:1,name:"Instagram Post",icon:P(),size:(0,n.PU)({width:1080,height:1080,units:a.sY.PIXELS}),list:["template"]}),(0,n.PU)({id:"poster",tag:"$postersizes",name:"Poster",ratio:42/59.4,icon:Z(),size:(0,n.PU)({width:42,height:59.4,units:a.sY.CENTIMETERS}),list:["template"]}),(0,n.PU)({id:"facebook_cover",tag:"$facebookcoversizes",name:"Facebook Cover",ratio:2560/1440,icon:M(),size:(0,n.PU)({width:2560,height:1440,units:a.sY.PIXELS}),list:["template"]}),(0,n.PU)({id:"instagram_story",tag:"$instagramstorysizes",name:"Instagram Story",ratio:.5625,icon:P(),size:(0,n.PU)({width:1080,height:1920,units:a.sY.PIXELS}),list:["template"]}),(0,n.PU)({id:"presentation",tag:"$presentationsizes",name:"Presentation",ratio:2560/1440,icon:N(),size:(0,n.PU)({width:2560,height:1440,units:a.sY.PIXELS}),list:["template"]}),(0,n.PU)({id:"twitter_header",tag:"$twitterheadersizes",name:"Twitter Header",ratio:3,icon:A(),size:(0,n.PU)({width:1500,height:500,units:a.sY.PIXELS}),list:["template"]}),(0,n.PU)({id:"a4_portrait",tag:"$a4portraitsizes",name:"A4 (Portrait)",ratio:21/29.7,icon:l(),size:(0,n.PU)({width:21,height:29.7,units:a.sY.CENTIMETERS}),list:["template"]}),(0,n.PU)({id:"a4_landscape",tag:"$a4landscapesizes",name:"A4 (Landscape)",ratio:29.7/21,icon:s(),size:(0,n.PU)({width:29.7,height:21,units:a.sY.CENTIMETERS}),list:["template"]}),(0,n.PU)({id:"pinterest_pin",tag:"$pinterestpinsizes",name:"Pinterest Pin",ratio:.5625,icon:T(),size:(0,n.PU)({width:1080,height:1920,units:a.sY.PIXELS}),list:["template"]}),(0,n.PU)({id:"mobile_wallpaper",tag:"$mobilewallpapersizes",name:"Mobile Wallpaper",ratio:.5625,icon:_(),size:(0,n.PU)({width:1080,height:1920,units:a.sY.PIXELS}),list:["template"]}),(0,n.PU)({id:"youtube",tag:"$youtubesizes",name:"Youtube",ratio:2560/1440,icon:j(),size:(0,n.PU)({width:2560,height:1440,units:a.sY.PIXELS}),list:["template"]}),(0,n.PU)({id:"facebook_story",tag:"$facebookstorysizes",name:"Facebook Story",ratio:.5625,icon:M(),size:(0,n.PU)({width:1080,height:1920,units:a.sY.PIXELS}),list:["template"]}),(0,n.PU)({id:"facebook_post",tag:"$facebookpostsizes",name:"Facebook Post",ratio:1,icon:M(),size:(0,n.PU)({width:1080,height:1080,units:a.sY.PIXELS}),list:["template"]}),(0,n.PU)({id:"card_portrait",tag:"$portraitcardsizes",name:"Card (Portrait)",ratio:5/7,icon:x(),size:(0,n.PU)({width:5,height:7,units:a.sY.INCHES}),list:["template"]}),(0,n.PU)({id:"card_landscape",tag:"$landscapecardsizes",name:"Card (Landscape)",ratio:1.4,icon:f(),size:(0,n.PU)({width:7,height:5,units:a.sY.INCHES}),list:["template"]}),(0,n.PU)({id:"email_header",tag:"$emailheadersizes",name:"Email Header",ratio:3,icon:k(),size:(0,n.PU)({width:1500,height:500,units:a.sY.PIXELS}),list:["template"]}),(0,n.PU)({id:"blog_banner",tag:"$blogbannersizes",name:"Blog Banner",ratio:2560/1440,icon:p(),size:(0,n.PU)({width:2560,height:1440,units:a.sY.PIXELS}),list:["template"]}),(0,n.PU)({id:"desktop_wallpaper",tag:"$desktopwallpapersizes",name:"Desktop Wallpaper",ratio:2560/1440,icon:w(),size:(0,n.PU)({width:2560,height:1440,units:a.sY.PIXELS}),list:["template"]}),(0,n.PU)({id:"card",tag:"$5:7",ratio:5/7,name:"Card 5:7",list:["full","background","frame"]}),(0,n.PU)({id:"card7:5",tag:"$7:5",ratio:1.4,name:"Card 7:5",list:["full","background","frame"]}),(0,n.PU)({id:"header3:1",tag:"$3:1",ratio:3,name:"Header 3:1",list:["full","background","frame"]}),(0,n.PU)({id:"poster",tag:"$21:29.7",name:"Poster",ratio:42/59.4,icon:Z(),size:(0,n.PU)({width:42,height:59.4,units:a.sY.CENTIMETERS}),list:["full","background","frame"]}),(0,n.PU)({id:"posterlandscape",tag:"$29.7:21",name:"Poster (landscape)",ratio:59.4/42,icon:Z(),size:(0,n.PU)({width:59.4,height:42,units:a.sY.CENTIMETERS}),list:["full","background","frame"]}),(0,n.PU)({id:"remix",tag:"$3:2",ratio:1.5,name:"Remix 3:2",list:["full","background","frame","remix"]}),(0,n.PU)({id:"twitter_post",tag:"$twitterpostsizes",name:"Twitter Post",ratio:2560/1440,icon:A(),size:(0,n.PU)({width:2560,height:1440,units:a.sY.PIXELS}),list:["template"]}),(0,n.PU)({id:"business_card_landscape",tag:"$landscapebusinesscardsizes",name:"Business Card (Landscape)",ratio:1.75,icon:u(),size:(0,n.PU)({width:3.5,height:2,units:a.sY.INCHES}),list:["template"]}),(0,n.PU)({id:"business_card_portrait",tag:"$portraitbusinesscardsizes",name:"Business Card (Portrait)",ratio:2/3.5,icon:h(),size:(0,n.PU)({width:2,height:3.5,units:a.sY.INCHES}),list:["template"]}),(0,n.PU)({id:"business_card_landscape_ratio",tag:"$3.5:2",name:"Business Card (Landscape)",ratio:1.75,icon:u(),size:(0,n.PU)({width:3.5,height:2,units:a.sY.INCHES}),list:["full","background","frame"]}),(0,n.PU)({id:"business_card_portrait_ratio",tag:"$2:3.5",name:"Business Card (Portrait)",ratio:2/3.5,icon:h(),size:(0,n.PU)({width:2,height:3.5,units:a.sY.INCHES}),list:["full","background","frame"]})];t.Z=q},27639:function(e){e.exports="https://static2.rawpixel.com/_next/static/images/a4-landscape-15efe1b563e363d61a3d54fd8dac2f67.svg"},44939:function(e){e.exports="https://static2.rawpixel.com/_next/static/images/a4-portrait-8d591a919d0e44f9ec3bf6cfce0ee85a.svg"},94898:function(e){e.exports="https://static2.rawpixel.com/_next/static/images/blog-banner-a33c4060010787cd385a840f3f2ba295.svg"},2933:function(e){e.exports="https://static2.rawpixel.com/_next/static/images/businesscard-landscape-7ca4b39e767d77507762cea233be14a3.svg"},12129:function(e){e.exports="https://static2.rawpixel.com/_next/static/images/businesscard-portrait-4fc29afb85f77e5cbc24ef9fa2b80c09.svg"},42839:function(e){e.exports="https://static2.rawpixel.com/_next/static/images/card-landscape-1146d1f92a0d5650a4640bad2287fad2.svg"},91051:function(e){e.exports="https://static2.rawpixel.com/_next/static/images/card-portrait-ac984b350ca7184f45569bdd82a96918.svg"},4560:function(e){e.exports="https://static2.rawpixel.com/_next/static/images/desktop-wallpaper-956e23b24235c9b5915a0d0c6770475d.svg"},53832:function(e){e.exports="https://static2.rawpixel.com/_next/static/images/email-header-9c064f1084a59ebd01ba77cb01af3e5b.svg"},48423:function(e){e.exports="https://static2.rawpixel.com/_next/static/images/facebook-e073c9b46dbc6bae13b7b4fbff589961.svg"},91478:function(e){e.exports="https://static2.rawpixel.com/_next/static/images/instagram-f1c57e38daeac614a4e0934a39ec5aaa.svg"},41454:function(e){e.exports="https://static2.rawpixel.com/_next/static/images/mobile-wallpaper-8b61c564b2a5253d98c1e848f934b542.svg"},86849:function(e){e.exports="https://static2.rawpixel.com/_next/static/images/pinterest-pin-3a8a02af992678c9eeca59375a0862e5.svg"},47991:function(e){e.exports="https://static2.rawpixel.com/_next/static/images/poster-c036fb69f27c535be6bca8df1f2d9fec.svg"},93741:function(e){e.exports="https://static2.rawpixel.com/_next/static/images/presentation-d9e58f86d57fe9fa76f34f9d7c4150d1.svg"},53848:function(e){e.exports="https://static2.rawpixel.com/_next/static/images/twitter-765e0cf2d9fa8cc85fe72b58ead028d0.svg"},18727:function(e){e.exports="https://static2.rawpixel.com/_next/static/images/youtube-00ac853817016ae1fb685b001183fc1f.svg"},92977:function(e){e.exports="https://static2.rawpixel.com/_next/static/images/lock-1bc898fcc42895912435015529493d96.svg"},32768:function(e){e.exports="https://static2.rawpixel.com/_next/static/images/profile-d411941a741989722b2a6be56cc4ef49.svg"}}]);