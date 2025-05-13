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
function calculateTotalCost(price, quantity,taxRate,discount){
    if(isNaN(price) || isNaN(quantity) || isNaN(taxRate)){
         return "Invalid input"
    } else if (Number(discount) > 0){
        return ((price * quantity) * (1 + taxRate)) - discount
    }else{
        return (price * quantity) * (1 + taxRate)
    }
}

let calculatebutton = document.getElementById("calculateButton")
calculatebutton.addEventListener("click", function(){
    let price = parseFloat(document.getElementById("price").value)
    let quantity = parseInt(document.getElementById("quantity").value)
    let taxRate = parseFloat(document.getElementById("taxRate").value)
    let discount = parseFloat(document.getElementById("discount").value)
    let totalCost = calculateTotalCost(price, quantity, taxRate,discount)
    document.getElementById("calculationResult").innerText = `Total Cost: ${totalCost}`;
});

