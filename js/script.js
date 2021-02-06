const containers = document.querySelectorAll('.container');
let tasks = document.querySelectorAll('p');

const notCompleted = document.querySelector('#inCompleted');
const button = document.querySelector('button');

const input = document.querySelector('input');


//when dragging start add dragging class
const drag = () => {
    // console.log(tasks);
    tasks.forEach(task => {
    task.addEventListener('dragstart', e => {
        task.classList.add('dragging');
    });
    task.addEventListener('dragend', e => {
        task.classList.remove('dragging');
        // console.log(e);
    });
});
}
drag();

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault();
        const currDragging = document.querySelector('.dragging');
        container.appendChild(currDragging);
    });
});


// generate a task with custom message
const addTask = task => {
    if(task !== "")
    notCompleted.innerHTML += `<p class="dragable" draggable="true"> ${task} </p>`, input.value = "",
    tasks = document.querySelectorAll('p');
    drag();
};
// when user clicks on button
button.addEventListener('click', () => {
    addTask(input.value);
});
// if user press enter
window.addEventListener('keydown', (e) => {
    if(e.key == "Enter")
    addTask(input.value);
    // console.log('hello');
});
