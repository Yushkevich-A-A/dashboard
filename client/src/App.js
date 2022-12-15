import MainPage from "pages/MainPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {  
  const groups = useSelector( state => state.serviceProject );
  const filter = useSelector( state => state.serviceFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (filter.node) {
      return;
    }
    if (!groups[0]) {
      return;
    }
    dispatch({type: 'SET_NODE', payload: { ...groups[0].nodes[1] }});
  }, [groups])


  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
