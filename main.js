//second page


let ACname = "Sawan Lohar";
let realAcc = "7488";
let realpass = "6969";
let AcBalance = 2000000;

let welcome = document.querySelector(".welcome-msg");
let logout = document.querySelector(".logout");
let BalanceText = document.querySelector("p");

let n = "land JS";

function deposit() {
    let dipAmount = prompt("Enter Deposit Amount: ");
    let newUpdateAmount = parseInt(dipAmount);

    AcBalance = AcBalance + newUpdateAmount;
    BalanceText.textContent = `Your Balance : $${AcBalance}`;



}


function withdraw() {
    let withAmount = prompt("Enter Withdraw Amount: ");
    let newUpdateAmount = parseInt(withAmount);
    if (withAmount > AcBalance) {
        alert("Insufficient Balance");
    }
    else {
        AcBalance = AcBalance - newUpdateAmount;
        BalanceText.textContent = `Your Balance : $${AcBalance}`;
    }

}



function redirect() {
    window.location.href = "./userAccount.html";

    userAccount();
}

function userAccount() {
    welcome.innerHTML = `Welcome Back ${ACname}`;
    BalanceText.innerHTML = `Your Balance : $${AcBalance}`;



}
function logoutAll(){
    window.location.href = "./index.html";
}
window.addEventListener("load", (evt) => {
    userAccount();
});



