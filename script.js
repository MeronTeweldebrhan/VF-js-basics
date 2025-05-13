function isNotEmpty(str){
    return (str !== null && str !== undefined && str !== "");
}
function captilizeFirstLetter(str){
         
        if(isNotEmpty(str)){
            firstPart = str.charAt(0).toUpperCase()
            secondPart = str.slice(1)
            return firstPart + secondPart
        }
        else{
            return str
        }     
}
function formatFullName(firstName, lastName){
    if(isNotEmpty(firstName) && isNotEmpty(lastName)){
        return captilizeFirstLetter(lastName)+','+captilizeFirstLetter(firstName)
    }else{
         return "Invalid name input"
    }
}
let formatButton = document.getElementById("formatButton")
formatButton.addEventListener("click", function(){
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let fullName = formatFullName(firstName, lastName)
    document.getElementById("result").innerText = `Formatted Name: ${fullName}`;
});

