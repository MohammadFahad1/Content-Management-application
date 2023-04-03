import { TEST } from "../actionTypes/actionTypes"

const initialState = {
    test: ""
}

const BlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST:
            return state
        default:
            return state
    }
}

export default BlogReducer