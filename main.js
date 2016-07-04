new Vue({
    el: '#app',

    data: {
        tasks: [
            {body: 'go to work', completed: false},
            {body: 'go to home', completed: false},
            {body: 'eat something', completed: false},
            {body: 'sleep', completed: true}
        ]
    },
    methods: {
        toggleLine: function (task) {
            task.completed = !task.completed
        }
    }

});