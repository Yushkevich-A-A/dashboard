import MainPage from "pages/MainPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() { 
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch({type: 'REQUEST_METRICS'});
    const timer = setInterval( () => {
      dispatch({type: 'REQUEST_METRICS'})
    }, 60 * 1000 );
    return () => clearInterval(timer)
  },[])

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
