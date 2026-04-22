describe('Testes da pagina inicial', () =>{
    it('Carregando pag inicial', ()=> { 
      cy.visit('http://localhost:5500/index.html')
      cy.contains('Faculdade Tech')
    })

    it('Navegar para pag cursos', ()=>{
      cy.visit('http://localhost:5500/index.html')  
      cy.get('nav a').contains('Cursos').click()
      cy.url().should('include', 'cursos.html')
    })
    
})