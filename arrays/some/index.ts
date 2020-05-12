interface Completed {
  title: string;
  completed: boolean;
}
const tasks: Array<Completed> = [
  {
    title: 'Do laundry',
    completed: true,
  },
  {
    title: 'Feed the cat',
    completed: true,
  },
  {
    title: 'Watch the array lessons on egghead.io',
    completed: false,
  },
];

const completedTasks = tasks.some(x => x.completed); // check if there some property of completed tasks

export { tasks, Completed, completedTasks };
