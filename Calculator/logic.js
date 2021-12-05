let input = document.getElementById('input');

let keys = (Numbers) => {
    input.value += Numbers;
};

let Clear = () => {
    input.value = "";
};

let backspace = () => {
    let backspace_Key = input.value.substr(0, input.value.length - 1);
    input.value = backspace_Key;
};

let plus_minus = () => {
    input.value *= -1;
};

let equalTo = () => {

    let calculate = eval(input.value);
    input.value = calculate;

};