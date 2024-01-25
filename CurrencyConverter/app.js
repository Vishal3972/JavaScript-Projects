const base_url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCur = document.querySelector(".from select");
const toCur = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for(let select of dropdowns){
    for(curCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = curCode;
        newOption.value = curCode;
        select.append(newOption);
        if(select.name == "from" && curCode == "USD"){
            newOption.selected = "selected";
        }else if(select.name == "to" && curCode == "INR"){
            newOption.selected = "selected";
        }
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    let curCode = element.value;
    let countryCode = countryList[curCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = '1';
   }
   const url = `${base_url}/${fromCur.value.toLowerCase()}/${toCur.value.toLowerCase()}.json`;
   let response = await fetch(url);
   let data = await response.json();
//    console.log(data);

   let rate = data[toCur.value.toLowerCase()];
   let finalAmount = rate*amtVal;

   msg.innerText = `${amtVal} ${fromCur.value} = ${finalAmount} ${toCur.value}`;
})

