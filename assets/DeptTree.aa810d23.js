var l=(a,r,e)=>new Promise((s,o)=>{var n=t=>{try{i(e.next(t))}catch(p){o(p)}},c=t=>{try{i(e.throw(t))}catch(p){o(p)}},i=t=>t.done?s(t.value):Promise.resolve(t.value).then(n,c);i((e=e.apply(a,r)).next())});import{_ as m}from"./index.01910451.js";import{a as f}from"./system.57dcbef1.js";import{a as d,v as u,N as _,au as h,aw as v,o as D,h as w,n as T}from"./index.05b57da0.js";import"./fromPairs.84aabb58.js";import"./index.c5b23727.js";import"./eagerComputed.3f7e1e7b.js";import"./useContextMenu.cbc0fbfd.js";import"./index.225699da.js";import"./get.904eddf9.js";const B=d({name:"DeptTree",components:{BasicTree:m},emits:["select"],setup(a,{emit:r}){const e=u([]);function s(){return l(this,null,function*(){e.value=yield f()})}function o(n){r("select",n[0])}return _(()=>{s()}),{treeData:e,handleSelect:o}}}),N={class:"m-4 mr-0 overflow-hidden bg-white"};function $(a,r,e,s,o,n){const c=v("BasicTree");return D(),w("div",N,[T(c,{title:"\u90E8\u95E8\u5217\u8868",toolbar:"",search:"",treeWrapperClassName:"h-[calc(100%-35px)] overflow-auto",clickRowToExpand:!1,treeData:a.treeData,fieldNames:{key:"id",title:"deptName"},onSelect:a.handleSelect},null,8,["treeData","onSelect"])])}var R=h(B,[["render",$]]);export{R as default};