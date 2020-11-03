const modal = document.getElementById('modal_slider');
const btn = document.getElementById("btn_open_modal");
const span = document.getElementsByClassName("close")[0];

btn.onclick = () => {
    modal.style.display = "block";
}

span.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}