describe('API Health Check', () => {

  it('should return status 200', () => {

    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts'
    }).then((response) => {

      expect(response.status).to.equal(200)

    })

  })

})