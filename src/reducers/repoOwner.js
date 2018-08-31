//a reducer takes in 2 things

// 1. the action (info about what happened)
// 2. copy of current state

const repoOwner = (state=[], action) => {
    console.log(state, action);
    switch(action.type) {
      case 'UPDATE_REPO_OWNER' :
        console.log("UPDATE_REPO_OWNER!!");
        return action.repoOwner;
      default:
        return state;
    }
}
export const repoName = (state=[], action) => {
    console.log(state, action);
    switch(action.type) {
      case 'UPDATE_REPO_NAME' :
        console.log("UPDATE_REPO_NAME!!");
        return action.repoName;
      default:
        return state;
    }
}

export default repoOwner;