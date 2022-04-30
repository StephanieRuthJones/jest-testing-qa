const { add, sub, mul, div } = require('./math')

//Test method is provided by Jest and is where we run our tests
//Takes in two arguments: Text to describe your test and a function
// test('Addition works', () => {
//     expect(add(1, 2)).toEqual(3)
//     expect(add(0, 12)).toEqual(12)
//     expect(add(-2, -3)).toEqual(-5)
// })

it('Will correctly add numbers', () => {
    expect(add(1, 2)).toEqual(3)
    expect(add(0, 12)).toEqual(12)
    expect(add(-2, -3)).toEqual(-5)
})