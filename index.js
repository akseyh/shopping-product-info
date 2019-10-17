const getProductInfo = async (productUrl = 'https://www.trendyol.com/farmasi/bb-krem-all-in-one-orta-50ml-8690131773984-p-4360856?boutiqueId=347542&merchantId=115290') => {
    const   axios = require('axios'),
            jsdom = require('jsdom'),
            { JSDOM } =  jsdom,
            url = productUrl;
    try {
        const res = await axios.get(url)
        .then( response => response.data )
        .then( html => {
            const dom = new JSDOM(html);
            query1 = dom.window.document.querySelectorAll('.pr-in-w .pr-in-br a');
            brand = query1[0].innerHTML;
            query2 = dom.window.document.querySelectorAll('.pr-in-w .pr-in-br span');
            title = query2[0].innerHTML;
            query3 = dom.window.document.querySelectorAll('.ph-gl-slc .slick-slider .slick-track');
            for( let i=0; i<query3[0].children.length; i++ ) {
                if( query3[0].children[i].getAttribute('data-index') == 0)
                    var picture = query3[0].children[i].children[0].children[0].children[0].src;
            }
            query4 = dom.window.document.querySelectorAll('.pr-in-w .pr-bx-w .prc-slg');
            price = query4[0].innerHTML;
            const data = {
                brand: brand,
                title: title,
                picture: picture,
                price: price
            };
            
            return data;
        })
        return res;
    } catch (error) {
        console.error(error)
    }

}

getProductInfo().then(a => {
    console.log(getProductInfo())
})
