

var reserve_button = document.querySelector(".reserve__button");
var form = document.querySelector(".reserve__form");
var minus = document.querySelectorAll(".reserve-minus");
var plus = document.querySelectorAll(".reserve-plus");
var reserve_number = document.querySelectorAll(".reserve__number")

form.style.transform = "translateY(-400px)";

reserve_button.addEventListener("click" , function(event){
	reserve_button.preventDefault;
	
	if(form.style.transform == "translateY(-400px)"){
	form.style.transform = "translateY(0px)";
	}
	else if (form.style.transform = "translateY(0px)"){
	form.style.transform = "translateY(-400px)";
	}
})

minus[0].addEventListener("click",function(event){
	if(reserve_number[0].value > 1)
	reserve_number[0].value--
})

minus[1].addEventListener("click",function(event){
	if(reserve_number[1].value > 0)
	reserve_number[1].value--
})

plus[0].addEventListener("click",function(event){
	if(reserve_number[0].value < 15)
	reserve_number[0].value++
})

plus[1].addEventListener("click",function(event){
	if(reserve_number[1].value < 15)
	reserve_number[1].value++
})