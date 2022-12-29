const btnItem = document.querySelectorAll(".btn-item")

for (let i = 0; i < btnItem.length; i++) {
    btnItem[i].addEventListener("click", function (e) {
        let btn = e.target;
        removeClass()
        btn.classList.add("active");
    })
}


function removeClass() {
    for (let i = 0; i < btnItem.length; i++) {
        btnItem[i].classList.remove("active");
    }
}