function populate() {
	if (quiz.isEnded()){

		showScores();

	}else{
		//show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i < choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			
			guess("btn"+ i, choices[i]);

			
		}
			showProgress();
	}
};

function guess(id, guess){
		var button = document.getElementById(id);
		button.onclick = function(){
			quiz.guess(guess);
			populate();
		}


};

function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question" + "&nbsp;"+ currentQuestionNumber + "&nbsp;" + "of" + "&nbsp;" + quiz.questions.length;
}

function showScores(){
	var gameOverHtml = "<h1> Result</h1>";
	gameOverHtml += "<h2 id='score'>Your Score:"  + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;
}

var questions = [
	new Question("Which One is not an Object Oriented programming language?", ["JAVA","C#","C++","C"], "C"),
	new Question("Which language is used for styling webpages?",["HTML","JQUERY","CSS","XML",],"CSS",),
	new Question("There are _____ main components of Object Oriented programming.",["1","6","2","4",],"4"),
	new Question("Which language is used for web apps?",["PHP","PYTHON","JAVASCRIPT","All",],"All"),
	new Question("MVC is a ____.",["Language","Library","Framework","All",],"Framework"),
	new Question("Which of these is an Editor?",["Notepaste","Workpad","Wordpad","Notepad",],"Notepad"),
	new Question("Which of the following is a universal encoding?",["ASCII","ISC","UTF-8","ANSI",],"UTF-8"),
	new Question("____ displays Html Document.",["Editor","Browser","Code App","None",],"Browser"),
	new Question("What is the extension of a javascript file?",[".jsp",".jjp",".jpg",".js",],".js"),
	new Question("which of these extensions is for an HTML document?",[".htm /.html",".hml /.htl",".htlm / .hmt","None",],".htm / .html")
]

var quiz = new Quiz(questions);

populate();