const { generateText, validateText, validateAndReturn } = require('./textValidation')

//Unit Test bc only testing one function 
//with input and output that does not use any other functions

describe('generateText works', () => {
    it('outputs dog name and breed', () => {
        const dogName = 'Ted'
        const breed = 'Spaniel-Beagle Mix'
        expect(generateText(dogName, breed)).toBe('Ted is a Spaniel-Beagle Mix')
    })
})

describe('validateText works', () => {
    it('outputs true when input is text string', () => {
        const text = 'Stephanie'
        expect(validateText(text)).toBe(true)
    })
    it('outputs false when input is empty', () => {
        const text = ''
        expect(validateText(text)).toBe(true)
    })
     it('outputs false when input is a number', () => {
        const text = 5
        expect(validateText(text)).toBe(false)
    })
})

//Integration test 
describe('validateAndReturn works', () => {
    it('outputs dog name and breed', () => {
        const dogText = 'Melvin'
        const breed = 'Terrier'
        expect(validateAndReturn(dogText, breed)).toBe('Melvin is a Terrier')
    })
})

