let imgbox = document.getElementById("imgbox")
let qrImage = document.getElementById("qrImage")
let urlInput = document.getElementById("urlInput")


function generateQR() {
    // Construct the QR code API URL with the URL input value
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(urlInput.value);
}
