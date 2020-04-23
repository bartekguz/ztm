// using this array, 
	var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// 1. Remove the Banana from the array.
	array.shift();
// 2. Sort the array in order. 
	array.sort();
// 3. Put "Kiwi" at the end of the array.
	array.push("Kiwi");
// 4. Remove "Apples" from the array.
	array.splice(0, 1);
// 5. Sort the array in reverse order. 
	array.reverse();

	var input = document.getElementById("userinput");
	var ul = document.querySelector("ul");

	li.appendChild(document.createTextNode(input.value));

	button.addEventListener("click", addListAfterClick);

// Destructuring

	const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const { firstName, lastName, age, eyeColor } = person;

//////////////////////////////////////////////////////////////////////
// Complete the below questions using this array:
const array = [
	{
		username: "john",
		team: "red",
		score: 5,
		items: ["ball", "book", "pen"]
	},
	{
		username: "becky",
		team: "blue",
		score: 10,
		items: ["tape", "backpack", "pen"]
	},
	{
		username: "susy",
		team: "red",
		score: 55,
		items: ["ball", "eraser", "pen"]
	},
	{
		username: "tyson",
		team: "green",
		score: 1,
		items: ["book", "pen"]
	},

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray = []
array.forEach(user => {
	let { username } = user;
	username = username + "!";
	newArray.push(username);
})
console.log(newArray);

//Create an array using map that has all the usernames with a "?" at the end of usernames
const mapArray = array.map(user => {
	let { username } = user;
	return username + "?";
})
console.log(mapArray);

//Filter the array to only include users who are on team: red
const filterArray = array.filter(user => {
	return user.team === "red";
})
console.log(filterArray);

//Find out the total score of all users using reduce
const total = array.reduce((acc, user) => {
	return acc + user.score
}, 0);
console.log(total);


// (1), what is the value of i? INDEX of the array.
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})



//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);



// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.color = color;
		this.type = type;
	}
}

class Mamal extends Animal {
	constructor(name, type, color) {
		super(name, type, color)
	}
	sound() {
		console.log(`Moooo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
	}
}

const cow = new Mamal('Shelly', 'cow', 'brown');

//

turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

//

turtle = turtle.trim().padEnd(9, '=');

'     ||<- Start line'
'🐢======='
'       🐇'

//

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map(value => value.join(" ")).join(' ')

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
//Solution:
console.log(array.flat(2))


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
//Solution:
console.log(greeting.flatMap(x => x.join(' ')))


//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
//Solution
console.log(greeting.flatMap(x => x.join(' ')).join(' '))

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
//Solution
console.log(trapped.flat(Infinity))
// Infintiy is actually a LARGE number in JavaScipt. It represents the maximum amount of memory that we can hold for a number! Learn more here: https://riptutorial.com/javascript/example/2337/infinity-and--infinity

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
//Solution:
console.log(userEmail3.trimEnd().trimStart())


//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
//Solution
const usersArray = Object.entries(users)

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
//Solution
updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2])

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
//Solution
const updatedUsers = Object.fromEntries(updatedUsersArray)
console.log(updatedUsers)

//


const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  let highest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (highest < arr[i]) {
      highest = arr[i];
    }
  }
  return highest
}

function biggestNumberInArray2(arr) {
  let highest = 0;
  arr.forEach(item => {
    if (highest < item) {
      highest = item;
    }
  })
  return highest;
}

function biggestNumberInArray3(arr) {
  let highest = 0;
  for (item of arr) {
    if (highest < item) {
      highest = item;
    }
  }
  return highest;
}


biggestNumberInArray3(array3)


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let newArray = [];

function answer(arr) {
  arr.sort(function(a, b) {
    return a-b
  });
  
  let toPush = 0;
  arr.forEach(function(num, i) {
    if (arr[i] === arr[i+1]) {
      toPush++;
    }
    else if (arr[i] !== arr[i + 1] && arr[i] === arr[i - 1]) {
    arr[i - toPush] = arr.slice(i - toPush, i+1);
    toPush = 0;
  }
});
  
   arr.forEach(function(num, ind) {
    while (arr[ind][0] && arr[ind][0] === arr[ind + 1]) {
      arr.splice(ind + 1, 1);
    }
  });
  return arr;
}

answer(array);



//



/*Question 2: Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together, give the target number. 
For example: answer([1,2,3], 4)should return [1,3]*/

function arraySum(arr, target) {
  arr.forEach(function(num, i) {
    for (let j = 1; j <= arr.length; j++) {
      // check each element and iterate over the rest to find out if their sum is the target
      // j is 1, we don't want to sum each element with themselves
      if (arr[i] + arr[i + j] === target) {
        // create a new array and put correct elements into that
        let arr2 = [arr[i], arr[i + j]];
        console.log(arr2);
        return arr2;
      }
    }
  });
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let target = 14;

arraySum(arr, target);
// [4, 10]
// [5, 9]
// [6, 8]



//


function checkBasket(basket, lookingFor) {
  for (item in basket) {
    if (item === lookingFor) {
      return `${lookingFor} is in your basket`
    }
  }
  return 'that does not exist in your basket'
}


//


// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect 
// the formats so that if you enter HEX color 
// format it returns RGB and if you enter RGB color format it returns HEX.

convertToRGB("#f4e3d8");
// Your color is RGB(244, 227, 216)

function convertToRGB(str) {
  // put each char into an array and remove #
  let strArr = str.split("")
  strArr.shift();
  for (let i = 0; i < strArr.length; i++) {
    // check the value of string number
    if (strArr[i] <= 10) {
      strArr[i] = Number(strArr[i])
    }
    switch (strArr[i]) {
      case "a":
        strArr[i] = 10;
        break;
      case "b":
        strArr[i] = 11;
        break;
      case "c":
        strArr[i] = 12;
        break;
      case "d":
        strArr[i] = 13;
        break;
      case "e":
        strArr[i] = 14;
        break;
      case "f":
        strArr[i] = 15;
        break;
      default:
        break;
    }
  }
  let red = (16 * strArr[0]) + strArr[1];
  let green = (16 * strArr[2]) + strArr[3];
  let blue = (16 * strArr[4]) + strArr[5];
  console.log(`Your color is RGB(${red}, ${green}, ${blue})`);
}

convertToHex(231, 55, 145);
// Your Hex Number is #E73791


function convertToHex(red, green, blue) {
  let r1 = parseInt(red / 16);
  let r2 = red % 16;
  let g1 = parseInt(green / 16);
  let g2 = green % 16;
  let b1 = parseInt(blue / 16);
  let b2 = blue % 16;
  let strArr = [r1, r2, g1, g2, b1, b2];

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] < 10) {
      strArr[i] = strArr[i].toString();
    }
    switch (strArr[i]) {
      case 10:
        strArr[i] = "A";
        break;
      case 11:
        strArr[i] = "B";
        break;
      case 12:
        strArr[i] = "C";
        break;
      case 13:
        strArr[i] = "D";
        break;
      case 14:
        strArr[i] = "E";
        break;
      case 15:
        strArr[i] = "F";
        break;
      default:
        break;
    }
  }

  console.log(`Your Hex Number is #${strArr[0]}${strArr[1]}${strArr[2]}${strArr[3]}${strArr[4]}${strArr[5]}`);
}

