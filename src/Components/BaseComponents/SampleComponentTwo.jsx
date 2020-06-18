import React from 'react';
import {Row, Column} from 'simple-flexbox';
import { Button, TextField } from "@material-ui/core";

const SampleComponent = (props)=>{
return <React.Fragment>
  <Row>
    <Column>
      <Row>
        <Column>
          <Button style={{"marginTop":"16px","marginRight":16,"marginBottom":"16px","marginLeft":"16px"}} variant={"contained"} color={"primary"}>
            Test
          </Button>
        </Column>
        <Column style={{}}>

        </Column>
        <Column style={{}}>

        </Column>
      </Row>
    </Column>
  </Row>
</React.Fragment>
}
export default SampleComponent