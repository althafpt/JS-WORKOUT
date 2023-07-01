let fc,sc,nc;
fc=Math.floor(Math.random()*(11-2+1))+2;
sc=Math.floor(Math.random()*(11-2+1))+2;
let bj=false;
let alive=true;
let msg="";
let sum;
let fccard="",sccard="",nccard="";
let msg_element = document.getElementById("msg");
let sumel=document.getElementById("sum");
let cardel=document.querySelector("#card");
function startGame()
{
    cardel.textContent="Cards;";
    fc=Math.floor(Math.random()*(11-2+1))+2;
    sc=Math.floor(Math.random()*(11-2+1))+2;
    switch(fc)
    {
        case 2: 
            fccard="2";
            break;
        case 3:
            fccard="3"
            break;
        case 4: 
            fccard="4";
            break;
        case 5:
            fccard="5"
            break;
        case 6: 
            fccard="6";
            break;
        case 7:
            fccard="7"
            break;
        case 8: 
            fccard="8";
            break;
        case 9:
            fccard="9"
            break;
        case 10: 
            fccard="K/Q/J";
            break;
        case 11:
            fccard="A"
            break;
    }
    switch(sc)
    {
        case 2: 
            sccard="2";
            break;
        case 3:
            sccard="3"
            break;
        case 4: 
            sccard="4";
            break;
        case 5:
            sccard="5"
            break;
        case 6: 
            sccard="6";
            break;
        case 7:
            sccard="7"
            break;
        case 8: 
            sccard="8";
            break;
        case 9:
            sccard="9"
            break;
        case 10: 
            sccard="K/Q/J";
            break;
        case 11:
            sccard="A"
            break;
    }
    sum=fc+sc;

    if(sum < 21)
    {
        msg="Do you want to Draw new card?🤨";
    }
    else if(sum === 21)
    {
        msg="Jackpot!🥳";
        bj=true;
    }
    else
    {
        msg="You are out!🥹";
        alive=false;
    }
    msg_element.textContent=msg;
    sumel.textContent="Sum:"+sum;
    cardel.textContent=fccard+" "+sccard;
}
function newCard()
{
    sumel.textContent="Sum:"
    nc=Math.floor(Math.random()*(11-2+1))+2;
    sum+=nc;
    switch(nc)
    {
        case 2: 
            nccard="2";
            break;
        case 3:
            nccard="3"
            break;
        case 4: 
            nccard="4";
            break;
        case 5:
            nccard="5"
            break;
        case 6: 
            nccard="6";
            break;
        case 7:
            nccard="7"
            break;
        case 8: 
            nccard="8";
            break;
        case 9:
            nccard="9"
            break;
        case 10: 
            nccard="K/Q/J";
            break;
        case 11:
            nccard="A"
            break;
    }
    if(sum < 21)
    {
        msg="Do you want to Draw new card?🤨";
    }
    else if(sum === 21)
    {
        msg="Jackpot!🥳";
        bj=true;
    }
    else
    {
        msg="You are out!🥹";
        alive=false;
    }
    msg_element.textContent=msg;
    sumel.textContent="Sum:" + sum;
    cardel.textContent+=" "+nccard;
}