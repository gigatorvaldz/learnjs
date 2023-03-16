let answer = prompt("Кто там?")

if(answer == '' || answer == null){
    alert("Отменено")
} else if (answer == "Админ") {
    let password = prompt("Пароль?")
    if (password == 'Я Главный') {
        alert("Здравствуйте!")
    } else if(password == '' || password == null){
        alert("Отменено")
    } else {
        alert("Неверный пароль")
    }
}
else {
    alert("Я вас не знаю")
}