let app = new Vue({
    el: '#app',
    data: {
        basePrice: 100
    },
    computed: {
        taxIncludedPrice: {
            get: function() {
                return parseInt(this.basePrice * 1.08); // 整数値を返す
            },
            set: function(taxIncludedPrice) {
                this.basePrice = Math.ceil(taxIncludedPrice / 1.08); // 小数点以下を切り上げてからbasePriceプロパティに代入
            }
        }
    }
})