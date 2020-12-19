export const createProject = (project) => {
    return (dispatch, getState) => {
        // Let's slide an async call right abouts here
        dispatch({type:'CREATE_PROJECT', project});
    }
}