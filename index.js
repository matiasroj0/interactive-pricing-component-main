const price = document.querySelector(".price");
const pageviews = document.querySelector(".pageviews-number");
const slider = document.querySelector(".price-slider");
const toggle = document.querySelector(".toggle");
const startTrialBtn = document.querySelector(".start-trial-btn");

function changePriceFinal(){
    if(!toggle.classList.contains("discount")){
        if (slider.value == 1) {
            pageviews.innerHTML = "10k";
            price.innerHTML = "$8.00";
        } else if (slider.value == 2) {
            pageviews.innerHTML = "50k";
            price.innerHTML = "$12.00";
        } else if (slider.value == 3) {
            pageviews.innerHTML = "100k";
            price.innerHTML = "$16.00";
        }  else if (slider.value == 4) {
            pageviews.innerHTML = "500k";
            price.innerHTML = "$24.00";
        } else if (slider.value == 5) {
            pageviews.innerHTML = "1M";
            price.innerHTML = "$36.00";
        }
    } else {
        if (slider.value == 1) {
            pageviews.innerHTML = "10k";
            price.innerHTML = "$6.00";
        } else if (slider.value == 2) {
            pageviews.innerHTML = "50k";
            price.innerHTML = "$9.00";
        } else if (slider.value == 3) {
            pageviews.innerHTML = "100k";
            price.innerHTML = "$12.00";
        }  else if (slider.value == 4) {
            pageviews.innerHTML = "500k";
            price.innerHTML = "$18.00";
        } else if (slider.value == 5) {
            pageviews.innerHTML = "1M";
            price.innerHTML = "$27.00";
        }
    }
}


function changePrice(){
        if (slider.value == 1) {
            pageviews.innerHTML = "10k";
            price.innerHTML = "$8.00";
        } else if (slider.value == 2) {
            pageviews.innerHTML = "50k";
            price.innerHTML = "$12.00";
        } else if (slider.value == 3) {
            pageviews.innerHTML = "100k";
            price.innerHTML = "$16.00";
        }  else if (slider.value == 4) {
            pageviews.innerHTML = "500k";
            price.innerHTML = "$24.00";
        } else if (slider.value == 5) {
            pageviews.innerHTML = "1M";
            price.innerHTML = "$36.00";
        }
}

function changePriceDiscount(){
        if (slider.value == 1) {
            pageviews.innerHTML = "10k";
            price.innerHTML = "$6.00";
        } else if (slider.value == 2) {
            pageviews.innerHTML = "50k";
            price.innerHTML = "$9.00";
        } else if (slider.value == 3) {
            pageviews.innerHTML = "100k";
            price.innerHTML = "$12.00";
        }  else if (slider.value == 4) {
            pageviews.innerHTML = "500k";
            price.innerHTML = "$18.00";
        } else if (slider.value == 5) {
            pageviews.innerHTML = "1M";
            price.innerHTML = "$27.00";
        }
}

// set default value
slider.value = 3
changePrice();
//

toggle.addEventListener("click", ()=>{
    toggle.classList.toggle("discount");
    changePriceFinal();
})

slider.addEventListener("change", ()=>{
    changePriceFinal();
})

startTrialBtn.addEventListener("click", ()=>{
    location.reload();
})
