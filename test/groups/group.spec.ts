import Database from '@ioc:Adonis/Lucid/Database'
import test, { group } from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group("Group", (group) => {
  test("it should create group", async (assert) => {

  })

  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })
  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
  })
})

