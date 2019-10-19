const express = require('express')
const FindController = express.Router()
const crawler = require('../../crawler')

const logger = require('../utils/logger')

/**
 * @api {post} /find/ Find a checkout
 * 
 * @apiDescription Start Crawler,
 * 
 * @apiName Find
 * @apiGroup Find
 * 
 * @apiParam (checkin) {Date} checkin date of the checkin.
 * @apiParam (checlout) {Date} checlout date of the checlout.
 * 
 * @apiParamExample {json} Request-Example:
 *     {
 *          "checkin": "25/12/2019",
 *          "checkout": "01/01/2020"
 *     }
 *
 * @apiSuccess {Boolean} success Success .
 * @apiSuccess {Crawler} data Array of ObjectCrawler
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": "true",
 *       "data": {Array}
 *     }
 *
 * @apiError Failed to find crawler.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Failed
 *     {
 *       "success": "false",
 *       "message": "Failed to find crawler",
 *       "errors": Error
 *     }
 *
 */
FindController.post('/', async (req, res) => {
    try {
      const { checkin, checkout } = req.body
      if (checkin && checkout) {
        const data = await crawler(checkin, checkout)
        return res.json({
          success: true,
          data
        })
      }
      res.status(400).json({ success: false, message: 'Failed to find crawler', error: 'checkin or checkout can`t be blank' })
    } catch(error) {
      logger.error(error, req, () => {
        res.status(400).json({ success: false, message: 'Failed to find crawler', error: error.message })
      })
    }
})

module.exports = FindController