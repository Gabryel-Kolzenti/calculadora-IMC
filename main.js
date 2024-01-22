/*
    *Realizar calculo imc e retornar o resultado;
    *O resultado deverá aparcer abaixo do botão com 
o valor do IMC e em que grupo de peso se enquadra;
    *Caso não tenha valores registrados em ambos 
ou alguns dos campos deverá ser mostrado uma mensagem de aviso;
*/

function meuEscopo () {                           //.querySelection(`.xxx`)
    const form = document.querySelector(`#form`); //forma de selecionar atributos do HTML (tag, id, class...)
    const resultado = document.querySelector(`.resultado`);
// criamos variaveis aqui no comeco para nao ter q ficar usando sempre document.querySelector...

    function recebeEventoForm (evento) {
        evento.preventDefault (); //para prevenir a funcao padrao de... (recarregar a pagina sempre que clicar em um botao)
        const inputPeso= form.querySelector(`.peso`); //forma de selecionar atributos do HTML (tag, id, class...)
        const inputAltura = form.querySelector(`.altura`);

        const peso = (Number(inputPeso.value));
        const altura = (Number(inputAltura.value));

        

        function categoriaIMC (peso, altura) {
            const resultado = peso / (altura * altura) * 10000 ;
            if (resultado < 18.5) {
                return 'Magro';
            } else if (resultado >= 18.5 && resultado <= 24.9) {
                return 'Normal';
            } else if (resultado >= 25 && resultado <= 29.9) {
                return 'Sobrepeso';
            } else if (resultado >= 30 && resultado <= 34.9) {
                return 'Obesidade grau 1';
            } else if (resultado >= 35 && resultado <= 39.9) {
                return 'Obesidade grau 2';
            } else if (resultado > 40) {
                return 'Obesidade grau 3';
            }
        }
        function calculoIMC (peso, altura) {
            const calculo = peso / (altura * altura) * 10000;
            return calculo.toFixed(3)
        }


        if (peso == 0 && altura == 0) {
            resultado.innerHTML = '<p class="errado">Possui campos vazios</p>'
        } else if (peso < 0 || altura < 0) {
            resultado.innerHTML = '<p class="errado">Use números válidos</p>'
        } else if (peso <= 0) {
            resultado.innerHTML = '<p class="errado">Preencha o peso</p>'
        } else if (altura <= 0) {
            resultado.innerHTML = '<p class="errado">Preencha a altura</p>'
        } else if (isNaN(peso || altura)) {
            resultado.innerHTML = '<p class="errado">Preencha o peso e altura com números ou .</p>'
        } else if (isNaN(peso)) {
            resultado.innerHTML = '<p class="errado">Preencha o peso com números ou .</p>'
        } else if (isNaN(altura)) {
            resultado.innerHTML = '<p class="errado">Preencha a altura com números ou .</p>'
        } else{
            resultado.innerHTML = `<p> Seu IMC é ${calculoIMC (peso, altura)} (${categoriaIMC(peso, altura)}) </p>`;
        }
        
    }

    form.addEventListener(`submit`, recebeEventoForm); /*vai acionar uma acao de "submit" (receber, enviar...)
    ao clicar no "botao enviar" e assim realizar a funcao "recebeEventoForm"*/
}
meuEscopo ();