const { add, sub, mult, div } = require('./math')

//Test method is provided by Jest and is where we run our tests
//Takes in two arguments: Text to describe your test and a function

// -------- PART II --------- //
it('Will correctly add numbers', () => {
    expect(add(1, 2)).toEqual(3)
})

it('Will correctly subtract numbers', () => {
    expect(sub(1, 2)).toEqual(3)
})
it('Will correctly multiply numbers', () => {
    expect(mult(4, 5)).toEqual(20)
})
it('Will correctly divide numbers', () => {
    expect(div(8, 2)).toEqual(4) 
})

// -------- PART III --------- //

// it('Will correctly add numbers', () => {
//     expect(add(1, 2)).toEqual(3)
//     expect(add(0, 12)).toEqual(12)
//     expect(add(-2, -3)).toEqual(-5)
// })
// it('Will correctly subtract numbers', () => {
//     expect(sub(1, 2)).toEqual(3)
//     // expect(sub(0, 2)).toEqual(-2)
//     // expect(sub(-2, -3)).toEqual(-)
// })
// it('Will correctly multiply numbers', () => {
//     expect(mult(4, 5).toEqual(20))
//     expect(mult(1, 5)).toEqual(5)
//     expect(mult(0, 8)).toEqual(0)
//     expect(mult(-2, -3)).toEqual(6)
// })
// it('Will correctly divide numbers', () => {
//     expect(div(8, 2)).toEqual(4)
//     expect(div(1, 2)).toEqual(.5)
//     expect(div(0, 10)).toEqual(0)
//     expect(div(100, 0)).toEqual(Infinity)
// })

//Causes us to update division func to

// const div = (x, y) => {
//     if (y !== 0) {
//         x / y
//     } else {
//         throw new Error("Can't divide by 0")
//     }
// }

//NOW our test case is:
// it('Will correctly divide numbers', () => {
//     expect(div(8, 2)).toEqual(4)
//     expect(div(1, 2)).toEqual(.5)
//     expect(div(0, 10)).toEqual(0)
//     expect(() => div(10, 0)).toThrow("Can't divide by 0") //throws error out of function bc expect runs code and catches error there
// })