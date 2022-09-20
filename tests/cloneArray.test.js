const cloneArray = require('./../src/cloneArray')

test('This will clone an array', () =>{
    const array = [1, 2, 3]
expect(cloneArray(array)).toEqual(array)
})
