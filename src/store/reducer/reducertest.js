const initialState = {
    users: [],
    user:{},
    loadata:false,
    loadataprofile:false,
    error:[]
  };

  function reducer(state = initialState, action) { 
    let Copystate;
    switch(action.type){
      case 'REQUEST_DATA_STARTED':
        Copystate={...state,loadata:true}
         return Copystate;
         break;
      case 'REQUEST_CLEAR':
      Copystate={...state,loadata:false,users:[],user:{}}
        return Copystate;
        break;
        case 'REQUEST_DATA_SUCCESS':
        Copystate={...state,loadata:false,users:action.data}  
        return Copystate;
        case 'REQUEST_DATA_FAILED':
          Copystate={...state,loadata:false,error:action.error}  
          return Copystate;
        case 'UPDATE_DATA':
          Copystate={...state,loadataprofile:true}  
          return Copystate;

          case 'REQUEST_DATA_UPDATE_PROFILE':
            Copystate={...state,loadataprofile:false,user:action.user}  
            return Copystate;
        default:
        return state;
    }
  }

export default reducer;