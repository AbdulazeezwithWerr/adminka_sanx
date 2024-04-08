import {} from 'react'
import Navbar from '../component/Navbar'
import Dashboard from './Dashboard'
import Driver from './Driver'

const Home = () => {
  return (
    <>
    <div className="Home">
        <div className="h_l">
            <Navbar/>
        </div>
        <div className="h_r">
            {/* <Driver/> */}
            <Dashboard/>
        </div>
    </div>
    

    </>
  )
}

export default Home