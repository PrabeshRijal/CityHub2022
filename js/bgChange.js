const bgtarget = document.getElementById('cityhib-search-bg-image');
const catSelected = document.getElementById('catSelected');
const lookingForTarget = document.getElementById('lookingForTarget');
const locationForTarget = document.getElementById('locationForTarget');
catSelected.innerHTML = "Restaurent";
const restaurentWpTarget = document.getElementById('restaurent-wp');
const cafeWpTarget = document.getElementById('cafe-wp');
const searchTabBtn = document.getElementsByClassName("search-tab-btn");


const updateStateRestaurant = (catVal) => {
    catSelected.innerHTML = catVal;
    bgtarget.src = "images/restau.png"

    cafeWpTarget.classList.add("d-none");
    restaurentWpTarget.classList.remove("d-none");
}

const updateStateHotel = (catVal) => {
    catSelected.innerHTML = catVal;
    bgtarget.src = "images/lhotel.jpg"

}

const updateStateCafe = (catVal) => {
    catSelected.innerHTML = catVal;
    bgtarget.src = "images/cake.jfif"

    cafeWpTarget.classList.remove("d-none");
    restaurentWpTarget.classList.add("d-none");
}

const updateStateDentist = (catVal) => {
    catSelected.innerHTML = catVal;
    bgtarget.src = "images/dentist.jpg"
}

const updateStateParlour = (catVal) => {
    catSelected.innerHTML = catVal;
    bgtarget.src = "images/parlour.jpg"
}

const updateStateFashoin = (catVal) => {
    catSelected.innerHTML = catVal;
    bgtarget.src = "images/fashion.jpg"
}

const changeLookingVal = (btnVal) => {
    lookingForTarget.value = btnVal;
}

const changeLocationVal = (btnVal) => {
    locationForTarget.value = btnVal;
}

// Add active class to the current button (highlight it)
var btns = document.getElementsByClassName("searchTabBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active-link-red");
  current[0].className = current[0].className.replace(" active-link-red", "");
  this.className += " active-link-red";
  });
}





