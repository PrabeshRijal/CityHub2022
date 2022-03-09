const mainSavigationSection = document.querySelector(".main-navigation-section");
const cityhubFooterSection = document.querySelector(".cityhub-footer-section");
const dashboardSideNav = document.querySelector(".dashboard-side-nav");
const dashboardViewWrapper = document.querySelector(".dashboard-view-wrapper");
const toggleBtn = document.querySelector(".toggle-btn");
const targetModal = document.getElementById("logout_modal");

function modalfunc(){
    targetModal.classList.toggle("d-none");
}


findLocation = window.location.href;
if(findLocation === "http://127.0.0.1:8000/login") {
    mainSavigationSection.classList.add("dispalyAsNone");
    cityhubFooterSection.classList.add("dispalyAsNone");
}
else {
    mainSavigationSection.classList.remove("dispalyAsNone");
    cityhubFooterSection.classList.remove("dispalyAsNone");
}

toggleBtn.addEventListener("click", ()=> {
    dashboardSideNav.classList.toggle("left100");
    dashboardViewWrapper.classList.toggle("padding1");
})

