export const randomKey = (charNumber: number): string => {
  let str = ''
  for (let i = 0; i < charNumber; i++) {
    let char = Math.floor(Math.random() * 26) + 97
    str += String.fromCharCode(char);
  }
  return str
}

export const randomNumber = (range: number): number => {
  return Math.floor(Math.random() * range + 1)
}
