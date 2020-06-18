import React, { Component } from "react";
import { Row, Column } from "simple-flexbox";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ObjectProperties from "./ObjectProperties";
import OptionList from "./OptionList";
import { Button, TextField } from "@material-ui/core";
import ReactDOMServer from 'react-dom/server'
import { PropGenerator, DefaultStyleGenerator } from "../Utilities/PropGenerator";
import TGBaseButton from "./BaseComponents/TGBaseButton";
import TGBBaseRow from "./BaseComponents/TGBBaseRow";
import TGBBaseColumn from "./BaseComponents/TGBBaseColumn";
import ComponentPreviewGenerator from './ComponentPreviewGenertor'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import first from '../images/fisrt.jpg'
import second from '../images/second.jpg'
import ReactDOM from 'react-dom';
import Componentgenerator from "../Utilities/ComponentGenerator";
import SampleComponent from "./BaseComponents/SampleComponentTwo";
 const BASE_ELEMENT_LIST = {
  BUTTON: TGBaseButton,
  ROW: TGBBaseRow,
  COLUMN:  TGBBaseColumn,
}
 

class Root extends Component {

  refList = []
  state ={
    component: React.Fragment,
    selectedType:  "",
    componentType: "functional"
  }

  handleRadioChange = (event) => {
    this.setState({
      componentType: event.target.value
    });
  };

  handleSelectedType=(data)=>{
    this.setState({
      selectedType: data.name,
      selectedData: data
    })
  }

  onDrop=(ev)=>{
   try{
    ev.preventDefault();
    var data=ev.dataTransfer.getData("text/html");
    var nodeCopy = document.getElementById(this.state.currentSelected).cloneNode(true);
    nodeCopy.draggable = false
  
    nodeCopy.id = Math.random(); /* We cannot use the same ID */
    nodeCopy.addEventListener("dragover",(e)=>{
      // e.target.style.border = "1px dashed black"
    })
    nodeCopy.addEventListener("dragleave",(e)=>{
      // e.target.style.border = "1px solid black"
    })
    nodeCopy.addEventListener("drop",(e)=>{
      // e.target.style.border = "unset"
    })
    ev.target.appendChild(nodeCopy);
    let reactChild = this.handleGenerate(document.getElementById("root-component-container"));
    this.setState({
      reactChild: reactChild
    })
    }catch(e){
     console.log(e)
   }
  }

  onDragOver = (event) => {
    event.preventDefault();
 }

 handleGenerate=(element)=>{
    let tagName = element.getAttribute("data-name");
    let identifier = element.getAttribute("data-identifier");
    // let baseElement = BASE_ELEMENT_LIST[tagName]; 
    // let ref = `${tagName || "no-id"}-${Math.random()}`;
    // let style = DefaultStyleGenerator(element.getAttribute("style")|| "") || {}
    // if(baseElement){
    //   let props = {}
    //   let ref = React.createRef();
    //   this.refList.push(ref)
    //   let elem = React.createElement(baseElement, {ref, style, onClick: ()=>alert("test")}, Object.values(element.children).map(child=>this.handleGenerate(child)));
    //   console.log(elem)
    //   return elem
    // }
    // return React.createElement("div", {style},Object.values(element.children).map(child=>this.handleGenerate(child)))

    let entity = {
      name: tagName,
      key: identifier,
      properties:{},
      child: Object.values(element.children).map(child=>this.handleGenerate(child))
    }
    return entity;
 }

 handleCodeDownload=()=>{
   Componentgenerator.generateComponentString(this.state.reactChild, this.state.componentType)
 }

 handleBaseElement=(ref)=>{
   console.log(this.refs)
 }
 
 applyChanges=(data)=>{
    let children = {...this.state.reactChild};
    let newElements = this.replaceElements(children, data)
    this.setState({
      reactChild:{
        ...newElements
      }
    })
 }

 replaceElements=(elements, data)=>{
  elements.child && elements.child.map(element=>{
      if(element.key === data.key){
        element.properties = data.properties
      }else{
        this.replaceElements(element.child, data)
      }
    })
    return elements;
 }

  render() {
    console.log(this.state.reactChild)
    return (
      <React.Fragment>
        <Row>
          {/*<AppBar position="static">
            <Toolbar>
             
            </Toolbar>
            </AppBar>*/}
        </Row>
        <Row style={{ height: "inherit", backgroundColor: "#5c5c5c" }}>
          <Column
            flex={1}
            style={{
              backgroundColor: "#080c56",
              boxShadow: "rgb(74, 74, 74) 5px 1px 14px",
              zIndex: 1
            }}
          >
                         <div style={{padding:8}}>	
              <div style={{padding:8}}>	
                <div style={{padding:8,background:"#080c56"}}>	
                  <Row>	
                      <Column>	
                      <center>	
                        <img src={first} alt="" style={{width:"50%"}}/>	
                      </center>	
                          	
                      </Column>	
                    </Row>	
                </div>	
              </div>	
              <div style={{padding:8,paddingTop:2}}>	
                <div style={{padding:8,background:"#080c56"}}>	
                  <Row>	
                      <Column>	
                      <center>	
                        <img src={second} alt="" style={{width:"50%"}}/>	
                      </center>	
                          	
                      </Column>	
                    </Row>
                </div>
              </div>
             </div>
             <OptionList 
              handleCurrentSelected={this.handleCurrentSelected}  setCurrent={(e)=>{
              this.setState({
                currentSelected:  e
              })
            }}/>
            <Button style={{margin: 16}} variant="contained" color="primary" onClick={this.handleCodeDownload}>Generate Code</Button>
          </Column>
          <Column
            flex={2}
            style={{ backgroundColor: "white",margin:16,  zIndex: 0, paddingTop: 32 }}
          >        
            <div id="root-component-container" onDrop ={this.onDrop} onDragOver={this.onDragOver}> 
              
            </div>
          </Column>
          <Column
            flex={2}
            style={{ backgroundColor: "white",margin:16,  zIndex: 0, paddingTop: 32 }}
          >        
            <div id="root-component-container-preview" onDrop ={this.onDrop} onDragOver={this.onDragOver} > 
                <ComponentPreviewGenerator handleSelectedType={this.handleSelectedType} elements={this.state.reactChild}/>
            </div>
          </Column>
          <Column
            flex={1}
            style={{
              backgroundColor: "white",
              boxShadow: "-3px 1px 14px #4a4a4a",
              zIndex: 1
            }}
          >
            <h4 style={{textAlign: "left", paddingLeft: 16, marginBottom: 0}}>Global Properties</h4>
            <div style={{padding:16}}>
            <FormLabel style={{textAlign: "left"}} component="legend">Component Name</FormLabel>

            <TextField placeholder="Example" fullWidth={true}/>
            </div>
            <div style={{padding:16}}>
            <FormLabel style={{textAlign: "left"}} component="legend">Component Type</FormLabel>
              <RadioGroup aria-label="quiz" name="quiz" value={this.state.componentType} onChange={this.handleRadioChange}>
                <FormControlLabel value="functional" control={<Radio />} label="Functional" />
                <FormControlLabel value="class" control={<Radio />} label="Class" />
              </RadioGroup>
            </div>
            <div style={{maxHeight: 650, overflowY:"auto"}}>
            <ObjectProperties key={this.state.selectedData && this.state.selectedData.key} information={this.state.selectedType} infodata={this.state.selectedData} applyChanges={this.applyChanges}/>
            </div>
          </Column>
        </Row>
      </React.Fragment>
    );
  }
}


const ChildRender=(props)=>{
  return <div>
    {props.elem}
  </div>
}

export default Root;


