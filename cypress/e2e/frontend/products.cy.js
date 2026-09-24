import { faker } from '@faker-js/faker'

import ProductsApi from '../../api/ProductsApi'
import { createProduct } from '../../factories/productFactory'
import ProductRegisterPage from '../../pages/ProductRegister/productRegisterPage'

describe('Products front-end', () => {

    let user

    before(() => {

        cy.createUser().then(createdUser => {

            user = createdUser

        })

    })

    beforeEach(() => {

        cy.loginWithSession(user)

        cy.visit('admin/home')

        ProductRegisterPage.acessarPagina()

    })

    it('Should create a product successfully', () => {

        const produto = {

            nome: faker.commerce.productName(),
            preco: faker.number.int({ min: 100, max: 5000 }),
            descricao: faker.commerce.productDescription(),
            quantidade: faker.number.int({ min: 1, max: 100 }),
            imagem: 'cypress/fixtures/imagens/imagemTeste.jpg'

        }

        ProductRegisterPage.cadastrarProduto(produto)

        ProductRegisterPage.validarCadastroComSucesso(produto.nome)

    })

    it('Should not create a product without required fields', () => {

        ProductRegisterPage.clicarCadastrar()

        ProductRegisterPage.validarCamposObrigatorios()

    })

    it('Should not create a product with an existing name', () => {

        const product = createProduct()

        cy.getAccessToken()
            .then((token) => {

                return ProductsApi.create(product, token)

            })
            .then((response) => {

                expect(response.status).to.eq(201)

                ProductRegisterPage.cadastrarProduto(product)

                ProductRegisterPage.validarMensagem('Já existe produto com esse nome')

            })

    })

})