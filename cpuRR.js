    
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
const filaDeProcessos = [];


// ESTA FUNÇÃO CRIA UM PROCESSADOR COM NUMERO DE PROCESSOS E O QUANTUM DE REALIZAÇÃO DE CADA PROCESSO
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


//ESSA FUNÇÃO VAI SALVAR OS DADOS NAS VARIÁVEIS GLOBAIS
function salvaDados(){
    //excluido o botão de criar um processador uma vez que não faz sentino criar um processador novo ja que salvei informações do processador em questão.
    //NÃO DEIXA O USER CRIAR OUTRO PROCESSADOR..
    const btnCriaProcessador =document.querySelector('#btnCriaProcessador');
    btnCriaProcessador.remove();

    // Capturando o valor do input com id 'tempo-surto'
    quantum = document.querySelector('#quantum').value;

    quantidadeProcessos = document.querySelector('#quant-processos').value;

    // Exibindo o valor em um alert saalvo
    alert("PROCESSADOR E PROCESSOS CRIADO COM SUCESSO\nNúmero de processos: "+quantidadeProcessos+"\nQuantum do processador: "+quantum);
    
   
    criarProcessos();
}

//ESTA FUNÇÃO ESTA CRIANDO TODOS OS MEUS PROCESSOS E POPULANDO O ARRAY DE PROCESSOS 
function criarProcessos(){
    //Criando estrutura para solicitação de dados
    
    var surtoProcesso;

    //vamos excluir o botão de salvar o processo, preciso fazer nesta função por que ele so excluido após a execução da outra
    const btnSalvaProcessador=document.querySelector('#salvaProcessador');
    btnSalvaProcessador.remove();


    //solicitando valores do tempo de surto de cada processo
    for(var i =0; i<quantidadeProcessos;i++){

        surtoProcesso = prompt('DIGITE O TEMPO DE SURTO!\n P '+ (1+i));
        //construindo um novo processo
        const processo = new Processo (i+1 , parseInt(surtoProcesso));
        //adicionando ele ao último da fila na fila de processos
        filaDeProcessos.push (processo);
    }
    const tempoSurto = filaDeProcessos[1].tempoDeSurto;
    


    //com processos prontos basta exibi-los
    tabelaDeProcessos();

}


function tabelaDeProcessos(){
    //craindo estrutura de amostragem
    const divCriaProcessos = document.querySelector('#ContainerCriaProcessos');

    const table= document.createElement('table');
    table.id='tabelaProcessos';
    const tr = document.createElement('tr');
    const thProcessos = document.createElement('th');
    thProcessos.textContent='Processos';
    const thSurtos = document.createElement('th');
    thSurtos.textContent='Tempos de Surto'
    const td = document.createElement('td');
    
    //adicionando os cabeçalhos
    tr.appendChild(thProcessos);
    tr.appendChild(thSurtos);

    table.append(tr);

    //adicionando todos os meus processos
    for(let i=0; i<filaDeProcessos.length;i++){
        //acessando o processo
        const processo = filaDeProcessos[i];
        
        //criando uma linha 
        const trLinhaProcesso = document.createElement('tr');

        //criando a celula do processo
        const tdNumProcesso = document.createElement('td');
        tdNumProcesso.textContent=processo.indiceProcesso;
        //colocando o conteudo na coluna primeira da linha
        trLinhaProcesso.appendChild(tdNumProcesso);

        //criando a celula do tempo de surto
        const tdTempoSurto = document.createElement('td');
        tdTempoSurto.textContent= processo.tempoDeSurto;
        trLinhaProcesso.appendChild(tdTempoSurto);

        table.appendChild(trLinhaProcesso);
    }

    divCriaProcessos.append(table);

    escalonaProcessos();
}


function escalonaProcessos(){
    //////criando a estrutura///
    //capturando minha estrutura no html
    const ContainerEscalonaProcessos = document.querySelector('#ContainerEscalonaProcesso'); 
    //criando a tabela
    const tabelaEscalonados = document.createElement('table');
    tabelaDeProcessos.id = 'tabelaEscalonados';
    //criando meu TR para jogar na tabela
    const trEscalonados = document.createElement('tr');


    
    

    //criando os TD
    const tdProcesso = document.createElement('td');
    const tdCpuTime = document.createElement('td');

    //criando o TH processo
    const thProcesso = document.createElement('th');
    thProcesso.textContent = 'Processo';
    //criando o TH CPu Time
    const thTempoCpu = document.createElement('th');
    thTempoCpu.textContent = 'CPU Time';

    trEscalonados.append(thProcesso);
    trEscalonados.append(thTempoCpu);

    tabelaEscalonados.append(trEscalonados);
    ContainerEscalonaProcessos.appendChild(tabelaEscalonados);






    
    //este loping faz a quatidada de vezes que vai ser feito um ciclo 
    do{
        /////////////////LOGICA DE ESCALONAMENTO /////////////////////
        //este for faz a redução de um ciclo em toda minha fila de processos
        for(let i=0;i<filaDeProcessos.length;i++){
            const processo = filaDeProcessos[i];
            tdProcesso.textContent = "P"+processo.indiceProcesso;
            //vamos verificar se o processo tem surto 0 po que sendo assim ele ja foi processado, caso contrario segue para processamento 
            if(processo.tempoDeSurto<=0){
                //isso é feito na intenção de caso o 
                processo.tempoDeSurto =0;
                console.log(`Processo ${processo.indiceProcesso} finalizado`);
                
                tdCpuTime.textContent = `Processo ${processo.indiceProcesso} finalizado`;
                
            }else{
                if(processo.tempoDeSurto<=quantum){
                    processo.tempoDeSurto = processo.tempoDeSurto - 
                    processo.tempoDeSurto;
                    
                }else{
                    processo.tempoDeSurto= processo.tempoDeSurto - quantum;
                    
                }
                console.log(processo.tempoDeSurto);
                tdCpuTime.textContent = "Falta"+ processo.tempoDeSurto;
            }

            trEscalonados.appendChild(tdProcesso);
            trEscalonados.appendChild(tdCpuTime);

        }
        
        tabelaDeProcessos.appendChild(trEscalonados)

    }while(verificaPosiçõesZeradas()==1);
    
    ContainerEscalonaProcessos.append(tabelaDeProcessos);


}



//fazer função que verifica se todos os meus processos estão zerados!
function verificaPosiçõesZeradas(){
    let processosFinalizados = 0;
    for (let i = 0;i<filaDeProcessos.length;i++){
        const processo = filaDeProcessos[i];
        if(processo.tempoDeSurto === 0){
            processosFinalizados++;
        }
    }
    // a ideia é a função retornar 0 para desligar o escalonador e retornar 1 para mante-lo ligado. No caso de 0 siginfica que todos os preocessos estão zerados, no caso de 1 significa que os processos todos ainda não foram finalizados.
    if(processosFinalizados == filaDeProcessos.length){
        return 0;
    }
    else{
        return 1;
    }
}





// Capturando o botão 
const botaoCriaAlgoritimo = document.querySelector('#btnCriaProcessador');

// Adicionando o event listener ao botão
botaoCriaAlgoritimo.addEventListener('click', criaProcessador);

