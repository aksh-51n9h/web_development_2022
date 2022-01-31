let res = document.getElementById("res");

let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");

let btnClr = document.getElementById("btnClr");
let btnEql = document.getElementById("btnEql");

let btnSum = document.getElementById("btnSum");
let btnSub = document.getElementById("btnSub");
let btnMul = document.getElementById("btnMul");
let btnDiv = document.getElementById("btnDiv");

btn0.addEventListener("click", function () {
    res.innerHTML += 0;
});

btn1.addEventListener("click", function () {
    res.innerHTML += 1;
});

btnSum.addEventListener("click", function () {
    res.innerHTML += "+";
});

btnSub.addEventListener("click", function () {
    res.innerHTML += "-";
});

btnMul.addEventListener("click", function () {
    res.innerHTML += "*";
});

btnDiv.addEventListener("click", function () {
    res.innerHTML += "/";
});

btnClr.addEventListener("click", function () {
    res.innerHTML = "";
});

btnEql.addEventListener("click", function () {
    let re = /([01]+)([\+\-\*\/])([01]+)/g;
    let arr = re.exec(res.innerHTML);

    let op1 = toDec(arr[1]);
    let opn = arr[2];
    let op2 = toDec(arr[3]);

    let result = 0;

    switch (opn) {
        case "+":
            result = op1 + op2;
            break;

        case "-":
            result = op1 - op2;
            break;

        case "*":
            result = op1 * op2;
            break;

        case "/":
            result = op1 / op2;
            break;
    }

    res.innerHTML = toBin(result);
});

function toBin(n) {
    let s = "";

    while (n != 0) {
        s = (n % 2) + s;
        n = Math.floor(n / 2);
    }

    return s;
}

function toDec(n) {
    if (n.length == 1) {
        return Number(n);
    }

    let s = Number(n.charAt(0));

    for (let i = 1; i < n.length; i++) {
        s = s * 2;
        if (n.charAt(i) == "1") {
            s++;
        }
    }

    return s;
}