const menuItems = '//div[1]/center[1]//small/a';

describe('Navigation menu', () => {
    beforeAll(async () => {
      await page.goto('http://thedemosite.co.uk/');  
    });
  
    it('should be titled to expected', async () => {
        let menus = await page.$x(menuItems);

        let expectedMenuItems = ['1. Home', '2. The Database', '3. Add a User', '4. Login', '5. Get your db online'];

        //TODO: Need to verify how to work with async arrays
        await menus.forEach(async function(item, i, arr) {
            let itemName = await page.evaluate(h1 => h1.textContent, menus[i]); 
            expect(expectedMenuItems.includes(item)).toBe(true);
        });  
    });
});