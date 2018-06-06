function funcfact(){
    var n = +prompt('Введите значение n');
    function fact(n){
        factor = 1;
        if(n!=0){
            return (n != 1) ? n * fact(n - 1) : 1;
        }
        return fact;   
    }
    alert(fact(n));
}