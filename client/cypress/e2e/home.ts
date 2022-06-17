/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home sections', () => {
    cy.visit('/')

    cy.shouldRenderBunner()
    cy.shouldRenderShowcase({ name: 'New Games', hightlight: false })
    cy.shouldRenderShowcase({ name: 'Most Popular Games', hightlight: true })
    cy.shouldRenderShowcase({ name: 'Upcoming', hightlight: true })
    cy.shouldRenderShowcase({ name: 'Free Games', hightlight: true })
  });
})
