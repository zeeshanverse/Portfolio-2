import { build } from 'esbuild'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const apiRoot = path.resolve(__dirname, '..')
const root = path.resolve(apiRoot, '../..')

await build({
  entryPoints: [path.join(apiRoot, 'dist/server.js')],
  outfile: path.join(apiRoot, 'dist/bundle.js'),
  bundle: true,
  platform: 'node',
  format: 'cjs',
  target: 'node22',
  packages: 'external',
  alias: {
    '@portfolio/db': path.join(root, 'packages/db/dist/index.js'),
    '@portfolio/shared': path.join(root, 'packages/shared/dist/index.js'),
  },
  sourcemap: false,
  logLevel: 'info',
})

console.log('API bundle created:', path.join(apiRoot, 'dist/bundle.js'))