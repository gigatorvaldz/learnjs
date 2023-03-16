let login = prompt("")

let message = login == 'Сотрудник' 
?  'Привет'
: login == 'Директор'
? 'Здравствуйте'
: login == ''
? 'Нет логина'
: ''

alert(message)