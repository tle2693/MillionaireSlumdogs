
/*important: assummes that the var name from PHP back end is as follow
please confirm with Steve*/
/*var for test*/
let STATE = "NEWQ";
var Q = "What is what waht";
var A1 = "answer 1 yse yse";
var A2 = "answer 2 bla bal";
var A3 = "answer 3 iunkdf";
var A4 = "answer  4 ewsdf";
var SCORE = 1000;

/**end var for test */


/**list of nodes */
var question = document.querySelector(".question");
var ansVal1 = document.querySelector(".answer-value-1");
var ansText1 = document.querySelector(".answer-text-1");

var ansVal2 = document.querySelector(".answer-value-2");
var ansText2 = document.querySelector(".answer-text-2");

var ansVal3 = document.querySelector(".answer-value-3");
var ansText3 = document.querySelector(".answer-text-3");

var ansVal4 = document.querySelector(".answer-value-4");
var ansText4 = document.querySelector(".answer-text-4");
/**end list of nodes */

ansVal1.value = "dasj";
ansText1.innerHTML = "wesa";

let updateQuestion = function () {
    question.innerHTML= Q;

    ansVal1.value = A1;
    ansText1.innerHTML = A1;

    ansVal2.value = A2;
    ansText2.innerHTML = A2;

    ansVal3.value = A3;
    ansText3.innerHTML = A3;

    ansVal4.value = A4;
    ansText4.innerHTML = A4;
}


STATE === "NEWQ" && updateQuestion(); //shor hand

console.log("through");