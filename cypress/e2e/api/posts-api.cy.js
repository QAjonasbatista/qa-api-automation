import { faker } from '@faker-js/faker'
import Ajv from 'ajv'
import postSchema from '../../schemas/postSchema.js'

describe('API - JSONPlaceholder Posts', () => {

  const baseUrl = 'https://jsonplaceholder.typicode.com'
  const ajv = new Ajv()

  beforeEach(() => {

    cy.log('Iniciando cenário de teste')

  })

  it('Deve validar GET de um post existente', () => {

      cy.getPost(1).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 1)
      expect(response.body).to.have.property('title')
      expect(response.body).to.have.property('body')
      expect(response.duration).to.be.lessThan(5000)

    const validate = ajv.compile(postSchema)
    const valid = validate(response.body)

    expect(valid).to.be.true

    })

  })

it('Deve validar criação de post com POST', () => {

  cy.fixture('post').then((massa) => {

    cy.createPost(massa).then((response) => {

      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('title', massa.title)
      expect(response.body).to.have.property('userId', massa.userId)

    })

  })

})

  it('Deve validar atualização de post com PUT', () => {

  cy.fixture('post').then((massa) => {

    cy.updatePost(1, massa).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('title', massa.title)
      expect(response.body).to.have.property('userId', massa.userId)

    })

  })

})

 it('Deve validar remoção de post com DELETE', () => {

  cy.deletePost(1).then((response) => {

    expect(response.status).to.eq(200)

  })

})

  it('Deve validar criação de post com massa dinâmica', () => {

    const payload = {
      title: faker.lorem.words(3),
      body: faker.lorem.paragraph(),
      userId: faker.number.int({ min: 1, max: 10 })
    }

    cy.request({
      method: 'POST',
      url: `${baseUrl}/posts`,
      body: payload

    }).then((response) => {

      expect(response.status).to.eq(201)
      expect(response.body.title).to.eq(payload.title)
      expect(response.body.userId).to.eq(payload.userId)

    })

  })

})