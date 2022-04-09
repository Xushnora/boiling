let elForm = document.querySelector('#form');
let elInput = document.querySelector('#input');
let newTime = document.querySelector('.newTime');
let startBtn = document.querySelector('.startBtn');
let buttonBox = document.querySelector('.button-box');


elForm.addEventListener('submit', (e) =>{
    e.preventDefault();
   
    if(! elInput.value == " ") {
        let button = document.createElement('button');
        button.className = "newButton";
        button.append(document.createTextNode(elInput.value));
        newTime.appendChild(button);
        

        let inputValue = elInput.value;

        setInterval(() => {
            setTimeout(() => {
                inputValue--;
                button.textContent = inputValue;
                if (inputValue === 0) {
                    button.style.display = 'none';
                }
            })
        }, 1000);
        elInput.value = "";
    } else {
        alert('Raqam kiriting!')
    }

})





