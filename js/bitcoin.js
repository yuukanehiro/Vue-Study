let app = new Vue({
    el: '#app',
    data: {
        bpi: null,
        hasError: false,
        loading: true
    },
    mounted: function() {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(function(response) {
                // console.log(response);
                // console.log(response.data.bpi);
                //console.log(response.data.bpi.EUR.rate_float);
                this.bpi = response.data.bpi;
            }.bind(this)) // このクラスにバインド。bindで指定しないとthen()の中のthisがWindowオブジェクトを意味してしまう
            .catch(function(error) {
                console.log(error);
                this.hasError = true;
            }.bind(this))
            .finally(function() { // 通信が全て終わった時に、loadingをfalseにする
                this.loading = false;
            }.bind(this))
    },
    filters: {
        currencyDecimal(value) {
            return value.toFixed(2);
        }
    }
})