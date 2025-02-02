const heroButtonEl = document.querySelector(".hero-button");
const closeButtonEl = document.querySelector(".modal-button");
const backdropEl = document.querySelector(".backdrop");
const formEl = document.querySelector(".footer-form");
document.addEventListener("keydown", isClosedModalbyEscape);

heroButtonEl.addEventListener("click",isOpenModal);
closeButtonEl.addEventListener("click", isOpenModal);



function isOpenModal() {
    backdropEl.classList.toggle("is-hidden");
};


function isClosedModalbyEscape(e) {
    if (e.code === "Escape") {
        backdropEl.classList.add("is-hidden");
    }
    else return  
};



formEl.addEventListener("submit", (e) => e.preventDefault());