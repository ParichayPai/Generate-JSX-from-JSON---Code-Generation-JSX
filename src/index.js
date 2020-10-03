import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

type Node={
    "type": "",
    "name": "",
    "style": {},
    "children": [Node]
}

function generateCodeFromObject(obj){
    //return a code generated string
    return React.createElement(
        obj.name,
        obj.style,
        obj.children
    )
}
   
module.exports=generateCodeFromObject;


// ReactDOM.render(<App />, document.getElementById("root"));