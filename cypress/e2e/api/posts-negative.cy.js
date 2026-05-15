describe('API - JSONPlaceholder Posts - Cenários Negativos', () => {

  const baseUrl = 'https://jsonplaceholder.typicode.com'

  it('GET - Deve validar post inexistente', () => {

    cy.request({
      method: 'GET',
      url: `${baseUrl}/posts/999999`,
      failOnStatusCode: false

    }).then((response) => {

      expect(response.status).to.eq(404)

    })

  })

  it('POST - Deve validar criação de post sem body', () => {

    cy.request({
      method: 'POST',
      url: `${baseUrl}/posts`,
      body: {},
      failOnStatusCode: false

    }).then((response) => {

      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('id')

    })

  })

  it('PUT - Deve validar atualização com ID inexistente', () => {

    cy.request({
      method: 'PUT',
      url: `${baseUrl}/posts/999999`,
      body: {
        title: 'Teste negativo'
      },
      failOnStatusCode: false

    }).then((response) => {

      expect(response.status).to.eq(500)

    })

  })

  it('DELETE - Deve validar remoção de post inexistente', () => {

    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/posts/999999`,
      failOnStatusCode: false

    }).then((response) => {

      expect(response.status).to.eq(200)

    })

  })

})