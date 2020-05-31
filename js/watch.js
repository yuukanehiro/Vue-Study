let app = new Vue({
    el: '#app',
    data: {
        message: '優技録'
    },
    watch: {
        message: function(newValue, oldValue) {
            console.log('new: %s, old: %s', newValue, oldValue)
        }
    }
})