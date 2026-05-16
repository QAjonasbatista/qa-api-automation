// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

Cypress.Commands.add('getPost', (id) => {

  return cy.request({
    method: 'GET',
    url: `https://jsonplaceholder.typicode.com/posts/${id}`
  })

})

Cypress.Commands.add('createPost', (body) => {

  return cy.request({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',
    body: body
  })

})

Cypress.Commands.add('updatePost', (id, body) => {

  return cy.request({
    method: 'PUT',
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    body: body
  })

})

Cypress.Commands.add('deletePost', (id) => {

  return cy.request({
    method: 'DELETE',
    url: `https://jsonplaceholder.typicode.com/posts/${id}`
  })

})
