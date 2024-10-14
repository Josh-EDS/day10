function worker(task, timeRequired) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(`${task} done`); }, timeRequired);
    });
}

async function factory(tasks) {
    for (let task of tasks.tasks) {
        const result = await worker(task.task, parseInt(task.timeRequired));
        console.log(result);
    }}

// The exemple :
let tasks = {
    'tasks': [
        {
            'task': 'Teaching Astronomy',
            'timeRequired': '500',
        },
        {
            'task': 'Refill fuel',
            'timeRequired': '1500',
        },
        {
            'task': 'Repair module',
            'timeRequired': '1000',
        },
    ],
};

worker("Going to work", 1000).then(value => { console.log(value) });
factory(tasks);
