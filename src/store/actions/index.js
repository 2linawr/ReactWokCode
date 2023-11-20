

export const actionRequestData = (url,url_2)=> {
  return {
    type: 'REQUEST_DATA',
    url,
    url_2
  }
}
export const actionRequestClear = ()=> {
  return {
    type: 'REQUEST_CLEAR'
  }
}

export const actionRequestDataProfile = (object)=> {
  return {
    type: 'UPDATE_DATA',
    user:object,
  }
}

  export const actionRequestStarted = () => ({
    type: 'REQUEST_DATA_STARTED',
  });
 export const actionRequestSuccess = (data,data_2) => ({
    type: 'REQUEST_DATA_SUCCESS',
    data:data.concat(data_2)
  });
  export const actionRequestFailed = (error) => ({
    type: 'REQUEST_DATA_FAILED',
    error,
  });


  export const actionRequestUpdateData=(user)=>({

    type: 'REQUEST_DATA_UPDATE_PROFILE',
    user,
  });