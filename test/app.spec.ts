import * as express from 'express'
import * as request from 'supertest'
import { expect } from 'chai'

import { bootstrap, setupRoutes } from '../src/app'

describe('GET /lunch', () => {
  let app: express.Application

  before(() => {
    app = bootstrap()
    setupRoutes(app)
  })

  it('should respond with json', async () => {
    const response = await request(app)
      .get('/lunch')
      .expect(200)

    expect(response.body).to.be.a('object')
    expect(response.body).to.have.property('lunch')
    expect(response.body.lunch).to.be.a('string')
  })
})