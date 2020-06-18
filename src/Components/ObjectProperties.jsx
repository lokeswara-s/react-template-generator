import React, { Component } from 'react';
import ButtonInfo from './ObjectPropertiesPartials/ButtonInfo';
import TextProperties from './ObjectPropertiesPartials/TextProperties';
import ColumnProperties from './ObjectPropertiesPartials/ColumnProperties';
import ImageProperties from './ObjectPropertiesPartials/ImageProperties';


const ComponentWrapper = {
    Button: ButtonInfo,
    p: TextProperties,
    Column: ColumnProperties,
    Row: ColumnProperties,
    TextField: TextProperties,
    img: ImageProperties
}


class ObjectProperties extends Component{



    applyChangs=(state)=>{
        console.log(state)
        let data = this.props.infodata;
        data.properties = state;
        this.props.applyChanges(data)
    }


    render(){
        let {
            information=""
        } = this.props;
        if(!information) return <React.Fragment />
        let VisibleInfo = ComponentWrapper[information];
        return <div>
            {
                <VisibleInfo  applyChangs={this.applyChangs} properties={(this.props.infodata && this.props.infodata.properties) || {}}/>
            }
        </div>
    }
}
export default ObjectProperties;