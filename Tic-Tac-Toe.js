let t = 1;
const turn = document.getElementById("turn"); 
turn.textContent = 'player1';
const p = document.getElementById("p"); 
p.style.display = "block";
const p2 = document.getElementById("p2"); 
p2.style.display = "none";
const restart = document.getElementById("restart"); 
restart.style.display = "none";
const cnt1 = document.getElementById("cnt1"); 
cnt1.textContent = 0;
const cnt2 = document.getElementById("cnt2"); 
cnt2.textContent = 0;
let arr = [0];
let cheked = [0,0,0,0,0,0,0,0,0,0];
const container = document.getElementById("container"); 
for(let i=1;i<=9;i++){
    arr.push(i);
    arr[i] = document.getElementById((""+i));  
}
for(let i=1;i<=9;i++){
    arr[i].textContent = i;
}
function winner(){
    let x=0;
    for(let i=0;i<3;i++){
        if(arr[i*3+1].textContent == arr[i*3+2].textContent && arr[i*3+2].textContent == arr[i*3+3].textContent){
            x=1;
        }
        else if(arr[(i+1)].textContent == arr[(i+4)].textContent && arr[(i+4)].textContent == arr[(i+7)].textContent){
            x=1;
        }
        else if(arr[(i+1)].textContent == arr[(i+4)].textContent && arr[(i+4)].textContent == arr[(i+7)].textContent){
            x=1;
        }
        else if((arr[1].textContent == arr[5].textContent && arr[5].textContent == arr[9].textContent) || ((arr[3].textContent == arr[5].textContent && arr[5].textContent == arr[7].textContent))){
            x=1;
        }
        if(x==1)break;
    }
    if(x==1){
        container.style.display = "none";
        p.style.display = "none";
        p2.style.display = "block";
        restart.style.display = "block";
        const win = document.getElementById("t2"); 
        if(turn.textContent == 'player1'){
            win.textContent = 'Player1 Wins';
            cnt1.textContent++
        }
        else{
            win.textContent = 'Player2 Wins';
            cnt2.textContent++;
        }
    }
    let b = 1;
    for(let i=1;i<=9;i++){
        if(arr[i].textContent == i){
            b = 0;
            break;
        }
    }
    if(b){
        container.style.display = "none";
        p.style.display = "none";
        p2.style.display = "block";
        restart.style.display = "block";
        const win = document.getElementById("t2"); 
        win.textContent = 'Draw';
    }
}

{
    function c1(){
        if(cheked[1] == 1)return;
        cheked[1] = 1;
        arr[1].style.backgroundColor = "rgba(167, 167, 167, 0.97)";
        arr[1].style.color = "red";
        if(turn.textContent == 'player1'){
            arr[1].textContent = 'X';
            winner();
            turn.textContent = 'player2';
        }
        else{
            arr[1].textContent = 'O';
            winner();
            turn.textContent = 'player1';
        }
        
    }
    function c2(){
        if(cheked[2] == 1)return;
        cheked[2] = 1;
        arr[2].style.backgroundColor = "rgba(167, 167, 167, 0.97)";
        arr[2].style.color = "red";
        if(turn.textContent == 'player1'){
            arr[2].textContent = 'X';
            winner();
            turn.textContent = 'player2';
        }
        else{
            arr[2].textContent = 'O';
            winner();
            turn.textContent = 'player1';
        }
    }
    function c3(){
        if(cheked[3] == 1)return;
        cheked[3] = 1;
        arr[3].style.backgroundColor = "rgba(167, 167, 167, 0.97)";
        arr[3].style.color = "red";
        if(turn.textContent == 'player1'){
            arr[3].textContent = 'X';
            winner();
            turn.textContent = 'player2';
        }
        else{
            arr[3].textContent = 'O';
            winner();
            turn.textContent = 'player1';
        }
    }
    function c4(){
        if(cheked[4] == 1)return;
        cheked[4] = 1;
        arr[4].style.backgroundColor = "rgba(167, 167, 167, 0.97)";
        arr[4].style.color = "red";
        if(turn.textContent == 'player1'){
            arr[4].textContent = 'X';
            winner();
            turn.textContent = 'player2';
        }
        else{
            arr[4].textContent = 'O';
            winner();
            turn.textContent = 'player1';
        }
    }
    function c5(){
        if(cheked[5] == 1)return;
        cheked[5] = 1;
        arr[5].style.backgroundColor = "rgba(167, 167, 167, 0.97)";
        arr[5].style.color = "red";
        if(turn.textContent == 'player1'){
            arr[5].textContent = 'X';
            winner();
            turn.textContent = 'player2';
        }
        else{
            arr[5].textContent = 'O';
            winner();
            turn.textContent = 'player1';
        }
    }
    function c6(){
        if(cheked[6] == 1)return;
        cheked[6] = 1;
        arr[6].style.backgroundColor = "rgba(167, 167, 167, 0.97)";
        arr[6].style.color = "red";
        if(turn.textContent == 'player1'){
            arr[6].textContent = 'X';
            winner();
            turn.textContent = 'player2';
        }
        else{
            arr[6].textContent = 'O';
            winner();
            turn.textContent = 'player1';
        }

    }
    function c7(){
        if(cheked[7] == 1)return;
        cheked[7] = 1;
        arr[7].style.backgroundColor = "rgba(167, 167, 167, 0.97)";
        arr[7].style.color = "red";
        if(turn.textContent == 'player1'){
            arr[7].textContent = 'X';
            winner();
            turn.textContent = 'player2';
        }
        else{
            arr[7].textContent = 'O';
            winner();
            turn.textContent = 'player1';
        }

    }
    function c8(){
        if(cheked[8] == 1)return;
        cheked[8] = 1;
        arr[8].style.backgroundColor = "rgba(167, 167, 167, 0.97)";
        arr[8].style.color = "red";
        if(turn.textContent == 'player1'){
            arr[8].textContent = 'X';
            winner();
            turn.textContent = 'player2';
        }
        else{
            arr[8].textContent = 'O';
            winner();
            turn.textContent = 'player1';
        }
   
    }
    function c9(){
        if(cheked[9] == 1)return;
        cheked[9] = 1;
        arr[9].style.backgroundColor = "rgba(167, 167, 167, 0.97)";
        arr[9].style.color = "red";
        if(turn.textContent == 'player1'){
            arr[9].textContent = 'X';
            winner();
            turn.textContent = 'player2';
        }
        else{
            arr[9].textContent = 'O';
            winner();
            turn.textContent = 'player1';
        }
        
    }

}
function res(){
    p.style.display = "block";
    p2.style.display = "none";
    restart.style.display = "none";
    cheked = [0,0,0,0,0,0,0,0,0,0];
    for(let i=1;i<=9;i++){
        arr[i].style.backgroundColor = "rgb(87, 87, 87)";
        arr[i].style.color = "white";
    }
    container.style.display = "grid";
    for(let i=1;i<=9;i++){
        arr[i].textContent = i;
    }
    if(t==1){
        turn.textContent = 'player2';
        t=2;
    }
    else {
        turn.textContent = 'player1';
        t=1;
    }
}