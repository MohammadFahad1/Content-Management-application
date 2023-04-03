import BlogReducer from "./BlogReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    Blog: BlogReducer
})

export default rootReducer;