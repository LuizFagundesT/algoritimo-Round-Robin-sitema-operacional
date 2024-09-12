 
 //declarando minhas classes
 class Processo {
    
    
    //criando cosntructor
    constructor(indiceProcesso,tempoDeSurto ){
        this.indiceProcesso = indiceProcesso;
        this.tempoDeSurto=tempoDeSurto;
    }

   
}





// Função que salva os dados quantum e quantidade de processos
function salvaDadosAlgoritimo() {
   // Capturando o valor do input com id 'tempo-surto'
   var quantum = document.querySelector('#tempo-surto').value;
   
   // Exibindo o valor em um alert
   alert(quantum);
}

// Capturando o botão 
const botaoSalvaDadosAlgoritimo = document.querySelector('#btn-salva-dados');

// Adicionando o event listener ao botão
botaoSalvaDadosAlgoritimo.addEventListener('click', salvaDadosAlgoritimo);
alert('uai');
