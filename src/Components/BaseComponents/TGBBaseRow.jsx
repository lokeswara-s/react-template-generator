import React from 'react';
import { Button } from '@material-ui/core';
import { Row } from 'simple-flexbox';

class TGBBaseRow extends React.Component{

    state = {
        styling:[]
    }


    setComponentInfomration=()=>{

    }

    getComponentInfo=()=>{

    }

    render(){
        let {
            children 
        } = this.props
        
        return <Row>
            {children}
        </Row>
    }
}
export default TGBBaseRow