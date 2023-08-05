export const randomKey = (charNumber: number): string => {
  let str = ''
  for (let i = 0; i < charNumber; i++) {
    let char = Math.floor(Math.random() * 26) + 97
    str += String.fromCharCode(char);
  }
  return str
}

export const randomNumber = (range: number): string => {
  const randomByte = new Uint32Array(1)
  window.crypto.getRandomValues(randomByte)
  const number = (randomByte[0]! / 4294967295) * range
  return String(Math.round(number))
}
