const filters = {
  group: null,
  node: null,
};

function serviceFilter( state = filters, action ) {
  switch( action.type ) {
    case 'SET_GROUP_FIELD': 
      const { group } = action.payload;
      return { ...state, node: null, group };
    case 'SET_NODE_FIELD': 
      const { node } = action.payload;
      return { ...state, node };
    case 'RESET_FILTER_FIELDS': 
      return { ...state, group: null, node: null };
    default: 
      return { ...state };
  }
} 

export default serviceFilter;