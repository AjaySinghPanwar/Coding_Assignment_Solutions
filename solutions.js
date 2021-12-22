/*
//Solution 1 -> Getting hours, minutes and seconds from number of seconds
function getTimeValues(numOfSeconds){
    let hours = numOfSeconds/3600;
    let minutes = (numOfSeconds%3600)/60;
    let seconds = numOfSeconds%60;

    //Output to browser console
    console.log("Hours = " + Math.floor(hours));
    console.log("Minutes = " + Math.floor(minutes));
    console.log("Seconds = " + seconds);
}

//Calling the function
getTimeValues(127);
*/


/*
//Solution 2 -> checking whether xor is even or odd
function checkXor(T) {

    while (T-- != 0) {
        //Taking user input from prompt in each testcase
        let start = parseInt(prompt("Enter number 1"));
        let end = parseInt(prompt("Enter number 2"));

        //To store xor'd values
        let ans = 0;

        for (let i = start; i <= end; ++i) {
            ans = ans ^ i;
        }

        //Converting ans to binary string
        let binaryRep = ans.toString(2);

        //Checking nth charcter whether it is '0' or '1'. Because in an even no. 0th bit is 0 and in an odd no. 0th bit is 1
        if (binaryRep[binaryRep.length - 1] === '0') {
            //Output to browser console
            console.log("Even");
        }
        else {
            console.log("Odd");
        }
    }
}

//Calling the function
checkXor(4);
*/



// Solution 3 -> Sorting 'T' number of strings according to their first character
function sortString(T){
    let stringArray = [];
    let i = 1;
    let myString = "";

    while (T-- != 0) {
        //Taking user input from prompt 
        myString = prompt("Enter string no." + i);

        //converting every string to a common case
        stringArray.push(myString.toUpperCase());

        ++i;
    }

    //Sorting the array
    stringArray.sort();

    stringArray.forEach(element => {
        //Output to browser console
        console.log('"' + element + '"')
    });
}

sortString(4);



