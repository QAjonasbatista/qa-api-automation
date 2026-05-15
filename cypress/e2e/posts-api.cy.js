describe('API - JSONPlaceholder Posts', () => {

  const baseUrl = 'https://jsonplaceholder.typicode.com'

  it('Deve validar GET de um post existente', () => {

    cy.request(`${baseUrl}/posts/1`).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 1)
      expect(response.body).to.have.property('title')
      expect(response.body).to.have.property('body')

    })

  })

  it('Deve validar criação de post com POST', () => {

    cy.request({
      method: 'POST',
      url: `${baseUrl}/posts`,
      body: {
        title: 'QA Automation',
        body: 'Teste automatizado com Cypress',
        userId: 1
      }

    }).then((response) => {

      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('title', 'QA Automation')
      expect(response.body).to.have.property('userId', 1)

    })

  })

  it('Deve validar atualização de post com PUT', () => {

    cy.request({
      method: 'PUT',
      url: `${baseUrl}/posts/1`,
      body: {
        id: 1,
        title: 'Post atualizado',
        body: 'Conteúdo atualizado',
        userId: 1
      }

    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('title', 'Post atualizado')

    })

  })

  it('Deve validar remoção de post com DELETE', () => {

    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/posts/1`

    }).then((response) => {

      expect(response.status).to.eq(200)

    })

  })

})