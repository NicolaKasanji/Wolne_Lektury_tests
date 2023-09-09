/// <reference types="cypress" />

export {DownloadFile, DownloadCheck}

      const DownloadFile = () => {
        cy.get('#search')
        .should('be.empty')
        .type('bez odpowiedzi {enter}')
        .get(".l-section.l-section--col")
        .within(() => {
          cy.get('a[href="/katalog/lektura/asnyk-bez-odpowiedzi/"]')
            .children('img')
            .should('be.visible')
            .click()
        })
        .then(() => {
            cy.get('#ebook')
            .click()
            .get('a[href="/media/book/pdf/asnyk-bez-odpowiedzi.pdf"]')
              .then(el => { 
                el.attr('download', '')
              })
              .click()
            cy.get('.c-media__popup__close').children('img')
              .click()
            });
      }

      const DownloadCheck = () => {
        const fileName = 'asnyk';
        const filePath = 'cypress/downloads/asnyk-bez-odpowiedzi.pdf';
        cy.readFile(filePath)
          .then((file) => {
            if (file.includes(fileName)) {
                cy.log('Znaleziono plik o tytule:', fileName);
              } else {
                cy.log('Nie znaleziono pliku o tytule:', fileName)
              }
          })
        }