import React,{useState} from 'react';
import {Row, Column} from 'simple-flexbox';
import { Button, TextField } from "@material-ui/core";

const SampleComponent = (props)=>{
const [state, setState] =useState({});
return <React.Fragment>
  <Row>
    <Column>
      <Row>
        <Column>
          <img style={{"marginTop":"16px","marginRight":16,"marginBottom":"16px","marginLeft":"16px","borderTopRightRadius":"100px","borderBottomRightRadius":100,"borderBottomLeftRadius":"100px","borderTopLeftRadius":"100px","width":"50px"}} src={"https://picsum.photos/200"} maximumWidth={"100%"}>

          </img>
        </Column>
        <Column>
          <p style={{"textAlign":"left","fontSize":"22px","color":"#6670ff","marginBottom":"0px"}}>
            GeekReboot 2020
          </p>
          <p style={{"textAlign":"left","marginTop":"0px"}}>
            Posted 2min ago
          </p>
        </Column>
      </Row>
    </Column>
  </Row>
  <Row>
    <Column>
      <p style={{"textAlign":"left","marginTop":"16px","marginRight":16,"marginBottom":"16px","marginLeft":"16px"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </Column>
  </Row>
  <Row>
    <Column>
      <img style={{"marginTop":"16px","marginRight":16,"marginBottom":"16px","marginLeft":"16px","paddingTop":"0px","paddingRight":0,"paddingBottom":"0px","paddingLeft":"0px"}} src={"https://picsum.photos/200"} maximumWidth={"100%"}>

      </img>
    </Column>
  </Row>
  <Row>
    <Column>
      <Row>
        <Column>
          <Button style={{"marginTop":"16px","marginRight":16,"marginBottom":"16px","marginLeft":"16px"}} variant={"outlined"} color={"primary"}>
            share
          </Button>
        </Column>
        <Column>
          <Button style={{"marginTop":"16px","marginRight":16,"marginBottom":"16px","marginLeft":"16px"}} variant={"outlined"} color={"primary"}>
            BUTTON
          </Button>
        </Column>
        <Column>
          <Button style={{"marginTop":"16px","marginRight":16,"marginBottom":"16px","marginLeft":"16px"}} variant={"outlined"} color={"secondary"}>
            like
          </Button>
        </Column>
      </Row>
    </Column>
  </Row>
  <Row>
    <Column>
      <Row>
        <Column>
          <img style={{"paddingTop":"16px","paddingRight":16,"paddingBottom":"16px","paddingLeft":"16px","width":"50px"}} src={"https://picsum.photos/200"} maximumWidth={"100%"}>

          </img>
        </Column>
        <Column>
          <TextField style={{"marginTop":"26px"}} placeholder={"Comment"}>

          </TextField>
        </Column>
        <Column>
          <Button style={{"marginTop":"16px","marginRight":16,"marginBottom":"16px","marginLeft":"16px"}} variant={"contained"} color={"primary"}>
            post
          </Button>
        </Column>
      </Row>
    </Column>
  </Row>
</React.Fragment>
}
export default SampleComponent;