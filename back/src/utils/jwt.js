const { sign, verify } = require('jsonwebtoken')

const JWT_SECRE = 'ClaveSecreta' || 'toke.01010101'

const generateToken = (id) => {
  const jwt = sign({ id }, JWT_SECRE, {
    expiresIn: '2h'
  })
  return jwt
}

const veryfyToken = (jwt) => {
  const isOk = verify(jwt, JWT_SECRE)
  return isOk
}

module.exports = {
  generateToken,
  veryfyToken
}
