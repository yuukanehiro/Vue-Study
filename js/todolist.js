let app = new Vue({
    el: '#app',
    data: {
        newItem: '',
        todos: []
    },
    methods: {
        addItem: function(event) {
            // 入力が空の場合はアーリーリターン
            if (this.newItem == '') {
                return;
            }

            var todo = {
                item: this.newItem,
                isDone: false
            };
            this.todos.push(todo); // タスク追加
            this.newItem = '';     // クリア
        },
        deleteItem: function(index) {
            this.todos.splice(index, 1); // splice(削除を開始する配列のインデックス, 削除する個数)
        }
    }
})