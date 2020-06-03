const testFunction = require('../index.js');

describe('App', function () {

    it('testing...', function () {
        expect(testFunction(1)).toBe(1);
        expect(testFunction(2)).toBe(2);
        expect(testFunction(3)).toBe(6);
        expect(testFunction(5)).toBe(120);
        expect(testFunction(8)).toBe(40320);
        expect(testFunction(-5)).toBe(0);
    })
})