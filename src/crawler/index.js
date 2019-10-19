const puppeteer = require('puppeteer');
const urlParcer = require('./urlParcer');
const mockTest = require('../../test/mockTest');
const moment = require('moment');

const room = ($, tr) => {
    const thumb = $(tr).find('.thumb')
    return {
        thumb
    }
}

const crawler = async (checkin, checkout) => {
    if (!checkin || !checkout) {
        throw Error('checkin or checkout can`t be blank')
    }
    if(!moment(checkin, "DD/MM/YYYY").isValid()) {
        throw Error('Path `checkin` in invalid format')
    }
    if(!moment(checkout, "DD/MM/YYYY").isValid()) {
        throw Error('Path `checkout` in invalid format')
    }
    if(process.env.NODE_ENV == 'test') {
        return mockTest;
    }
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    try {
        const page = await browser.newPage();
        await page.goto(urlParcer(checkin, checkout));
        await page.setViewport({width: 1000, height: 500})
        await page.waitFor(5000);

        const result = await page.evaluate(() => {
            const $ = window.$;

            let result = []
            const tbody = $('#show_3 > table > tbody')
            const trs = tbody.find('.roomName')
            for (let index = 0; index < trs.length; index++) {
                const tr = trs[index];
                const thumb = $(tr).find('.thumb')
                const img = thumb.find('div:nth-child(1) > a > img')
                const currentSrc = img.prop("currentSrc")

                const name = $(tr).find('td > div.roomExcerpt > div.excerpt > h5 > a').html()
                const description = $(tr).find(' td > div.roomExcerpt > div.excerpt > p > a').html()
                const price = $(tr).find('td > div.roomExcerpt > div.sincePrice.bestPriceBackgroundColor.bestPriceTextColor > div.sincePriceContent > h6').html()

                result.push({
                    name,
                    thumb: currentSrc,
                    description,
                    price
                })
            }
            return result;
        });

        browser.close();
        return result
    } catch(error) {
        browser.close();
        throw error
    }
};

module.exports = crawler
