function extract(input){
    input = input.split("\\")
    input.shift()
    let file = input.pop();
    let fileExtensionIndex = file.lastIndexOf(".");
    let extension = "";
    for(let i = fileExtensionIndex; i < file.length; i++){
        extension += file[i]

    }

    file = file.replace(extension, "")

   console.log(`File name: ${file}`);
   console.log(`File extension: ${extension.replace(".", "")}`);



}
extract('C:\\Internal\\training-internal\\Template.bak.pptx');