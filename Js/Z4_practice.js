// Practice exercise Arrays and Loops.

console.log("--1--------------------------------------");

// 1. Create an array of Numbers [5,6]. Add 4 at the begining and 7 at the end of the array.

{
let arr = [5,6];
let arr1 = arr.unshift(4);  //Adding a element at beining of the array.
console.log(arr1);          // 3  // The unshift() method returns new array length
console.log(arr);           // (3) [4, 5, 6]

let arr2 = arr.push(7);
console.log(arr2);          // 4
console.log(arr);          //  (4) [4, 5, 6, 7]
}
//-----------------------------------------------------------------
/*

 + Adding element in Array
unshift() : add an element at the begining of the array. 
push()    : add an element at the end of the array.

 - Removing elemet from Array
shift()   : Remove the first element from array and lower the index of rest accordingly
pop()     : Remove the last element from Array 

*/
//-------------------------------------------------------------------

console.log("--2--------------------------------------");

// 2. Create a method to return an element at a particular position in the array.


console.log("--2.1------------------");
{
function getArrayElement(arr,index){
    return arr[index-1];    
}

let arr = [34,2,1,67,4,3,88];
//lets retrieve 5th element element
console.log(getArrayElement(arr,5));

}


console.log("--2.2------------------");

// Using array Method.
{
let arr = [23,45,8,"delhi",3.33,54];
let element = arr.at(0);
console.log(element);
console.log(arr.at(4));   //3.33
}
//--------------------------------------------------
/*

Array at()
the at() method returns an indexed element from an array
the at() method returns the same as [].

*/
//----------------------------------------------------


console.log("--3-------------------------------------");


// 3. Create an array copy using slice method.

{
    let arr = ['honda','MG','Kia','Audi',"Toyota"];
    let car1 = arr.slice();
    console.log(car1);    // (5) ['honda', 'MG', 'Kia', 'Audi', 'Toyota']
    
    car1[0]= "suzuki";
    console.log(arr);     // (5) ['honda', 'MG', 'Kia', 'Audi', 'Toyota']
    console.log(car1);    // (5) ['suzuki', 'MG', 'Kia', 'Audi', 'Toyota']

    let car2 = arr.slice(3);
    console.log(car2);    // (2) ['Audi', 'Toyota']
    let car3 = arr.slice(0,2);
    console.log(car3);    //  (2) ['honda', 'MG']
}

//----------------------------------------------------
/*

The slice() method creates a new array.
The slice() method does not remove any elements from the source array.
The slice() method can take two arguments like slice(1, 3). 
slice(x,y) -> where x is included, y is excluded, e.g. slice(1,3) -> index 1 and 2 will be included, 3 excluded. 

*/
//----------------------------------------------------

console.log("--4----------------------------------------");

// Create a while loop that exits after counting 5 prime numbers.

console.log("--4.1--n is prime or not--");

{ 
    // Check whether n is a prime number or not.
    let n= Number(prompt("Enter a Number to check prime or not: ")); 
    let i= 2;
    let prime = true; 
    if(n<=1){
        prime = false;
    }else{
        while(i<n){
        if(n%i==0){
            prime = false;
            break;
        }
        i++;
    }
    }
      if(prime){
        console.log(n+" is a prime Number.");
    }else{
        console.log(n+" is not a Prime Number.");
    }
    
}

console.log("--4.2--Prime Number till n--");

{
    //To give prime Number till nth term.
    let n= Number(prompt("Enter the value of n to get all the prime NUmber till then: "));
    if(n<=1){
        console.log("Enter the value greater than 1");
    }
    let i = 2; 
    while(i<=n){
    let j=2;
    let prime = true;
    while(j<i){
        if(i%j==0){
            prime = false;
        }
        j++;
    }
    if(prime){
        console.log(i+" ");
    }
    i++;
   }
}

console.log("--4.2--Prime Number till n stored in an array--");

{
    //this program also returns Prime number till nth term, but stores them in an array and display it at the end of program.
     let n= Number(prompt("Enter the value of n to get all the prime NUmber till then: "));
    if(n<=1){
        console.log("Enter the value greater than 1");
    }
    let i = 2;
    let index=0; 
    let primeNums = [];
    while(i<=n){
    let j=2;
    let prime = true;
    while(j<i){
        if(i%j==0){
            prime = false;
        }
        j++;
    }
    if(prime){
        primeNums[index] = i;
        index++;
    }
    i++;
   }
   console.log("Prime Numbers Till "+n+" : "+primeNums);
}

console.log("--4.3--n number of Prime Numbers.")

{
    // Number of Prime Number we want to see. for example: 5 prime Numbers.
    let j=2; let count=0;
    let number = Number(prompt("Enter the Number of prime number you want to see: "));
    while(true){
        let prime = true;
        let i=2; 
        while(i<j){
            if(j%i==0){
                prime = false;
            }
            i++;
        }
        if(prime){
            console.log(j);
            count++;
        }
        if(count===number){
                break;
            }10
        j++;
    }
}


console.log("--5-----------------------------------");

// 5. Create a for loop that prints number 1 to 10 in reverse order.

{
    for(let i=10;i>=1;i--)
    {
        console.log(i);
    }
}

console.log("--6-------------------------------------");

// 6. Using continue only print positive numbers from the given array [1,-6,5,7,-98]

{
    let nums = [1,-6,5,7,-98];
    for(let i =0;i<nums.length;i++){
        if(nums[i]<0){
            continue;
        }else{
            console.log(nums[i]);
        }
    }
}

console.log("--7---------------------------------------");

// 8. Using accumulator pattern concatenate all the strings in the given array :
//    ["I","wish","to",'wash',"my","Irish",'wristwatch'];


//
{
    let arr = ["I","wish","to",'wash',"my","Irish",'wristwatch'];
    let myString = "";
    for(let i=0;i<arr.length;i++){
        myString = myString+" "+arr[i];
    }
    console.log(myString);
}

//Using array method join() to concatenate all the strings in the given array;
{
    let  arr = ['She','sells','seashells','by','the','seashore'];
    let str1 = arr.join();
    console.log(str1); // She,sells,seashells,by,the,seashore
    
    let str2 = arr.join(" ");
    console.log(str2); // She sells seashells by the seashore

    let str3 = arr.join("$");
    console.log(str3);  // She$sells$seashells$by$the$seashore

}

/*

//Array join()
//The join() method joins all array elements into a string.
// Works same as toString, in addition we can specify the separator

*/

// Using toString() method

{
    let  arr = ['She','sells','seashells','by','the','seashore'];
    let str1 = arr.toString();
    console.log(str1); // She,sells,seashells,by,the,seashore
    
    let str2 = arr.toString(" ");
    console.log(str2); // She,sells,seashells,by,the,seashore

    let str3 = arr.toString("$");
    console.log(str3);  // She,sells,seashells,by.the,seashore

}

// We cannot define a custom separator when using the toString() method.

