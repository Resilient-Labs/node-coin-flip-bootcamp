export function checkEquality(userChoice) {
  const zeroOrOne = Math.floor(Math.random() * 2)
  return userChoice === (zeroOrOne === 0 ? 'heads' : 'tails'); 
}


