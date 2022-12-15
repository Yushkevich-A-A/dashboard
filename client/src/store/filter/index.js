const filters = {
  group: null,
  node: null,
};

function serviceFilter( state = filters, action ) {
  switch( action.type ) {
    case "SET_FILTER": 
      const { data } = action.payload;
      return { ...data };
    default: 
      return { ...state };
  }
} 

export default serviceFilter;