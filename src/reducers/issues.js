//a reducer takes in 2 things

// 1. the action (info about what happened)
// 2. copy of current state

const issues = (state=[], action) => {
    console.log(state, action);
    switch(action.type) {
      case 'UPDATE_RESPONSE' :
        console.log("UPDATE_RESPONSE!!");
        return action.filteredIssueList;
      default:
        return state;
    }
}

export default issues;