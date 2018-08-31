import { createStore, compose } from "redux";
// import { syncHistoryWithStore } from "react-router-redux";
// import { browserHistory } from "react-router-dom";

// import the root reducer
import rootReducer from './reducers/index';

//create an object for the default data (similar to initial react component state)
// **But have to keep in mind that an individual reducer is needed for every redux state key
const defaultState = {
    // searchTerm: '',
    // issueStateFilterBy: 'open',
    // sortBy: 'created_at|desc',
    issues: [{"somekey":"somevalue", "anotherKey":"anotherValue"}],
    repoOwner: '',
    repoName: '',
    comments: {"somekey":"somevalue", "anotherKey":"anotherValue"}
  };

  const store = createStore(rootReducer, defaultState);

//   export const history = syncHistoryWithStore(browserHistory, store); //browserHistory not available in react-router-dom v4

  export default store;