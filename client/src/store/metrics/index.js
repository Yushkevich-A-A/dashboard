import { getTime, parse } from "date-fns";

const initialData = {
  metrics: [],
  datetime: null
}

function serviceMetrics( state = initialData, action ) {
  switch( action.type ) {
    case 'SET_METRICS': 
      const { metrics } = action.payload;
      const datetime = metrics[0] ? getTime(parse(metrics[0].datetime, 'dd-MM-yyyy mm:ss', new Date())) :  state.datetime;
      return { ...state, metrics: [...state.metrics, ...metrics], datetime }
    default: 
      return { ...state }
  }
}

export default serviceMetrics;