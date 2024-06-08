import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
function App() {
  return (
    <div>
      
    </div>
  );
}

const appRouter = createBrowserRouter([{
  path:"/",
  errorElement:<ErrorPage></ErrorPage>,
  children:[{
    path:"/",
  },
  {path:"/",
}
]
}])

export default App;
