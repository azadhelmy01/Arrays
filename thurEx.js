let textBox = document.getElementById("textBox")
let btn = document.getElementById("btn");
let minOut = document.getElementById("minOutput");
let maxOut = document.getElementById("maxOutput");
let avgOut = document.getElementById("avgOutput");

let arrayValue = document.getElementById("arrayVal")
let myArray = [];



btn.addEventListener("click", calculate)

function updateValue(min, max, avg){
    minOut.innerHTML = "<p>Min: " + min + "</p>"
    maxOut.innerHTML = "<p>Max: " + max + "</p>"
    avgOut.innerHTML = "<p>Average: " + avg + "</p>"   
}




function calculate(){
    let num = Number(textBox.value);
    myArray.unshift(num)
    minimum = min(myArray)
    maximum = max(myArray)
    avg = Average(myArray)
    minOut.innerHTML = "<p>Min: " + minimum + "</p>"
    maxOut.innerHTML = "<p>Max: " + maximum + "</p>"
    avgOut.innerHTML = "<p>Average: " + avg + "</p>"       
    arrayValue.innerHTML = "<p>" + myArray.toString() +"</p>"
}

function min(Array){
    let min = Number.MAX_VALUE

    for(let i = 0; i < Array.length; i++){
        if(Array[i]< min){
            min = Array[i]
        }
    }
    return min
  
}

function max(Array){
   let max = -(Number.MAX_VALUE)
   for(let i = 0; i < Array.length; i++){
    if(Array[i] > max){
        max = Array[i]
    }
}
return max
   
}


function Average(Array){
    let sum = 0
    let avgOfNums = 0
    for(let i = 0; i < Array.length; i++){
        sum = sum + Array[i]
    }
    avgOfNums = sum/Array.length
    return avgOfNums

}



