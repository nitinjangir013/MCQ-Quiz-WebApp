const questionContainer = document.getElementById("que_div");
const yourAnswerDiv = document.getElementById('your_answer');
const textNumberDiv1 = document.getElementById('result');
const scoreDiv = document.getElementById('score');
const userAnswer = document.getElementsByTagName('input');
const btn = document.getElementsByClassName('btn');
let question = '';
var storeData = [];
let questions = ["Javascript is an _______ language?","Which of the following keywords is used to define a variable in Javascript?","Which of the following methods is used to access HTML elements using Javascript?","Which of the following methods can be used to display data in some form using Javascript?"];
let q1 = {a:"Object-Oriented",b:"Object-Based",c:"Procedural",d:"None Of the Above",right:'a'};
let q2 = {a:"Var",b:"let",c:"Both A and B",d:"None Of the Above",right:'c'};
let q3 = {a:"getElementById()",b:"getElementsByClassName()",c:"Both A and B",d:"None Of the Above",right:'c'};
let q4 = {a:"document.write()",b:"console.log()",c:"window.alert()",d:"All Of the Above",right:'d'};
let options = [q1,q2,q3,q4];
question = '';
var counter = 0;
renderQuestion();
function next() {
	yourStore();
	renderQuestion();
	
}

function renderQuestion()
{
	if (counter<options.length) {
	question='<h2 class="heading">Q: '+(counter+1)+'. '+questions[counter]+'</h2><div class="options_container">';		
	question+="<div class='option_input'><input name='options_"+(counter)+"' type='radio' value='a'>"+options[counter].a+"</div>";
	question+="<div class='option_input'><input name='options_"+(counter)+"' type='radio' value='b'>"+options[counter].b+"</div>";
	question+="<div class='option_input'><input name='options_"+(counter)+"' type='radio' value='c'>"+options[counter].c+"</div>";
	question+="<div class='option_input'><input name='options_"+(counter)+"' type='radio' value='d'>"+options[counter].d+"</div></div><div class='btns_container'><button onclick='pre()' class='btn'>Pre.</button><button onclick='result(options["+counter+"])' class='btn'>Result</button><button onclick='next()' class='btn'>Next</button></div>";
	questionContainer.innerHTML = question;
	}
	if (counter===questions.length) {
		btn[1].style.display = "block";
		btn[2].style.display = "none";
	}
}


function pre() {
	btn[2].style.display = "block";
	btn[1].style.display = "none";
	if (counter<5) {
		if (counter>0) {
			counter--;
		}
	question='<h2 class="heading">Q: '+(counter+1)+'. '+questions[counter]+'</h2><div class="options_container">';		
	question+="<div class='option_input'><input name='options_"+counter+"' type='radio' value='a'>"+options[counter].a+"</div>";
	question+="<div class='option_input'><input name='options_"+counter+"' type='radio' value='b'>"+options[counter].b+"</div>";
	question+="<div class='option_input'><input name='options_"+counter+"' type='radio' value='c'>"+options[counter].c+"</div>";
	question+="<div class='option_input'><input name='options_"+counter+"' type='radio' value='d'>"+options[counter].d+"</div></div><div class='btns_container'><button onclick='pre()' class='btn'>Pre.</button><button onclick='result(options["+counter+"])' class='btn'>Result</button><button onclick='next()' class='btn'>Next</button></div>";
	questionContainer.innerHTML = question;
	}
}

function yourStore()
{
	let checkedOption = '';
	for(i=0;i<userAnswer.length;i++)
	{
		if(userAnswer[i].checked === true)
		{
			checkedOption = userAnswer[i].value;
		}
	}
	if(checkedOption!='')
	{
		storeData[counter]=checkedOption;
	}
	
	yourAnswerDiv.innerHTML += '<div class="your_choice"><div>'+storeData[counter]+'</div><div>'+options[counter].right+'</div></div>';
	counter++;
}
function result()
{
	scoreDiv.innerHTML = "Score";
	let score = 0;
	textNumberDiv1.innerHTML="";
	for(j=0;j<userAnswer.length;j++)
	{
		if (storeData[j]==options[j].right) {
			textNumberDiv1.innerHTML += '<div id="result_div">'+(j+1)+'.Right Answer</div>';
			score++;
		}
		else
		{
			textNumberDiv1.innerHTML += '<div id="result_div">'+(j+1)+'.Wrong Answer</div>';
		}
	}
	scoreDiv.innerHTML = "Score : "+score+"/"+userAnswer.length;
}