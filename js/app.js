function changeItem() {
    document.querySelector('.complex-description-block').classList.add('appear-complex');
    document.querySelector('.complex-description-block').classList.remove('hide-complex');
    document.querySelector('body').style.background = 'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5) ), url(../src/background.jpg)';
}

function rechangeItem() {
    document.querySelector('.complex-description-block').classList.remove('appear-complex');
    document.querySelector('.complex-description-block').classList.add('hide-complex');
    document.querySelector('body').style.background = '#585148 url(../src/background.jpg) no-repeat';
}