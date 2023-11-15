const { hash, compare } = require('bcryptjs')

const encrypt = async (pass) => {
  const passHash = await hash(pass, 8)
  return passHash
}

const verified = async (pass, passHash) => {
  const isCorrect = await compare(pass, passHash)
  return isCorrect
}

module.exports = {
  encrypt,
  verified
}
