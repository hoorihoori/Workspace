import{B as s}from"./Button-CieDq6f0.js";import"./iframe-Cyu12XKn.js";import"./preload-helper-D9Z9MdNV.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,m={title:"Example/Button",component:s,parameters:{layout:"centered",design:{type:"figma",url:"https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File"}},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:t()}},r={args:{primary:!0,label:"Button"}},e={args:{label:"Button"}},a={args:{size:"large",label:"Button"}},o={args:{size:"small",label:"Button"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...o.parameters?.docs?.source}}};const p=["Primary","Secondary","Large","Small"];export{a as Large,r as Primary,e as Secondary,o as Small,p as __namedExportsOrder,m as default};
