import React from 'react';
import {Row, Column} from 'simple-flexbox';
import { Button, TextField } from "@material-ui/core";
import { useState } from 'react';

const SampleComponent = (props)=>{
const [state, setState] =useState({});
return <React.Fragment>
  <Row>
    <Column>
      <Row>
        <Column>
          <img src="https://picsum.photos/200" style={{"width":"50px","paddingTop":"16px","paddingRight":16,"paddingBottom":"16px","paddingLeft":"16px","borderTopRightRadius":"100px","borderBottomRightRadius":100,"borderBottomLeftRadius":"100px","borderTopLeftRadius":"100px"}} maximumWidth={"100%"}>
           
          </img>
        </Column>
        <Column>
          <p style={{"textAlign":"left","marginTop":"16px","marginRight":0,"marginBottom":"0px","marginLeft":"0px","fontSize":"16px"}}>
            GGK Now ACS
          </p>
          <p style={{"textAlign":"left","marginTop":"0px","marginRight":0,"marginBottom":"0px","marginLeft":"0px","paddingTop":"0px","paddingRight":0,"paddingBottom":"0px","paddingLeft":"0px","color":"#bababa","fontSize":"12px"}}>
            Poster 2:36 AM
          </p>
        </Column>
      </Row>
    </Column>
  </Row>
  <Row>
    <Column>
      <p style={{"paddingTop":"16px","paddingRight":16,"paddingBottom":"16px","paddingLeft":"16px","marginTop":"0px","marginRight":0,"marginBottom":"0px","marginLeft":"0px","textAlign":"left"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </Column>
  </Row>
  <Row>
    <Column>
      <img src="https://picsum.photos/200" style={{"marginTop":"0px","paddingTop":"16px","paddingRight":16,"paddingBottom":"16px","paddingLeft":"16px","borderTopRightRadius":"50px","borderBottomRightRadius":50,"borderBottomLeftRadius":"50px","borderTopLeftRadius":"50px","width":"unset"}} maximumWidth={"false"}>
       
      </img>
    </Column>
  </Row>
  <Row>
    <Column>
      <Row>
        <Column>
          <Button style={{"marginTop":"16px","marginRight":16,"marginBottom":"16px","marginLeft":"16px"}} variant={"outlined"} color={"secondary"}>
            View Comments
          </Button>
        </Column>
        <Column>
          <Button style={{"marginTop":"16px","marginRight":16,"marginBottom":"16px","marginLeft":"16px"}} color={"primary"} variant={"outlined"}>
            share
          </Button>
        </Column>
        <Column>
          <Button style={{"marginTop":"16px","marginRight":16,"marginBottom":"16px","marginLeft":"16px"}} color={"primary"} variant={"contained"}>
            likes
          </Button>
        </Column>
      </Row>
    </Column>
  </Row>
</React.Fragment>
}
export {SampleComponent}