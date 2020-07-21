// var obj = {
//     firstName: "Temidayo",
//     lastName: "George",
//     occupation:"Web Developer"
//     };
   
//     console.log(obj.firstName);
 
//     console.log(obj.lastName);

//     console.log(obj.occupation);
   
//     console.log(obj["firstName"]);
    
//     console.log(obj["lastName"]);
   
//     console.log(obj["occupation"]);

//     obj.hobby= "Reading";

//     delete obj.occupation;
//     console.log(obj);
//     obj;

// part3
function myName(){
    return "George Temidayo";
    }

    var returnValue = myName();
    console.log(returnValue);
    break;
    
// part3 ii
    
    var favoriteFood =  ["pizza","ice cream"];
    function randomFood() {
    return Math.floor(Math.random() * favoriteFood.length);
    }
    var returnValue = randomFood();
    console.log(returnValue);
    break;

// part3 iii
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    function displayOddNumbers() {
    for(i=0; i < numbers.length; i++){
    if(numbers[i]%2!==0)
    console.log(numbers[i]);
    }
    }
    displayOddNumbers();    
    break;


// part3 iv
    function displayEvenNumbers(){
        for (i=0; i < numbers.length; i++){
        if(numbers[i]%2==0)
        console.log(numbers[i]);
        }
        }
        displayEvenNumbers();

 // part3 v      
        function returnFirstOddNumber(){
            for (i=0; i < numbers.length; i++){
            if(numbers[i]%3!==0, numbers[i]===1)
            console.log(numbers[i]);
            }
            
            }
            returnFirstOddNumber();

 // part3 vi
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        function returnFirstEvenNumber(){
        for(i=0; i<numbers.length; i++){
        if(numbers[i]%2==0, numbers[i]===2)
        console.log(numbers[i]);
        }

        }
        returnFirstEvenNumber();

 // part3 vii
            function returnFirstHalfNumber(){
                for (i=0; i < numbers.length; i++){
                if(numbers[i]<6)
                console.log(numbers[i]);
                }
                
                
                }
                returnFirstHalfNumber();  
 // part3 viii  
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        function returnSecondHalf(){
        for(i=0; i<numbers.length; i++){
        if( numbers[i]>5)
        console.log(numbers[i]);
        }
        
        }
        returnSecondHalf();
// part4a
    var a=2;
    var b=2;

    function add(a, b){
        return a + b;
    }
    add(a, b);

    var a=2;
    var b=2;

    function subtract(a, b){
        return a - b;
    }
    subtract(a, b);


    var a=2;
    var b=2;

    function multiply(a, b){
        return a * b;
    }
    multiply(a, b);

    var a=2;
    var b=2;

    function divide(a, b){
        return a/b;
    }
    divide(a, b);

// part4b
        var myFirstName = "Tim"; 
        function sayHello(string){
        if(string === myFirstName){
        return "Hello Boss";
        }
        return "Hello" +" "+ string;
        }

        sayHello("Tim")

        sayHello("Janey")

        sayHello("Elie")
// part4c
function average(arr){
    var sum =0;
    for (var i=0; i< arr.length; i++){
    sum+=arr[i];}
    return sum/arr.length;
    }

    average([1,2,3,4,5]);
    average([1,2,3,4,5,6]);
    average([10,20]);

// part4d
    function createStudent(firstName,lastName){
        return{ firstName: firstName,
                lastName: lastName};
        }
        createStudent("Elie", "Schoppik");
        createStudent("Tim", "Garcia");

// part4e
     var tim = createStudent("Tim", "Garcia");
    var matt = createStudent("Matt", "Lane");
    var elie = createStudent("Elie", "Schoppik");

    var students = [tim, matt, elie];
// part4f 
    function findStudentByFirstName(name){
        var lowerCasedName = name.toLowerCase();
        for(var i = 0; i < students.length; i++){
            if(students[i].firstName.toLowerCase() === lowerCasedName){
                return true;
            }
        }
        return false;
    }
    findStudentByFirstName('elie') 

// part4g    
    function extractEveryThird(arr){
        var newArr = [];
        for(var i = 2; i < arr.length; i += 3){
            newArr.push(arr[i]);
        }
        return newArr;
    }
    extractEveryThird([1,2,3]);
// part4h
    function countEvensAndOdds(arr){
        var countObj = {
            oddCount: 0,
            evenCount: 0
        }
        for(var i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 0){
                countObj.evenCount++;
            } else {
                countObj.oddCount++;
            }
        }
        return countObj;
    }

// part4i
    // function onlyCapitalLetters(str){
    //     var newStr = '';
    //     for(var i = 0; i < str.length; i++){
    //         if(str[i].charCodeAt(0) < 91 && str[i].charCodeAt(0) > 64 ){
    //             newStr += str[i];
    //         }    
    //     }
    //     return newStr;
    // }
// part 5a
(function displayName(firstName, lastName){
    return firstName +  " " + lastName;
})('Elie', 'Schoppik')

// part5b
function createCalculator(){
    return {
        add: function(a,b){
            return a + b;
        },
        subtract: function(a,b){
            return a - b;
        },
        multiply: function(a,b){
            return a * b;
        },
        divide: function(a,b){
            return a / b;
        }
    }
}

// part6a
var firstName = 'Elie';

function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}

displayFirstName();
 // 'Tim' is returned since the firstName variable defined in the function scope is return.
//  JavaScript always starts from within
//  and works its way out (to outside functions and eventually the global scope).

// part6b
function displayFirstName(){
    var firstName = 'Tim';
    return firstName;
}

displayFirstName();

console.log(firstName) //?
// ReferenceError - firstName is not defined.
//  We get an error because we are trying to access a variable defined in a function outside of its scope. 

// part6c
console.log(firstName) //?
var firstName = "Elie"

// undefined is output because the var firstName; is hoisted to the top of the code so it actually looks like this under the hood

// part6d
console.log(firstName) // ?
firstName = 'Elie'

// since variables that do not use the var keyword are NOT hoisted, this will return a 
// ReferenceError - firstName is not defined.

// part6e
function sayHi(){
    return 'Hi ' + firstName;
    var firstName = 'Elie'
}

sayHi(); // "Hi undefined", since the firstName variable uses the var keyword, it is hoisted to the top and it's value is initialized to undefined. It looks a bit like this:

// part6f
function sayHi(){
    return 'Hi ' + firstName; 
    firstName = 'Elie'
}

sayHi(); // ReferenceError - firstName is not defined. 
// Since we are not using the var keyword, the firstName variable does not get hoisted and JavaScript has no reference to the firstName variable.

// part6g
sayHi(); // ?

function sayHi(){
    return 'Hi!';
}

// since function declarations are always hoisted, this will simple return "Hi!"

// part6h
sayHi(); // ?

var sayHi = function(){
    return 'Hi!';
}

// TypeError: sayHi is not a function. Since we are using the var keyword, the declaration of the variable get's hoisted, but not its definition so the code looks like this:

// part7
function printDay(num){

    var dates = {
      1: "Sunday",
      2: "Monday",
      3: "Tuesday",
      4: "Wednesday",
      5: "Thursday",
      6: "Friday",
      7: "Saturday",
    };
    return dates[num];
  }
  
  
function lastElement(arr){
    return arr[arr.length-1];
  }
  
  function numberCompare(a,b){
    if(a === b){
      return 'Numbers are equal';
    } else if(a > b){
      return 'First is greater';
    }
    return 'Second is greater';
  }
  
  function singleLetterCount(str1, letter){
    var finalCount = 0;
    for(var i=0; i< str1.length; i++){
      if(str1[i].toLowerCase() === letter.toLowerCase()){
        finalCount++;
      }
    }
    return finalCount;
  }


  function multipleLetterCount(str){
    var finalObj = {};
    for(var i =0; i< str.length; i++){
      if (!(str[i] in finalObj)){
        finalObj[str[i]] = 1;
      } else {
        finalObj[str[i]]++;
      }
    }
    return finalObj;
  }

  function arrayManipulation(arr, command, position, val){
    if(command === 'remove'){
      if(position === 'end'){
        return arr.pop();
      }
        return arr.shift();
    }
    else if(command === 'add'){
      if(position === 'end'){
        arr.push(val)
        return arr;
      }
      arr.unshift(val)
      return arr;
    }
  }


  function isPalindrome(str){
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
  
    for(var i =0; i<str.length/2; i++){
      if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
        return false;
      }
    }
    return true;
  }
  
