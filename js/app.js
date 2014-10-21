$(document).ready(function() {
 //questions
 	var Questions = [
		{
		question: "On which planet does Luke first meet Yoda?",
		choices: [
		"Hoth",
		"Dagobah",
		"Endor",
		"Tatooine"
		],
		question_num:0,
		answer:1
	},
		{
		question: "According to Han Solo, in how many Parsecs did the Millenium Falcon make the Kessel run?",
		choices: [
		"10",
		"14",
		"12",
		"8"
		],
		question_num:1,
		answer:2
	},
		{
		question: "Boba Fett's armor is of what origin?",
		choices: [
		"Mandalorian",
		"Imperial",
		"Hutt",
		"Kaminoan"
		],
		question_num:2,
		answer:1
	},
		{
		question: "On which planet does Luke first meet Yoda?",
		choices: [
		"Hoth",
		"Dagobah",
		"Endor",
		"Tatooine"
		],
		question_num:3,
		answer:1
	},
		{
		question: "On which planet does Luke first meet Yoda?",
		choices: [
		"Hoth",
		"Dagobah",
		"Endor",
		"Tatooine"
		],
		question_num:4,
		answer:1
	},
		{
		question: "Bonus Question: Who shot first?",
		choices: [
		"Luke Skywalker",
		"Obi-Wan Kenobi",
		"Greedo",
		"Han Solo"
		],
		question_num:5,
		answer:3
	},
]


	var correct = 0;
	var currentQuestion = 0;
	
//hide question bar	
	$('.question-title').hide();
//start the game
	$('.start').on('click', function() {
	currentQuestion = 0;
	var newChoices= "<li><button id='sub' type = 'submit' class = '1-button'>" + Questions[currentQuestion].choices[0] + "</button></li>"
	  + "<li><button id='sub' type='submit' class = '2-button'>" + Questions[currentQuestion].choices[1] + "</button></li>" + "</button></li>" 
	  + "<li><button id='sub' type='submit' class = '3-button'>" + Questions[currentQuestion].choices[2] + "</button></li>" + "</button></li>" 
	  + "<li><button id='sub' type='submit' class = '4-button'>" + Questions[currentQuestion].choices[3] + "</button></li>" ;
	var newquestion = "<div>" + Questions[currentQuestion].question + "</div>";
	$('.question-list').html(newChoices);
	$('.question-title').html(newquestion);
	$('.question-title').show();
	nextQuestion();
	
	});

//start a new game	
	function newGame(e) {
		e.preventDefault();
		$('.new-game').on ('click', function() {
			location.reload();
		})
	}

//cycles through the quiz
	function nextQuestion() {
		  $('.question-list').on('click', '#sub', function() {
	     	 currentQuestion++;
		   var newquestion = "<div>" + Questions[currentQuestion].question + "</div>";
		   var newChoices= "<li><button id='sub' type = 'submit' class = '1-button'>" + Questions[currentQuestion].choices[0] + "</button></li>"
			  + "<li><button id='sub' type='submit' class = '2-button'>" + Questions[currentQuestion].choices[1] + "</button></li>" + "</button></li>" 
			  + "<li><button id='sub' type='submit' class = '3-button'>" + Questions[currentQuestion].choices[2] + "</button></li>" + "</button></li>" 
			  + "<li><button id='sub' type='submit' class = '4-button'>" + Questions[currentQuestion].choices[3] + "</button></li>" ;
			$('.question-list').html(newChoices);
			$('.question-title').html(newquestion);
			$('newChoices').remove();
			$('.question-title').show();
			return;
			
			 }) 
		
		}
  

  function lightSaber() {

  }




});