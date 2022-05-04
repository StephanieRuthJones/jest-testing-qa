const getKittenById = require('./asyncCode')

describe('getKittenById', () => {
    it('will return the kitten if the id is found', async() => {
        const kittenId = 1
        const kitten = await getKittenById(kittenId)
        expect(kitten.id).toEqual(kittenId)
        expect(kitten.name).toEqual('Sir Isaac Mewton')
        expect(kitten.age).toEqual(4)
    })

    it('will return an error if the id is not found', async() => {
        const notAnId = 7
        await expect(getKittenById(notAnId)).rejects.toEqual(`Kitten with ID ${notAnId} not found.`)
    })
})