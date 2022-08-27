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

// delegate hinzufügen/wegnehmen // entfernen / neu aufbauen
// foreach -> müsste html im js hinzugefügt werden, was nicht unbedingt besser ist
// foreach -> müsste mit document.queryselector alle "__selection-n" genommen werden und dann 5 event listener gesetzt werden
// -> matches ist nicht unbedingt die falsche Lösung

function zahlAusgeben(e) { // gefühl gehabt, müsste delegate verwenden...
    if (e.target && e.target.matches('div.choose__selection-n')){
        number = e.target.innerText;
        const active = document.querySelector('.active');
        if (active){
            active.classList.remove('active');
        }
        e.target.classList.add('active');
    };
};

function showThankYou(e){
    thankYouBox.classList.remove('hidden');
    chooseBox.classList.add('hidden');
    choosenNumber.innerHTML = `&nbsp;${number}&nbsp;`;
};