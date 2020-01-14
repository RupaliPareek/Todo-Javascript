let todoItems = [];

function addtodo(task) {
    const todo = {
        task,
        checked: false,
        id: Date.now(),
    }
    todoItems.push(todo);
    console.log(todoItems);
    const list = document.querySelector('.todo-list');
    list.addEventListener('click', event => {
        if (event.target.classList.contains('js-tick')) {
            const itemKey = event.target.parentElement.dataset.key;
            toggleDone(itemKey);
        }
    });
    list.insertAdjacentHTML('afterend', `
        <li data-key="${todo.id}">
            <input id="${todo.id}" type="checkbox" />
            <label for="${todo.id}" class="tick js-tick"></label>
            <span>
                ${todo.task}
            </span>
                <button class="delete-todo js-delete-todo">
                    <svg><use href="#delete-icon"></use></svg>
                </button>
            </label>
        </li>
    `
    )
}

const form = document.querySelector('.todo-from');
form.addEventListener('submit', event => {
    console.log("submitted");
    event.preventDefault();
    const input = document.querySelector('.todo-input');
    const task = input.value.trim();
    console.log(task);
    if (task !== '') {
        addtodo(task);
        input.value = '';
        //input.focus();
    }
});