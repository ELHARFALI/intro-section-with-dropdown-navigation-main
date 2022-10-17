const features = document.querySelector('.features')
const dropdown = document.querySelector('.dropdown')
const arrow = document.querySelector('.arrow-down')
const arrowcom = document.querySelector(".arrow-down-com");

features.addEventListener('click', function () {
    features.classList.toggle('add')
    dropdown.classList.toggle('active')

    if (features.classList.contains('add')) {
        arrow.src = "/images/icon-arrow-up.svg";
    } else {
        arrow.src = "/images/icon-arrow-down.svg"
    }
})

const company = document.querySelector('.company')
const dropdowncompany = document.querySelector(".dropdowncompany");

company.addEventListener("click", function () {
    company.classList.toggle('daa')
    dropdowncompany.classList.toggle("active");

    if (company.classList.contains("daa")) {
        arrowcom.src = "/images/icon-arrow-up.svg";
    } else {
        arrowcom.src = "/images/icon-arrow-down.svg";
    }
});

const hamburger = document.querySelector('.hamburger')
const sidebar = document.querySelector('.side-bar')

const close = document.querySelector('.close')

const overlay = document.querySelector('.overlay')

hamburger.addEventListener('click', function () {
    sidebar.classList.toggle('is-active')
    overlay.classList.toggle("active");
})

close.addEventListener("click", function () {
    sidebar.classList.toggle("is-active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", function () {
    sidebar.classList.toggle("is-active");
    overlay.classList.toggle("active");
});