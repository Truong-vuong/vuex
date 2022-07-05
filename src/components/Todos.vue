<template>
  <div class="wrapper flex justify-center items-center">
    <div class="todos container bg-slate-400 p-4 rounded w-[800px] text-center">
      <AddTodo :editItem="editItem" />
      <button @click="onCreate" class="btn bg-orange-500 w-[160px] rounded p-2">
        Create Todo
      </button>

      <TodoItem @edit="handleEdit" />
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import AddTodo from "./AddTodo.vue";
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodosApp",
  components: {
    TodoItem,
    AddTodo,
  },
  setup() {
    const store = useStore();
    let todos = [];
    todos = computed(() => store.state.todos.todos);

    const editItem = reactive({});
    const handleEdit = (id) => {
      let item = todos.value.find((item) => item.id == id);
      Object.assign(editItem, item);
    };
    const onCreate = () => {
      editItem.id = null;
    };

    return {
      handleEdit,
      editItem,
      onCreate,
    };
  },
};
</script>

<style>
</style>