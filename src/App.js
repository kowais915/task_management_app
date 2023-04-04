import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

    <div className="App">

          <Navbar />

          {/* routes */}
          
            <Routes>
        

            </Routes>
      

    <h1>Kanban Board App</h1>
      
    </div>

    </BrowserRouter>
  );
}

export default App;
