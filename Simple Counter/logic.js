window.onload = function counter() {

    let updateValue = document.getElementById('updateValue');
    let addNumber = document.getElementById('add');
    let reset =document.getElementById('reset');
    let count = 0;

    addNumber.addEventListener('click', () => {

        count++;
        updateValue.innerHTML = count;

    });

    reset.addEventListener('click' , () => {

        count = 0 ;
        updateValue.innerHTML = 0 ;
    });


}