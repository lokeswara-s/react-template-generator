let elements = {
    "name": null,
    "key": null,
    "properties": {},
    "child": [
      {
        "name": "Row",
        "key": "0.13218194679833206",
        "properties": {},
        "child": [
          {
            "name": "Column",
            "key": "0.31214884163234413",
            "properties": {},
            "child": [
              {
                "name": "Row",
                "key": "0.9760074242629531",
                "properties": {},
                "child": [
                  {
                    "name": "Column",
                    "key": "0.5300282898442192",
                    "properties": {},
                    "child": [
                      {
                        "name": "p",
                        "key": "0.15440541205049763",
                        "properties": {
                          "styles": {},
                          "text": "Sample Text"
                        },
                        "child": []
                      }
                    ]
                  },
                  {
                    "name": "Column",
                    "key": "0.8829568161113057",
                    "properties": {},
                    "child": [
                      {
                        "name": "Button",
                        "key": "0.7015292490101432",
                        "properties": {
                          "styles": {
                            "marginTop": "16px",
                            "marginRight": 16,
                            "marginBottomLeft": "16px",
                            "marginLeft": "16px"
                          },
                          "text": "Sample Button",
                          "variant": "contained"
                        },
                        "child": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }



const generateProps = (properties)=>{
    return `style={${JSON.stringify(properties.styles)}}`
}

const generateCompnentString=(child=[])=>{
    return child.map(item=>{
        if(item.child.length > 0){
            return `<${item.name}>${generateCompnentString(item.child)}</${item.name}>`
        }
        return `<${item.name} ${generateProps(item.properties)}>${item.properties.text}</${item.name}>`
    })
}

let str = `<React.Fragment>${generateCompnentString(elements.child)}</React.Fragment>`


console.log(str.replace(/>,</g, "><"))
