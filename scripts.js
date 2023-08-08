const segundosHand = document.querySelector('.ponteiro.segundos')
const minutosHand = document.querySelector('.ponteiro.minutos')
const horasHand = document.querySelector('.ponteiro.horas')

const setRotation = (element, rotationPercentege) =>{
    element.style.setProperty("--rotation", rotationPercentege * 360)
}


const setClock = () => {
    const currentDate = new Date();

    const segundosPorcentagem = currentDate.getSeconds() / 60;
    const minutosPorcentagem = (segundosPorcentagem + currentDate.getMinutes()) / 60;
    const horasPorcentagem = (minutosPorcentagem + currentDate.getHours()) / 12;


    setRotation(segundosHand , segundosPorcentagem);
    setRotation(minutosHand , minutosPorcentagem);
    setRotation(horasHand , horasPorcentagem);
}

setClock();

setInterval(setClock, 1000)
/*Relógio Digital*/

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const relogio =setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

 if(hr<10) hr = '0' + hr;
 if(min<10) min = '0' + min;
 if(sec<10) sec = '0' + sec;
    
    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;
})