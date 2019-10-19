let helper = require('../helper')
let chai = require("chai")
let expect  = chai.expect

const crawler = require('../../src/crawler')

describe('crawler', () => {
  describe('validations', () => {
    it('should return errors without dates', () => {
      return crawler().then(async (result) => {
        }).catch(error => {
          return expect(error.message).to.equal('checkin or checkout can`t be blank')
        });
    })
    describe('with invalid dates formate', () => {
      it('should return errors with checkin in invalid formats', (done) => {
        const checkin = '2019-12-25'
        const checkout  = '01/01/2020'
        crawler(checkin, checkout).then(async (result) => {
        }).catch(error => {
          expect(error.message).to.equal('Path `checkin` in invalid format')
          done()
        });
      })
      it('should return errors with checkout in invalid formats', (done) => {
        const checkin = '25/12/2019'
        const checkout  = '2020-01-01'
        crawler(checkin, checkout).then(async (result) => {
        }).catch(error => {
          expect(error.message).to.equal('Path `checkout` in invalid format')
          done()
        });
      })
    })
  })
})
