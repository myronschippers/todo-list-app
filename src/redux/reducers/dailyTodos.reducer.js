const sampleList = [
    {
        name: 'Mail Letter',
        description: 'A sample description of our todo.',
        isComplete: false,
    },
    {
        name: 'Wash Dishes',
        description: 'A sample description of our todo.',
        isComplete: true,
    },
    {
        name: 'Cut Grass',
        description: 'A sample description of our todo.',
        isComplete: false,
    },
];

const dailyTodos = (state = sampleList, action) => {
    return state;
};

export default dailyTodos;