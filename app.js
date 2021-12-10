let input = document.querySelector("#main_calculator_input")

function appendTextToInput(str){
    input.value+=str
}

function Answer(){
    input.value = eval(input.value.replace(/\^/g, "**"))
}

function allClear(){
    input.value = ""
}

function deleteText() {
    input.value = input.value.substr(0,input.value.length - 1)
}