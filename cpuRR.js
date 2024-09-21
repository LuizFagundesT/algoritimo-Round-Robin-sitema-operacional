 
 //declarando minhas classes
 class Processo {
    
    
    //criando cosntructor
    constructor(indiceProcesso,tempoDeSurto ){
        this.indiceProcesso = indiceProcesso;
        this.tempoDeSurto=tempoDeSurto;
    }

   
}

//VARIÁVEIS GLOBAIS 
var quantum;
var quantidadeProcessos;


const pro = new Processo(10,10);


// Função que salva os dados quantum e quantidade de processos
function criaProcessador() {
    // CRIANDO ELEMENTOS //
    const btnSalvaProcessador = document.createElement('button');
    btnSalvaProcessador.id='salvaProcessador';
    btnSalvaProcessador.textContent='Salvar Processador';

    const containerDados= document.querySelector('#ContainerDados'); 
    //criando elemento div para alocar meus campos de solicitação de quantum e quantidade de processos.
    const divDadosAlgoritimo = document.createElement('div');
    divDadosAlgoritimo.className ='dados';

    const divQuantumProcessador = document.createElement('div');
    divDadosAlgoritimo.className ='divQuantum';

    const divNumeroProcessos = document.createElement('div');
    divDadosAlgoritimo.className ='divNumeroProcessos';

    //craindo minha label de quantum do processador 
    const labelQuantumProcessador= document.createElement('label');
    labelQuantumProcessador.textContent= 'Aplique o valor do Quantum:';
    labelQuantumProcessador.setAttribute('for', 'quantum');
    

    //criando meu imput de dados quantum do processador
    const imputQuantum = document.createElement('input');
    imputQuantum.type = 'number';
    imputQuantum.id = 'quantum';


    //craindo minha label de numero de processos 
    const labelNumProcessos= document.createElement('label');
    labelNumProcessos.textContent= 'Quantos processos deseja criar';
    labelNumProcessos.setAttribute('for', 'quant-processos');

    //criando meu imput de dados de numero de processos
    const imputNumProcessos = document.createElement('input');
    imputNumProcessos.type = 'number';
    imputNumProcessos.id = 'quant-processos';

    //adicionando os elementos as suas respectivas estruturas
    divQuantumProcessador.append(labelQuantumProcessador);
    divQuantumProcessador.append(imputQuantum);

    divNumeroProcessos.append(labelNumProcessos);
    divNumeroProcessos.append(imputNumProcessos);

    divDadosAlgoritimo.append(divNumeroProcessos);
    divDadosAlgoritimo.append(divQuantumProcessador);
    divDadosAlgoritimo.append(btnSalvaProcessador);

    containerDados.append(divDadosAlgoritimo);


    btnSalvaProcessador.addEventListener('click',salvaDados);
}

function salvaDados(){
    //excluido o botão de criar um processador uma vez que não faz sentino criar um processador novo ja que salvei informações do processador em questão.
    //NÃO DEIXA O USER CRIAR OUTRO PROCESSADOR..
    const btnCriaProcessador =document.querySelector('#btnCriaProcessador');
    btnCriaProcessador.remove();

    // Capturando o valor do input com id 'tempo-surto'
    quantum = document.querySelector('#quantum').value;

    quantidadeProcessos = document.querySelector('#quant-processos').value;

    // Exibindo o valor em um alert saalvo
    alert("PROCESSADOR CRIADO COM SUCESSO\nNúmero de processos: "+quantidadeProcessos+"\nQuantum do processador: "+quantum);
    
   

}




//função que vai criar meus processos conforme suas caracteristicas

function criarProcessos(){
    var surtoProcesso;
    for(let i=0;i<quantidadeProcessos;i++){
      
        surtoProcesso=prompt("Digite o valor do quantum de processo: " +i+":");
    }
}

// Capturando o botão 
const botaoCriaAlgoritimo = document.querySelector('#btnCriaProcessador');

// Adicionando o event listener ao botão
botaoCriaAlgoritimo.addEventListener('click', criaProcessador);

