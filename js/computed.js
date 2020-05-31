let app = new Vue({
    el: '#app',
    data: {
        email: 'YUU3@example.net'
    },
    computed: {
        localEmail: function() {
            return this.email.split('@')[0].toLowerCase() + '@' +this.email.split('@')[1];
        }
    }
})