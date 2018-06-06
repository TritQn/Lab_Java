function func1(){
    var age = prompt('Сколько вам лет?');
    var choise = prompt('Как должна отработать функция? \n 1 - Через ? \n 2 - Через ||');
    switch(choise) {
        case "1":
            function checkAge(age) {
                return (age > 18) ? true : confirm('Родители разрешили?');  
            }
            if(checkAge(age)) {
                alert('Доступ разрешен');
            }
            else {
                alert('Доступ запрещен');
            }

            break;
        case "2":
            function checkAge(age) {
                return (age > 18) || confirm('Родители разрешили?');
            }
            if(checkAge(age)) {
                alert('Доступ разрешен');
            }
            else {
                alert('Доступ запрещен');
            }
    }   
}



