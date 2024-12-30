import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Router from './routes/Router'
import UserProvider from './users/providers/UserProvider'
import CustomThemeProvider from './providers/CustomThemeProvider'

function App() {


  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <UserProvider>
          <Layout>
            <Router />
          </Layout>
        </UserProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  )
}

export default App
