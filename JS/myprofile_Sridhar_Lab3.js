var user = getUserName();
console.log('user name:', user);
alert('Hi there ' + user + 'I\'m going to ask you few questions. Let see ow much you will score. Start the Game');

var correctanswers = 0;
var totalquestions = 0;

var Question1 = prompt(user + ' My favorite sportsman is Steffi Graf. Please answer yes/no Or y/n');
console.log('user answer1:', Question1);
totalquestions++;
verifyAnswer(Question1, 4);

var Question2 = prompt(' I am working for Amazon.Please answer yes/no Or y/n');
console.log('user answer2:', Question2);
totalquestions++;
verifyAnswer(Question2, 3);

var Question3 = prompt(' I love to watch Horror Movies.Please answer yes/no Or y/n');
console.log('user answer3:', Question3);
totalquestions++;
verifyAnswer(Question3, 2);

var Question4 = prompt(' My favorite Heroine is Rakul.Please answer yes/no Or y/n');
console.log('user answer4:', Question4);
totalquestions++;
verifyAnswer(Question4, 1);

var Question5 = prompt(' I am not married .Please answer yes/no Or y/n');
console.log('user answer5:', Question5);
totalquestions++;
verifyAnswer(Question5, 0);

if (parseInt(correctanswers) > 0) {
    alert('Hi ' + user + ' ! You have guessed ' + correctanswers + ' correctly out of ' + totalquestions  + ', ' + (correctanswers / totalquestions * 100) + ' % of your guesses are correct.');
}
else {
    alert('Hi ' + user + ' ! Sorry, none of your guesses are correct, try again');
}

var fav_num;
var numtimes = 1;

while (fav_num !== 45) {
    fav_num = parseInt(prompt('Can you guess my favorite number between 1 to 100?'));

    if (fav_num < 20) {
        console.log('user answer6:', fav_num);
        alert('Sorry! You guessed too low! You can double it up.');
        numtimes++;
    } else if (fav_num >= 30 && fav_num <= 44) {
        console.log('user answer6:', fav_num);
        alert('Sorry! You guessed low!');
        numtimes++;
    } else if (fav_num > 45 && fav_num < 100) {
        console.log('user answer6:', fav_num);
        alert('Sorry! You guessed high! But you are close enough.');
        numtimes++;
    } else if (fav_num >= 100) {
        console.log('user answer6:', fav_num);
        alert('Sorry! You guessed Too high!');
        numtimes++;
    } else if (isNaN(fav_num) || fav_num === null) {
        console.log('user answer6:', fav_num);
        alert('Please enter an actual number');
        numtimes++;
    }
}
alert('Total number of guesses: ' + numtimes + '.');
alert('Hi ' + user + 'It took ' + numtimes + ' guesses until you got it ');


var heroine = ["Madhuri", "Ramya", "Anushka", "rakul", "Simran","Keerthi"];
var chance = 1;
for (i = 0; i < heroine.length; i++) {
    alert('This is your guess number ' + chance + '.');
    var fav_heroine = prompt('What is one of my favorite Heroine?');
    console.log('user answer7:', fav_heroine);
    if (heroine.includes(fav_heroine.toLowerCase())) {
        alert('Yes, it is right!!!! You got it corretc on the ' + chance + ' chance.');
        chance++;
        break;
    }
    else {
        alert('Incorrect guess - you are running out of chances. Think!!');
        chance++;
    }
}
console.log('question 8:', heroine);
    alert('Possible answers are ' + heroine + '.');

	
/* Function declarations */
function getUserName() {
    var name = prompt("What's your name?")   
    while (name === null || name === "") {
        var name = prompt('Please enter your name');             
    }
    return name;
}

/* Check answer */
function verifyAnswer(Question, QuestionLeft) {
    if (Question != null && Question != '') {
        if (Question.toUpperCase() === 'Y' || Question.toUpperCase() === 'YES') {
            if (QuestionLeft = 0) {
                alert('You are correct. We are done with the questions. Let me provide more details about me in my profile');
            }
            else {
                alert('You are correct. Lets move on'|| QuestionLeft ||' more to go');
            }
            correctanswers++;
        }
        else if (Question.toUpperCase() === 'N' || Question.toUpperCase() === 'NO') {
            if (QuestionLeft = 0) {
                alert('You are wrong. Lets try another question, Let me provide more details about me in my profile');
            } else {
                alert('You are wrong. Lets try another question, we have '||QuestionLeft ||'more. All the best!!');
            }
        }
    }
    else {
        if (QuestionLeft = 0) {
            alert('Please answer only in yes/no Or y/n. Let me provide more details about me in my profile');
        } else {
            alert('Please answer only in yes/no Or y/n. All the best!!');
        }
    }
}