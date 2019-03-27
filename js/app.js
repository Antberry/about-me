'use strict';

    var userName = prompt('what is your name?');
    alert('Nice to meet you ' + userName + '.');
    console.log('Your name is ' + userName);
    var userQuestion = ['Am I a Seattlite?','Am I friendly?', 'Can I play Table Tennis?', 'Do you think I am a Gamer?', 'Do I like Anime?'];
    var correctAnswers = ['no', 'yes', 'yes', 'no', 'yes'];
    var correct = 0;
    var wrong = 0;

    for ( var i = 0;  i < userQuestion.length ; i++ ){
      var userAnswer = prompt(userQuestion[i]);
        if ( userAnswer.toLowerCase() === correctAnswers[i]) {
          alert("That's right! You think you know me huh! Lets see if you get the next one right.");
          correct++;
        } else {
          alert("That's Wrong! And you call yourself my friend. Shame on you!");
          wrong++;
        } 
        console.log('Your answer to ' + userQuestion[i] + ' is ' + userAnswer + ".")
    }

    console.log('You got ' + correct + ' correct.');
    console.log('You got ' + wrong + ' wrong.');
    
    var score = correct * 20;
    console.log('Your score is ' + score + '!');
   
    if (score >= 60) {
      document.getElementById('final').innerHTML = 'Your score is ' + score + '.  You do know me I see.';
    } else {
      document.getElementById('final').innerHTML = 'Your Score is ' + score + '. Who are you? Because you clearly don\'t know me';
    }