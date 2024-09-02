let weight=document.querySelector("#weight")
let height=document.querySelector("#height")
let calculate=document.querySelector("#calculate")
let category=document.querySelector("#category")
let bmiShow=document.querySelector("#bmishow")
let reload=document.querySelector("#reload")
function bmiCal(){
    let metre=height.value*0.3048;
    let bmi=  weight.value / (metre * metre);
    bmi=bmi.toFixed(2)
    bmishow.innerHTML=bmi;
 
if (bmi < 18.5) {
    category.innerHTML = "You are Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    category.innerHTML = "You have Normal weight";
} else if (bmi >= 25 && bmi <= 29.9) {
    category.innerHTML = "You are Overweight";
} 
else if(bmi>30){
        category.innerHTML = "You are Obese";
    }
else if(weight.value === '' || height.value === ''){
    category.innerHTML = "All fields should be filled";
    bmishow.innerHTML='';
}


// else if{
//     category.innerHTML = "You are Obese";
// }
}

reload.addEventListener('click', ()=>{
    window.location.reload();
})
