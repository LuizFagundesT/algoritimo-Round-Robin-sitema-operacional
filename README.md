# Escalonador Round Robin 




## Objetivo
- Este programa pretende simular um processador em sua funçãod e escalonar uma determinada fila de processos. Pensando em um sistema operacional, temos uma fração de seu todo , o processador. Nesta simulação o processador recebe um determinado número de processos que utiliza do método de Round Robin para processar as tarefas. 

## Descrição 
- Na descrição do método de escalonamento temos: a CPU recebe um cpu time denominado Quantum. Dado este tempo o processador processa este tempo de um processo e o devolve ao final da fila de prontos. 
- Se existirem n processos na fila de prontos e o quantum for q, cada processo terá 1/n de tempo de CPU em parcelas de, no máximo, q unidades de tempo por vez. Nenhum processo esperará mais que (n-1)q unidades de tempo.

## Utilização 
#### O programa solicita ao usuário os dados base para o processamento, sendo a quantidade de processos que irá criar e também o Quantum da unidade CPU. Após a escolha o usuário irá digitar os tempos de CPU que cada processo leva para ser concluido. Feito isso o algoritimo atuará exibindo uma tabela base das informações dos processos e em seguida a tabela mostrando o escalonamento dos processos. Nesta tabela teremos o número do processo, o quanto falta para ser processado em função do seu tempo total de CPU, e o tempo de CPU em que se encontra o processador. 
- Clique no botão de "Crie um processador";
- Digite o número de processos que deseja criar; 
- Digite o valor Quantum do processador a ser simulado; 
- Verifique a mensagem de salvamento no modo "alert";
- Digite o tempo de Surto de cada processo. O número de processos foi previamente escolhido pelo user.
- Basta finalizar e analisar as tabelas de escalonamento.




