function Chislo(){
    var answer = prompt('Введите любое значение?');
    if(answer == 0)
    {
        answer = 0;
        alert(answer);
    }
    else if(answer > 0)
    {   
        answer = 1;
        alert(answer); 
    }
    else if(answer < 0)
    {
        answer = -1;
        alert(answer); 
    }
}
