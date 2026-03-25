import {eventData} from "./charlas.js";

const btns_charlas = [
    document.getElementById('btn_ch1'),
    document.getElementById('btn_ch2')
];

const desc_titulo = document.querySelector('.descripcion-titulo');
const desc_ponencia = document.querySelector('.descripcion-ponencia');
const desc_info = document.querySelector('.descripcion-info');

let current_day = 0;

function fillSelectorButtons(dayIndex) {
    // Charlas de X dia
    const charlas = eventData.dias[dayIndex].charlas;

    // Iterar sobre los botones y añadir info
    btns_charlas.forEach((btn, i) => {
        const ch = charlas[i];
        btn.querySelector('.descripcion-titulo-btn').textContent = ch.titulo;
        // La descripcion tiene dos labels. Uno para el ponente/hora y otro para el aula
        btn.querySelector('.descripcion-ponencia-btn').textContent = `${ch.horario} || ${ch.aula}`;
    });
}

function fillDescription(day_index, talk_index) {
    // Charlas de X dia, para Y indice
    const ch = eventData.dias[day_index].charlas[talk_index];

    // Modificar el unico contenedor que hay
    desc_titulo.textContent = ch.titulo;
    // Al igual que los botones, dos cotenedores con info distinta
    desc_ponencia.children[0].textContent = `${ch.ponente} || ${ch.horario}`;
    desc_ponencia.children[1].textContent = ch.aula;
    desc_info.textContent = ch.descripcion;
}

function showDay(dayIndex) {
    current_day = dayIndex;

    console.log(current_day);

    document.querySelectorAll('.botones-dias').forEach((b, i) => {
        b.classList.toggle('active', i === dayIndex);
    });

    fillSelectorButtons(dayIndex);
    fillDescription(dayIndex, 0);
}

document.querySelectorAll('.botones-dias').forEach((btn, i) => {
    btn.addEventListener('click', () => showDay(i));
});

btns_charlas.forEach((btn, i) => {
    btn.addEventListener('click', () => fillDescription(current_day, i));
});

showDay(0);