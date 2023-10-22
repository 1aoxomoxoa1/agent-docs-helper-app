import{j as n}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{P as e}from"./index-8d47fad6.js";import{B as C}from"./Button-d99210dc.js";import{M as x}from"./Form-adffa217.js";import"./_commonjsHelpers-de833af9.js";import"./LinksSection-21ae5c66.js";const s=()=>{console.log("test"),console.log(apiKey);function I(h,B,k){console.log("something"),console.log(`'AgentID: ${h}, apiKey: ${B}, ${k}`)}return n.jsxs("div",{children:[n.jsx(x,{agentId,apiKey,environment,setAgentId,setApiKey,setEnvironment}),n.jsxs(C,{primary:!0,label:"Get Agent Data",backgroundColor:"#4d4dff",size:"large",children:["onClick = ",I,"agentId=",agentId," apiKey=",apiKey," environment=",environment]})]})};s.propTypes={primary:e.bool,backgroundColor:e.string,size:e.oneOf(["small","medium","large"]),label:e.string.isRequired,onClick:e.func};s.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};s.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"UserInterface",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:"What background color to use"},primary:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Is this the principal call to action on the page?"},size:{defaultValue:{value:"'medium'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1,description:"How large should the button be?"},onClick:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:"Optional click handler"},label:{type:{name:"string"},required:!0,description:"Button contents"}}};const A={title:"Example/UserInterface",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},r={args:{primary:!0,label:"Button"}},a={args:{label:"Button"}},o={args:{size:"large",label:"Button"}},t={args:{size:"small",label:"Button"}};var l,i,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,g,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,b,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const E=["Primary","Secondary","Large","Small"];export{o as Large,r as Primary,a as Secondary,t as Small,E as __namedExportsOrder,A as default};
//# sourceMappingURL=userInterface.stories-487223eb.js.map
