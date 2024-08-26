export const copyToClipboard = async(output) => {
    try {
      await navigator.clipboard.writeText(output);
    
    } catch (err) {
      console.error("Failed to copy text to clipboard", err);
    }
  }; 
  
export const jsonBeautifier = (json,setError,setOutput) => {
    console.log("beauty")
    try {
      if (json.length == 0) {
        setError(false);
        setOutput("{}")
        return;
      }
      const prettyJson = JSON.stringify(JSON.parse(json), null, 4);
      setOutput(prettyJson)
      setError(false);
    } catch (error) {

      setError(true);
      setOutput(error.message)
    }
  };

  export const onKeyDownUtilityHandler = (key) => {
      let pairCharacter = '';
  
      switch (key) {
          case '`':
              pairCharacter = '`';
              break;
          case "'":
              pairCharacter = "'";
              break;
          case '"':
              pairCharacter = '"';
              break;
          case '[':
              pairCharacter = ']';
              break;
          case '{':
              pairCharacter = '}';
              break;
          case '(':
              pairCharacter = ')';
              break;
          default:
              return; // Exit if the key is not one of the handled keys
      }
      return pairCharacter
  };

  
  