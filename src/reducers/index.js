import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import issues from "./issues";
import comments from "./comments";
import repoOwner, { repoName } from "./repoOwner";

const rootReducer = combineReducers({issues, comments, repoOwner, repoName, routing: routerReducer});

export default rootReducer;