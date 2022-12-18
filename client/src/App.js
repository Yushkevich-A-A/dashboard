import MainPage from "pages/MainPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() { 
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch({type: 'REQUEST_METRICS'});
    const timer = setInterval( () => {
      dispatch({type: 'REQUEST_METRICS'})
    }, 3000 );
    return () => clearInterval(timer)
    // eslint-disable-next-line
  },[])

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
