
const todosApp = {
  data() {
    return {
      todos: [],
      newTodo: {    
        done: false,
      },
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodo.text) {
        this.todos.push(this.newTodo);
        this.newTodo = {
          done: false,
        };
      }else{
        alert("Adicione um texto para criar a tarefa!")
      }
    },
  },
};

Vue.createApp(todosApp).mount("#app");
