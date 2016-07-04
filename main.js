Vue.component('tasks', {
    template: '#tasks-template',
    props: ['list'],
    computed: {
        remaining: function () {
            return this.list.filter(this.inProgress).length;
        }
    },
    methods: {
        isCompleted: function (task) {
            return task.completed;
        },
        inProgress: function (task) {
            return !this.isCompleted(task)
        },
        deleteTask:function (task) {
            this.list.$remove(task);
        },
        clearCompleted:function () {
            this.list = this.list.filter(this.inProgress);
        }
    }
});


new Vue({
    el: '#app',

    data: {
        tasks: [
            {body: 'go to work', completed: true},
            {body: 'go to home', completed: false},
            {body: 'eat something', completed: false},
            {body: 'sleep', completed: false}
        ]
    }
});