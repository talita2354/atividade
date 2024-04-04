
import './Global.styles.css'
import styles from './App.module.css'
import Header  from './Header.jsx'
import Sidebar from './Sidebar.jsx'
import { Posts } from './Posts.jsx'



function App() {
  return (
   
      <div>
        <Header />
        <div className={styles.wrapper}>

          <Sidebar/>


          <main>
            <Posts/>
            <Posts />

         
          </main>
        </div>
      </div>
    
  )
}

export default App