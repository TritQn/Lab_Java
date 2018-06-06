function funcSumTo(){
    var n = +prompt('Введите значение n');
    var choise = prompt('Как должна отработать функция? \n 1 - Через цикл \n 2 - Через рекрсию \n 3 - Через формулу арифмитической прогрессии');
    switch(choise){
        case "1":
            function sumTo(a){
                sumc = (a);
                for(i=a-1; i>0; i--){
                    sumc = sumc + i;
                }
                return sumc;
            }
            alert(sumTo(n));
            break;
        case "2":
            function SumTo(a){
                sumc = (a);
                if (a>0){
                    sumc = sumc + sumto(a-1);
                }
                return sumc;              
            }
            alert(sumTo(n));
            break;  
        case "3":
            function SumTo(a){
                sumc = ((1+a)/2)*a;
                return sumc;;
            }
            alert(sumTo(n));
    }   
}
