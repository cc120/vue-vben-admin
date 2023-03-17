var P=Object.defineProperty,L=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var v=(e,o,t)=>o in e?P(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,C=(e,o)=>{for(var t in o||(o={}))z.call(o,t)&&v(e,t,o[t]);if(f)for(var t of f(o))O.call(o,t)&&v(e,t,o[t]);return e},$=(e,o)=>L(e,R(o));import{a as V,w as A,f as d,bc as B,au as D,aw as a,o as n,j as u,z as i,h as b,q as H,bl as j,n as s,ax as k,F as q,az as M,aB as U,aC as E}from"./index.05b57da0.js";import{d as G}from"./vuedraggable.umd.fd9ef718.js";import T from"./FormNode.1045fe55.js";import _ from"./FormNodeOperate.779d4810.js";import{u as J}from"./useFormDesignState.e7a813d3.js";/* empty css              */import{R as K}from"./index.e4d5d044.js";import{C as Q}from"./index.f2a4647f.js";import"./index.913d1e5e.js";import"./formItemConfig.67d1755a.js";import"./componentMap.c731dcb5.js";import"./index.c67dd176.js";import"./Checkbox.b0153c41.js";import"./index.f06db047.js";import"./index.a80743a7.js";import"./index.fc496ef4.js";import"./index.c32d5371.js";import"./index.15e55bff.js";import"./index.1431da92.js";import"./index.225699da.js";import"./useFormItem.07735a29.js";import"./RadioButtonGroup.a9985ecd.js";import"./get.904eddf9.js";import"./index.c5b23727.js";import"./eagerComputed.3f7e1e7b.js";import"./index.d3c0d16e.js";import"./_baseIteratee.fe8085c6.js";import"./DeleteOutlined.4dec3161.js";import"./index.336b60e1.js";import"./useRefs.458c4996.js";import"./Form.5be812f1.js";import"./Col.988a4215.js";import"./useFlexGapSupport.3bd37d6d.js";import"./useSize.65e56973.js";import"./transButton.044159ba.js";import"./index.30717f1d.js";import"./index.afce2b0d.js";import"./useWindowSizeFn.25593dbd.js";import"./FullscreenOutlined.0d5a0144.js";import"./index.9a434f49.js";import"./index.f31dd8b3.js";import"./isNumber.3d04aba4.js";import"./uuid.2b29000c.js";import"./download.2d112486.js";import"./base64Conver.08b9f4ec.js";import"./index.ae3c1a2c.js";import"./index.c1c067cd.js";import"./index.e82fbe3b.js";const W=V({name:"LayoutItem",components:{FormNode:T,FormNodeOperate:_,draggable:G,Row:K,Col:Q},props:{schema:{type:Object,required:!0},currentItem:{type:Object,required:!0}},emits:["dragStart","handleColAdd","handle-copy","handle-delete"],setup(e){const{formDesignMethods:{handleSetSelectItem:o},formConfig:t}=J(),c=A({}),h=d(()=>{const{colProps:l={}}=e.schema;return l}),g=d(()=>e.schema.columns),p=d(()=>t.value.layout==="horizontal"?"Col":"div");return $(C({},B(c)),{colPropsComputed:h,handleSetSelectItem:o,layoutTag:p,list1:g})}});function X(e,o,t,c,h,g){const p=a("LayoutItem",!0),l=a("draggable"),y=a("Col"),w=a("Row"),I=a("FormNodeOperate"),F=a("FormNode");return n(),u(y,U(E(e.colPropsComputed)),{default:i(()=>[["Grid"].includes(e.schema.component)?(n(),b("div",{key:0,class:H(["grid-box",{active:e.schema.key===e.currentItem.key}]),onClick:o[2]||(o[2]=j(r=>e.handleSetSelectItem(e.schema),["stop"]))},[s(w,k({class:"grid-row"},e.schema.componentProps),{default:i(()=>[(n(!0),b(q,null,M(e.schema.columns,(r,S)=>(n(),u(y,{class:"grid-col",key:S,span:r.span},{default:i(()=>[s(l,k({class:"list-main draggable-box","component-data":{name:"list",tag:"div",type:"transition-group"}},{group:"form-draggable",ghostClass:"moving",animation:180,handle:".drag-move"},{"item-key":"key",modelValue:r.children,"onUpdate:modelValue":m=>r.children=m,onStart:m=>e.$emit("dragStart",m,r.children),onAdd:m=>e.$emit("handleColAdd",m,r.children)}),{item:i(({element:m})=>[s(p,{class:"drag-move",schema:m,"current-item":e.currentItem,onHandleCopy:o[0]||(o[0]=N=>e.$emit("handle-copy")),onHandleDelete:o[1]||(o[1]=N=>e.$emit("handle-delete"))},null,8,["schema","current-item"])]),_:2},1040,["modelValue","onUpdate:modelValue","onStart","onAdd"])]),_:2},1032,["span"]))),128))]),_:1},16),s(I,{schema:e.schema,currentItem:e.currentItem},null,8,["schema","currentItem"])],2)):(n(),u(F,{key:e.schema.key,schema:e.schema,"current-item":e.currentItem,onHandleCopy:o[3]||(o[3]=r=>e.$emit("handle-copy")),onHandleDelete:o[4]||(o[4]=r=>e.$emit("handle-delete"))},null,8,["schema","current-item"]))]),_:1},16)}var Je=D(W,[["render",X]]);export{Je as default};