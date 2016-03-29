var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var artoo = require('artoo-js');
var app     = express();

app.get('/scrape', function(req, res){


  var url = req.param('url');;
  var repeatedNode = req.param('repeated-node');;
  var params = req.param('params');


url = "http://www.amazon.in/s/ref=sr_pg_6?rh=i%3Aaps%2Ck%3Acomputer+table&page=6&keywords=computer+table&ie=UTF8&qid=1459248975&spIA=B015W1X4A4,B015W1X45E,B01683PX36,B01683PK8Y,B019A5PKWS,B01683PPTS,B01D1N852W,B0198NC5DO&lo=apparel";
repeatedNode = '#s-results-list-atf a.s-access-detail-page';
params = {url: 'href', title: 'text', img: function(){return $(this).parent().parent().parent().find('img.s-access-image').attr('src')}, category: function(){return $(this).parent().parent().find('a.a-size-small>span.a-text-bold').text().slice(0, -1);}};
/**/
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
console.log('It\'s cooking on port 8081');
exports = module.exports = app;
