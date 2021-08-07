const postReducer = (state, action) => {
    switch (action.type) {
        case 'posts/getAllPost':
            const { posts } = action.payload
            return {
                ...state,
                posts
            }
        default:
            return state;
    }
}

export default postReducer