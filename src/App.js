import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    

    <div className="App">
      
    <BrowserRouter>
    <Navbar />

          {/* routes */}

            <Routes>
        

            </Routes>
      
            </BrowserRouter>
    <h1>Kanban Board App</h1>
      
    </div>

    
  );
}

export default App;
