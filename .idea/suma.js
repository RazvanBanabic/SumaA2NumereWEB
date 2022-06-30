function Suma(){
    const primulNumar = document.getElementById("unu");
    const alDoileaNumar = document.getElementById("doi");
    const suma = document.getElementById("trei");
    suma.innerHTML=parseInt(primulNumar.innerHTML)+parseInt(alDoileaNumar.innerHTML);
}

async function GetFirstNumber(){
    let response = await fetch("http://localhost:8080/getRandomNumber");
    let number = await response.json();

    const primulNumar = document.getElementById("unu");
    primulNumar.innerText=number.numar;
}

async function GetSecondNumber(){
    let response = await fetch("http://localhost:8080/getRandomNumber");
    let number = await response.json();

    const alDoileaNumar = document.getElementById("doi");
    alDoileaNumar.innerText=number.numar;
}


function initPage(){
    const firstButton = document.getElementById("primul");
    firstButton.addEventListener("click", GetFirstNumber);
    const secondButton = document.getElementById("aldoilea");
    secondButton.addEventListener("click",GetSecondNumber);
    const thirdButton = document.getElementById("suma");
    thirdButton.addEventListener("click", Suma);
}

window.onload = (event) => {
    initPage();
};