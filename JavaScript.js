const addition = function(first, second) {
	return (+first) + (+second);
};

const subtract = function(first, second) {
	return (+first) - (+second);
};
const multiply = function(first, second) {
	return (+first) * (+second);
};

const divide = function(first, second) {
    if (second == "0") {return "ERROR"}
	return (Math.round(((+first) / (+second))*1000))/1000;
};

const operate = function(first, operation, second) {
    if (operation != "" && first != "" && second != "")  {
        if (operation == "+") {display5.textContent = addition(first,second)}
        if (operation == "-") {display5.textContent = subtract(first,second)}
        if (operation == "*") {display5.textContent = multiply(first,second)}
        if (operation == "/") {display5.textContent = divide(first,second)}
        display4.textContent = "="
    }
}

const display1 = document.querySelector("div.screen1");
const display2 = document.querySelector("div.screen2");
const display3 = document.querySelector("div.screen3");
const display4 = document.querySelector("div.screen4");
const display5 = document.querySelector("div.screen5");
const clear = document.querySelector("button.clear");
const one = document.querySelector("button.one");
const two = document.querySelector("button.two");
const three = document.querySelector("button.three");
const four = document.querySelector("button.four");
const five = document.querySelector("button.five");
const six = document.querySelector("button.six");
const seven = document.querySelector("button.seven");
const eight = document.querySelector("button.eight");
const nine = document.querySelector("button.nine");
const zero = document.querySelector("button.zero");
const add = document.querySelector("button.add");
const sub = document.querySelector("button.sub");
const mul = document.querySelector("button.mul");
const div = document.querySelector("button.div");
const solve = document.querySelector("button.solve");
const point = document.querySelector("button.point");
const back = document.querySelector("button.back");

const fnClear = function() {
    display1.textContent = "";
    display2.textContent = "";
    display3.textContent = "";
    display4.textContent = "";
    display5.textContent = "";
}

const fnBack = function() {
    if (display4.textContent == ""){
        if (display2.textContent == "" && display1.textContent.length > 0){
            display1.textContent = display1.textContent.substring(0, display1.textContent.length - 1)
        } else if (display2.textContent != "" && display3.textContent.length > 0){
            display3.textContent = display3.textContent.substring(0, display3.textContent.length - 1)
        }
    }
}

const addScreen = function(added) {
    if (added == "."){
        if (display4.textContent == ""){
            if (display2.textContent == "" && !display1.textContent.includes(".")){
                display1.textContent = display1.textContent + added
            }
            if (display2.textContent != "" && !display3.textContent.includes(".")){
                display3.textContent = display3.textContent + added
            }
        }
        return;
    }
    if (display2.textContent == ""){
        display1.textContent = display1.textContent + added
    }
    else if (display4.textContent == ""){
        display3.textContent = display3.textContent + added
    }
    else if (display4.textContent == "="){
        fnClear();
        display1.textContent = display1.textContent + added
    }
}

const addSign = function(added) {
    if (display3.textContent == ""){
        display2.textContent = added
    } else if (display5.textContent != "ERROR") {
        operate(display1.textContent, display2.textContent, display3.textContent);
        display1.textContent = display5.textContent;
        display2.textContent = added;
        display3.textContent = "";
        display4.textContent = "";
        display5.textContent = "";
    }
}

clear.addEventListener("click", fnClear);
back.addEventListener("click", fnBack);
point.addEventListener("click", () => addScreen("."));
one.addEventListener("click", () => addScreen(1));
two.addEventListener("click", () => addScreen(2));
three.addEventListener("click", () => addScreen(3));
four.addEventListener("click", () => addScreen(4));
five.addEventListener("click", () => addScreen(5));
six.addEventListener("click", () => addScreen(6));
seven.addEventListener("click", () => addScreen(7));
eight.addEventListener("click", () => addScreen(8));
nine.addEventListener("click", () => addScreen(9));
zero.addEventListener("click", () => addScreen(0));
add.addEventListener("click", () => addSign("+"));
sub.addEventListener("click", () => addSign("-"));
mul.addEventListener("click", () => addSign("*"));
div.addEventListener("click", () => addSign("/"));
solve.addEventListener("click", () => operate(display1.textContent, display2.textContent, display3.textContent));

document.addEventListener("keypress", (e) => {
  if (e.key >= "0" && e.key <= "9") {addScreen(e.key);}
  if (e.key == "+") {addSign("+");}
  if (e.key == "-") {addSign("-");}
  if (e.key == "*") {addSign("*");}
  if (e.key == "/") {addSign("/");}
});