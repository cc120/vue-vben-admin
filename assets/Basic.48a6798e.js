import{B as f}from"./TableImg.526c7e6b.js";import"./componentMap.c731dcb5.js";import{getBasicColumns as B,getBasicData as v}from"./tableData.c1a46cb6.js";import{au as b,a as h,v as i,aw as c,o as A,h as E,n as e,z as r,B as m,t as l}from"./index.05b57da0.js";import"./index.c67dd176.js";import"./Checkbox.b0153c41.js";import"./index.f06db047.js";import"./index.c5b23727.js";import"./eagerComputed.3f7e1e7b.js";import"./BasicForm.8f457256.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.9eb58eb7.js";import"./index.225699da.js";import"./index.d3c0d16e.js";import"./_baseIteratee.fe8085c6.js";import"./get.904eddf9.js";import"./DeleteOutlined.4dec3161.js";import"./index.336b60e1.js";import"./useRefs.458c4996.js";import"./Form.5be812f1.js";import"./Col.988a4215.js";import"./useFlexGapSupport.3bd37d6d.js";import"./useSize.65e56973.js";import"./index.f2a4647f.js";import"./uniqBy.a5a2b368.js";import"./index.afce2b0d.js";import"./useWindowSizeFn.25593dbd.js";import"./FullscreenOutlined.0d5a0144.js";import"./index.e4d5d044.js";import"./useForm.67f4533b.js";import"./RadioButtonGroup.a9985ecd.js";import"./useFormItem.07735a29.js";import"./index.49be2f55.js";import"./index.216b3613.js";import"./index.e4356f9b.js";import"./useContentViewHeight.bdd6cb20.js";import"./ArrowLeftOutlined.fa3f3282.js";import"./index.a0d1b1de.js";import"./transButton.044159ba.js";import"./index.c32d5371.js";import"./index.15e55bff.js";import"./index.fc496ef4.js";import"./index.a80743a7.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.2a959efc.js";import"./index.f31dd8b3.js";import"./isNumber.3d04aba4.js";import"./fromPairs.84aabb58.js";import"./scrollTo.a47705f6.js";import"./index.1284fcc5.js";import"./index.1431da92.js";import"./index.30717f1d.js";import"./index.9a434f49.js";import"./download.2d112486.js";import"./base64Conver.08b9f4ec.js";import"./index.ae3c1a2c.js";import"./index.c1c067cd.js";import"./select.c93bed25.js";const k=h({components:{BasicTable:f},setup(){const o=i(!1),a=i(!1),p=i(!0),n=i(!0),u=i(!1);function d(){o.value=!o.value}function t(){p.value=!p.value}function s(){a.value=!0,setTimeout(()=>{a.value=!1,u.value={pageSize:20}},3e3)}function g(){n.value=!n.value}function C(F){}return{columns:B(),data:v(),canResize:o,loading:a,striped:p,border:n,toggleStriped:t,toggleCanResize:d,toggleLoading:s,toggleBorder:g,pagination:u,handleColumnChange:C}}}),y={class:"p-4"};function z(o,a,p,n,u,d){const t=c("a-button"),s=c("BasicTable");return A(),E("div",y,[e(s,{title:"\u57FA\u7840\u793A\u4F8B",titleHelpMessage:"\u6E29\u99A8\u63D0\u9192",columns:o.columns,dataSource:o.data,canResize:o.canResize,loading:o.loading,striped:o.striped,bordered:o.border,showTableSetting:"",pagination:o.pagination,onColumnsChange:o.handleColumnChange},{toolbar:r(()=>[e(t,{type:"primary",onClick:o.toggleCanResize},{default:r(()=>[m(l(o.canResize?"\u53D6\u6D88\u81EA\u9002\u5E94":"\u81EA\u9002\u5E94\u9AD8\u5EA6"),1)]),_:1},8,["onClick"]),e(t,{type:"primary",onClick:o.toggleBorder},{default:r(()=>[m(l(o.border?"\u9690\u85CF\u8FB9\u6846":"\u663E\u793A\u8FB9\u6846"),1)]),_:1},8,["onClick"]),e(t,{type:"primary",onClick:o.toggleLoading},{default:r(()=>[m(" \u5F00\u542Floading ")]),_:1},8,["onClick"]),e(t,{type:"primary",onClick:o.toggleStriped},{default:r(()=>[m(l(o.striped?"\u9690\u85CF\u6591\u9A6C\u7EB9":"\u663E\u793A\u6591\u9A6C\u7EB9"),1)]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination","onColumnsChange"])])}var Lo=b(k,[["render",z]]);export{Lo as default};