function Login(){
    var login = prompt('Введите имя пользователя', '');
    if (login == 'Админ')
    {
        var password = prompt('Введите пароль', '');
        if(password == "1234567")
        {
            alert('Добро пожаловать');
        }
        else if(password == null)
        {
            alert('Вход отменен');
        }
        else
        {
            alert('Неверный пароль');
        }   
    }
    else if(login == null)
    {
        alert('Вход отменен');
    }
    else
    {
        alert('Я вас не знаю');
    }
}


