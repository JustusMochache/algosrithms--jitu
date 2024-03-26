//Given an array and chunk size divide the array 
//into  subarrays where each subarray is of length is the chunk size.


//  ([1,2,3,3,4,5,6,7],3)  ===[ [ 1, 2, 3 ], [ 3, 4, 5 ], [ 6, 7 ] ]
//  ([1,2,3,5,6,7],1) ===[ [ 1 ], [ 2 ], [ 3 ], [ 5 ], [ 6 ], [ 7 ]  ]

//loop through the array
//3 in example 1 is length of subarray
// //divide into the target number given
// function chuckArray(array, chucksize){
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];


        
//     }
// }



    // for (let i = 0; i < array.length; i++) {
    // //    const ele = array[i];
    // //    [....arr]
       
    // //   if(ele === targetLength){
    // //     //slice and concat
    // //     ele + slice[targetLength].join("").
    // //   }
        
    // }

//     Question 3: Power of Two
// Write a program that takes an integer as input and returns true if the input is a power of two.
 

// Examples: 
// 8=> returns true
// 6=> returns false

let num = 8;

 const powerInt = (num)=>{

  
    return num>0 && (num & (num - 1)) === 0;
 }

 const res = powerInt(num);

 console.log(res);



 /// This question is supposed to return the  most appearing character in a value
//Eg 11189 => '1'
//jonathan => n

let str = 11189

const mostAppearing =(str)=>{
    let countChars = {}
    let counter = ""
    let count = 0;


    for (const char of str) {
        countChars[char]= (countChars[char] || 0) +1;

        if(countChars[char] > count){
            counter = char;
            count = countChars[char];

        }
      

    }
    return counter;



    // for (const char of arr) {
    //     const counter = countChars[arr[char]]
    //     if(countChars === counter){
    //         countChars[counter]++
    //     }else{
    //         countChars[counter] = 1
    //     }
    // }
    // return countChars;
}
const res = mostAppearing(str)
console.log(res);


// Question 4: Reverse Integer
// Write a program that takes an integer as input and returns an integer with reversed digit ordering.
// Examples:
 
// For input 500, the program should return 5.
// For input -56, the program should return -65.
// For input -90, the program should return -9.
// For input 91, the program should return 19.

const inputNum = -65;




function reverseInt(inputNum){
   let reversed = parseInt(Math.abs(inputNum).toString().split("").reverse().join(""));
    
   return inputNum < 0 ? - reversed:  reversed 

  
}

const res = reverseInt(inputNum)
console.log(res);



// Write a program that count the number of vowels in a sentense

const sentense = "the jitu"

function characterCount(sent){
    let count = 0;

    const vowels = ["a","e","i","o","u"];

    for (const char of sent) {
        if(vowels.includes(char)){
            count++;
        }
    }

    return count;

    
}

const res = characterCount(sentense)

console.log(res);


