import 'reflect-metadata'
import { join } from 'path'
import getPort from 'get-port'
import { configure } from 'japa'
import sourceMapSupport from 'source-map-support'
import execa from 'execa'

process.env.NODE_ENV = 'testing'
process.env.ADONIS_ACE_CWD = join(__dirname)
sourceMapSupport.install({ handleUncaughtExceptions: false })

async function runMigrations() {
  await execa.node('ace', ['migration:run'], {
    cwd: join(__dirname),
    stdio: 'inherit',
  })
}

async function rollbackMigrations() {
  await execa.node('ace', ['migration:rollback'], {
    cwd: join(__dirname),
    stdio: 'inherit',
  })
}

async function startHttpServer() {
  const { Ignitor } = await import('@adonisjs/core/build/src/Ignitor')
  process.env.PORT = String(await getPort())
  await new Ignitor(__dirname).httpServer().start()
}

async function beginGlobalTransaction() {
  const Database = (await import('@ioc:Adonis/Lucid/Database')).default
  await Database.beginGlobalTransaction()
}

async function rollbackGlobalTransaction() {
  const Database = (await import('@ioc:Adonis/Lucid/Database')).default
  await Database.rollbackGlobalTransaction()
}

/**
 * Configure test runner
 */
configure({
  files: ['test/**/*.spec.ts'],
  before: [runMigrations, startHttpServer],
  beforeEach: [beginGlobalTransaction],
  afterEach: [rollbackGlobalTransaction],
  after: [rollbackMigrations],
} as any)
