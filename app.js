let ACname = "Sawan Lohar";
let realAcc = "7488";
let realpass = "6969";
let AcBalance = 2000000;

let welcome = document.querySelector(".welcome-msg");






let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    var username = document.querySelector("#username").value;
    var password = document.querySelector(".password").value;
    console.log(username);
    console.log(password);

    if (realAcc === username && realpass === password) {
        alert("Login Success");

        redirect()
    }


}
);
function redirect() {
    window.location.href = "./userAccount.html";

    
}

