const features = document.querySelector('.features')
const featuresDesktop = document.querySelector(".features-desktop");
const dropdown = document.querySelector('.dropdown')
const dropdownDesktop = document.querySelector(".drop-down-desktop");
const arrow = document.querySelector('.arrow-down')
const arrowdesktop = document.querySelector(".arrow-desktop");

features.addEventListener('click', function () {
    features.classList.toggle('add')
    dropdown.classList.toggle('active')

    if (features.classList.contains('add')) {
        arrow.src = "/images/icon-arrow-up.svg";
    } else {
        arrow.src = "/images/icon-arrow-down.svg"
    }
})

featuresDesktop.addEventListener("click", function () {
    featuresDesktop.classList.toggle("add");
    dropdownDesktop.classList.toggle("active");

    if (featuresDesktop.classList.contains("add")) {
        arrowdesktop.src = "/images/icon-arrow-up.svg";

    } else {
        arrowdesktop.src = "/images/icon-arrow-down.svg";
    }
});

const company = document.querySelector('.company')
const companyDesktop = document.querySelector('.company-desktop')
const dropdowncompany = document.querySelector(".dropdowncompany");
const dropdowncompanyDesktop = document.querySelector(".dropdowncompany-desk");
const arrowcom = document.querySelector(".arrow-down-com");
const arrowcomDesk = document.querySelector(".arrow-desk");

companyDesktop.addEventListener("click", function () {
    companyDesktop.classList.toggle('daa')
    dropdowncompanyDesktop.classList.toggle("active");

    if (companyDesktop.classList.contains("daa")) {
        arrowcomDesk.src = "/images/icon-arrow-up.svg";
        
    } else {
        arrowcomDesk.src = "/images/icon-arrow-down.svg";
    }
});

company.addEventListener("click", function () {
    company.classList.toggle("daa");
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