import {ThemeProvider} from "styled-components"
import theme from "./theme/styledComponent"
import './index.css'
import Header from "./components/header_folder/header/Header"
import Home from "./components/home_folder/home/Home"

function App() {

  return (  
    <ThemeProvider theme={theme}>    
      <div>
          <Header />
          <Home/>
      </div>
    </ThemeProvider>      
  )
}

export default App
