describe('SignIn test', () => {
  it('signin action', () => {
      cy.visit('https://localhost:3000/signin')

      cy.get('input[type="email"]').type('dummy@email.com')  // メールアドレスを渡す
      cy.get('input[type="password"]').type('password')  // パスワードを渡す
      cy.get('[type="submit"]').click()  // SignInボタンを押す
  })
})