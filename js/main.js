const robotron = document.querySelector('#robotron');
const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach((element) => {
  element.addEventListener('click', (event) =>{
    manipulaDados(event.target.textContent, event.target.parentNode)
    console.log(event);
  })
})


function manipulaDados(operacao, controle){
  const peca = controle.querySelector(".controle-contador");

  if(operacao == '-'){
    peca.value = parseInt(peca.value) - 1
  } else{
    peca.value = parseInt(peca.value) + 1
  }

}
