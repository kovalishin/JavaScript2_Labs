const {gcd} = require('./gcd')

describe('тест №1', ()=> {
    test('НБД для чисел: 1071, 462 == 21', ()=> {
        expect(gcd(1071, 462)).toBe(21);
    });    
});