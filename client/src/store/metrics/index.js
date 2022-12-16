const initialData = {
  metrics: [],
  timeData: '01-03-2020 00:00'
}

function serviceMetrics( state = initialData, action ) {
  switch( action.type ) {
    case 'SET_METRICS': 
      const { metrics } = action.payload;
      return { ...state, metrics: [...state.metrics, metrics] }
    default: 
      return { ...state }
  }
}

export default serviceMetrics;