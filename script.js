// Terry Hodge 8-29-2021 bringing it all together 1 


// temperature

//button code

document.querySelector("#convertTemp").addEventListener("click", function(e)
{
    if(document.querySelector("#startTemp").reportValidity())
    {
        // get the values
        let startingTemp = parseFloat(document.querySelector("#startTemp").value)

        // create a conditional for each temp type
        if(document.querySelector("#celsius").checked)
        {
            // convert C to F (0°C × 9/5) + 32 = 32°F

            let convertedTempCtoF = startingTemp * (9/5) + 32
            // final results isn the h1
            document.querySelector("#idResults").innerHTML=`The temperature is ${convertedTempCtoF.toFixed(1)} degrees Fahrenheit.`

        }
        else if(document.querySelector("#fahrenheit").checked)
        {
            // convert F to C (32°F − 32) × 5/9 = 0°C
            let convertedTempFtoC = (startingTemp - 32) *(5/9);
            document.querySelector("#idResults").innerHTML=`The temperature is ${convertedTempFtoC.toFixed(1)} degrees Celsius.`


        }
    }




});