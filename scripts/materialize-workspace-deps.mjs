import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const apiDir = path.join(rootDir, 'apps', 'api')

const workspacePackages = [
  {
    name: '@portfolio/db',
    source: path.join(rootDir, 'packages', 'db'),
    destination: path.join(
      apiDir,
      'node_modules',
      '@portfolio',
      'db',
    ),
  },
  {
    name: '@portfolio/shared',
    source: path.join(rootDir, 'packages', 'shared'),
    destination: path.join(
      apiDir,
      'node_modules',
      '@portfolio',
      'shared',
    ),
  },
]

async function exists(target) {
  try {
    await fs.lstat(target)
    return true
  } catch {
    return false
  }
}

async function materializePackage({ name, source, destination }) {
  if (!(await exists(source))) {
    throw new Error(`Workspace package source not found: ${source}`)
  }

  if (await exists(destination)) {
    const stat = await fs.lstat(destination)

    if (stat.isSymbolicLink()) {
      console.log(`Removing workspace symlink: ${name}`)
    } else {
      console.log(`Replacing existing workspace package: ${name}`)
    }

    await fs.rm(destination, {
      recursive: true,
      force: true,
    })
  }

  await fs.mkdir(path.dirname(destination), {
    recursive: true,
  })

  await fs.cp(source, destination, {
    recursive: true,
    dereference: true,
  })

  console.log(`Materialized workspace package: ${name}`)
}

async function main() {
  console.log('Materializing workspace dependencies for Vercel...')

  for (const workspacePackage of workspacePackages) {
    await materializePackage(workspacePackage)
  }

  console.log('Workspace dependencies materialized successfully.')
}

main().catch((error) => {
  console.error('Failed to materialize workspace dependencies:')
  console.error(error)
  process.exit(1)
})