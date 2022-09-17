const sum = require('./../src/soma')

test('The result of the adition is' , () => {
expect(sum(9, 9)).toBe(18)
})