/// <reference types="cypress" />


describe('Cypress basics', () => {

    
    it('Should visit a page and assert title', () => {

        cy.visit("http://wcaquino.me/cypress/componentes.html");

        //Stop runtime:
        //cy.pause();

        //Show more informatio:
        //cy.debug();
        
        // Retry 4s
        cy.title().should('to.be.equal', 'Campo de Treinamento');
        cy.title().should('contain', 'Campo');

    });

     
    it('Should find and interact with an element', () => {

        cy.visit("http://wcaquino.me/cypress/componentes.html");

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!');
    });

});