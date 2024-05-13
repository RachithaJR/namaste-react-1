/*
<div id="parent">
    <div id="child">
      <h1>I am h1 tag</h1>
      <h2>I am h2 tag</h2>
    </div>
     <div id="child2">
      <h1>I am h1 tag</h1>
      <h2>I am h2 tag</h2>
    </div>
</div>
React.CreateElement(Object)=>HTML(Browser understands)
conversion only happens when render is used
*/
const parent = React.createElement(
  "div",
  { id: "parent" },
[  React.createElement(
  "div",
  { id: "child" },
  [React.createElement("h1", {}, "I am h1 tag"),
  React.createElement("h2", {}, "I am h2 tag")]
),  React.createElement(
  "div",
  { id: "child2" },
  [React.createElement("h1", {}, "I am h1 tag"),
  React.createElement("h2", {}, "I am h2 tag")]
)]
);
const heading=React.createElement("h1",{id:"heading"},"Checking if multiple elements can be rendered inside root")
console.log(parent);//object
const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent,heading)//react-dom.development.js:73 Warning: You passed a second argument to root.render(...) but it only accepts one argument.

root.render(parent)