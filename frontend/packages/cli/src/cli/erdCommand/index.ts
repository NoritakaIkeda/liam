import path from 'node:path'
import { supportedFormatSchema } from '@liam-hq/db-structure/parser'
import { Command } from 'commander'
import { actionRunner } from '../actionRunner.js'
import { buildCommand } from './buildCommand/index.js'

const distDir = path.join(process.cwd(), 'dist')

const erdCommand = new Command('erd').description('ERD commands')

erdCommand
  .command('build')
  .description('Build ERD html assets')
  .option('--input <path|url>', 'Path or URL to the schema file')
  .option(
    '--format <format>',
    `Format of the input file (${supportedFormatSchema.options.join('|')})`,
  )
  .action(
    actionRunner((options) =>
      buildCommand(options.input, distDir, options.format),
    ),
  )

export { erdCommand }
