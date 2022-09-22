const expect = chai.expect

describe('flatten tests', () => {
  it('should flatten an array [[1,2,[3]],4] to [1,2,3,4]', () => {
    expect(flattenArray([[1,2,[3]],4])).to.deep.equal([1,2,3,4])
  })
  it('should flatten an array [1,2,[3,[4,5,6],7],8] to [1,2,3,4,5,6,7,8]', () => {
    expect(flattenArray([1,2,[3,[4,5,6],7],8])).to.deep.equal([1,2,3,4,5,6,7,8])
  })
})