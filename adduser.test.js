const expectedAddUserPageTitle = 'Add a user - FREE PHP code and SQL';
const userNameField = 'input[name="username"]';
const passwordField = 'input[name="password"]';
const saveButton = 'input[value="save"]';
const createdCredentials = "//blockquote/blockquote/blockquote/text()";


describe('Add user page', () => {
    beforeAll(async () => {
      await page.goto('http://thedemosite.co.uk/addauser.php');  
    });
  
    it('should be titled to expected', async () => {
      await expect(page.title()).resolves.toMatch(expectedAddUserPageTitle);
    });

    it('user should be added', async () => {
      //Init

      //Act
      await page.$eval(userNameField, el => el.value =  'test@test.com')
      await page.$eval(passwordField, el => el.value = 'testpass')
      await page.click(saveButton)

      //Assert
      let actName = await page.$x(createdCredentials);
      let userNameText = await page.evaluate(h1 => h1.textContent, actName[1]);
      let passwordText = await page.evaluate(h1 => h1.textContent, actName[2]);
      
      expect(userNameText).toContain('test@test.com');
      expect(passwordText).toContain('testpass');
    });
});