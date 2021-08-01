// @ts-check

import {
  convertStringToCamelCase,
  parseTemplateLiteral,
  isStringEmpty,
  splitAtColon,
} from './helpers/strings'

/**
 * @param {any} current Current object
 * @param {string[]} next Array of strings containing a key and a value
 * @returns {any} Current object merged with the next object
 */
const reduceToObjectWithCamelCaseKeys = (current, [key, value]) => {
  return { ...current, [convertStringToCamelCase(key)]: value }
}

/**
 * Converts a template literal string to an object
 *
 * @param {TemplateStringsArray} strings Array of strings to be parsed
 * @param {Array<string | number>} params Array of parameters to be passed to the template
 */
const css = (strings, ...params) => {
  const string = parseTemplateLiteral(strings, params)

  return (
    string
      // Removes all new lines and spaces
      .replace(/\r?\n|\r|\s/g, '')
      // Splits at the semicolons
      .split(';')
      // Filters non empty strings
      .filter(string => !isStringEmpty(string))
      // Splits all elements at the colons
      .map(splitAtColon)
      // Reduces to an object
      .reduce(reduceToObjectWithCamelCaseKeys, {})
  )
}

export default css
