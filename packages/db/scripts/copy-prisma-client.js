const fs = require('node:fs')
const path = require('node:path')

const source = path.resolve(
  __dirname,
  '../prisma/src/generated/prisma'
)

const destination = path.resolve(
  __dirname,
  '../dist/prisma/src/generated/prisma'
)

if (!fs.existsSync(source)) {
  throw new Error(`Prisma generated client not found: ${source}`)
}

fs.rmSync(destination, { recursive: true, force: true })
fs.mkdirSync(path.dirname(destination), { recursive: true })
fs.cpSync(source, destination, { recursive: true })

console.log('Prisma generated client copied successfully.')