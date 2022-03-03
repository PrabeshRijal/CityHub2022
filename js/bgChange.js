const bgtarget = document.getElementById('cityhib-search-bg-image');
const catSelected = document.getElementById('catSelected');
const lookingForTarget = document.getElementById('lookingForTarget');
const locationForTarget = document.getElementById('locationForTarget');
catSelected.innerHTML = "Restaurent";

const updateStateRestaurant = (catVal) => {
    catSelected.innerHTML = catVal;
    bgtarget.src = "images/restau.png"
}

const updateStateHotel = (catVal) => {
    catSelected.innerHTML = catVal;
    bgtarget.src = "images/lhotel.jpg"
}

const updateStateCafe = (catVal) => {
    catSelected.innerHTML = catVal;
    bgtarget.src = "images/cake.jfif"
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





