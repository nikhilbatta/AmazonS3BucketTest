export default (state = [], action) => {
    switch(action.type) {
        case 'ADD-POST':
        const { name, post } = action; 
        console.log(name)
        return [
            ...state,
            {
                name: name,
                post: post
            },
            
        ]
        default:
        console.log(state)
        return state;
    }
}