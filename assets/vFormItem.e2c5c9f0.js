var u=Object.defineProperty;var p=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var i=(r,o,t)=>o in r?u(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,m=(r,o)=>{for(var t in o||(o={}))d.call(o,t)&&i(r,t,o[t]);if(p)for(var t of p(o))h.call(o,t)&&i(r,t,o[t]);return r};import{_ as l}from"./FormItem.vue_vue_type_script_lang.9eb58eb7.js";import{au as _,a as $,f as s,k as a,aw as C,o as P,j as g,ay as j,az as y,z as F,aA as I,aB as b,aC as k}from"./index.05b57da0.js";/* empty css              */import"./index.225699da.js";/* empty css              */import"./componentMap.c731dcb5.js";import"./index.c67dd176.js";import"./Checkbox.b0153c41.js";import"./index.f06db047.js";import"./index.a80743a7.js";import"./index.fc496ef4.js";import"./index.c32d5371.js";import"./index.15e55bff.js";import"./index.1431da92.js";import"./useFormItem.07735a29.js";import"./RadioButtonGroup.a9985ecd.js";import"./get.904eddf9.js";import"./index.c5b23727.js";import"./eagerComputed.3f7e1e7b.js";import"./index.d3c0d16e.js";import"./_baseIteratee.fe8085c6.js";import"./DeleteOutlined.4dec3161.js";import"./index.336b60e1.js";import"./useRefs.458c4996.js";import"./Form.5be812f1.js";import"./Col.988a4215.js";import"./useFlexGapSupport.3bd37d6d.js";import"./useSize.65e56973.js";import"./transButton.044159ba.js";import"./index.30717f1d.js";import"./index.afce2b0d.js";import"./useWindowSizeFn.25593dbd.js";import"./FullscreenOutlined.0d5a0144.js";import"./index.9a434f49.js";import"./index.f31dd8b3.js";import"./isNumber.3d04aba4.js";import"./uuid.2b29000c.js";import"./download.2d112486.js";import"./base64Conver.08b9f4ec.js";import"./index.ae3c1a2c.js";import"./index.c1c067cd.js";import"./index.f2a4647f.js";const v=$({name:"VFormItem",components:{FormItem:l},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,required:!0},formConfig:{type:Object,required:!0}},setup(r){const o=s(()=>m({},a(r.schema))),t=s(()=>m({},a(r.formConfig)));return{schemaNew:o,getProps:t}}});function w(r,o,t,n,O,z){const c=C("FormItem");return P(),g(c,{schema:r.schemaNew,formProps:r.getProps},j({_:2},[y(Object.keys(r.$slots),e=>({name:e,fn:F(f=>[I(r.$slots,e,b(k(f||{})))])}))]),1032,["schema","formProps"])}var gr=_(v,[["render",w]]);export{gr as default};