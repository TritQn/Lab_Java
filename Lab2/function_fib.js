function funcfib(){
    var n = +prompt('Введите значение n');
    function fib(n) {
        return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }
    alert(fib(n));
}
