describe('Testes da pagima inicial', () =>{
    beforeEach(() => {
      cy.visit('http://localhost:5500/index.html')
    })

    it('filtro de curso por nome',() => {
      cy.get('input[type=search]').type('Ciências da Computação')
      cy.get('table tbody tr').should('have.length', 1)
    })

    it('filtro de curso por semestre',() => {
      cy.get('input[type=search]').type('8 semestres')
      cy.get('table tbody tr').should('have.length', 1)
    })

    
})