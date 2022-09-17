const sum = require('./../src/soma')

test('The result of the adition is' , () => {
expect(sum(3, 3)).toBe(6)
})