function Nummer(){
    var number = prompt('Введите число больше 100')
    while (number<=100)
    {
        number = prompt('Вы ввели число меньше 100')
    }
    alert('Введено нужное число')
}