const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
//on chercher une variable constante dans l'HTML avec l'id choisis

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear") {
            display.innerText = "";
        } else if (item.id == "backspace") {
            let string = display.innerText.toString ();
            display.innerText = string.substr(0, string.length -1);
        } else if (display.innerText != "" && item.id == 'egal') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == "" && item.id == 'egal') {
            display.innerText = "Empty!";
            setTimeout (()=>(display.innerText = ""),2000);
        } else {
            display.innerText += item.id;
        }
    };
});

const themeToggleBtn = document.querySelector (".changement-theme");
const calculator = document.querySelector (".calculatrice");
const icontheme = document.querySelector (".icon-theme");
let isDark = true;
themeToggleBtn.onclick = () => {
calculator.classList.toggle("nuit");
themeToggleBtn.classList.toggle("actif");
isDark= !isDark;
};
