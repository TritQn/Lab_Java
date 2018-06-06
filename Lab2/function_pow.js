function funcPow(){
    function pow(a,b){
        c=1;
        for(i=1; i<=b; i++){
            c = c*a;
        }
        return c;
    }
    var x = +prompt('Введите значение x');
    var n = +prompt('Введите значение n');
    alert(pow(x,n));    
}
