import{j as r}from"./jsx-runtime-ffb262ed.js";import{P as e}from"./index-8d47fad6.js";const a=({urls:s})=>{console.log("redering links section"),console.log(s);let o=new Map([["failed","red"],["completed","green"],["processing","dark grey"]]);return r.jsx("div",{className:"wrapper-urls",children:s.map((l,n)=>r.jsxs("div",{className:"content",children:[r.jsx("p",{children:l.url}),r.jsxs("div",{children:[" ",r.jsxs("span",{style:{color:o.get(l.status)},children:[" ",l.status," "]})," "]})]},n))})};a.propTypes={primary:e.bool,backgroundColor:e.string,size:e.oneOf(["small","medium","large"]),label:e.string.isRequired,onClick:e.func,urls:e.array};a.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};a.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"LinksSection",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:"What background color to use"},primary:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Is this the principal call to action on the page?"},size:{defaultValue:{value:"'medium'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1,description:"How large should the button be?"},onClick:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:"Optional click handler"},label:{type:{name:"string"},required:!0,description:"Button contents"},urls:{type:{name:"array"},required:!1,description:""}}};export{a as L};
//# sourceMappingURL=LinksSection-eff84995.js.map
