# liveScrape
Live Scraping example using Cheerio &amp; Artoo-JS

##Getting Started
Clone the repository and run as a service on `http://localhost:3030`.
Call the service on `http://localhost:3030/scrape` with parameters `url`, `repeatedNode` and `params`

###Example parameters:
```javascript
url = "http://www.amazon.in/s/ref=sr_pg_6?rh=i%3Aaps%2Ck%3Acomputer+table&page=6&keywords=computer+table&ie=UTF8&qid=1459248975&spIA=B015W1X4A4,B015W1X45E,B01683PX36,B01683PK8Y,B019A5PKWS,B01683PPTS,B01D1N852W,B0198NC5DO&lo=apparel";
repeatedNode = '#s-results-list-atf a.s-access-detail-page';
params = {url: 'href', title: 'text', img: function(){return $(this).parent().parent().parent().find('img.s-access-image').attr('src')}, category: function(){return $(this).parent().parent().find('a.a-size-small>span.a-text-bold').text().slice(0, -1);}};
```

Handcrafted by Eulogik (http://eulogik.com)
