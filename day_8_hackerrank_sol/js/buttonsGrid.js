let seq = [1, 2, 3, 6, 9, 8, 7, 4];
let arr = [1, 2, 3, 6, 9, 8, 7, 4];

for (i = 0; i < seq.length; i++) {
    let idx = seq[i];
    let button = document.getElementById("btn" + idx);
    button.innerHTML = idx;
}

let btn5 = document.getElementById("btn5");
btn5.innerHTML = 5;
btn5.addEventListener("click", function () {
    rotateClockwise();
});

function rotateClockwise() {
    let d = 1;
    let lastIndex = arr.length - 1;

    reverse(arr, 0, lastIndex - d);
    reverse(arr, lastIndex - d + 1, lastIndex);
    reverse(arr, 0, lastIndex);

    let i = 0;

    for (i = 0; i < seq.length; i++) {
        let idx = seq[i];

        let button = document.getElementById("btn" + idx);
        button.innerHTML = arr[i];
    }
}

function reverse(arr, s, e) {
    while (s < e) {
        let temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;

        s++; e--;
    }
}