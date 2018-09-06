const comments = (state=[], action) => {
    console.log(state, action);
    switch(action.type) {
      case 'UPDATE_COMMENT' :
        console.log("UPDATE_COMMENT!!");
        return action.commentList;
      default:
        return state;
    }
}

export default comments;