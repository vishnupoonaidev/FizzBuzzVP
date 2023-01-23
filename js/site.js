function getValues() 
{
    //1. get value to test Fizz
    //DO:
    //Use "let" to declare a variable "fizzValue".  
    //Assign it the value that you find in the the Html element
    //with the id "fizzValue".  HINT: Use document.getElementById
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

        //3. check for numbers
    //DO:
    //Convert "fizzValue" to an integer using parseInt()

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    
    
    //4. check for numbers
    //DO:
    //Convert "buzzValue" to an integer using parseInt()

    //5. validate that "fizzValue" and "buzzValue" are actually Numbers.
    //DO:
    //Use an "if-else-statement" to test the logical conjunction (AND &&) 


    if (Number.isInteger(fizzValue)  && Number.isInteger(buzzValue)) {
        
        //we call generateNumbers
      let fbData = fizzBuzz(fizzValue,buzzValue);

    //we call displaydata
     displayData(fbData);

    }else{
        alert("Please enter only numbers into the Fizz and Buzz input boxes.")
    }



}


function fizzBuzz(fizzValue,buzzValue){

let returnArray =[];

for (let index = 1; index < 100; index++) {
   
    if (index % fizzValue == 0 && index % buzzValue == 0)  {

         returnArray.push('FizzBuzz');
        
    } else if (index % fizzValue == 0) {

        returnArray.push('Fizz');
        
    }

    else if(index % buzzValue == 0){
        returnArray.push('Buzz');
    }

    else{
        returnArray.push(index);
    }
    
}

return returnArray;

}



function displayData(fbData){

 let templateRows = "";


 for (let index = 0; index < fbData.length; index++) {

        let fizzBuzzResult = fbData[index];
        let fizzColour = "primary"
 
    if (fizzBuzzResult == "Fizz") {
        fizzColour = "green"
        
    } else if(fizzBuzzResult == "Buzz") {
        fizzColour = "purple"
    }else if(fizzBuzzResult == "FizzBuzz"){
        fizzColour = "red"
    }else{
        fizzColour = "primary"
    }

    templateRows += `<tr><td class="${fizzColour}">${fizzBuzzResult}</td><td class="${fizzColour}">${fizzBuzzResult}</td></tr>`;

    

    
 }

 document.getElementById("results").innerHTML = templateRows;

}