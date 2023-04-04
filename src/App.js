import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
    

    <div className="App">
      
    <BrowserRouter>
    <Navbar />

    <div className="main_ui">
        <Sidebar/>

    </div>
    

          {/* routes */}

            <Routes>
        

            </Routes>
      
            </BrowserRouter>
    <h1>Kanban Board App</h1>
      
    </div>

    
  );
}

export default App;
