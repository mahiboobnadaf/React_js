// import { createElement } from "react";

function customRender(reactElement,root){
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);

//Above code is not optimized so following is next version of code

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(let prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    root.appendChild(domElement);

}

//This is how reacts works or injects our code inside
//Above is the code to create elemets
//below is the tree Graph of elemets
 
const reactElement = {
    type :'a',
    props : {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to Visit Google'
};

const root = document.getElementById("root");

customRender(reactElement, root);