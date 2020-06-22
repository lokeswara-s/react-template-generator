const baseText = `import React,{useState} from 'react';
import {Row, Column} from 'simple-flexbox';
import { Button, TextField } from "@material-ui/core";

@COMPONENT_DATA@`
var beautify = require('js-beautify').js_beautify;
var pretty = require('pretty');

let stateValues = {}

class Componentgenerator{

    static generateComponentString(elements, type, name){
        stateValues = {}
        let str = `<React.Fragment>${Componentgenerator.generateCompnentString(elements.child, type)}</React.Fragment>`;
        if(type==="class"){
            Componentgenerator.generateClassComponent(str, name || "SampleComponent")
        }else{
            Componentgenerator.generateFunctionalComponent(str, name || "SampleComponent")
        }
    }

    static generateProps(properties, type){
        let sample = [];
        Object.keys(properties||{}).forEach((key)=>{
            if(key==="stateProperty"){
                if(type==="class"){                    
                    sample.push(`${key}={this.state.${properties[key]}}`)
                    sample.push(`onChange={(e)=>{this.setState({${properties[key]}: e.target.value})}}`)
                }
                if(type==="functional"){
                    sample.push(`${key}={state.${properties[key]}}`)
                    sample.push(`onChange={(e)=>{setState({...state, ${properties[key]}: e.target.value})}}`)
                }
                stateValues = {
                    ...stateValues,
                    [properties[key]]: ""
                }
            }
            if(key === "text" || key === "styles") return
            sample.push(`${key}={"${properties[key]}"}`)
        })
        return `style={${JSON.stringify(properties.styles || {})}} ${sample.join(" ")}`
    }
    
    static generateCompnentString(child=[], type){
        return child.map(item=>{
            if(item.child.length > 0){
                return `<${item.name}>
                    ${Componentgenerator.generateCompnentString(item.child, type)}
                </${item.name}>`
            }
            return `<${item.name} ${Componentgenerator.generateProps(item.properties, type)}>
                ${item.properties.text || ""}
            </${item.name}>`
        })
    }
    
       
    static generateClassComponent(componentData, componentName){
        console.log(componentData, componentName)
        let componentString = `Class ${componentName} extends React.Component{
            constructor(props){
                state = ${JSON.stringify(stateValues)}
            }
            render(){
                return ${componentData}
            }
        }
        export default ${componentName}`;
        let finalText = baseText.replace("@COMPONENT_DATA@", componentString);
        finalText = finalText.replace(/>,</g, "><")
        finalText = finalText.replace("@OTHER_IMPORTS@","")
        console.log(finalText)
        let formatted = pretty(finalText, { indent_size: 2 });
        console.log(formatted)
        Componentgenerator.downloadFile(finalText)
    }

    static generateFunctionalComponent(componentData, componentName){
        let componentString = `const ${componentName} = (props)=>{
            const [state, setState] =useState(${JSON.stringify(stateValues)});
            return ${componentData}
        }
        export {${componentName}}`;
        let finalText = baseText.replace("@COMPONENT_DATA@", componentString);
        finalText = finalText.replace(/>,</g, "><")
        finalText = finalText.replace("@OTHER_IMPORTS@","")
        console.log(finalText)
        let formatted = pretty(finalText, { indent_size: 2 });
        console.log(formatted)
        Componentgenerator.downloadFile(formatted)
    }

    static downloadFile(filedata){
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(filedata));
        element.setAttribute('download', "Component.txt");

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

}

export default Componentgenerator;