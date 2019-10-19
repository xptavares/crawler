let chai = require("chai")
let expect  = chai.expect
let helper = require('../helper')
const server = require('../../index')
chai.use(require('chai-http'))

describe('Find services', () => {
  describe('/POST', () => {
    it('should return 400 if failed to get crawler', () => {
      return chai.request(server)
        .post(`/api/v1/find/`)
        .send({})
        .then(res => {
          expect(res.statusCode).to.equal(400)
          expect(res.body).to.have.property("success").with.false
          expect(res.body).to.have.property("message").with.eq('Failed to find crawler');
          expect(res.body).to.have.property("error").with.eq('checkin or checkout can`t be blank');
        })
    })
    it('should return 200 if success to get crawler', () => {
      return chai.request(server)
        .post(`/api/v1/find/`)
        .send({
          checkin: '22/11/2019',
          checkout: '24/11/2019'
        })
        .then(res => {
          expect(res.statusCode).to.equal(200)
          expect(res.body).to.have.property("success").with.true
        })
    })
  })
})