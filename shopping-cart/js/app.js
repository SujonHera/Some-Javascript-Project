// Input Field and Button
let minusBtnPhone = $("#minusBtnPhone");
let plusBtnPhone = $("#plusBtnPhone");
let phoneItemInputField = $("#phoneItemInputField");
let minusBtnCase = $("#minusBtnCase");
let plusBtnCase =  $("#plusBtnCase");
let caseItemInputField = $("#caseItemInputField");

// quantity 
let addedPhone = 1;
let addedCase = 1;
let phonePrice = 1219;
let casePrice = 59;
let subTotalPrice = 1219;
let totalPrice = 1278;
let texPrice = 0;

//status Price
 $("#subTotal").innerText = subTotalPrice ;
 $("#tax").innerText = texPrice;
$("#total").innerText = totalPrice;

//EventListener list
minusBtnPhone.addEventListener('click', function(){
    --addedPhone;
    phoneItemInputField.value = addedPhone;
    subTotalPrice = subTotalPrice - phonePrice;
    totalPrice = subTotalPrice + texPrice;
    $("#subTotal").innerText = subTotalPrice;
    $("#total").innerText = totalPrice;
})
plusBtnPhone.addEventListener('click', function(){
    ++addedPhone;
    phoneItemInputField.value = addedPhone;
    subTotalPrice = subTotalPrice + phonePrice;
    totalPrice = subTotalPrice + texPrice;
    $("#subTotal").innerText = subTotalPrice;
    $("#total").innerText = totalPrice;
    
})

minusBtnCase.addEventListener('click', function(){
    --addedCase;
    caseItemInputField.value = addedCase;
    subTotalPrice = subTotalPrice - casePrice;
    totalPrice = subTotalPrice + texPrice;
    $("#subTotal").innerText = subTotalPrice;
    $("#total").innerText = totalPrice;

})
plusBtnCase.addEventListener('click', function () {
     ++addedCase;
     caseItemInputField.value = addedCase;
     subTotalPrice = subTotalPrice + casePrice;
     totalPrice = subTotalPrice + texPrice;
     $("#subTotal").innerText = subTotalPrice;
     $("#total").innerText = totalPrice;
})
// function minusFunction(price) {
//     subTotalPrice = subTotalPrice + price;
//     totalPrice = subTotalPrice + t
// }
function $(selector) {
    return document.querySelector(selector);
}