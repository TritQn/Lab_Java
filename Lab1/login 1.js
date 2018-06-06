function Login_1(){
    var login = prompt("Введите имя пользователя")
    message = (login == null) ? 'Нет логина' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login != 'Директор') ? 'Привет': '' ;
    alert(message);
}
