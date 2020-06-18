const baseText = `import React from 'react';
import {Row, Column} from 'simple-flexbox';
import { Button, TextField } from "@material-ui/core";

@COMPONENT_DATA@`
var beautify = require('js-beautify').js_beautify;
var pretty = require('pretty');

class Componentgenerator{

    static generateComponentString(elements, type, name){
        let str = `<React.Fragment>${Componentgenerator.generateCompnentString(elements.child)}</React.Fragment>`;
        if(type==="class"){
            Componentgenerator.generateClassComponent(str, name || "SampleComponent")
        }else{
            Componentgenerator.generateFunctionalComponent(str, name || "SampleComponent")
        }
    }

    static generateProps(properties){
        let sample = [];
        Object.keys(properties||{}).forEach((key)=>{
            if(key === "text" || key === "styles") return
            sample.push(`${key}={"${properties[key]}"}`)
        })
        return `style={${JSON.stringify(properties.styles || {})}} ${sample.join(" ")}`
    }
    
    static generateCompnentString(child=[]){
        return child.map(item=>{
            if(item.child.length > 0){
                return `<${item.name}>
                    ${Componentgenerator.generateCompnentString(item.child)}
                </${item.name}>`
            }
            return `<${item.name} ${Componentgenerator.generateProps(item.properties)}>
                ${item.properties.text || ""}
            </${item.name}>`
        })
    }
    
       
    static generateClassComponent(componentData, componentName){
        console.log(componentData, componentName)
        let componentString = `Class ${componentName} extends React.Component{
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
            return ${componentData}
        }
        export {${componentName}}`;
        let finalText = baseText.replace("@COMPONENT_DATA@", componentString);
        finalText = finalText.replace(/>,</g, "><")
        finalText = finalText.replace("@OTHER_IMPORTS@","")
        console.log(finalText)
        let formatted = pretty(finalText, { indent_size: 2 });
        console.log(formatted)
        Componentgenerator.downloadFile(finalText)
    }

    static downloadFile(filedata){

    }

}

export default Componentgenerator;