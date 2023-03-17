import{B as T}from"./TableImg.526c7e6b.js";import{k as S}from"./componentMap.c731dcb5.js";import{u as w}from"./useTable.131042fe.js";import{g as B}from"./system.57dcbef1.js";import{P as F}from"./index.49be2f55.js";import D from"./DeptTree.aa810d23.js";import{b as A}from"./index.afce2b0d.js";import{A as k,c as y,s as I}from"./AccountModal.5932e952.js";import{au as M,a as E,aZ as R,w as V,aw as t,o as C,j as _,z as r,n,B as P,l as W}from"./index.05b57da0.js";import"./index.c67dd176.js";import"./Checkbox.b0153c41.js";import"./index.f06db047.js";import"./index.c5b23727.js";import"./eagerComputed.3f7e1e7b.js";import"./BasicForm.8f457256.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.9eb58eb7.js";import"./index.225699da.js";import"./index.d3c0d16e.js";import"./_baseIteratee.fe8085c6.js";import"./get.904eddf9.js";import"./DeleteOutlined.4dec3161.js";import"./index.336b60e1.js";import"./useRefs.458c4996.js";import"./Form.5be812f1.js";import"./Col.988a4215.js";import"./useFlexGapSupport.3bd37d6d.js";import"./useSize.65e56973.js";import"./index.f2a4647f.js";import"./uniqBy.a5a2b368.js";import"./index.e4d5d044.js";import"./useForm.67f4533b.js";import"./RadioButtonGroup.a9985ecd.js";import"./useFormItem.07735a29.js";import"./index.c32d5371.js";import"./index.15e55bff.js";import"./index.fc496ef4.js";import"./index.a80743a7.js";import"./uuid.2b29000c.js";import"./useWindowSizeFn.25593dbd.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.2a959efc.js";import"./FullscreenOutlined.0d5a0144.js";import"./index.f31dd8b3.js";import"./isNumber.3d04aba4.js";import"./fromPairs.84aabb58.js";import"./scrollTo.a47705f6.js";import"./index.1284fcc5.js";import"./index.1431da92.js";import"./transButton.044159ba.js";import"./index.30717f1d.js";import"./index.9a434f49.js";import"./download.2d112486.js";import"./base64Conver.08b9f4ec.js";import"./index.ae3c1a2c.js";import"./index.c1c067cd.js";import"./index.216b3613.js";import"./index.e4356f9b.js";import"./useContentViewHeight.bdd6cb20.js";import"./ArrowLeftOutlined.fa3f3282.js";import"./index.a0d1b1de.js";import"./index.01910451.js";import"./useContextMenu.cbc0fbfd.js";const $=E({name:"AccountManagement",components:{BasicTable:T,PageWrapper:F,DeptTree:D,AccountModal:k,TableAction:S},setup(){const e=R(),[h,{openModal:i}]=A(),a=V({}),[g,{reload:l,updateTableDataRecord:p}]=w({title:"\u8D26\u53F7\u5217\u8868",api:B,rowKey:"id",columns:y,formConfig:{labelWidth:120,schemas:I,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(o){return o},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action"}});function m(){i(!0,{isUpdate:!1})}function c(o){i(!0,{record:o,isUpdate:!0})}function s(o){}function u({isUpdate:o,values:b}){if(o){const v=p(b.id,b)}else l()}function d(o=""){a.deptId=o,l()}function f(o){e("/system/account_detail/"+o.id)}return{registerTable:g,registerModal:h,handleCreate:m,handleEdit:c,handleDelete:s,handleSuccess:u,handleSelect:d,handleView:f,searchInfo:a}}});function N(e,h,i,a,g,l){const p=t("DeptTree"),m=t("a-button"),c=t("TableAction"),s=t("BasicTable"),u=t("AccountModal"),d=t("PageWrapper");return C(),_(d,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:r(()=>[n(p,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),n(s,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5",searchInfo:e.searchInfo},{toolbar:r(()=>[n(m,{type:"primary",onClick:e.handleCreate},{default:r(()=>[P("\u65B0\u589E\u8D26\u53F7")]),_:1},8,["onClick"])]),bodyCell:r(({column:f,record:o})=>[f.key==="action"?(C(),_(c,{key:0,actions:[{icon:"clarity:info-standard-line",tooltip:"\u67E5\u770B\u7528\u6237\u8BE6\u60C5",onClick:e.handleView.bind(null,o)},{icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91\u7528\u6237\u8D44\u6599",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664\u6B64\u8D26\u53F7",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])):W("",!0)]),_:1},8,["onRegister","searchInfo"]),n(u,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var Jo=M($,[["render",N]]);export{Jo as default};