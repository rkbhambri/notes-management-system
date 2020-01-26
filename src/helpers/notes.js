
export const getPredefinedNotes = () => {
    const notes = [
        {
            id: Math.random(),
            title: 'A Guide to Service Workers in React.js',
            content: 'A service worker is a script that the client (your browser) runs in the background separate from the web page.',
            tags: ['code', 'reactjs']
        },
        {
            id: Math.random(),
            title: 'Local adventure',
            content: 'There are number of adventure activities to do near bangalore like hiking, parasailing.',
            tags: ['adventure']
        },
        {
            id: Math.random(),
            title: 'JavaScript has a Reduce Method',
            content: 'The reduce method itself takes two arguments, the callback and startingValue. That callback takes 2 main arguments, the accumulator and the nextValue:',
            tags: ['code', 'javascript']
        },
        {
            id: Math.random(),
            title: 'Programming Habits You Should Adopt',
            content: 'Programming habits, we all have them. Both good and bad. But when you start adopting the right programming habits you can seriously boost your efficiency.',
            tags: []
        }
    ];
    return notes;
};
