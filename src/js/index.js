import '../assets/styles/scss/main.scss';

let btnSubmit = document.querySelector('.choose__btn');
let selection = document.querySelector('.choose__selection');
let numberSelection = document.querySelector('.choose__selection-n');
let thankYouBox = document.querySelector('.thankyou');
let chooseBox = document.querySelector('.choose');
let choosenNumber = document.querySelector('.choosenNumber');
let number

selection.addEventListener('click', zahlAusgeben);
btnSubmit.addEventListener('click', showThankYou)

function zahlAusgeben(e) {
    if (e.target && e.target.matches('div')){
        number = e.target.innerText;
        e.target.classList.add('activ');
    };
};

function showThankYou(e){
    thankYouBox.classList.remove('hidden');
    chooseBox.classList.add('hidden');
    choosenNumber.innerHTML = `&nbsp;${number}&nbsp;`;
};