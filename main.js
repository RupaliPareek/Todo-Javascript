let todoItems = [];
function addTodo(task) {
    const todo = {
        task,
        checked: false,
        id: Date.now(),
    }
    todoItems.push(task);
    console.log(todoItems);
    const form = document.querySelector('.my-form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const input = document.querySelector('.js-input');
        console.log(input);
        const task = input.value.trim();
        if (text != '') {
            addTodo(task);
            input.value = '';
            input.focus();
        }
    });
}
