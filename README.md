                                            ## testTask_React-1

   # Тестовое задание #1

Проверяем начальные навыки: react, redux, react-router

# Задача
Реализовать приложение, которое умеет показывать следующие страницы:

* / - главная

* /login - страница ввода логина и пароля

* /news - страница с новостями (любая однотипная информация)

* /profile - страница с произвольным текстом, недоступная без авторизации

На сайте, в шапке или подвале реализовать ссылки:

* На главную (/)

* Новости (/news)

* Профиль (/profile)

Если пользователь кликает на страницу “профиля” и он не “авторизован” - перекидывать на страницу /login

Форма входа (/login) принимает “фейковые” данные:

     username: Admin

     password: 12345 

Если введены другие данные, то показывается сообщения:

    Имя пользователя или пароль введены не верно 

Если введены корректные данные, то перебрасывать на страницу /profile

Информацию об авторизации пользователя можно хранить в localStorage, простым параметром true/false. Базу данных реализовать не нужно.

Все необходимое на ваш взгляд, прокинуть через Redux.

Оформление (дизайн) — не важно. Сделайте, чтобы можно было комфортно смотреть пример в браузере.
