import{d as p}from"./vuedraggable.umd.fd9ef718.js";import{a as x,ec as c,f as v,ah as h,au as u,aw as r,o as y,h as w,x as _,y as k,n,z as b,i as C,aB as S,aC as F}from"./index.05b57da0.js";import z from"./LayoutItem.586ef750.js";import{u as E}from"./useFormDesignState.e7a813d3.js";/* empty css              *//* empty css              */import{F as I}from"./Form.5be812f1.js";import"./FormNode.1045fe55.js";import"./FormNodeOperate.779d4810.js";import"./index.e82fbe3b.js";import"./isNumber.3d04aba4.js";import"./index.913d1e5e.js";import"./formItemConfig.67d1755a.js";import"./componentMap.c731dcb5.js";import"./index.c67dd176.js";import"./Checkbox.b0153c41.js";import"./index.f06db047.js";import"./index.a80743a7.js";import"./index.fc496ef4.js";import"./index.c32d5371.js";import"./index.15e55bff.js";import"./index.1431da92.js";import"./index.225699da.js";import"./useFormItem.07735a29.js";import"./RadioButtonGroup.a9985ecd.js";import"./get.904eddf9.js";import"./index.c5b23727.js";import"./eagerComputed.3f7e1e7b.js";import"./index.d3c0d16e.js";import"./_baseIteratee.fe8085c6.js";import"./DeleteOutlined.4dec3161.js";import"./index.336b60e1.js";import"./useRefs.458c4996.js";import"./transButton.044159ba.js";import"./index.30717f1d.js";import"./useFlexGapSupport.3bd37d6d.js";import"./index.afce2b0d.js";import"./useWindowSizeFn.25593dbd.js";import"./FullscreenOutlined.0d5a0144.js";import"./index.9a434f49.js";import"./index.f31dd8b3.js";import"./uuid.2b29000c.js";import"./download.2d112486.js";import"./base64Conver.08b9f4ec.js";import"./index.ae3c1a2c.js";import"./index.c1c067cd.js";import"./index.f2a4647f.js";import"./Col.988a4215.js";import"./index.e4d5d044.js";import"./useSize.65e56973.js";const D=x({name:"FormComponentPanel",components:{LayoutItem:z,draggable:p,Form:I,Empty:c},emits:["handleSetSelectItem"],setup(o,{emit:e}){const{formConfig:a}=E(),l=({newIndex:t})=>{a.value.schemas=a.value.schemas||[];const i=a.value.schemas;i[t]=h(i[t]),e("handleSetSelectItem",i[t])},m=t=>{e("handleSetSelectItem",a.value.schemas[t.oldIndex])},g=v(()=>a.value.layout==="horizontal"?"Col":"div");return{addItem:l,handleDragStart:m,formConfig:a,layoutTag:g}}}),A={class:"form-panel v-form-container"},B={class:"draggable-box"};function P(o,e,a,l,m,g){const t=r("Empty"),i=r("LayoutItem"),s=r("draggable"),f=r("Form");return y(),w("div",A,[_(n(t,{class:"empty-text",description:"\u4ECE\u5DE6\u4FA7\u9009\u62E9\u63A7\u4EF6\u6DFB\u52A0"},null,512),[[k,o.formConfig.schemas.length===0]]),n(f,S(F(o.formConfig)),{default:b(()=>[C("div",B,[n(s,{class:"list-main ant-row",group:"form-draggable","component-data":{name:"list",tag:"div",type:"transition-group"},ghostClass:"moving",animation:180,handle:".drag-move",modelValue:o.formConfig.schemas,"onUpdate:modelValue":e[0]||(e[0]=d=>o.formConfig.schemas=d),"item-key":"key",onAdd:o.addItem,onStart:o.handleDragStart},{item:b(({element:d})=>[n(i,{class:"drag-move",schema:d,data:o.formConfig,"current-item":o.formConfig.currentItem||{}},null,8,["schema","data","current-item"])]),_:1},8,["modelValue","onAdd","onStart"])])]),_:1},16)])}var Ao=u(D,[["render",P],["__scopeId","data-v-1556f0f2"]]);export{Ao as default};