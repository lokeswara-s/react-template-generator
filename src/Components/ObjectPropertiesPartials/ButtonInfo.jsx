import React, { Component } from 'react';
import { Row, Column } from "simple-flexbox";
import { Button } from '@material-ui/core';


class ButtonInfo extends Component{

    constructor(props){
        super(props)
        this.state = {
            styles:{

            },
            text: "BUTTON",
            ...this.props.properties
        }
    }

    render(){
        return <Row style={{width:"100%"}}>
            <Column>
                <Row style={{paddingLeft: 16}}>
                    <h5 style={{ margin: 0}}>Properties</h5>
                </Row>
                <Row style={{padding: 16}}>
                    <Column>
                         <Row style={{paddingBottom: 16}}>
                             <Column>
                                Type
                             </Column>
                             <Column>
                                <select onChange={(e)=>{
                                    this.setState({
                                        variant: e.target.value
                                    },()=>{
                                        this.props.applyChangs(this.state)
                                    })
                                }}>
                                    <option value="text">Text</option>
                                    <option value="contained">Contained</option>
                                    <option value="outlined">Outlined</option>
                                </select>
                             </Column>
                         </Row>
                         <Row>
                             <Column>
                                Color
                             </Column>
                             <Column>
                                <select onChange={(e)=>{
                                    this.setState({
                                        color: e.target.value
                                    },()=>{
                                        this.props.applyChangs(this.state)
                                    })
                                }}>
                                     <option value="default">Default</option>
                                    <option value="primary">Primary</option>
                                    <option value="secondary">Secondary</option>
                                </select>
                             </Column>
                         </Row>
                    </Column>
                </Row>
                <Row style={{padding: 16}}>
                    <Column>
                         <Row>
                             <Column>
                                Margin
                             </Column>
                         </Row>
                         <Row>
                             <Column>
                                Top <input type="number" onChange={(e)=>{
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
                                Right <input type="number" value={this.state.styles.marginRight} onChange={(e)=>{
                                        this.setState({
                                            styles:{
                                                ...this.state.styles,
                                                marginRight: parseInt(e.target.value)
                                            }
                                        })
                                    }}/>
                             </Column>
                            </Row>
                            <Row>
                             <Column>
                                Bottom <input type="number" onChange={(e)=>{
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
                                Left <input type="number" onChange={(e)=>{
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
                <Row style={{paddingLeft: 16}}>
                    <Column>
                        Label 
                        <input type="text" value={this.state.text} onChange={(e)=>{
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
                                Text Decoration <input type="text" onChange={(e)=>{
                                        this.setState({
                                            styles:{
                                                ...this.state.styles,
                                                textDecoration: `${e.target.value}`
                                            }
                                        },()=>{
                                            this.props.applyChangs(this.state)
                                        })
                                    }}/>
                             </Column>
                         </Row>
                <Row style={{paddingLeft: 16, paddingBottom: 16}}>
                    <Column>
                    <Button variant="contained" color="primary" onClick={()=>{
                        this.props.applyChangs(this.state)
                    }}> Apply </Button>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        Disable
                    </Column>
                    <Column>
                        <input type="checkbox" value={this.state.disabled}
                            onChange={(e)=>{
                                this.setState({
                                    disabled: !this.state.disabled
                                },()=>{
                                    this.props.applyChangs(this.state)
                                })
                            }}
                        />
                    </Column>
                </Row>
                <Row>
                    <Column>
                        Size
                    </Column>
                    <Column>
                        <select
                            onChange={(e)=>{
                                this.setState({
                                    size: e.target.value
                                },()=>{
                                    this.props.applyChangs(this.state)
                                })
                            }}
                        >
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        Full Width
                    </Column>
                    <Column>
                        <input 
                            type="checkbox" value={this.state.fullWidth}
                            onChange={(e)=>{
                                this.setState({
                                    fullWidth:!this.state.fullWidth
                                },()=>{
                                    this.props.applyChangs(this.state)
                                })
                            }}
                        />
                    </Column>
                </Row>
            </Column>
        </Row>
    }
}

export default ButtonInfo;