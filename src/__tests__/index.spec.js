import css from '../index'

describe('Tests the main module file', () => {
  it('should return an object containing background and fontSize', () => {
    const cssObject = css`
      background: #fff;
      font-size: 12px;
    `

    const EXPECTED_RESULT = {
      background: '#fff',
      fontSize: '12px',
    }

    expect(cssObject).toEqual(EXPECTED_RESULT)
  })
})
