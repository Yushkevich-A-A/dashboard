const initialState = [];

function serviceProject( state = initialState, action ) {
  switch( action.type ) {
    case "SET_INIT_DATA": 
      const { data } = action.payload;
      return [ ...data ]
    default: 
      return [ ...state ];
  }
} 

export default serviceProject;