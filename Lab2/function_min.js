function funcMin(){
    function min(a,b) {
        if(a>b){
            minc=b;
        }
        else{
            minc=a;
        }
        return minc;
    }
    var a = +prompt('Введите значение a');
    var b = +prompt('Введите значение b');
    alert(min(a,b));
}
