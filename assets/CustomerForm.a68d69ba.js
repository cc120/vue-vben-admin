import{B as C}from"./BasicForm.8f457256.js";import"./componentMap.c731dcb5.js";import{u as B}from"./useForm.67f4533b.js";import"./RadioButtonGroup.a9985ecd.js";import{au as E,a as g,cD as F,I as n,aw as e,o as h,j as b,z as p,n as i,bS as v,E as A}from"./index.05b57da0.js";import{P}from"./index.49be2f55.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.9eb58eb7.js";import"./index.225699da.js";import"./index.d3c0d16e.js";import"./_baseIteratee.fe8085c6.js";import"./get.904eddf9.js";import"./DeleteOutlined.4dec3161.js";import"./index.336b60e1.js";import"./useRefs.458c4996.js";import"./Form.5be812f1.js";import"./Col.988a4215.js";import"./useFlexGapSupport.3bd37d6d.js";import"./useSize.65e56973.js";import"./index.f2a4647f.js";import"./uniqBy.a5a2b368.js";import"./index.afce2b0d.js";import"./useWindowSizeFn.25593dbd.js";import"./FullscreenOutlined.0d5a0144.js";import"./index.e4d5d044.js";import"./index.c67dd176.js";import"./Checkbox.b0153c41.js";import"./index.f06db047.js";import"./index.a80743a7.js";import"./index.fc496ef4.js";import"./index.c32d5371.js";import"./index.15e55bff.js";import"./index.1431da92.js";import"./useFormItem.07735a29.js";import"./index.c5b23727.js";import"./eagerComputed.3f7e1e7b.js";import"./transButton.044159ba.js";import"./index.30717f1d.js";import"./index.9a434f49.js";import"./index.f31dd8b3.js";import"./isNumber.3d04aba4.js";import"./uuid.2b29000c.js";import"./download.2d112486.js";import"./base64Conver.08b9f4ec.js";import"./index.ae3c1a2c.js";import"./index.c1c067cd.js";import"./index.216b3613.js";import"./index.e4356f9b.js";import"./useContentViewHeight.bdd6cb20.js";import"./ArrowLeftOutlined.fa3f3282.js";import"./index.a0d1b1de.js";const u=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:o,field:t})=>v(n,{placeholder:"\u8BF7\u8F93\u5165",value:o[t],onChange:r=>{o[t]=r.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=g({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[n.name]:n},setup(){const{createMessage:o}=A(),[t,{setProps:r}]=B({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:t,schemas:u,handleSubmit:m=>{o.success("click search,values:"+JSON.stringify(m))},setProps:r}}});function I(o,t,r,m,x,W){const l=e("a-input"),c=e("BasicForm"),d=e("CollapseContainer"),f=e("PageWrapper");return h(),b(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[i(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[i(c,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:p(({model:a,field:s})=>[i(l,{value:a[s],"onUpdate:value":_=>a[s]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var Wo=E(S,[["render",I]]);export{Wo as default};