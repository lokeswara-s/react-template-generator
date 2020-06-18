import React from 'react';
import { Button } from '@material-ui/core';

class TGBaseButton extends React.Component{

    state = {
        dummyMethods:[],
        styling:[]
    }


    setComponentInfomration=()=>{

    }

    getComponentInfo=()=>{

    }

    render(){
        let {
            label = "Button"
        } = this.props
        
        return <Button>
            {label}
        </Button>
    }
}
export default TGBaseButton