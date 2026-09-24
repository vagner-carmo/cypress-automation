import LoginPage from '../../pages/Login/LoginPage'
import { faker } from '@faker-js/faker'


describe('Login', () => {

    let user

    beforeEach(() => {

        cy.createUser().then(createdUser => {

            user = createdUser

        })

        LoginPage.acessarPagina()

    })

    it('Should login successfully', () => {

        LoginPage.realizarLogin(
            user.email,
            user.password
        )

        LoginPage.validarLoginComSucesso(user.nome)

    })

    it('Should not log in with invalid credentials', () => {

        LoginPage.acessarPagina()

        LoginPage.realizarLogin(
            faker.internet.email(),
            faker.string.numeric(8)
        )

        LoginPage.validarMensagemErro('Email e/ou senha inválidos')

    })

    it('Should not log in with empty credentials', () => {

        LoginPage.acessarPagina()

        LoginPage.clicarEntrar()

        LoginPage.validarCamposObrigatorios()

    })

})

