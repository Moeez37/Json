import { SubType, Types } from "../types/editor-types";
import TextAreaTypes from "../types/text-area-types";
import { copyToClipboard } from "../utils/utils";
const basePropsOfTextArea = {
    linestyle:
        "absolute top-0 left-0 h-full w-12 bg-gray-200 text-gray-600 text-right pt-4 pr-2 border-r border-gray-300  overflow-hidden",

    textAreaStyle: "",
    TextAreaRows: 20,
    TextAreaColumns: 30,
    placeholder: "Text Area To Write",
    autoFocus: false,
    idOfTextArea: "textArea",
    attachcopyButton: false,
    copyButtonFunction: copyToClipboard,
    error: false,
    wrap: "on",
    content: "",
    setContent: () => console.log("Default Function"),
    editable: false
}
export default function getPropObjectForTextArea(Type, output, setOutput, placeholder, error, attachcopyButton, autoFocus, wrap, idOfTextArea,readonly) {
    const baseTextArea = { ...basePropsOfTextArea }
    let text_area_style;
    switch (Type) {

        case "OUTPUT": {
            text_area_style =
                `output-area flex-1 w-full h-full pl-16 font-mono p-4 border rounded-lg shadow focus:outline-none transition-all duration-300 ` +
                (error
                    ? "bg-red-100 text-red-800 border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500"
                    : output ? "bg-green-100" : "bg-white" + "text-gray-800 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500");
                    break;
                }
        case "INPUT":{
            text_area_style= "input-area flex-1 w-full h-full pl-16 bg-white text-gray-800 font-mono p-4 border border-gray-300 rounded-lg shadow focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            break;
        }
        default:{
            console.log("Type is not correct")
            break;
        }
    }
    baseTextArea["content"] = output
    baseTextArea["setContent"] = setOutput
    baseTextArea["placeholder"] = placeholder ? placeholder : "Converted output will appear here...";
    baseTextArea["textAreaStyle"] = text_area_style;
    baseTextArea["attachcopyButton"] = attachcopyButton;
    baseTextArea["autoFocus"] = autoFocus;
    baseTextArea["wrap"] = wrap;
    baseTextArea["idOfTextArea"] = idOfTextArea;
    baseTextArea["error"] = error
    baseTextArea["readonly"] = readonly
    return (baseTextArea);
}

export function getPropObjectForTextAreaWrapper(type, subtype, textAreaType,content,setcontent,error) {
    switch (type) {
        case Types.BEAUTIFIER: {

            switch (subtype) {

                case SubType.JSON_BEAUTIFIER: {
                    if (textAreaType === TextAreaTypes.INPUT) {
                        return getPropObjectForTextArea(TextAreaTypes.INPUT, content, setcontent, "Paste your JSON here...", error, false, true, "off", "input", false)
                    }
                    else if (textAreaType === TextAreaTypes.OUTPUT) {
                        return getPropObjectForTextArea(TextAreaTypes.OUTPUT, content, setcontent, "Converted output will appear here...", error, true, true, "on", "output", true)
                    }
                    break;
                }

                default:{
                    console.error("SUbtype not matched ")
                    break;
                }

            }

            break;
        }
    }
}