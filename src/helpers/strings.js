// @ts-check

/**
 * @param {string} string String to be evaluated
 * @returns {boolean} Boolean value indicating if the string is not empty
 */
export const isStringEmpty = string => string.length === 0

/**
 * @param {string} string String to be converted
 * @returns {string} String converted to camel case
 */
export const convertStringToCamelCase = string => {
  return string.replace(/[\s-](.)/g, (_, group) => group.toUpperCase())
}

/**
 * @param {TemplateStringsArray} strings Array of strings to be parsed
 * @param {Array<string | number>} parameters Array of parameters to be passed to the template
 * @returns {string} String parsed from the template
 */
export const parseTemplateLiteral = (strings, parameters) => {
  let parsedString = ''
  let parametersCounter = 0

  for (const string of strings) {
    parsedString += string

    if (parameters[parametersCounter]) {
      parsedString += parameters[parametersCounter++]
    }
  }

  return parsedString
}

/**
 * @param {string} string String to be split
 * @returns {string[]} Array of strings
 */
export const splitAtColon = string => string.split(':')
