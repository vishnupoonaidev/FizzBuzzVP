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

  //get the table body element from the page
  let tableBody = document.getElementById("results");

  //get the row from the template
  let templateRow = document.getElementById("fbTemplate");

  //clear table first
  tableBody.innerHTML = "";

  for (let i = 0; i < fbData.length; i += 5) {
      const tableRow = document.importNode(templateRow.content, true);
      //grab only the columns in the template
      rowCols = tableRow.querySelectorAll("td");

      rowCols[0].classList.add(fbData[i]);
      rowCols[0].textContent = fbData[i];
     
      rowCols[1].classList.add(fbData[i+ 1]);
      rowCols[1].textContent = fbData[i + 1];
     
      rowCols[2].classList.add(fbData[i+2]);
      rowCols[2].textContent = fbData[i + 2];
     
      rowCols[3].classList.add(fbData[i+3]);
      rowCols[3].textContent = fbData[i + 3];
     
      rowCols[4].classList.add(fbData[i+4]);
      rowCols[4].textContent = fbData[i + 4];

      tableBody.appendChild(tableRow);
  }


}