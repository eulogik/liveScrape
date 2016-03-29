var request = require('request');
var cheerio = require('cheerio');
var artoo = require('artoo-js');

var url = "http://www.amazon.in/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=b&lo=apparel&rh=i%3Aaps%2Ck%3Ab";
var repeatedNode = '#s-results-list-atf a.s-access-detail-page';
var params = {url: 'href', title: 'text', img: function(){return $(this).parent().parent().parent().find('img.s-access-image').attr('src')}};

request(url, function(err, resp, body) {
        if (err)
            throw err;
        $ = cheerio.load(body);
        // Setting artoo's context
        artoo.setContext($);

        //scraping goes here!
        var data = artoo.scrape(repeatedNode, params);
        console.log(data);


    });
