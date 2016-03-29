var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var artoo = require('artoo-js');
var app     = express();

app.get('/scrape', function(req, res){


  var url = req.param('url');;
  var repeatedNode = req.param('repeated-node');;
  var params = req.param('params');

/*
url = "http://www.amazon.in/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=b&lo=apparel&rh=i%3Aaps%2Ck%3Ab";
repeatedNode = '#s-results-list-atf a.s-access-detail-page';
params = {url: 'href', title: 'text', img: function(){return $(this).parent().parent().parent().find('img.s-access-image').attr('src')}, category: function(){return $(this).parent().parent().find('a.a-size-small>span.a-text-bold').text().slice(0, -1);}};
*/
request(url, function(err, resp, body) {
        if (err)
            throw err;
        $ = cheerio.load(body);
        // Setting artoo's context
        artoo.setContext($);

        //scraping goes here!
        var data = artoo.scrape(repeatedNode, params);
        console.log(data);
        res.send(data);

    });
});
app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;
