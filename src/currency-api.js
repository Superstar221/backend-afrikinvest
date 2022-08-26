const CoinGecko = require('coingecko-api');

const CoinGeckoClient = new CoinGecko();
    let data = await CoinGeckoClient.exchanges.fetchTickers('bitfinex', {
        coin_ids: ['bitcoin']
    });
    let _coinList = {};
    let _datacc = data.data.tickers.filter(t => t.target == 'USD');
    [
        'BTC'
    ].forEach((i) => {
        let _temp = _datacc.filter(t => t.base == i);
        let _res = _temp.length == 0 ? [] : _temp[0];
        _coinList[i] = _res.last;
    })
console.log(_coinList);