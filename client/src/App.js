import MainPage from "pages/MainPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {  
  const groups = useSelector( state => state.serviceProject );
  const filter = useSelector( state => state.serviceFilter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
