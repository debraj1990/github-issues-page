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

// update comment
export function updateComment(commentList) {
  return {
    type: 'UPDATE_COMMENT',
    commentList
  }
}
