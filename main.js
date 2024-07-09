let btns = document.querySelectorAll(".nums .btn");
let equation = document.getElementById("equation");
let reset = document.querySelector(".reset");
let parag = document.querySelector(".screen p");
let equationText = ""

function culc() {
    try {
        if(equationText != "" && (/\d/).test(equationText)){
            let rep = equationText.replace(/\s+/g, '').replace("x","*");
            const result = eval(rep);
            parag.textContent = equationText;
            equation.textContent = `${result}`;
            equationText = `${result}`;
        }else{
            throw new Error();
        }
    } catch (error) {
        parag.textContent = "error";
    }
}

function update() {
    equation.textContent = equationText;
}

btns.forEach((ele) => {
    ele.onclick = () => {
        if(ele.textContent === "="){
            culc();
        }else{
            equationText += ele.textContent;
            update();
        }
    }
})

reset.addEventListener("click", () => {
    equationText = "";
    equation.textContent = "";
    parag.textContent = "";
})

// Control from keyboard
document.addEventListener("keydown", (ele) => {
    if(ele.key === "Backspace"){
        equationText = equationText.slice(0, -1);
        update();
        console.log(equationText)
    }else{
        document.getElementById(`${ele.key}`).click();
    }
})