'use strict';

//asking the user for their name and storing it
    var userName = prompt('what is your name?');
    alert('Nice to meet you ' + userName + '.');
    console.log('Your name is ' + userName);

    //the questions that will be asked about me
    var userQuestion = ['Am I a Seattlite?','Am I friendly?', 'Can I play Table Tennis?', 'Do you think I am a Gamer?', 'Do I like Anime?'];
    var correctAnswers = ['no', 'yes', 'yes', 'no', 'yes'];
    var youRight = 'That\'s right! You think you know me huh! Lets see if you get the next one right.';
    var youWrong = 'That\'s Wrong! And you call yourself my friend. Shame on you!';
    //the number of correct and wrong answers
    var correct = 0;
    var wrong = 0;

    //looping thru the question asking for user input
    var i = 0;
    while(i < userQuestion.length) {
      var userRawAnswer = prompt(userQuestion[i]);
      var userAnswer = userRawAnswer.toLowerCase();
      
      if (userAnswer === correctAnswers[i]){
          alert(youRight);
          correct++;
      } else {
          alert(youWrong);
          wrong++;
      }
      
      console.log('Your answer to ' + userQuestion[i] + ' is ' + userRawAnswer + ".");
      i++;     
    }

    //asking for favorite number
    var userGuess = '';
	  var limit = 3;
    var numGuesses = 0;
    //keeps asking the question until 3 is entered or 
	  while (userGuess !== '3' && numGuesses < limit) {
      userGuess = prompt('What is my favorite number?\nHint: The answer is 1 - 20.');
      if(userGuess > '3') {
        alert('Your too high.');
      } else if(userGuess < '3') {
        alert('You too low.');
      } else {
        alert(youRight);
        correct++;
      }
      numGuesses++;
    }

    var userGuesses = 0;
    var guessState = '';
    var isGuessRight = false;
    var livedStates = ['georgia','new york', 'texas', 'new jersey'];

    //finds the userguess inside my answers array
    while(userGuesses < 7 && isGuessRight === false){
      guessState = prompt('Can you guess a state that I have lived in besides Washington?');
      if(livedStates.includes(String(guessState).toLowerCase()) === true){
        isGuessRight = true;
        alert(youRight)
        correct++;
      } else if(guessState === ''){
        alert("Please enter a state.");
      }
      userGuesses++;
    }
    wrong++;
  
      //display in the console how many I got right
    console.log('You got ' + correct + ' correct.');
    console.log('You got ' + wrong + ' wrong.');
    
    //this calculate the score
    var score = correct * (100/7);
    console.log('Your score is ' + score + '!');
   
    //If the score above 60 pass below is fail
    if (score >= 60) {
      document.getElementById('final').innerHTML = 'Your score is ' + score + '.  You do know me I see.';
    } else {
      document.getElementById('final').innerHTML = 'Your Score is ' + score + '. Who are you? Because you clearly don\'t know me';
    }