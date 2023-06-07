import './App.css';
import MainPage from './pages/MainPage';
import { LoggedInProvider } from './context/LoggedInContext';
import { checkLogin } from './utils/authentication';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import RecipePage from './pages/ViewRecipePage';
import RecipeFormPage from './pages/RecipeFormPage';

function App() {

  const ProtectedRoute = ({ children }) => {
    if (checkLogin()) {
      return children;
    } else {
      return <Navigate to="/" />
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <LoggedInProvider>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/viewRecipe/:recipeId" element={<RecipePage/>}/>
            <Route path="/recipes/create" element={
              <ProtectedRoute>
                <RecipeFormPage/>
              </ProtectedRoute>
            }/>
            <Route path="/recipes/edit/:recipeId" element={
              <ProtectedRoute>
                <RecipeFormPage/>
              </ProtectedRoute>
            }/>
            <Route path="/easterEgg" element={
              <ProtectedRoute>
              <p>Happy Easter!</p>
              </ProtectedRoute>
              }/>
          </Routes>
        </LoggedInProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
