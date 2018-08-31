// update repo owner
export function updateRepoOwner(repoOwner) {
  return {
    type: 'UPDATE_REPO_OWNER',
    repoOwner
  }
}

// update repo name
export function updateRepoName(repoName) {
  return {
    type: 'UPDATE_REPO_NAME',
    repoName
  }
}

// update response
export function updateResponse(filteredIssueList) {
  return {
    type: 'UPDATE_RESPONSE',
    filteredIssueList
  }
}

// remove comment

// export function removeComment(postId, i) {
//   return {
//     type: 'REMOVE_COMMENT',
//     i,
//     postId
//   }
// }
