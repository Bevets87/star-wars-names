import names from './index.js'

describe('star-wars-names-steve', () => {
  it('can get all star wars names', () => {
    const all = names.all;
    expect(all.length).toEqual(93)
    expect(all.includes('Yoda')).toBeTruthy()
  })
  it('can get a random star wars name', () => {
    const name = names.random()
    expect(names.all.includes(name)).toBeTruthy()
  })
  it('can get a random collection of star wars names', () => {
    const collection = names.random(5)
    expect(collection.length).toEqual(5)
  })
})

