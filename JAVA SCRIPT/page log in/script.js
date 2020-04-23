var database = [
	{
  	username: "bendzi",
  	password: "zaq1"
	},
	{
  	username: "sally",
  	password: "123"
	},
	{
  	username: "karol",
  	password: "12345"
	},
	{
  	username: "kamils",
  	password: "24512"
	}
];

var newsfeed = [
  	{
    username: "Bobby",
    timeline: "So tired from all that learning!"
  	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username && database[i].password === password) {
			return true;
		}

	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		alert('Sorry, wrong username and password!');
	}
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);