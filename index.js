function divideForTrendyol(dom) {
    const query1 = dom.window.document.querySelectorAll('.pr-in-w .pr-in-br a'),
          brand = query1[0].text,
          query2 = dom.window.document.querySelectorAll('.pr-in-w .pr-in-br span'),
          title = query2[0].innerHTML,
          query3 = dom.window.document.querySelectorAll('.ph-gl-img'),
          picture = query3[0].src,
          query4 = dom.window.document.querySelectorAll('.pr-bx-pr-dsc .prc-dsc').length !== 0 ? dom.window.document.querySelectorAll('.pr-bx-pr-dsc .prc-dsc') : dom.window.document.querySelectorAll('.pr-in-w .pr-bx-w .prc-slg'),
          price = query4[0].innerHTML;
    const product = { 'brand': brand, 'title': title, 'picture': picture, 'price': price};
    return product;
}

function divideForHepsiburada(dom) {
    const query1 = dom.window.document.querySelectorAll('.productDetailContent .brand-name a'),
          brand = query1[0].innerHTML.trim(),
          query2 = dom.window.document.querySelectorAll('#product-name'),
          title = query2[0].innerHTML.trim(),
          query3 = dom.window.document.querySelectorAll('#offering-price'),
          price = query3[0].getAttribute('content'),
          query4 = dom.window.document.querySelectorAll('#image-0.product-image')[0].src,
          picture = query4;
    const product = { 'brand': brand, 'title': title, 'picture': picture, 'price': price + ' TL'};
    return product;
}

function divideForGittigidiyor(dom) {
        // have not brand name in gittigidiyor.
        const query2 = dom.window.document.querySelectorAll('#sp-title')[0].innerHTML,
        title = query2,
        query3 = dom.window.document.querySelectorAll('#sp-price-lowPrice')[0].innerHTML.trim().length !== 0 ? dom.window.document.querySelectorAll('#sp-price-lowPrice')[0].innerHTML.trim() : dom.window.document.querySelectorAll('#sp-price-highPrice')[0].innerHTML.trim(),
        price = query3,
        query4 = dom.window.document.querySelectorAll('#big-photo')[0].src,
        picture = query4;
    const product = { 'title': title, 'picture': picture, 'price': price};
    return product;
}



function getData(url) {
    const axios = require('axios');
    return new Promise(resolve => {
        axios.get(url)
        .then(response => resolve(response.data))
    });
}

module.exports = async function getProductInfo(productUrl) {
    const   jsdom = require('jsdom'),
            { JSDOM } =  jsdom;
    const html = await getData(productUrl);
    const dom = new JSDOM(html);
    
    try {
    const urlAddress = new URL(productUrl);
    let product;

    switch(urlAddress.origin) {
        case 'https://www.trendyol.com':
            product = divideForTrendyol(dom);
            break;
        case 'https://www.hepsiburada.com':
            product = divideForHepsiburada(dom);
            break;
        case 'https://www.gittigidiyor.com':
            product = divideForGittigidiyor(dom);
            break;
        default:
            break;
    }

    return product;
    } catch(e) {
        console.error(e)
    };

}