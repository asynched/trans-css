import {
  parseTemplateLiteral,
  splitAtColon,
  isStringEmpty,
  convertStringToCamelCase,
} from '../helpers/strings'

describe('Tests the strings.js file', () => {
  it('should return a string with the defined value', () => {
    const word = 'World'
    const result = parseTemplateLiteral(['Hello '], [word])
    const EXPECTED_RESULT = 'Hello World'
    expect(result).toBe(EXPECTED_RESULT)
  })

  it('should split a string at the colon and return an array of strings', () => {
    const result = splitAtColon('Hello:World')
    const EXPECTED_RESULT = ['Hello', 'World']
    expect(result).toEqual(EXPECTED_RESULT)
  })

  it('should return an array containing the original string', () => {
    const result = splitAtColon('HelloWorld')
    const EXPECTED_RESULT = ['HelloWorld']
    expect(result).toEqual(EXPECTED_RESULT)
  })

  it('should return true if the string is empty', () => {
    const result = isStringEmpty('')
    const EXPECTED_RESULT = true
    expect(result).toBe(EXPECTED_RESULT)
  })

  it('should return false if the string is not empty', () => {
    const result = isStringEmpty('Hello')
    const EXPECTED_RESULT = false
    expect(result).toBe(EXPECTED_RESULT)
  })

  it('should return a camel case string', () => {
    const result = convertStringToCamelCase('hello-world')
    const EXPECTED_RESULT = 'helloWorld'
    expect(result).toBe(EXPECTED_RESULT)
  })

  it("shouldn't alter the original string when parsed to camel case", () => {
    const result = convertStringToCamelCase('helloworld')
    const EXPECTED_RESULT = 'helloworld'
    expect(result).toBe(EXPECTED_RESULT)
  })
})
