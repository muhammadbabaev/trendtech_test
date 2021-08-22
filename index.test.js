const assert = require('assert')
const shortSequence = require('./index')

describe('Tests:', () => {
  // describe('1.', () => {
  //   it('Should return "1,3,5-8,10-12,34,37"', () => {
  //     assert.equal(
  //       index.shortSequence([1,3,5,6,7,8,10,10,10,11,12,34,37]),
  //       "1,3,5-8,10-12,34,37"
  //     )
  //   })
  // })
  it('For [1,2,3,4,5,6,7,8] should return "1-8"', async () => {
    assert.equal(
      await shortSequence([1,2,3,4,5,6,7,8]),
      "1-8"
    )
  })
  it('For [1,3,4,5,6,7,8] should return "1,3-8"', async () => {
    assert.equal(
      await shortSequence([1,3,4,5,6,7,8]),
      "1,3-8"
    )
  })
  it('For [1,3,4,5,6,7,8,10,11,12] should return "1,3-8,10-12"', async () => {
    assert.equal(
      await shortSequence([1,3,4,5,6,7,8,10,11,12]),
      "1,3-8,10-12"
    )
  })
  it('For [1,2,3] should return "1-3"', async () => {
    assert.equal(
      await shortSequence([1,2,3]),
      "1-3"
    )
  })
  it('For [1,2] should return "1,2"', async () => {
    assert.equal(
      await shortSequence([1,2]),
      "1,2"
    )
  })
  it('For [1,2,4] should return "1,2,4"', async () => {
    assert.equal(
      await shortSequence([1,2,4]),
      "1,2,4"
    )
  })
  it('For [1,2,4,5,6] should return "1,2,4-6"', async () => {
    assert.equal(
      await shortSequence([1,2,4,5,6]),
      "1,2,4-6"
    )
  })
  it('For [1,2,3,7,8,9,15,17,19,20,21] should return "1-3,7-9,15,17,19-21"', async () => {
    assert.equal(
      await shortSequence([1,2,3,7,8,9,15,17,19,20,21]),
      "1-3,7-9,15,17,19-21"
    )
  })
  it(`For [1,2,3,4,5,6,100,1091,1999,2000,2001,2002] should return "1-6,100,1091,1999-2002"`, async () => {
    assert.equal(
      await shortSequence([1,2,3,4,5,6,100,1091,1999,2000,2001,2002]),
      "1-6,100,1091,1999-2002"
    )
  })
  it(`For [1] should return "1"`, async () => {
    assert.equal(
      await shortSequence([1]),
      "1"
    )
  })
  it(`For [1,1,1] should return "1"`, async () => {
    assert.equal(
      await shortSequence([1,1,1]),
      "1"
    )
  })
  it(`For [1,3,5,7,9,11] should return "1,3,5,7,9,11"`, async () => {
    assert.equal(
      await shortSequence([1,3,5,7,9,11]),
      "1,3,5,7,9,11"
    )
  })
})