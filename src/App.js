import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import BoardsArea from './components/BoardsArea';
import {useState} from 'react';

function App() {
  const [modal, setModal ] = useState(false); 
  const [taskModal, setTaskModal ] = useState(false);



  const modalHandler = () => {
    setModal(!modal);
}


const taskModalHandler = () => {
  setTaskModal(!taskModal);
}
  return (
    

    <div className="App">
      
    <BrowserRouter>
    <Navbar taskModal={taskModal} taskModalHandler={taskModalHandler} />

    <div className="main_ui">
        <Sidebar modalHandler={modalHandler} modal={modal}/>

        <BoardsArea/>

    </div>
    

          {/* routes */}

            <Routes>
        

            </Routes>
      
            </BrowserRouter>
    
      
    </div>

    
  );
}

export default App;
