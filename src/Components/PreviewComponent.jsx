import React from 'react';
import { Row, Column } from 'simple-flexbox';
import GeneratedComponent from './GeneratedComponent';
import first from '../images/fisrt.jpg'
import second from '../images/second.jpg'

class PreviewComponent extends React.Component{
    render(){
        return <React.Fragment>
    <Row>
    <Column style={{width: "450px"}}>
      {/* <SampleComponent /> */}
    </Column>
    </Row>
    <Row style={{ height: "inherit", backgroundColor: "#5c5c5c" }}>
      <Column
        flex={1}
        style={{
          backgroundColor: "#080c56",
          boxShadow: "rgb(74, 74, 74) 5px 1px 14px",
          zIndex: 1
        }}
      >
                     <div style={{padding:8}}>	
          <div style={{padding:8}}>	
            <div style={{padding:8,background:"#080c56"}}>	
              <Row>	
                  <Column>	
                  <center>	
                    <img src={first} alt="" style={{width:"50%"}}/>	
                  </center>	
                          
                  </Column>	
                </Row>	
            </div>	
          </div>	
          <div style={{padding:8,paddingTop:2}}>	
            <div style={{padding:8,background:"#080c56"}}>	
              <Row>	
                  <Column>	
                  <center>	
                    <img src={second} alt="" style={{width:"50%"}}/>	
                  </center>	
                          
                  </Column>	
                </Row>
            </div>
          </div>
         </div>
        
      </Column>
      <Column
        flex={2}
        style={{ backgroundColor: "white",margin:16,  zIndex: 0, paddingTop: 32 }}
      >        
        <div style={{width: "620px"}}>
            <GeneratedComponent />
        </div>
      </Column>
      <Column
            flex={1}
            style={{
              backgroundColor: "white",
              boxShadow: "-3px 1px 14px #4a4a4a",
              zIndex: 1
            }}
          >
            
          </Column>
    </Row>
  </React.Fragment>
    }
}
export default PreviewComponent;