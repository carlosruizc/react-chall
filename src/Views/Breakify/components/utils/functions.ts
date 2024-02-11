import elements from "../../data/elements"

export interface BreakifyResult {
  identifiedElement: string[]
  substringsArray: string[][]
}

export function handleBreakify(input: string): BreakifyResult {
  const identifiedElement: string[] = []

  const lowerInput = input.toLowerCase()

  for (let i = 0; i < lowerInput.length; i++) {
    const char = lowerInput[i]
    const element = lowerInput.substring(i, i + 2)

    if (elements.includes(element)) {
      identifiedElement.push(element.charAt(0).toUpperCase() + element.slice(1))
      break
    } else if (elements.includes(char)) {
      identifiedElement.push(char.toUpperCase())
      break
    }
  }

  const substringsArray: string[][] = []
  substringsArray[0] = divideString(input, String(identifiedElement[0]))
  substringsArray[1] = divideString(input, String(identifiedElement[1]))
  const result: BreakifyResult = {
    identifiedElement,
    substringsArray,
  }

  return result
}

export function divideString(string: string, substring: string) {
  const result = []

  if (substring != "undefined") {
    const index = string.toLowerCase().indexOf(substring.toLowerCase())
    if (index !== -1) {
      const beforeSubstring = string.slice(0, index)
      const afterSubstring = string.slice(index + substring.length)
      if (beforeSubstring !== "") {
        result.push(beforeSubstring)
      }
      result.push(substring.charAt(0).toUpperCase() + substring.slice(1))
      if (afterSubstring !== "") {
        result.push(afterSubstring)
      }
    }
  } else {
    result.push(string)
  }

  return result
}
