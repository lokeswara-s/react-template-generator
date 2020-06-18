
import React,{Fragment} from 'react';
import { renderToString } from 'react-dom/server'
import {Column, Row} from 'simple-flexbox'
import { Button, TextField } from '@material-ui/core';

let components = {
    Row,
    Column,
    Button,
    TextField,
}

const ComponentPreviewGenerator = ({elements={}, handleSelectedType})=>{
    const handleChange=(e, data)=>{
        handleSelectedType(data)
        e.stopPropagation()
    }

    let Element = generateComponent(elements.name || React.Fragment, elements.child || [], handleChange);
    // let string = renderToString(Element);
    // console.log(string)
    if(Element){
        return Element
    }

    return <React.Fragment />
}
export default ComponentPreviewGenerator;

let generateComponent = (name, children, handleChange)=>{
    if(children.length === 0) {
        return  name;
    }
    return children.map(child=>{
        let color = child.name === "Column" ? "green" : "blue";
        let defaultBorder = child.name === "Column" || child.name === "Row" ? {flex: "1"} : {}
        return React.createElement(components[child.name] || child.name, {
            onClick:(e)=>{
                handleChange(e, child)
            },
            style: child.properties ? {...child.properties.styles, ...defaultBorder}:{...defaultBorder},
            ...child.properties,
            src: "https://picsum.photos/200"
        }, child.name !== "img" ? generateComponent(child.properties.text || child.name, child.child, handleChange): null)
    })
}