var _=Object.defineProperty,h=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var v=(t,o,r)=>o in t?_(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,C=(t,o)=>{for(var r in o||(o={}))V.call(o,r)&&v(t,r,o[r]);if(c)for(var r of c(o))g.call(o,r)&&v(t,r,o[r]);return t},M=(t,o)=>h(t,A(o));var b=(t,o,r)=>new Promise((l,n)=>{var u=i=>{try{e(r.next(i))}catch(p){n(p)}},a=i=>{try{e(r.throw(i))}catch(p){n(p)}},e=i=>i.done?l(i.value):Promise.resolve(i.value).then(u,a);e((r=r.apply(t,o)).next())});import k from"./index.9dfd99c9.js";import{a as D}from"./index.e82fbe3b.js";import S from"./JsonModal.67a57fbb.js";import{a as U,dG as $,v as y,w as B,bc as E,au as G,aw as f,o as J,j as O,z as F,n as d}from"./index.05b57da0.js";import"./FormRender.e8d1a440.js";import"./index.913d1e5e.js";import"./formItemConfig.67d1755a.js";import"./componentMap.c731dcb5.js";import"./index.c67dd176.js";import"./Checkbox.b0153c41.js";import"./index.f06db047.js";import"./index.a80743a7.js";import"./index.fc496ef4.js";import"./index.c32d5371.js";import"./index.15e55bff.js";import"./index.1431da92.js";import"./index.225699da.js";import"./useFormItem.07735a29.js";import"./RadioButtonGroup.a9985ecd.js";import"./get.904eddf9.js";import"./index.c5b23727.js";import"./eagerComputed.3f7e1e7b.js";import"./index.d3c0d16e.js";import"./_baseIteratee.fe8085c6.js";import"./DeleteOutlined.4dec3161.js";import"./index.336b60e1.js";import"./useRefs.458c4996.js";import"./Form.5be812f1.js";import"./Col.988a4215.js";import"./useFlexGapSupport.3bd37d6d.js";import"./useSize.65e56973.js";import"./transButton.044159ba.js";import"./index.30717f1d.js";import"./index.afce2b0d.js";import"./useWindowSizeFn.25593dbd.js";import"./FullscreenOutlined.0d5a0144.js";import"./index.9a434f49.js";import"./index.f31dd8b3.js";import"./isNumber.3d04aba4.js";import"./uuid.2b29000c.js";import"./download.2d112486.js";import"./base64Conver.08b9f4ec.js";import"./index.ae3c1a2c.js";import"./index.c1c067cd.js";/* empty css              */import"./useFormDesignState.e7a813d3.js";import"./index.f2a4647f.js";import"./index.e4d5d044.js";/* empty css              */import"./PreviewCode.3f68503e.js";import"./index.a8c8fe47.js";const j=U({name:"VFormPreview",components:{JsonModal:S,VFormCreate:k,Modal:$},setup(){const t=y(null),o=B({formModel:{},formConfig:{},visible:!1,fApi:{}}),r=e=>{D(e.schemas),o.formConfig=e,o.visible=!0},l=()=>{o.visible=!1,o.formModel={}},n=()=>b(this,null,function*(){var i,p,m,s;const e=yield(p=(i=o.fApi).submit)==null?void 0:p.call(i);(s=(m=t.value)==null?void 0:m.showModal)==null||s.call(m,e)}),u=e=>{},a=()=>{o.formModel={}};return M(C({handleGetData:n,handleCancel:l},E(o)),{showModal:r,jsonModal:t,onSubmit:u,onCancel:a})}});function N(t,o,r,l,n,u){const a=f("a-input"),e=f("VFormCreate"),i=f("JsonModal"),p=f("Modal");return J(),O(p,{title:"\u9884\u89C8(\u652F\u6301\u5E03\u5C40)",visible:t.visible,onOk:t.handleGetData,onCancel:t.handleCancel,okText:"\u83B7\u53D6\u6570\u636E",cancelText:"\u5173\u95ED",style:{top:"20px"},destroyOnClose:!0,width:900},{default:F(()=>[d(e,{"form-config":t.formConfig,fApi:t.fApi,"onUpdate:fApi":o[0]||(o[0]=m=>t.fApi=m),formModel:t.formModel,"onUpdate:formModel":o[1]||(o[1]=m=>t.formModel=m),onSubmit:t.onSubmit},{slotName:F(({formModel:m,field:s})=>[d(a,{value:m[s],"onUpdate:value":w=>m[s]=w,placeholder:"\u6211\u662F\u63D2\u69FD\u4F20\u9012\u7684\u8F93\u5165\u6846"},null,8,["value","onUpdate:value"])]),_:1},8,["form-config","fApi","formModel","onSubmit"]),d(i,{ref:"jsonModal"},null,512)]),_:1},8,["visible","onOk","onCancel"])}var No=G(j,[["render",N]]);export{No as default};