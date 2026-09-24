import LoginApi from '../api/LoginApi'
import UsersApi from '../api/UsersApi'
import { createUser } from '../factories/userFactory'
import LoginPage from '../pages/Login/LoginPage'

Cypress.Commands.add('getAccessToken', () => {

    return cy.createUser().then(user => {

        return LoginApi.login({
            email: user.email,
            password: user.password
        })
            .then(response => {

                expect(response.status).to.eq(200)

                return response.body.authorization

            })

    })

})

Cypress.Commands.add('createUser', () => {

    const user = createUser()

    return UsersApi.create(user)
        .then((response) => {

            expect(response.status).to.eq(201)

            return {
                ...user,
                _id: response.body._id
            }

        })

})

Cypress.Commands.add('loginWithSession', (user) => {

    cy.session('login-session', () => {

        LoginPage.acessarPagina()

        LoginPage.realizarLogin(
            user.email,
            user.password
        )

        LoginPage.validarLoginComSucesso(user.nome)

    })

})