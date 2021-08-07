const getAllPostAction = (posts) => {
    return {
        type: 'posts/getAllPost',
        payload:{
            posts
        }
    }
}

export {
    getAllPostAction,
}