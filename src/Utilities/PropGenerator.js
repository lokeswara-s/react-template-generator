
export const PropGenerator=(child)=>{

    let props = {}

    return props;
}

function toCamelCase(str) {
    return str.replace(/\b-([a-z])/g, (_, char) => char.toUpperCase()).trim();
}
let string = "display: flex; flex-flow: column nowrap; flex: 2 1 0%; background-color: white; margin: 16px; z-index: 0; padding-top: 32px;"
export const DefaultStyleGenerator = (input)=>{
    let result = {},
    attributes = input.split(';');
    for (let i = 0; i < attributes.length; i++) {
        let entry = attributes[i].split(':');
        if(entry[0])
        result[toCamelCase(entry[0])]= entry[1].trim()
    }
    return result
}

DefaultStyleGenerator(string)