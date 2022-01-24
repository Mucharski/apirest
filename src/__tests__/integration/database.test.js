
describe('CRUD', () => {
    let database;

    beforeAll(() => {
        database = require('../../database/index.js');
    });
    
    test("Verify database connection with sqlite", async () => {
        const response = await database.sync();
         expect(response.options.dialect).toBe('sqlite')
    })
});