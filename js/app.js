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
		answer:"Dagobah"
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
		answer:"12"
	},
		{
		question: "Boba Fett's armor is of what origin?",
		choices: [
		"Kaminoan",
		"Imperial",
		"Hutt",
		"Mandalorian"
		],
		question_num:2,
		answer:"Mandalorian"
	},
		{
		question: "Where is Han Solo frozen in Carbonite?",
		choices: [
		"Bespin",
		"The Death Star",
		"Dagobah",
		"Endor"
		],
		question_num:3,
		answer:"Bespin"
	},
		{
		question: "Darth Vader was born on which planet?",
		choices: [
		"Coruscant",
		"Tatooine",
		"Alderaan",
		"Corellia"
		],
		question_num:4,
		answer:"Tatooine"
	},
		{
		question: "Who shot first?",
		choices: [
		"Luke Skywalker",
		"Obi-Wan Kenobi",
		"Greedo",
		"Han Solo"
		],
		question_num:5,
		answer:"Han Solo"
	},
]

//variables
	var currentQuestion = 0;
	var newChoices= "<li><button id='sub' type = 'submit' class = '1-button'>" + Questions[currentQuestion].choices[0] + "</button></li>"
				  + "<li><button id='sub' type='submit' class = '2-button'>" + Questions[currentQuestion].choices[1] + "</button></li>" 
				  + "<li><button id='sub' type='submit' class = '3-button'>" + Questions[currentQuestion].choices[2] + "</button></li>" 
				  + "<li><button id='sub' type='submit' class = '4-button'>" + Questions[currentQuestion].choices[3] + "</button></li>" ;


//start a new game	
	function newGame() {
		$('.new-game').on ('click', function() {
			location.reload();
			})
		}

//hide question bar	
	$('.question-title').hide();
	$('.brightlight').hide();
//start the game
	$('.start-button').on('click', function() {
		currentQuestion = 0;
		correct = 0;
		newChoices;
		var newquestion = "<div>" + Questions[currentQuestion].question + "</div>";
		$('.question-list').html(newChoices);
		$('.question-title').html(newquestion);
		$('.question-title').show();
		$('.currentQ').html("Question 1 of 6");
		nextQuestion();
		newGame();
		lightSaber();
		
	});


//cycles through the quiz
	function nextQuestion() {
		  currentQuestion = 0;
		  correct = 0;
		  ans_check();
		 
		  $('.question-list').on('click', '#sub', function() {
		     if (currentQuestion < 5) {
		     	 currentQuestion++;
			   var newquestion = "<div>" + Questions[currentQuestion].question + "</div>";
			   var newChoices= "<li><button id='sub' type = 'submit' class = '1-button'>" + Questions[currentQuestion].choices[0] + "</button></li>"
				  + "<li><button id='sub' type='submit' class = '2-button'>" + Questions[currentQuestion].choices[1] + "</button></li>" 
				  + "<li><button id='sub' type='submit' class = '3-button'>" + Questions[currentQuestion].choices[2] + "</button></li>" 
				  + "<li><button id='sub' type='submit' class = '4-button'>" + Questions[currentQuestion].choices[3] + "</button></li>" ;
				$('.question-list').html(newChoices);
				$('.question-title').html(newquestion);
				$('.question-title').show();
				counter(); 
				
			} else {
				$(".question-title").hide();
				$('.question-list').hide();
					if (correct > 4) {
					$('.score').html("Congratulations! You've answered "+ correct + " of " + (currentQuestion+1)  + " correct! The Force is strong with you!");
					$('.currentQ').hide();
					$('.light').hide();
					$(".brightlight").css({'background-color': 'blue'});
					
					} else {
						$('.score').html("You've only answered "+ correct + " of " + (currentQuestion+1)  + " correct. I find your lack of faith disturbing...");
						$('.currentQ').hide();
						$('.light').hide();
						$('.brightlight').css({'background-color': 'red'});
					}
				}
			
			}) 
		
		}
//checks for correct or incorrect answers  
   function ans_check() {
  	correct=0;
  	$('.question-list').on('click', '#sub', function() {
	var useranswer = Questions[currentQuestion].answer;
	var userguess = $(this).text();
  	
  	console.log(userguess);
  	
	  	if (useranswer == userguess) {
	  		correct++;
	  		$('.score').html("Correct! You've answered "+ correct + " of " + (currentQuestion+1)  + " correct!");
	  		$(userguess).css({"background-color" : "green"});
	  	} else {
	  		$('.score').html("Sorry, that wasn't the droid I was looking for... You've answered "+ correct + " of " + (currentQuestion+1)  + " correct!");
	  		} 
		})

	}

 

//keeps track of current question  
	function counter() {
  			$('.currentQ').html("Question " + (currentQuestion + 1) +' of 6');
  		
  	}
//lightsaber scrolling effect 
  function lightSaber() {
  		
  		$('.question-list').on('click', function() {
  		
  		$('.brightlight').css({'width': '0px'});	
	  		if (currentQuestion == 0) {
	  			$('.brightlight').css({'width': '0px'});
	  		} else if (currentQuestion==1) {
	  		  	$('.brightlight').show();
	  		  	$('.brightlight').css({'width': '75px'});
	  		} else if (currentQuestion == 2) {
	  			$('.brightlight').css({'width': '150px'});
	  		} else if (currentQuestion == 3) {
	  			$('.brightlight').css({'width': '225px'});
	  		} else if (currentQuestion == 4) {
	  			$('.brightlight').css({'width': '300px'});
	  		} else if (currentQuestion == 5) {
	  			$('.brightlight').css({'width': '375px'});
	  		} else {
	  			$('.brightlight').css({'width': '450px'});
	  		}  
	  		
  	});
  		
  }




});