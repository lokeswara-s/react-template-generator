
import React, { Component } from 'react';
import { Row, Column } from "simple-flexbox";
import { Button, Select, MenuItem } from '@material-ui/core';
import { textAlign } from '@material-ui/system';


class TextProperties extends Component{

    constructor(props){
        super(props)
        this.state = {
            styles:{

            },
            text: "HEADING",
            ...this.props.properties
        }
    }

    render(){
        return <Row style={{width:"100%"}}>
            <Column>
                <Row style={{padding: 16}}>
                    <h5 style={{ margin: 0}}>Properties</h5>
                </Row>
                <Row style={{padding: 16}}>
                    <Column style={{minHeight: 110}}>
                        <p style={{...this.state.styles}}>{this.state.text}</p>
                    </Column>
                </Row>
                <Row style={{paddingLeft: 16}}>
                    <Column>
                        <h5 style={{ margin: 0}}>Font Size</h5>
                    </Column>
                </Row>
                <Row style={{paddingLeft: 16}}>
                    <Column>
                        <input type="range" min="1" max="32" onChange={(e)=>{
                            console.log(e.target.value)
                            this.setState({
                                styles:{
                                    ...this.state.styles,
                                    fontSize: `${e.target.value}px`
                                }
                            },()=>{
                                this.props.applyChangs(this.state)
                            })
                        }}/>
                    </Column>
                </Row>
                <Row style={{paddingLeft: 16}}>
                    <Column>
                        <h5 style={{ margin: 0}}>Font Color</h5>
                    </Column>
                </Row>
                <Row style={{paddingLeft: 16}}>
                    <Column>
                        <input type="color" onChange={(e)=>{
                            console.log(e.target.value)
                            this.setState({
                                styles:{
                                    ...this.state.styles,
                                    color: `${e.target.value}`
                                }
                            },()=>{
                                this.props.applyChangs(this.state)
                            })
                        }}/>
                    </Column>
                </Row>
                <Row style={{paddingLeft: 16}}>
                    <Column>
                        <h5 style={{ margin: 0}}>Underline</h5>
                    </Column>
                </Row>
                <Row style={{paddingLeft: 16}}>
                    <Column>
                        <input type="checkbox" onChange={(e)=>{
                            this.setState({
                                styles:{
                                    ...this.state.styles,
                                    textDecoration: e.target.checked ? "underline": ""
                                }
                            },()=>{
                                this.props.applyChangs(this.state)
                            })
                        }}/>
                    </Column>
                </Row>
                <Row style={{paddingLeft: 16}}>
                    <Column>
                        <h5 style={{ margin: 0}}>Text</h5>
                    </Column>
                </Row>
                <Row style={{paddingLeft: 16}}>
                    <Column>
                        <input type="text" onChange={(e)=>{
                            this.setState({
                                text: e.target.value
                            },()=>{
                                this.props.applyChangs(this.state)
                            })
                        }}/>
                    </Column>
                </Row>
                <Row style={{paddingLeft: 16}}>
                    <Column>
                        <h5 style={{ margin: 0}}>Align</h5>
                    </Column>
                </Row>
                <Row style={{paddingLeft: 16}}>
                    <Column>
                        <select
                            onChange={(e)=>{
                                this.setState({
                                    styles:{
                                        ...this.state.styles,
                                        textAlign: `${e.target.value}`
                                    }
                                },()=>{
                                    this.props.applyChangs(this.state)
                                })
                            }}
                        >
                            <option value="center">Center</option>
                            <option value="right">Right</option>
                            <option value="left">Left</option>
                            <option value="inherit">Inherit</option>
                            <option value="justify">Justify</option>
                        </select>
                    </Column>
                </Row>
                <Row style={{paddingLeft: 16}}>
                    <Column>
                        <h5 style={{ margin: 0}}>Decoration</h5>
                    </Column>
                </Row>
                <Row style={{paddingLeft: 16}}>
                    <Column>
                        <select
                            onChange={(e)=>{
                                this.setState({
                                    styles:{
                                        ...this.state.styles,
                                        textDecoration: `${e.target.value}`
                                    }
                                },()=>{
                                    this.props.applyChangs(this.state)
                                })
                            }}
                        >
                            <option value="none">None</option>
                            <option value="overline">Overline</option>
                            <option value="underline">Underline</option>
                            <option value="line-through">Line Through</option>
                        </select>
                    </Column>
                </Row>
                <Row style={{paddingLeft: 16}}>
                    <Column>
                        <h5 style={{ margin: 0}}>Transfromation</h5>
                    </Column>
                </Row>
                <Row style={{paddingLeft: 16}}>
                    <Column>
                        <select
                            onChange={(e)=>{
                                this.setState({
                                    styles:{
                                        ...this.state.styles,
                                        textTransform: `${e.target.value}`
                                    }
                                },()=>{
                                    this.props.applyChangs(this.state)
                                })
                            }}
                        >
                            <option value="none">None</option>
                            <option value="uppercase">Uppercase</option>
                            <option value="lowercase">Lowercase</option>
                            <option value="capitalize">Capitalize</option>
                        </select>
                    </Column>
                </Row>
                
                <Row style={{paddingLeft: 16}}>
                    {/* <Column>
                    <Button variant="contained" color="primary" onClick={()=>{
                        this.props.applyChangs(this.state)
                    }}> Apply </Button>
                    </Column> */}
                </Row>
            </Column>
        </Row>
    }
}

export default TextProperties;