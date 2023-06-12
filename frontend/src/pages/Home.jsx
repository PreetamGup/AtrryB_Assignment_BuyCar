import React,{useState, useEffect} from 'react'
import CarCard from '../component/CarCard'
import axios from 'axios'
// import { useContext } from 'react';
// import { Context } from '../component/context';

const Home = () => {
    
  const [allCars, setAllCars] = useState([])
  // const OemData= useContext(Context)


  useEffect(() => {
    const getData=async()=>{
     try {
      
      const response= await axios.get('https://backend-buycar-atrryb.onrender.com/api/car/allcardetails',{
        headers:{
          Authorization : "Bearer " + localStorage.getItem('token')
        }
      } )
      // console.log(response.data.allCar)
      setAllCars(response.data.allCar)
     } catch (error) {
      console.log(error)
      window.alert("Some error from backend")
     }
    }

    getData()
   
  }, [])
  

  return (
    <div className='homeContainer'>

        <div className='allCars'>
          <CarCard allCars={allCars}/>

          <div className='carFilter'>
            <form action="">
            <h1>Filter</h1>
              <label htmlFor="price">Price</label>
              <input type="range" max={10000000} name='price' defaultValue={10000000}/>
              <br />
              <label htmlFor="color">Color</label>
              <input type="text" name='color'/>
              <br />
              <label htmlFor="mileage">Mileage</label>
              <input type="range" max={50} name='mileage'/>
              <br />
              <button type='submit'>Filter</button>
            </form>
          </div>
        </div>
        
    </div>
  )
}

export default Home