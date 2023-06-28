let input = document.getElementById("input");
console.log(input);
let qrImg = document.getElementById("qr-img")
console.log(qrImg);

let generateQr = () => {
    if (input.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=175x175&data=" + input.value;
        qrImg.classList.add("border", "border-2", "border-success")
    }
}