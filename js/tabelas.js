let times = [
    document.getElementById('t1'),
    document.getElementById('t2'),
    document.getElementById('t3'),
    document.getElementById('t4'),
    document.getElementById('t5'),
    document.getElementById('t6'),
    document.getElementById('t7'),
    document.getElementById('t8')
] //Coluna TEAM

let tabela = [
    document.getElementById('r11'),
    document.getElementById('r12'),
    document.getElementById('r13'),
    document.getElementById('r14'),
    document.getElementById('r15'),
    document.getElementById('r21'),
    document.getElementById('r22'),
    document.getElementById('r23'),
    document.getElementById('r24'),
    document.getElementById('r25'),
    document.getElementById('r31'),
    document.getElementById('r32'),
    document.getElementById('r33'),
    document.getElementById('r34'),
    document.getElementById('r35'),
    document.getElementById('r41'),
    document.getElementById('r42'),
    document.getElementById('r43'),
    document.getElementById('r44'),
    document.getElementById('r45'),
    document.getElementById('r51'),
    document.getElementById('r52'),
    document.getElementById('r53'),
    document.getElementById('r54'),
    document.getElementById('r55'),
    document.getElementById('r61'),
    document.getElementById('r62'),
    document.getElementById('r63'),
    document.getElementById('r64'),
    document.getElementById('r65'),
    document.getElementById('r71'),
    document.getElementById('r72'),
    document.getElementById('r73'),
    document.getElementById('r74'),
    document.getElementById('r75'),
    document.getElementById('r81'),
    document.getElementById('r82'),
    document.getElementById('r83'),
    document.getElementById('r84'),
    document.getElementById('r85'),
    
] //Tabela com todos os ronds

let slot = [
    document.getElementById('slot1'),
    document.getElementById('slot2'),
    document.getElementById('slot3'),
    document.getElementById('slot4'),
    document.getElementById('slot5'),
    document.getElementById('slot6'),
    document.getElementById('slot7'),
    document.getElementById('slot8')
]//Campos de jogo1

let resultados = [
    window.document.getElementById('res1'),
    window.document.getElementById('res2'),
    window.document.getElementById('res3'),
    window.document.getElementById('res4'),
    window.document.getElementById('res5'),
    window.document.getElementById('res6'),
    window.document.getElementById('res7'),
    window.document.getElementById('res8'),
]//Entrada de sesultados

let res = ''

let resultadoFinal = [
    document.getElementById('time1'),
    document.getElementById('time2'),
    document.getElementById('time3'),
    document.getElementById('time4'),
    document.getElementById('time5'),
    document.getElementById('time6'),
    document.getElementById('time7'),
    document.getElementById('time8')
]
//Armazena os times
let team = [
    {nome:'Nulo', r1:'Nulo', r2:'Nulo', r3:'Nulo'}, 
    {nome:'Pain', r1:'', r2:'', r3:''}, 
    {nome:'Furia', r1:'', r2:'', r3:''},
    {nome:'Red', r1:'', r2:'', r3:''},
    {nome:'Imperial', r1:'', r2:'', r3:''},
    {nome:'Keyd', r1:'', r2:'', r3:''},
    {nome:'MIBR', r1:'', r2:'', r3:''},
    {nome:'Flamengo', r1:'', r2:'', r3:''},
    {nome:'Loud', r1:'', r2:'', r3:''},
  ]
let addTime = window.document.getElementById("addTime")//Add Time
let position = window.document.getElementById('posicao')//Seleciona posição
let desaparecer2 = document.getElementById('desaparecer2')
let desaparecer3 = document.getElementById('desaparecer3')
let desaparecer4 = document.getElementById('desaparecer4')
let nulAlterar = document.getElementById('nulAlterar')
let invisivel = document.getElementById('invisivel')
let env = document.getElementById('env')
let rounds = document.getElementById('rounds')
env.style.display = "none";

function iniciar(){
    nulAlterar.style.display = "none";
    invisivel.style.display = "none";
    addTime.style.display = "none";
    position.style.display = "none";
    env.style.display = "";
    times[0].innerHTML = team[1].nome//Coluna Team
    times[1].innerHTML = team[2].nome
    times[2].innerHTML = team[3].nome
    times[3].innerHTML = team[4].nome
    times[4].innerHTML = team[5].nome
    times[5].innerHTML = team[6].nome
    times[6].innerHTML = team[7].nome
    times[7].innerHTML = team[8].nome

    tabela[0].innerHTML = team[8].nome//Coluna Round1
    tabela[5].innerHTML = team[7].nome
    tabela[10].innerHTML = team[6].nome
    tabela[15].innerHTML = team[5].nome
    tabela[20].innerHTML = team[4].nome
    tabela[25].innerHTML = team[3].nome
    tabela[30].innerHTML = team[2].nome
    tabela[35].innerHTML = team[1].nome

    slot[0].innerHTML = team[1].nome//Primeiros jogos
    slot[1].innerHTML = team[8].nome
    slot[2].innerHTML = team[2].nome
    slot[3].innerHTML = team[7].nome
    slot[4].innerHTML = team[3].nome
    slot[5].innerHTML = team[6].nome
    slot[6].innerHTML = team[4].nome
    slot[7].innerHTML = team[5].nome
    nulbotao.style.display = "none";
}

function alterar(){

    let pos = Number(position.value)
    team[pos].nome = addTime.value
    team[pos].nome.innerHTML = `${addTime.value}`
    times[pos - 1].innerHTML = team[pos].nome
}

let contador = 0
function enviar(){
    let team1 = Number(resultados[0].value)
    let team8 = Number(resultados[1].value)
    let team2 = Number(resultados[2].value)
    let team7 = Number(resultados[3].value)
    let team3 = Number(resultados[4].value)
    let team6 = Number(resultados[5].value)
    let team4 = Number(resultados[6].value)
    let team5 = Number(resultados[7].value)
    
    contador++
    switch(contador){
        
        case 1:
            team[1].r1 = team[8].nome
            team[2].r1 = team[7].nome
            team[3].r1 = team[6].nome
            team[4].r1 = team[5].nome
            team[5].r1 = team[4].nome
            team[6].r1 = team[3].nome
            team[7].r1 = team[2].nome
            team[8].r1 = team[1].nome

            rounds.innerHTML = "Rodada 2"
            if(team1 == team8){//jogo 1
                alert("Erro no jogo1")
                
            }else if(team1 > team8){
                
            }else{       
                nome = team[1]
                team[1] = team[8]
                team[8] = nome
            }
            
            if(team2 == team7){//jogo 2
                alert("Erro no jogo2")
        
            }else if(team2 > team7){
                
            }else{
                nome = team[2]
                team[2] = team[7]
                team[7] = nome
            }
        
            if(team3 == team6){//jogo 3
                alert("Erro no jogo3")
        
            }else if(team3 > team6){
            
            }else{
                nome = team[3]
                team[3] = team[6]
                team[6] = nome
            }
        
            if(team4 == team5){//jogo 4
                alert("Erro no jogo4")
        
            }else if(team4 > team5){
                
            }else{
                nome = team[4]
                team[4] = team[5]
                team[5] = nome       
            }

            team[1].r2 = team[4].nome
            team[2].r2 = team[3].nome
            team[3].r2 = team[2].nome
            team[4].r2 = team[1].nome
            team[5].r2 = team[8].nome
            team[6].r2 = team[7].nome
            team[7].r2 = team[6].nome
            team[8].r2 = team[5].nome
            
            //Pintar Coluna Round1
            tabela[0].style.background = 'green'
            tabela[5].style.background = 'green'
            tabela[10].style.background = 'green'
            tabela[15].style.background = 'green'
            tabela[20].style.background = 'red'
            tabela[25].style.background = 'red'
            tabela[30].style.background = 'red'
            tabela[35].style.background = 'red'
            
            //Coluna Team
            times[0].innerHTML = team[1].nome
            times[1].innerHTML = team[2].nome
            times[2].innerHTML = team[3].nome
            times[3].innerHTML = team[4].nome
            times[4].innerHTML = team[5].nome
            times[5].innerHTML = team[6].nome
            times[6].innerHTML = team[7].nome
            times[7].innerHTML = team[8].nome
        
            //Coluna Round1
            tabela[0].innerHTML = team[1].r1 
            tabela[5].innerHTML = team[2].r1    
            tabela[10].innerHTML = team[3].r1
            tabela[15].innerHTML = team[4].r1
            tabela[20].innerHTML = team[5].r1
            tabela[25].innerHTML = team[6].r1
            tabela[30].innerHTML = team[7].r1
            tabela[35].innerHTML = team[8].r1                          
                  
            //Coluna Round2
            tabela[1].innerHTML = team[1].r2
            tabela[6].innerHTML  = team[2].r2 
            tabela[11].innerHTML  = team[3].r2
            tabela[16].innerHTML  = team[4].r2
            tabela[21].innerHTML  = team[5].r2
            tabela[26].innerHTML  = team[6].r2
            tabela[31].innerHTML  = team[7].r2
            tabela[36].innerHTML  = team[8].r2                      

            slot[0].innerHTML = team[1].nome//Primeiros jogos
            slot[1].innerHTML = team[4].nome
            slot[2].innerHTML = team[2].nome
            slot[3].innerHTML = team[3].nome
            slot[4].innerHTML = team[5].nome
            slot[5].innerHTML = team[8].nome
            slot[6].innerHTML = team[6].nome
            slot[7].innerHTML = team[7].nome
            
        break;
        
        case 2:            
            rounds.innerHTML = "Rodada 3"
            team1 = Number(resultados[0].value)
            team4 = Number(resultados[1].value)
            team2 = Number(resultados[2].value)
            team3 = Number(resultados[3].value)
            team5 = Number(resultados[4].value)
            team8 = Number(resultados[5].value)
            team6 = Number(resultados[6].value)
            team7 = Number(resultados[7].value)
            if(team1 == team4){//jogo 1
        
            }else if(team1 > team4){
                
            }else{      
                nome = team[1]
                team[1] = team[4]
                team[4] = nome
            } 
            if(team2 == team3){//jogo 2
                alert("Erro no jogo2")
        
            }else if(team2 > team3){
                
            }else{
                nome = team[2]
                team[2] = team[3]
                team[3] = nome
            }
        
            if(team5 == team8){//jogo 3
                alert("Erro no jogo3")
        
            }else if(team5 > team8){
            
            }else{
                nome = team[5]
                team[5] = team[8]
                team[8] = nome
            }
        
            if(team6 == team7){//jogo 4
                alert("Erro no jogo4")
        
            }else if(team6 > team7){
                
            }else{
                nome = team[6]
                team[6] = team[7]
                team[7] = nome       
            }

            team[1].r3 = team[2].nome
            team[2].r3 = team[1].nome
            team[3].r3 = team[4].nome
            team[4].r3 = team[3].nome
            team[5].r3 = team[6].nome
            team[6].r3 = team[5].nome
            team[7].r3 = team[8].nome
            team[8].r3 = team[7].nome

            //Pintar Coluna Round2
            tabela[1].style.background = 'green'
            tabela[6].style.background = 'green'
            tabela[11].style.background = 'red'
            tabela[16].style.background = 'red'
            tabela[21].style.background = 'green'
            tabela[26].style.background = 'green'
            tabela[31].style.background = 'red'
            tabela[36].style.background = 'red'

            //Coluna Team
            times[0].innerHTML = team[1].nome
            times[1].innerHTML = team[2].nome
            times[2].innerHTML = team[3].nome
            times[3].innerHTML = team[4].nome
            times[4].innerHTML = team[5].nome
            times[5].innerHTML = team[6].nome
            times[6].innerHTML = team[7].nome
            times[7].innerHTML = team[8].nome
            
            //Coluna Round1
            tabela[0].innerHTML = team[1].r1
            tabela[5].innerHTML = team[2].r1
            tabela[10].innerHTML = team[3].r1
            tabela[15].innerHTML = team[4].r1
            tabela[20].innerHTML = team[5].r1
            tabela[25].innerHTML = team[6].r1
            tabela[30].innerHTML = team[7].r1
            tabela[35].innerHTML = team[8].r1
                             
            //Coluna Round2
            tabela[1].innerHTML = team[1].r2
            tabela[6].innerHTML  = team[2].r2
            tabela[11].innerHTML  = team[3].r2
            tabela[16].innerHTML  = team[4].r2
            tabela[21].innerHTML  = team[5].r2
            tabela[26].innerHTML  = team[6].r2
            tabela[31].innerHTML  = team[7].r2
            tabela[36].innerHTML  = team[8].r2
           
            //Coluna Round3
            tabela[2].innerHTML  = team[1].r3
            tabela[7].innerHTML  = team[2].r3
            tabela[12].innerHTML = team[3].r3
            tabela[17].innerHTML  = team[4].r3
            tabela[22].innerHTML  = team[5].r3
            tabela[27].innerHTML  = team[6].r3
            tabela[32].innerHTML  = team[7].r3
            tabela[37].innerHTML  = team[8].r3
            
            slot[0].innerHTML = team[1].nome
            slot[1].innerHTML = team[2].nome
            slot[2].innerHTML = team[3].nome
            slot[3].innerHTML = team[4].nome
            slot[4].innerHTML = team[5].nome
            slot[5].innerHTML = team[6].nome
            slot[6].innerHTML = team[7].nome
            slot[7].innerHTML = team[8].nome
        break;
        
        case 3:           
            rounds.innerHTML = "Rodada 4"
            team1 = Number(resultados[0].value)
            team2 = Number(resultados[1].value)
            team3 = Number(resultados[2].value)
            team4 = Number(resultados[3].value)
            team5 = Number(resultados[4].value)
            team6 = Number(resultados[5].value)
            team7 = Number(resultados[6].value)
            team8 = Number(resultados[7].value)
            if(team1 == team2){//jogo 1
                alert("Erro no jogo1")
        
            }else if(team1 > team2){
                   
            }else{       
                nome = team[1]
                team[1] = team[2]
                team[2] = nome
            }
        
            if(team3 == team4){//jogo 2
                alert("Erro no jogo2")
        
            }else if(team3 > team4){
                
            }else{
                nome = team[3]
                team[3] = team[4]
                team[4] = nome
            }
        
            if(team5 == team6){//jogo 3
                alert("Erro no jogo3")
        
            }else if(team5 > team6){
            
            }else{
                nome = team[5]
                team[5] = team[6]
                team[6] = nome
            }
        
            if(team7 == team8){//jogo 7
                alert("Erro no jogo4")
        
            }else if(team7 > team8){
                
            }else{
                nome = team[7]
                team[7] = team[8]
                team[8] = nome       
            }
            
            team[2].r4 = team[5].nome
            team[3].r4 = team[7].nome
            team[4].r4 = team[6].nome
            team[5].r4 = team[2].nome
            team[6].r4 = team[4].nome
            team[7].r4 = team[3].nome
            
            //Pintar Coluna Round3
            tabela[2].style.background = 'green'
            tabela[7].style.background = 'red'
            tabela[12].style.background = 'green'
            tabela[17].style.background = 'red'
            tabela[22].style.background = 'green'
            tabela[27].style.background = 'red'
            tabela[32].style.background = 'green'
            tabela[37].style.background = 'red'

            //Coluna Team
            times[0].innerHTML = team[1].nome
            times[1].innerHTML = team[2].nome
            times[2].innerHTML = team[3].nome
            times[3].innerHTML = team[4].nome
            times[4].innerHTML = team[5].nome
            times[5].innerHTML = team[6].nome
            times[6].innerHTML = team[7].nome
            times[7].innerHTML = team[8].nome
            
            //Coluna Round1
            tabela[0].innerHTML = team[1].r1
            tabela[5].innerHTML = team[2].r1
            tabela[10].innerHTML = team[3].r1         
            tabela[15].innerHTML = team[4].r1
            tabela[20].innerHTML = team[5].r1
            tabela[25].innerHTML = team[6].r1
            tabela[30].innerHTML = team[7].r1
            tabela[35].innerHTML = team[8].r1    
                  
            //Coluna Round2
            tabela[1].innerHTML = team[1].r2
            tabela[6].innerHTML  = team[2].r2            
            tabela[11].innerHTML  = team[3].r2
            tabela[16].innerHTML  = team[4].r2
            tabela[21].innerHTML  = team[5].r2
            tabela[26].innerHTML  = team[6].r2
            tabela[31].innerHTML  = team[7].r2
            tabela[36].innerHTML  = team[8].r2
            
            //Coluna Round3
            tabela[2].innerHTML  = team[1].r3
            tabela[7].innerHTML  = team[2].r3
            tabela[12].innerHTML = team[3].r3
            tabela[17].innerHTML  = team[4].r3
            tabela[22].innerHTML  = team[5].r3
            tabela[27].innerHTML  = team[6].r3
            tabela[32].innerHTML  = team[7].r3
            tabela[37].innerHTML  = team[8].r3

            //Coluna Round4
            tabela[8].innerHTML  = team[2].r4 
            tabela[13].innerHTML  = team[3].r4
            tabela[18].innerHTML  = team[4].r4
            tabela[23].innerHTML  = team[5].r4        
            tabela[28].innerHTML = team[6].r4             
            tabela[33].innerHTML  = team[7].r4
            
            slot[0].innerHTML = team[2].nome
            slot[1].innerHTML = team[5].nome
            slot[2].innerHTML = team[3].nome
            slot[3].innerHTML = team[7].nome
            slot[4].innerHTML = team[4].nome
            slot[5].innerHTML = team[6].nome
            desaparecer4.style.display = "none";
        break;      
        
        case 4:
            rounds.innerHTML = "Rodada 5"
            team2 = Number(resultados[0].value)
            team5 = Number(resultados[1].value)
            team3 = Number(resultados[2].value)
            team7 = Number(resultados[3].value)
            team4 = Number(resultados[4].value)
            team6 = Number(resultados[5].value)
            
            if(team2 == team5){//jogo 1
                alert("Erro no jogo1")
        
            }else if(team2 > team5){
                   res = '10'
            }else{       
                nome = team[2]
                team[2] = team[5]
                team[5] = nome
                res = '01'
            }
        
            if(team3 == team7){//jogo 2
                alert("Erro no jogo2")
        
            }else if(team3 > team7){
                res += '10'
            }else{
                nome = team[3]
                team[3] = team[7]
                team[7] = nome
                res += '01'
            }
        
            if(team4 == team6){//jogo 3
                alert("Erro no jogo3")
        
            }else if(team4 > team6){
                res += '10'
            }else{
                nome = team[4]
                team[4] = team[6]
                team[6] = nome
                res += '01'
            }            
            switch(res){
                case '101010':                  
                    team[4].r5 = team[5].nome
                    team[5].r5 = team[4].nome

                    //Pintar Coluna Round4
                    tabela[3].style.background = 'gray'//Linha 1
                    tabela[8].style.background = 'green'//Linha 2
                    tabela[13].style.background = 'green'//Linha 3
                    tabela[18].style.background = 'green'//Linha 4
                    tabela[23].style.background = 'red'//Linha 5
                    tabela[28].style.background = 'red'//Linha 6
                    tabela[33].style.background = 'red'//Linha 7
                    tabela[38].style.background = 'gray'//Linha 8                   

                    //Coluna Round5  
                    tabela[19].innerHTML  = team[5].nome//Linha 4          
                    tabela[24].innerHTML = team[4].nome//Linha 5                                
                                
                    slot[0].innerHTML = team[4].nome
                    slot[1].innerHTML = team[5].nome

                    desaparecer2.style.display = "none";
                    desaparecer3.style.display = "none";
                    desaparecer4.style.display = "none";
                break;
                
                case '101001':
                    team[4].r5 = team[5].nome
                    team[5].r5 = team[4].nome
                    
                    //Pintar Coluna Round1
                    tabela[0].style.background = 'green'
                    tabela[5].style.background = 'green'
                    tabela[10].style.background = 'green'
                    tabela[15].style.background = 'red'
                    tabela[20].style.background = 'red'
                    tabela[25].style.background = 'green'
                    tabela[30].style.background = 'red'
                    tabela[35].style.background = 'red'

                    //Pintar Coluna Round2
                    tabela[1].style.background = 'green'
                    tabela[6].style.background = 'green'
                    tabela[11].style.background = 'red'
                    tabela[16].style.background = 'green'
                    tabela[21].style.background = 'green'
                    tabela[26].style.background = 'red'
                    tabela[31].style.background = 'red'
                    tabela[36].style.background = 'red'

                    //Pintar Coluna Round3
                    tabela[2].style.background = 'green'
                    tabela[7].style.background = 'red'
                    tabela[12].style.background = 'green'
                    tabela[17].style.background = 'red'
                    tabela[22].style.background = 'green'
                    tabela[27].style.background = 'red'
                    tabela[32].style.background = 'green'
                    tabela[37].style.background = 'red'

                    //Pintar Coluna Round4
                    tabela[3].style.background = 'gray'
                    tabela[8].style.background = 'green'
                    tabela[13].style.background = 'green'
                    tabela[18].style.background = 'green'
                    tabela[23].style.background = 'red'
                    tabela[28].style.background = 'red'
                    tabela[33].style.background = 'red'
                    tabela[38].style.background = 'gray'                                 

                    //Coluna Round5           
                    tabela[19].innerHTML = team[4].r5//Linha 4
                    tabela[24].innerHTML  = team[5].r5//Linha 5
                                
                    slot[0].innerHTML = team[4].nome
                    slot[1].innerHTML = team[5].nome

                    desaparecer2.style.display = "none";
                    desaparecer3.style.display = "none";
                    desaparecer4.style.display = "none";                   
                break;
                
                case '100110':
                    nome = team[7]
                    team[7] = team[6]
                    team[6] = nome

                    team[3].r5 = team[4].nome
                    team[4].r5 = team[3].nome
                    team[5].r5 = team[6].nome
                    team[6].r5 = team[5].nome
                    
                    //Pintar Coluna Round1
                    tabela[0].style.background = 'green'
                    tabela[5].style.background = 'green'
                    tabela[10].style.background = 'red'
                    tabela[15].style.background = 'green'
                    tabela[20].style.background = 'red'
                    tabela[25].style.background = 'green'
                    tabela[30].style.background = 'red'
                    tabela[35].style.background = 'red'

                    //Pintar Coluna Round2
                    tabela[1].style.background = 'green'
                    tabela[6].style.background = 'green'
                    tabela[11].style.background = 'red'
                    tabela[16].style.background = 'red'
                    tabela[21].style.background = 'green'
                    tabela[26].style.background = 'red'
                    tabela[31].style.background = 'green'
                    tabela[36].style.background = 'red'

                    //Pintar Coluna Round3
                    tabela[2].style.background = 'green'
                    tabela[7].style.background = 'red'
                    tabela[12].style.background = 'green'
                    tabela[17].style.background = 'red'
                    tabela[22].style.background = 'green'
                    tabela[27].style.background = 'green'
                    tabela[32].style.background = 'red'
                    tabela[37].style.background = 'red'

                    //Pintar Coluna Round4
                    tabela[3].style.background = 'gray'
                    tabela[8].style.background = 'green'
                    tabela[13].style.background = 'green'
                    tabela[18].style.background = 'green'
                    tabela[23].style.background = 'red'
                    tabela[28].style.background = 'red'
                    tabela[33].style.background = 'red'
                    tabela[38].style.background = 'gray'

                    //Coluna Round5
                    tabela[14].innerHTML  = team[3].r5                                
                    tabela[19].innerHTML  = team[4].r5          
                    tabela[24].innerHTML = team[5].r5
                    tabela[29].innerHTML = team[6].r5                                
                                
                    slot[0].innerHTML = team[3].nome
                    slot[1].innerHTML = team[4].nome
                    slot[2].innerHTML = team[5].nome
                    slot[3].innerHTML = team[6].nome
                    
                    desaparecer3.style.display = "none";
                    desaparecer4.style.display = "none";
                break;
                
                case '100101':
                    nome = team[7]
                    team[7] = team[6]
                    team[6] = nome

                    team[3].r5 = team[4].nome
                    team[4].r5 = team[3].nome
                    team[5].r5 = team[6].nome
                    team[6].r5 = team[5].nome

                    //Pintar Coluna Round1
                    tabela[0].style.background = 'green'
                    tabela[5].style.background = 'green'
                    tabela[10].style.background = 'red'
                    tabela[15].style.background = 'red'
                    tabela[20].style.background = 'red'
                    tabela[25].style.background = 'green'
                    tabela[30].style.background = 'green'
                    tabela[35].style.background = 'red'

                    //Pintar Coluna Round2
                    tabela[1].style.background = 'green'
                    tabela[6].style.background = 'green'
                    tabela[11].style.background = 'red'
                    tabela[16].style.background = 'green'
                    tabela[21].style.background = 'green'
                    tabela[26].style.background = 'red'
                    tabela[31].style.background = 'red'
                    tabela[36].style.background = 'red'

                    //Pintar Coluna Round3
                    tabela[2].style.background = 'green'
                    tabela[7].style.background = 'red'
                    tabela[12].style.background = 'green'
                    tabela[17].style.background = 'red'
                    tabela[22].style.background = 'green'
                    tabela[27].style.background = 'green'
                    tabela[32].style.background = 'red'
                    tabela[37].style.background = 'red'

                    //Pintar Coluna Round4
                    tabela[3].style.background = 'gray'
                    tabela[8].style.background = 'green'
                    tabela[13].style.background = 'green'
                    tabela[18].style.background = 'green'
                    tabela[23].style.background = 'red'
                    tabela[28].style.background = 'red'
                    tabela[33].style.background = 'red'
                    tabela[38].style.background = 'gray'                 

                    //Coluna Round5
                    tabela[14].innerHTML = team[3].r5//Linha 3
                    tabela[19].innerHTML  = team[4].r5//Linha 4           
                    tabela[24].innerHTML = team[5].r5//Linha 5                
                    tabela[29].innerHTML = team[6].r5//Linha 6
                                
                    slot[0].innerHTML = team[3].nome
                    slot[1].innerHTML = team[4].nome
                    slot[2].innerHTML = team[5].nome
                    slot[3].innerHTML = team[6].nome
                    
                    desaparecer3.style.display = "none";
                    desaparecer4.style.display = "none";
                break;
                
                case '011010':
                    team[4].r5 = team[5].nome
                    team[5].r5 = team[4].nome

                    //Pintar Coluna Round1
                    tabela[0].style.background = 'green'
                    tabela[5].style.background = 'red'
                    tabela[10].style.background = 'green'
                    tabela[15].style.background = 'green'
                    tabela[20].style.background = 'green'
                    tabela[25].style.background = 'red'
                    tabela[30].style.background = 'red'
                    tabela[35].style.background = 'red'

                    //Pintar Coluna Round2
                    tabela[1].style.background = 'green'
                    tabela[6].style.background = 'green'
                    tabela[11].style.background = 'red'
                    tabela[16].style.background = 'red'
                    tabela[21].style.background = 'green'
                    tabela[26].style.background = 'green'
                    tabela[31].style.background = 'red'
                    tabela[36].style.background = 'red'

                    //Pintar Coluna Round3
                    tabela[2].style.background = 'green'
                    tabela[7].style.background = 'green'
                    tabela[12].style.background = 'green'
                    tabela[17].style.background = 'red'
                    tabela[22].style.background = 'red'
                    tabela[27].style.background = 'red'
                    tabela[32].style.background = 'green'
                    tabela[37].style.background = 'red'

                    //Pintar Coluna Round4
                    tabela[3].style.background = 'gray'
                    tabela[8].style.background = 'green'
                    tabela[13].style.background = 'green'
                    tabela[18].style.background = 'green'
                    tabela[23].style.background = 'red'
                    tabela[28].style.background = 'red'
                    tabela[33].style.background = 'red'
                    tabela[38].style.background = 'gray'             

                    //Coluna Round5
                    tabela[19].innerHTML  = team[4].r5//Linha 4           
                    tabela[24].innerHTML = team[5].r5//Linha 5
                                
                    slot[0].innerHTML = team[4].nome
                    slot[1].innerHTML = team[5].nome

                    desaparecer2.style.display = "none";
                    desaparecer3.style.display = "none";
                    desaparecer4.style.display = "none";
                break;

                case '011001':
                    team[4].r5 = team[5].nome
                    team[5].r5 = team[4].nome

                    //Pintar Coluna Round1
                    tabela[0].style.background = 'green'
                    tabela[5].style.background = 'red'
                    tabela[10].style.background = 'green'
                    tabela[15].style.background = 'red'
                    tabela[20].style.background = 'green'
                    tabela[25].style.background = 'green'
                    tabela[30].style.background = 'red'
                    tabela[35].style.background = 'red'

                    //Pintar Coluna Round2
                    tabela[1].style.background = 'green'
                    tabela[6].style.background = 'green'
                    tabela[11].style.background = 'red'
                    tabela[16].style.background = 'green'
                    tabela[21].style.background = 'green'
                    tabela[26].style.background = 'red'
                    tabela[31].style.background = 'red'
                    tabela[36].style.background = 'red'

                    //Pintar Coluna Round3
                    tabela[2].style.background = 'green'
                    tabela[7].style.background = 'green'
                    tabela[12].style.background = 'green'
                    tabela[17].style.background = 'red'
                    tabela[22].style.background = 'red'
                    tabela[27].style.background = 'red'
                    tabela[32].style.background = 'green'
                    tabela[37].style.background = 'red'

                    //Pintar Coluna Round4
                    tabela[3].style.background = 'gray'
                    tabela[8].style.background = 'green'
                    tabela[13].style.background = 'green'
                    tabela[18].style.background = 'green'
                    tabela[23].style.background = 'red'
                    tabela[28].style.background = 'red'
                    tabela[33].style.background = 'red'
                    tabela[38].style.background = 'gray'              

                    //Coluna Round5           
                    tabela[19].innerHTML = team[4].r5//Linha 4
                    tabela[24].innerHTML  = team[5].r5//Linha 5
                                
                    slot[0].innerHTML = team[4].nome
                    slot[1].innerHTML = team[5].nome

                    desaparecer2.style.display = "none";
                    desaparecer3.style.display = "none";
                    desaparecer4.style.display = "none";
                break;
                
                case '010110':
                    nome = team[6]
                    team[6] = team[7]
                    team[7] = nome

                    team[3].r5 = team[4].nome
                    team[4].r5 = team[3].nome
                    team[5].r5 = team[6].nome
                    team[6].r5 = team[5].nome
                   
                    //Pintar Coluna Round1
                    tabela[0].style.background = 'green'
                    tabela[5].style.background = 'red'
                    tabela[10].style.background = 'red'
                    tabela[15].style.background = 'green'
                    tabela[20].style.background = 'green'
                    tabela[25].style.background = 'green'
                    tabela[30].style.background = 'red'
                    tabela[35].style.background = 'red'

                    //Pintar Coluna Round2
                    tabela[1].style.background = 'green'
                    tabela[6].style.background = 'green'
                    tabela[11].style.background = 'red'
                    tabela[16].style.background = 'red'
                    tabela[21].style.background = 'green'
                    tabela[26].style.background = 'red'
                    tabela[31].style.background = 'green'
                    tabela[36].style.background = 'red'

                    //Pintar Coluna Round3
                    tabela[2].style.background = 'green'
                    tabela[7].style.background = 'green'
                    tabela[12].style.background = 'green'
                    tabela[17].style.background = 'red'
                    tabela[22].style.background = 'red'
                    tabela[27].style.background = 'green'
                    tabela[32].style.background = 'red'
                    tabela[37].style.background = 'red'

                    //Pintar Coluna Round4
                    tabela[3].style.background = 'gray'
                    tabela[8].style.background = 'green'
                    tabela[13].style.background = 'green'
                    tabela[18].style.background = 'green'
                    tabela[23].style.background = 'red'
                    tabela[28].style.background = 'red'
                    tabela[33].style.background = 'red'
                    tabela[38].style.background = 'gray'              

                    //Coluna Round5
                    tabela[14].innerHTML = team[3].r5//Linha 3           
                    tabela[19].innerHTML = team[4].r5//Linha 4
                    tabela[24].innerHTML  = team[5].r5//Linha 5
                    tabela[29].innerHTML = team[6].r5//Linha 6
                                
                    slot[0].innerHTML = team[3].nome
                    slot[1].innerHTML = team[4].nome
                    slot[2].innerHTML = team[5].nome
                    slot[3].innerHTML = team[6].nome

                    desaparecer3.style.display = "none";
                    desaparecer4.style.display = "none";
                break;
                
                case '010101':
                    nome = team[7]
                    team[7] = team[6]
                    team[6] = nome

                    team[3].r5 = team[5].nome
                    team[4].r5 = team[6].nome
                    team[5].r5 = team[3].nome
                    team[6].r5 = team[4].nome

                    //Pintar Coluna Round1
                    tabela[0].style.background = 'green'
                    tabela[5].style.background = 'red'
                    tabela[10].style.background = 'red'
                    tabela[15].style.background = 'red'
                    tabela[20].style.background = 'green'
                    tabela[25].style.background = 'green'
                    tabela[30].style.background = 'green'
                    tabela[35].style.background = 'red'

                    //Pintar Coluna Round2
                    tabela[1].style.background = 'green'
                    tabela[6].style.background = 'green'
                    tabela[11].style.background = 'red'
                    tabela[16].style.background = 'green'
                    tabela[21].style.background = 'green'
                    tabela[26].style.background = 'red'
                    tabela[31].style.background = 'red'
                    tabela[36].style.background = 'red'

                    //Pintar Coluna Round3
                    tabela[2].style.background = 'green'
                    tabela[7].style.background = 'green'
                    tabela[12].style.background = 'green'
                    tabela[17].style.background = 'red'
                    tabela[22].style.background = 'red'
                    tabela[27].style.background = 'green'
                    tabela[32].style.background = 'red'
                    tabela[37].style.background = 'red'

                    //Pintar Coluna Round4
                    tabela[3].style.background = 'gray'
                    tabela[8].style.background = 'green'
                    tabela[13].style.background = 'green'
                    tabela[18].style.background = 'green'
                    tabela[23].style.background = 'red'
                    tabela[28].style.background = 'red'
                    tabela[33].style.background = 'red'
                    tabela[38].style.background = 'gray'              

                    //Coluna Round5 
                    tabela[14].innerHTML = team[3].r5//Linha 3          
                    tabela[19].innerHTML = team[4].r5//Linha 4
                    tabela[24].innerHTML  = team[5].r5//Linha 5
                    tabela[29].innerHTML = team[6].r5//Linha 6
                                
                    slot[0].innerHTML = team[3].nome
                    slot[1].innerHTML = team[5].nome
                    slot[2].innerHTML = team[4].nome
                    slot[3].innerHTML = team[6].nome

                    desaparecer3.style.display = "none";
                    desaparecer4.style.display = "none";
                break;
                
                default: alert(`erro o resultado foi ${res}`)
            }
                //Coluna Team
                times[0].innerHTML = team[1].nome//Linha 1
                times[1].innerHTML = team[2].nome//Linha 2
                times[2].innerHTML = team[3].nome//Linha 3
                times[3].innerHTML = team[4].nome//Linha 4
                times[4].innerHTML = team[5].nome//Linha 5
                times[5].innerHTML = team[6].nome//Linha 6
                times[6].innerHTML = team[7].nome//Linha 7
                times[7].innerHTML = team[8].nome//Linha 8
                
                //Coluna Round1
                tabela[0].innerHTML = team[1].r1//Linha 1
                tabela[5].innerHTML = team[2].r1//Linha 2
                tabela[10].innerHTML = team[3].r1//Linha 3         
                tabela[15].innerHTML = team[4].r1//Linha 4
                tabela[20].innerHTML = team[5].r1//Linha 5
                tabela[25].innerHTML = team[6].r1//Linha 6
                tabela[30].innerHTML = team[7].r1//Linha 7
                tabela[35].innerHTML = team[8].r1//Linha 8    
                    
                //Coluna Round2
                tabela[1].innerHTML = team[1].r2//Linha 1
                tabela[6].innerHTML  = team[2].r2//Linha 2            
                tabela[11].innerHTML  = team[3].r2//Linha 3
                tabela[16].innerHTML  = team[4].r2//Linha 4
                tabela[21].innerHTML  = team[5].r2//Linha 5
                tabela[26].innerHTML  = team[6].r2//Linha 6
                tabela[31].innerHTML  = team[7].r2//Linha 7
                tabela[36].innerHTML  = team[8].r2//Linha 8
                
                //Coluna Round3
                tabela[2].innerHTML  = team[1].r3//Linha 1
                tabela[7].innerHTML  = team[2].r3//Linha 2
                tabela[12].innerHTML = team[3].r3//Linha 3
                tabela[17].innerHTML  = team[4].r3//Linha 4
                tabela[22].innerHTML  = team[5].r3//Linha 5
                tabela[27].innerHTML  = team[6].r3//Linha 6
                tabela[32].innerHTML  = team[7].r3//Linha 7
                tabela[37].innerHTML  = team[8].r3//Linha 8

                //Coluna Round4
                tabela[8].innerHTML  = team[2].r4//Linha 2 
                tabela[13].innerHTML  = team[3].r4//Linha 3
                tabela[18].innerHTML  = team[4].r4//Linha 4
                tabela[23].innerHTML  = team[5].r4//Linha 5        
                tabela[28].innerHTML = team[6].r4//Linha 6            
                tabela[33].innerHTML  = team[7].r4//Linha 7        
        break;
        
        case 5:
            rounds.innerHTML = "Semi-Final"
            team4 = Number(resultados[0].value)
            team5 = Number(resultados[1].value)

            //Pintar Coluna Round5
            tabela[4].style.background = 'gray'
            tabela[9].style.background = 'gray'
            tabela[14].style.background = 'gray'
            tabela[19].style.background = 'gray'
            tabela[24].style.background = 'gray'
            tabela[29].style.background = 'gray'
            tabela[34].style.background = 'gray'
            tabela[39].style.background = 'gray'
            switch(res){
                
                case '101010':
                    team[3].r5 = ''
                    team[4].r5 = team[5].nome
                    team[5].r5 = team[4].nome
                    team[6].r5 = ''

                    tabela[19].style.background = 'green'
                    tabela[24].style.background = 'red'                                 
                    if(team4 == team5){//jogo 1
                        alert("Erro no jogo1")
                
                    }else if(team4 > team5){
                        
                    }else{       
                        nome = team[4]
                        team[4] = team[5]
                        team[5] = nome
                    }
                break;
                
                case '101001':
                    team[3].r5 = ''
                    team[4].r5 = team[5].nome
                    team[5].r5 = team[4].nome
                    team[6].r5 = ''

                    tabela[19].style.background = 'green'
                    tabela[24].style.background = 'red'                                 
                    if(team4 == team5){//jogo 1
                        alert("Erro no jogo1")
                
                    }else if(team4 > team5){
                        
                    }else{       
                        nome = team[4]
                        team[4] = team[5]
                        team[5] = nome
                    }              
                break;
                
                case '100110':                    
                    team3 = Number(resultados[0].value)
                    team4 = Number(resultados[1].value)
                    team5 = Number(resultados[2].value)
                    team6 = Number(resultados[3].value)

                    team[3].r5 = team[4].nome
                    team[4].r5 = team[3].nome
                    team[5].r5 = team[6].nome
                    team[6].r5 = team[5].nome

                    tabela[14].style.background = 'green'
                    tabela[19].style.background = 'green'
                    tabela[24].style.background = 'red'
                    tabela[29].style.background = 'red'                                 
                    if(team3 == team4){//jogo 1
                        alert("Erro no jogo1")
                
                    }else if(team3 > team4){
                        
                    }else{       
                        nome = team[3]
                        team[3] = team[4]
                        team[4] = nome
                    }
                    if(team5 == team6){//jogo 1
                        alert("Erro no jogo1")
                
                    }else if(team5 > team6){
                        
                    }else{       
                        nome = team[5]
                        team[5] = team[6]
                        team[6] = nome
                    }
                        nome = team[5]
                        team[5] = team[4]
                        team[4] = nome
                break;
                
                case '100101':
                    team3 = Number(resultados[0].value)
                    team4 = Number(resultados[1].value)
                    team5 = Number(resultados[2].value)
                    team6 = Number(resultados[3].value)

                    team[3].r5 = team[4].nome
                    team[4].r5 = team[3].nome
                    team[5].r5 = team[6].nome
                    team[6].r5 = team[5].nome

                    tabela[14].style.background = 'green'
                    tabela[19].style.background = 'green'
                    tabela[24].style.background = 'red'
                    tabela[29].style.background = 'red'                                 
                    if(team3 == team4){//jogo 1
                        alert("Erro no jogo1")
                
                    }else if(team3 > team4){
                        
                    }else{       
                        nome = team[3]
                        team[3] = team[4]
                        team[4] = nome
                    }
                    if(team5 == team6){//jogo 1
                        alert("Erro no jogo1")
                
                    }else if(team5 > team6){
                        
                    }else{       
                        nome = team[5]
                        team[5] = team[6]
                        team[6] = nome
                    }
                        nome = team[5]
                        team[5] = team[4]
                        team[4] = nome
                break;
                
                case '011010':
                    team[3].r5 = ''
                    team[4].r5 = team[5].nome
                    team[5].r5 = team[4].nome
                    team[6].r5 = ''

                    tabela[19].style.background = 'green'
                    tabela[24].style.background = 'red'                                 
                    if(team4 == team5){//jogo 1
                        alert("Erro no jogo1")
                
                    }else if(team4 > team5){
                        
                    }else{       
                        nome = team[4]
                        team[4] = team[5]
                        team[5] = nome
                    }
                break;

                case '011001':
                    team[3].r5 = ''
                    team[4].r5 = team[5].nome
                    team[5].r5 = team[4].nome
                    team[6].r5 = ''

                    tabela[19].style.background = 'green'
                    tabela[24].style.background = 'red'                                 
                    if(team4 == team5){//jogo 1
                        alert("Erro no jogo1")
                
                    }else if(team4 > team5){
                        
                    }else{       
                        nome = team[4]
                        team[4] = team[5]
                        team[5] = nome
                    }
                break;
                
                case '010110':
                    team3 = Number(resultados[0].value)
                    team4 = Number(resultados[1].value)
                    team5 = Number(resultados[2].value)
                    team6 = Number(resultados[3].value)

                    team[3].r5 = team[4].nome
                    team[4].r5 = team[3].nome
                    team[5].r5 = team[6].nome
                    team[6].r5 = team[5].nome

                    tabela[14].style.background = 'green'
                    tabela[19].style.background = 'green'
                    tabela[24].style.background = 'red'
                    tabela[29].style.background = 'red'                                 
                    if(team3 == team4){//jogo 1
                        alert("Erro no jogo1")
                
                    }else if(team3 > team4){
                        
                    }else{       
                        nome = team[3]
                        team[3] = team[4]
                        team[4] = nome
                    }
                    if(team5 == team6){//jogo 1
                        alert("Erro no jogo1")
                
                    }else if(team5 > team6){
                        
                    }else{       
                        nome = team[5]
                        team[5] = team[6]
                        team[6] = nome
                    }
                        nome = team[5]
                        team[5] = team[4]
                        team[4] = nome
                break;
                
                case '010101':
                    team3 = Number(resultados[0].value)
                    team4 = Number(resultados[2].value)
                    team5 = Number(resultados[1].value)
                    team6 = Number(resultados[3].value)

                    team[3].r5 = team[5].nome
                    team[4].r5 = team[6].nome
                    team[5].r5 = team[3].nome
                    team[6].r5 = team[4].nome

                    tabela[14].style.background = 'green'
                    tabela[19].style.background = 'green'
                    tabela[24].style.background = 'red'
                    tabela[29].style.background = 'red'                                 
                    if(team3 == team5){//jogo 1
                        alert("Erro no jogo1")
                
                    }else if(team3 > team5){
                        
                    }else{       
                        nome = team[3]
                        team[3] = team[5]
                        team[5] = nome
                    }
                    if(team4 == team6){//jogo 1
                        alert("Erro no jogo1")
                
                    }else if(team4 > team6){
                        
                    }else{       
                        nome = team[4]
                        team[4] = team[6]
                        team[6] = nome
                    } 
                break;
                
                default: alert(`erro o resultado foi ${res}`)               
            }
            //Coluna Team           
            times[2].innerHTML = team[3].nome//Linha 3
            times[3].innerHTML = team[4].nome//Linha 4
            times[4].innerHTML = team[5].nome//Linha 5
            times[5].innerHTML = team[6].nome//Linha 6
            
            
            //Coluna Round1
            tabela[10].innerHTML = team[3].r1//Linha 3         
            tabela[15].innerHTML = team[4].r1//Linha 4
            tabela[20].innerHTML = team[5].r1//Linha 5
            tabela[25].innerHTML = team[6].r1//Linha 6    
                
            //Coluna Round2           
            tabela[11].innerHTML  = team[3].r2//Linha 3
            tabela[16].innerHTML  = team[4].r2//Linha 4
            tabela[21].innerHTML  = team[5].r2//Linha 5
            tabela[26].innerHTML  = team[6].r2//Linha 6
            
            //Coluna Round3
            tabela[12].innerHTML = team[3].r3//Linha 3
            tabela[17].innerHTML  = team[4].r3//Linha 4
            tabela[22].innerHTML  = team[5].r3//Linha 5
            tabela[27].innerHTML  = team[6].r3//Linha 6

            //Coluna Round4
            tabela[13].innerHTML  = team[3].r4//Linha 3
            tabela[18].innerHTML  = team[4].r4//Linha 4
            tabela[23].innerHTML  = team[5].r4//Linha 5        
            tabela[28].innerHTML = team[6].r4//Linha 6

            //Coluna Round5
            tabela[14].innerHTML  = team[3].r5//Linha 3
            tabela[19].innerHTML  = team[4].r5//Linha 4
            tabela[24].innerHTML  = team[5].r5//Linha 5        
            tabela[29].innerHTML = team[6].r5//Linha 6

            slot[0].innerHTML = team[1].nome
            slot[1].innerHTML = team[4].nome
            slot[2].innerHTML = team[2].nome
            slot[3].innerHTML = team[3].nome

            desaparecer2.style.display = "";
            desaparecer3.style.display = "none";
            desaparecer4.style.display = "none";

            
        break;            
        
        case 6:
            rounds.innerHTML = "Disputa 3° 4° Lugar"
            team1 = Number(resultados[0].value)
            team2 = Number(resultados[2].value)
            team3 = Number(resultados[3].value)
            team4 = Number(resultados[1].value)

            if(team1 == team4){//jogo 1
                alert("Erro no jogo1")
        
            }else if(team1 > team4){
                
            }else{       
                nome = team[1]
                team[1] = team[4]
                team[4] = nome
            }

            if(team2 == team3){//jogo 2
                alert("Erro no jogo2")
        
            }else if(team2 > team3){
                
            }else{       
                nome = team[2]
                team[2] = team[3]
                team[3] = nome
            }
            desaparecer2.style.display = "none";
            desaparecer3.style.display = "none";
            desaparecer4.style.display = "none";
            
            slot[0].innerHTML = team[3].nome
            slot[1].innerHTML = team[4].nome
        break;
    
        case 7:
            rounds.innerHTML = "Grand Final"
            team3 = Number(resultados[0].value)
            team4 = Number(resultados[1].value)
          
            if(team3 == team4){//jogo 2
                alert("Erro no jogo2")
        
            }else if(team3 > team4){
                
            }else{       
                nome = team[3]
                team[3] = team[4]
                team[4] = nome
            }

            slot[0].innerHTML = team[1].nome
            slot[1].innerHTML = team[2].nome
        break;

        case 8:
            team1 = Number(resultados[0].value)
            team2 = Number(resultados[1].value)
            if(team1 == team2){//jogo 1
                alert("Erro no jogo1")
        
            }else if(team1 > team2){
                
            }else{       
                nome = team[1]
                team[1] = team[2]
                team[2] = nome
            }
            invisivel.style.display = "";

            resultadoFinal[0].innerHTML = team[1].nome
            resultadoFinal[1].innerHTML = team[2].nome
            resultadoFinal[2].innerHTML = team[3].nome
            resultadoFinal[3].innerHTML = team[4].nome
            resultadoFinal[4].innerHTML = team[5].nome
            resultadoFinal[5].innerHTML = team[6].nome
            resultadoFinal[6].innerHTML = team[7].nome
            resultadoFinal[7].innerHTML = team[8].nome
        break;
    }
}