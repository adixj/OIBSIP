//javascript for Temperature Converter
//When CONVERT button is clicked
function convert() {
    let temp = document.getElementById("temp").value;
    let unit1 = document.getElementById("unit1").value;
    let unit2 = document.getElementById("unit2").value;
    let result = document.getElementById("result");
  
    if (unit1 === unit2) {
      result.innerHTML = "Select different units!";
      return;
    }
    if (unit1 === "celsius") {
        if (unit2 === "fahrenheit") {
            const fahrenheit = (temp* 9/5) + 32;
            result.innerHTML = temp +"°C"+"="+ fahrenheit+ "°F";
        } else if (unit2 === "kelvin") {
            const kelvin = ( parseFloat(temp) + 273.15) ;
            result.innerHTML = temp +"°C"+"="+ kelvin + "K";
        }
    } else if (unit1 === "fahrenheit") {
        if (unit2 === "celsius") {
            const celsius = (temp - 32) * 5/9;
            result.innerHTML = temp +"°F"+"="+ celsius+ "°C";
        } else if (unit2 === "kelvin") {
            const kelvin= ((temp - 32) * 5/9) + 273.15;
            result.innerHTML = temp +"°F"+"="+kelvin+ "K";
        }
    } else if (unit1 === "kelvin") {
        if (unit2 === "celsius") {
            const celsius = ( parseFloat(temp) - 273.15);
            result.innerHTML = temp +"K"+"="+ celsius+ "°C";
        } else if (unit2 === "fahrenheit") {
            const fahrenheit = ((temp - 273.15) * 9/5) + 32;
            result.innerHTML = temp +"K"+"="+ fahrenheit+ "°F";
        }
    }
}
//When REFRESH button is clicked
function refresh() {
    document.getElementById("temp").value = "";
    document.getElementById("unit1").value = "select";
    document.getElementById("unit2").value = "select";
    document.getElementById("result").innerHTML = "";
}


  
