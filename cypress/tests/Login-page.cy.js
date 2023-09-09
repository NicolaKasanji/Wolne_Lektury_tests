/// <reference types= "cypress"/>
export {Login, LoginCheck}

const Login = () => {
        cy.visit("https://wolnelektury.pl")
        .get("#login-link").click()
        .get("#id_username").type("Nicola22ize")
        .get("#id_password").type("Haslo1234{enter}")
}

const LoginCheck = () => {
        cy.get('a[href="/uzytkownik/"]').children('img').eq(0).click()
        .get('a[href="/uzytkownik/logout/?next=/"]')
        .should('contain', 'Wyloguj się')
    }