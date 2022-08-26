// nagation between quiz items

let btnQ = document.querySelector('.quiz_item_next');
let itemQ = document.querySelectorAll('.q1_item');
let el_active;

let currentPageQ = document.querySelector('.currentPageQ');
let amountPageQ = document.querySelector('.amountPageQ');

function nextItem() {
	for (let i = 0, length = itemQ.length; i < length; i++) {
    	if (itemQ[i].classList.contains('active')) {
    		el_active = i;
			currentPageQ.textContent = (i + 2);
        break;
		}
		if (itemQ[i+2] === itemQ[itemQ.length - 1]) {
			btnQ.classList.add('none');
		}
		if (itemQ[i+2] === itemQ[itemQ.length - 1]) {
			quizLine.classList.add('none');
			quizLine.classList.remove('active');
		}
 	}

	itemQ.forEach(function(tab) {
    	tab.classList.remove('active');
	});
	if ((el_active+1) === itemQ.length) {
		itemQ[0].classList.add('active')
	} else {
		itemQ[el_active + 1].classList.add('active')
	}
}

amountPageQ.append(itemQ.length - 1);

btnQ.addEventListener('click', nextItem);




// count answers for quiz1

let checkBtnQ = document.querySelector('.showResultBtn');
let count = 0;

function checkQuiz (){
	let q1 = document.q1_Form.q1.value;
	let q2 = document.q1_Form.q2.value;
	let q3 = document.q1_Form.q3.value;
	let q4 = document.q1_Form.q4.value;
	let q5 = document.q1_Form.q5.value;
	let q6 = document.q1_Form.q6.value;
	let q7 = document.q1_Form.q7.value;
	let q8 = document.q1_Form.q8.value;
	let q9 = document.q1_Form.q9.value;
	let q10 = document.q1_Form.q10.value;
	let q11 = document.q1_Form.q11.value;
	let q12 = document.q1_Form.q12.value;
	let q13 = document.q1_Form.q13.value;
	let q14 = document.q1_Form.q14.value;
	let q15 = document.q1_Form.q15.value;
	let q16 = document.q1_Form.q16.value;
	let q17 = document.q1_Form.q17.value;
	let q18 = document.q1_Form.q18.value;
	let q19 = document.q1_Form.q19.value;
	let q20 = document.q1_Form.q20.value;
	let q21 = document.q1_Form.q21.value;
	let q22 = document.q1_Form.q22.value;
	let q23 = document.q1_Form.q23.value;
	let q24 = document.q1_Form.q24.value;
	let q25 = document.q1_Form.q25.value;
	let q26 = document.q1_Form.q26.value;
	let q27 = document.q1_Form.q27.value;
	let q28 = document.q1_Form.q28.value;
	let q29 = document.q1_Form.q29.value;
	let q30 = document.q1_Form.q30.value;

	if(q1 == 1){
		count++;
	}
	if(q2 == 1){
		count++;
	}
	if(q3 == 1){
		count++;
	}
	if(q4 == 1){
		count++;
	}
	if(q5 == 1){
		count++;
	}
	if(q6 == 1){
		count++;
	}
	if(q7 == 1){
		count++;
	}
	if(q8 == 1){
		count++;
	}
	if(q9 == 1){
		count++;
	}
	if(q10 == 1){
		count++;
	}
	if(q11 == 1){
		count++;
	}
	if(q12 == 1){
		count++;
	}
	if(q13 == 1){
		count++;
	}
	if(q14 == 1){
		count++;
	}
	if(q15 == 1){
		count++;
	}
	if(q16 == 1){
		count++;
	}
	if(q17 == 1){
		count++;
	}
	if(q18 == 1){
		count++;
	}
	if(q19 == 1){
		count++;
	}
	if(q20 == 1){
		count++;
	}
	if(q21 == 1){
		count++;
	}
	if(q22 == 1){
		count++;
	}
	if(q23 == 1){
		count++;
	}
	if(q24 == 1){
		count++;
	}
	if(q25 == 1){
		count++;
	}
	if(q26 == 1){
		count++;
	}
	if(q27 == 1){
		count++;
	}
	if(q28 == 1){
		count++;
	}
	if(q29 == 1){
		count++;
	}
	if(q30 == 1){
		count++;
	}
	if(count == 3){
		console.log(`Not bad! You answered ${count} questions correctly`);
	}
	else {
		console.log(`Try again! You answered only ${count} questions correctly`);
	}
}
checkBtnQ.addEventListener('click', checkQuiz);




// show results on a separate page 
let quizLine = document.querySelector('.quiz_line');
let showResultBtn = document.querySelector('.showResultBtn');

let resultPage = document.querySelector('.q1_result_page');
let lastPage = document.querySelector('.q1_item_end');
let quizTotal = document.querySelector('.q1_result_total');
let quizAmount = document.querySelector('.q1_result_amount');

if (lastPage.classList.contains('active')) {
	quizLine.classList.add('none');
	quizLine.classList.remove('active');
}

function showshowResult() {
	lastPage.classList.remove('active');
	quizLine.classList.add('none');
	resultPage.classList.remove('none');

	quizTotal.append(`${count}`);
	quizAmount.append(itemQ.length - 1);


	let yourLevel = document.querySelector('.q1_result_level');
	let numLevel = `${count}`;

	if (28 < numLevel && numLevel <= 30) {
		yourLevel.append('Ваш уровень языка Advanced – С1: продвинутый уровень. На данном уровне обучение больше приобретает характер оттачивания навыков в области фонетики, грамматики, коммуникации и лексики. Слушатели начинают думать на английском языке и полностью избавляются от опоры на родной языке.');
	} 
	if (21 < numLevel && numLevel < 28) {
		yourLevel.append('Upper Intermediate – В2: английский выше среднего. Ступень Upper Intermediate позволяет обучаемым полностью избавиться от языкового барьера и свободно общаться на английском языке практически во всех бытовых, деловых и повседневных ситуациях.');
	} 
	if (15 < numLevel && numLevel < 21) {
		yourLevel.append('Intermediate – В1: средний уровень. Самая важная ступень в изучении английского языка – это Intermediate. Уровень подразумевает пороговое состояние, переходящее в уверенное владение иностранным языком. Знания грамматики и лексики заметно прогрессируют, коммуникативный навык оттачивается и максимально детализируется.');
	} 
	if (10 < numLevel && numLevel < 15) {
		yourLevel.append('Elementary – А2: базовый уровень. Знания английского языка в области фонетики, грамматики и лексики ограничиваются базовыми, предпороговыми навыками.');
	} 
	if (7 < numLevel && numLevel < 10) {
		yourLevel.append('Starter – А1: cтартовый уровень. Начальные навыки общения на английском языке, грамматика, фонетика и лексика – на начальном уровне.');
	} 
	if (0 <= numLevel && numLevel < 7) {
		yourLevel.append('Beginner – А0: нулевой уровень. Навыков общения на английском языке нет, а знаниия грамматики и лексики – на самом начальном уровне.');
	}
	else if (isNaN(numLevel)) {
		alert('Nan');
	}
}

showResultBtn.addEventListener('click', showshowResult);




	