let app = new Vue({
    el: '#app',
    data: {
        now: '',
    },
    methods: {
        onclick: function() {
            this.now = new Date().toLocaleString();
        }
    }
})