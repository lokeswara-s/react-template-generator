import React, { Component } from 'react';
import { Row, Column } from "simple-flexbox";
import { Button, Divider } from '@material-ui/core';
import { maxWidth } from '@material-ui/system';


class ColumnProperties extends Component{

    constructor(props){
        super(props)
        this.state = {
            styles:{

            },
            text: "Column",
            maximumWidth:"100%",
            ...this.props.properties
        }
    }


    render(){
        return <Row style={{width:"100%"}}>
            <Column>
                <Row style={{padding: 16}}>
                    <h5 style={{color: "white", margin: 0}}>Properties</h5>
                </Row>
                <Row style={{paddingLeft: 16}}>
                    <Column>
                    <b align="left" style={{padding:"0px",fontSize:"15px"}}>Border</b> <input value={this.state.maximumWidth} type="checkbox" onChange={(e)=>{
                                this.setState({
                                        styles:{
                                            ...this.state.styles,
                                            border: (e.target.checked) ? "1px solid blue":"unset"
                                        },
                                        maximumWidth: e.target.checked
                                    },()=>{
                                        this.props.applyChangs(this.state)
                                })
                            }}/>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <div style={{padding:"16px"}}>
                            <b style={{color: "black", margin: 0}}>Background Color</b>
                            <input type="color" onChange={(e)=>{
                                    this.setState({
                                            styles:{
                                                ...this.state.styles,
                                                background: e.target.value
                                            }
                                        },()=>{
                                            this.props.applyChangs(this.state)
                                    })
                                }}/>
                        </div>
                    </Column>
                </Row>               
                <Row style={{padding: 16}}>
                    <Column>
                         <Row>
                             <Column>
                                <h4 style={{padding:"0px"}}>Margin</h4>
                             </Column>
                         </Row>
                         <Row>
                             <Column>
                                <b align="left" style={{padding:"0px",fontSize:"15px"}}>Top</b> <input type="number" onChange={(e)=>{
                                        this.setState({
                                            styles:{
                                                ...this.state.styles,
                                                marginTop: `${e.target.value}px`
                                            }
                                        },()=>{
                                            this.props.applyChangs(this.state)
                                        })
                                    }}/>
                             </Column>
                        </Row>
                        <Row>
                             <Column>
                             <b align="left" style={{padding:"0px",fontSize:"15px"}}>Right</b>  <input type="number" value={this.state.styles.marginRight} onChange={(e)=>{
                                        this.setState({
                                            styles:{
                                                ...this.state.styles,
                                                marginRight: parseInt(e.target.value)
                                            }
                                        },()=>{
                                            this.props.applyChangs(this.state)
                                        })
                                    }}/>
                             </Column>
                            </Row>
                            <Row>
                             <Column>
                             <b align="left" style={{padding:"0px",fontSize:"15px"}}>Bottom</b>  <input type="number" onChange={(e)=>{
                                        this.setState({
                                            styles:{
                                                ...this.state.styles,
                                                marginBottom: `${e.target.value}px`
                                            }
                                        },()=>{
                                            this.props.applyChangs(this.state)
                                        })
                                    }}/>
                             </Column>
                             </Row>
                             <Row>
                             <Column>
                             <b align="left" style={{padding:"0px",fontSize:"15px",fontWeight:"light"}}>Left</b>  <input type="number" onChange={(e)=>{
                                        this.setState({
                                            styles:{
                                                ...this.state.styles,
                                                marginLeft: `${e.target.value}px`
                                            }
                                        },()=>{
                                            this.props.applyChangs(this.state)
                                        })
                                    }}/>
                             </Column>
                         </Row>
                    </Column>
                </Row>
                <Divider/>
                <Row style={{padding: 16}}>
                    <Column>
                         <Row>
                             <Column>
                                <h4 style={{padding:"0px",textDecoration:"underline"}}>Padding</h4>
                             </Column>
                         </Row>
                         <Row>
                             <Column>
                                <b align="left" style={{padding:"0px",fontSize:"15px"}}>Top</b> <input type="number" onChange={(e)=>{
                                        this.setState({
                                            styles:{
                                                ...this.state.styles,
                                                paddingTop: `${e.target.value}px`
                                            }
                                        },()=>{
                                            this.props.applyChangs(this.state)
                                        })
                                    }}/>
                             </Column>
                        </Row>
                        <Row>
                             <Column>
                             <b align="left" style={{padding:"0px",fontSize:"15px"}}>Padding Right</b>  <input type="number" onChange={(e)=>{
                                        this.setState({
                                            styles:{
                                                ...this.state.styles,
                                                paddingRight: parseInt(e.target.value)
                                            }
                                        },()=>{
                                            this.props.applyChangs(this.state)
                                        })
                                    }}/>
                             </Column>
                            </Row>
                            <Row>
                             <Column>
                             <b align="left" style={{padding:"0px",fontSize:"15px"}}>Padding Bottom</b>  <input type="number" onChange={(e)=>{
                                        this.setState({
                                            styles:{
                                                ...this.state.styles,
                                                paddingBottom: `${e.target.value}px`
                                            }
                                        },()=>{
                                            this.props.applyChangs(this.state)
                                        })
                                    }}/>
                             </Column>
                             </Row>
                             <Row>
                             <Column>
                             <b align="left" style={{padding:"0px",fontSize:"15px",fontWeight:"light"}}>Padding Left</b>  <input type="number" onChange={(e)=>{
                                        this.setState({
                                            styles:{
                                                ...this.state.styles,
                                                paddingLeft: `${e.target.value}px`
                                            }
                                        },()=>{
                                            this.props.applyChangs(this.state)
                                        })
                                    }}/>
                             </Column>
                         </Row>
                    </Column>
                </Row>
                <Divider/>
                <Row style={{padding: 16}}>
                    <Column>
                         <Row>
                             <Column>
                                <h4 style={{padding:"0px",textDecoration:"underline"}}>Border Radius</h4>
                             </Column>
                         </Row>
                         <Row>
                             <Column>
                                <b align="left" style={{padding:"0px",fontSize:"15px"}}>Border Top Right</b> <input type="number" onChange={(e)=>{
                                        this.setState({
                                            styles:{
                                                ...this.state.styles,
                                                borderTopRightRadius: `${e.target.value}px`
                                            }
                                        },()=>{
                                            console.log(e, this.state)
                                            this.props.applyChangs(this.state)
                                        })
                                    }}/>
                             </Column>
                        </Row>
                        <Row>
                             <Column>
                             <b align="left" style={{padding:"0px",fontSize:"15px"}}>Border Bottom Right</b>  <input type="number" onChange={(e)=>{
                                        this.setState({
                                            styles:{
                                                ...this.state.styles,
                                                borderBottomRightRadius: parseInt(e.target.value)
                                            }
                                        },()=>{
                                            this.props.applyChangs(this.state)
                                        })
                                    }}/>
                             </Column>
                            </Row>
                            <Row>
                             <Column>
                             <b align="left" style={{padding:"0px",fontSize:"15px"}}>Border Bottom Left</b>  <input type="number" onChange={(e)=>{
                                        this.setState({
                                            styles:{
                                                ...this.state.styles,
                                                borderBottomLeftRadius: `${e.target.value}px`
                                            }
                                        },()=>{
                                            this.props.applyChangs(this.state)
                                        })
                                    }}/>
                             </Column>
                             </Row>
                             <Row>
                             <Column>
                             <b align="left" style={{padding:"0px",fontSize:"15px",fontWeight:"light"}}>Border Top Left</b>  <input type="number" onChange={(e)=>{
                                        this.setState({
                                            styles:{
                                                ...this.state.styles,
                                                borderTopLeftRadius: `${e.target.value}px`
                                            }
                                        },()=>{
                                            this.props.applyChangs(this.state)
                                        })
                                    }}/>
                             </Column>
                         </Row>
                    </Column>
                </Row>
                <Divider/>
                <Row style={{paddingLeft: 16}}>
                    <Column>
                    <b align="left" style={{padding:"0px",fontSize:"15px"}}>Width</b> <input type="range" min="1" max="100" onChange={(e)=>{
                        console.log(e.target.value)
                                this.setState({
                                        styles:{
                                            ...this.state.styles,
                                            flexBasis: `${e.target.value}%`
                                        }
                                    },()=>{
                                        console.log(this.state.styles)
                                        this.props.applyChangs({...this.state})
                                })
                            }}/>
                    </Column>
                </Row>
                <Row style={{paddingLeft: 16}}>
                    <Column>
                    <b align="left" style={{padding:"0px",fontSize:"15px"}}>Height</b> <input type="text" onChange={(e)=>{
                                this.setState({
                                        styles:{
                                            ...this.state.styles,
                                            height: `${e.target.value}px`
                                        }
                                    },()=>{
                                        this.props.applyChangs(this.state)
                                })
                            }}/>
                    </Column>
                </Row>
                <Row style={{paddingLeft: 16}}>
                    <Column>
                    <b align="left" style={{padding:"0px",fontSize:"15px"}}>Max Width</b> <input value={this.state.maximumWidth} type="checkbox" onChange={(e)=>{
                                this.setState({
                                        styles:{
                                            ...this.state.styles,
                                            width: (e.target.checked) ? "100%":"unset"
                                        },
                                        maximumWidth: e.target.checked
                                    },()=>{
                                        this.props.applyChangs(this.state)
                                })
                            }}/>
                    </Column>
                </Row>
            </Column>
        </Row>
    }
}

export default ColumnProperties;