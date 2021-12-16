import { clientService } from '../service/client-service.js';

const createNewLine = (registro) => {
    const newLine = document.createElement('div');
    const contents = `
        <div class="card positivo">
            <ul class="grid">
                <li>
                    <h5>${registro.titulo}</h5>
                </li>
                <li>
                    <h5>${registro.lancamento}</h5>
                </li>
                <li>
                    <h5>${registro.dia}</h5>
                </li>
                <li class="">
                    <button class="bn"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                    <button class="bn"><i class="fa fa-trash" aria-hidden="true"></i></button>
                </li>
            </ul>
        </div>`;

    newLine.innerHTML = contents;
    return newLine;
}

const box = document.querySelector('#box');

const showWithoutRegistersBox = () => {
    const withoutRegistersBox = document.querySelector('#semLancamento');

    withoutRegistersBox.removeAttribute('hidden');
}

clientService.loadRegisters()
.then(registros => {
    if(registros.length) {
        registros.forEach(registro => box.appendChild(createNewLine(registro)));
    } else {
        showWithoutRegistersBox();
    }
});
