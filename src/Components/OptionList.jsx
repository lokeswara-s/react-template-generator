import React from 'react';
import { Row, Column } from 'simple-flexbox';

class OptionList extends React.Component{
    state = {
        menu: 0
    }
    onDragOver = (event) => {
        event.dataTransfer.setData("text/html", event.target.id);
    }
    render(){
        return(
        <div style={{padding: 36, textAlign: "left"}}>   
                <Row style={{alignItems: "center", paddingBottom:8}}>
                <p style={{display: "inline", color:"white", fontSize: 12}}>  Grid count: </p> &nbsp; <select value={this.state.menu} onChange={(e)=>this.setState({menu: e.target.value})}> 
                {
                    [0,1,2,3,4,5,6,7,8].map(item=>{
                        return <option value={item}>{item}</option>
                    })
                } 
            </select>
                </Row>
            <Row data-name="Row" style={{cursor:"pointer", alignItems: "stretch", paddingBottom: 16}} draggable="true" data-identifier={Math.random()} id="col-spans" onMouseDown={(e)=>{
                this.props.setCurrent(e.target.parentElement.id )
            }} onDragStart={(ev)=>{
                ev.dataTransfer.setData("text/html", ev.target.parentElement.id );
            }}>
                {
                   Array.apply(null, { length: this.state.menu }).map((e, i) => (
                    <Column data-name="Column" data-identifier={Math.random()} style={{padding:8, border:"1px solid black", backgroundColor:"white", width:"100%"}} key={i}>
                       COL
                    </Column>
                  ))
                }
            </Row>
            <HeadingType handleSelectedType={this.props.handleSelectedType} setCurrent={this.props.setCurrent}/>     
            <br />     
            <ButtonType handleSelectedType={this.props.handleSelectedType} setCurrent={this.props.setCurrent}/>            
            <br />
            <TextFieldType  handleSelectedType={this.props.handleSelectedType} setCurrent={this.props.setCurrent}/>
            <br/>
            <ImageType  handleSelectedType={this.props.handleSelectedType} setCurrent={this.props.setCurrent}/>

        </div> 
        )

    }
}

const HeadingType = (props)=>{
    let id = Math.random()
    return <Row data-name="p" data-identifier={id} onClick={()=>{
        props.handleSelectedType && props.handleSelectedType("P", id);
    }} style={{cursor:"pointer", alignItems: "stretch",backgroundColor:"white",color:"#080c56",padding:16,fontWeight:"bold"}} id="col-text" draggable="true" onMouseDown={(e)=>{
        props.setCurrent(e.target.id)
    }} onDragStart={(ev)=>{
        ev.dataTransfer.setData("text/html", ev.target.parentElement.id );
    }}>
        Text 
    </Row>;
}

const ButtonType = (props)=>{
    let id = Math.random()
    return <Row data-name="Button" data-identifier={id} onClick={()=>{
        props.handleSelectedType &&props.handleSelectedType("BUTTON", id);
    }} style={{cursor:"pointer", alignItems: "stretch",backgroundColor:"white",color:"#080c56",padding:16,fontWeight:"bold"}} id="col-button" draggable="true" onMouseDown={(e)=>{
        props.setCurrent(e.target.id)
    }} onDragStart={(ev)=>{
        ev.dataTransfer.setData("text/html", ev.target.parentElement.id );
    }}>
        Button 
    </Row>;
}

const ImageType = (props)=>{
    let id = Math.random()
    return <Row data-name="img" data-identifier={id} onClick={()=>{
        props.handleSelectedType &&props.handleSelectedType("IMAGE", id);
    }} style={{cursor:"pointer", alignItems: "stretch",backgroundColor:"white",color:"#080c56",padding:16,fontWeight:"bold"}} id="col-image" draggable="true" onMouseDown={(e)=>{
        props.setCurrent(e.target.id)
    }} onDragStart={(ev)=>{
        ev.dataTransfer.setData("text/html", ev.target.parentElement.id );
    }}>
        Image 
    </Row>;
}


const TextFieldType = (props)=>{
    let id = Math.random()
    return <Row data-name="TextField" data-identifier={id} onClick={()=>{
        props.handleSelectedType &&props.handleSelectedType("TEXTFIELD", id);
    }} style={{cursor:"pointer", alignItems: "stretch",backgroundColor:"white",color:"#080c56",padding:16,fontWeight:"bold"}} id="col-text-field" draggable="true" onMouseDown={(e)=>{
        props.setCurrent(e.target.id)
    }} onDragStart={(ev)=>{
        ev.dataTransfer.setData("text/html", ev.target.parentElement.id );
    }}>
        Text Field 
    </Row>;
}
export default OptionList;