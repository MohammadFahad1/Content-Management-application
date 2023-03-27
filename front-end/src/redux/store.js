import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
const { createStore, applyMiddleware } = require("redux");

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;