import { rm } from 'node:fs/promises'
import path from 'node:path'

const projectRoot = process.cwd()
const nextDir = path.join(projectRoot, '.next')

try {
  await rm(nextDir, { recursive: true, force: true })
  // eslint-disable-next-line no-console
  console.log(`Removed ${nextDir}`)
} catch (err) {
  // eslint-disable-next-line no-console
  console.error(`Failed to remove ${nextDir}`)
  // eslint-disable-next-line no-console
  console.error(err)
  process.exitCode = 1
}


