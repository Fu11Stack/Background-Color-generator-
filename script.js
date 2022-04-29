var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");

/*css.textContent = color1.value +  color2.value + color3.value + "";*/

function setGradient() {
 body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + "," + color3.value + ")";
 console.log(color1.value);

 
css.textContent = color1.value +  color2.value + color3.value + "";

 css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setGradient);

var color1 = '#' + randomColor;
var color2 = '#' + randomColor; 
var color3 = '#' + randomColor;

var setBg = () => {
 randomColor = Math.floor(Math.random()*16777215).toString(16);
 body.style.background = "linear-gradient(to right, " + randomColor.value + "," + color2.value + "," + color3.value + ")";

  console.log(randomColor.value)
  console.log(color2)
  console.log(color3)


  
}


genNew.addEventListener("click", setBg);
setBg();



