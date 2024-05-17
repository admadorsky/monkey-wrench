import { db } from "../config/firebase"
import { getDocs, collection } from "firebase/firestore"
import { useEffect, useState } from "react";

export const Home = () => {

  const [vehicleList, setVehicleList] = useState([])
  const vehicleCollectionRef = collection(db, "vehicles")

  useEffect(() => {
    const getVehicleList = async () => {
      // read data from firebase firestore
      try {
        const data = await getDocs(vehicleCollectionRef)
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setVehicleList(filteredData)
      } catch (err) {
        alert("Failed to retrieve vehicle data. Please reload and try again.")
      }
    }
    getVehicleList()
  }, [])

  return (
    <div className="home-wrapper">
      <h1>Home</h1>
      <div>
        {vehicleList.map((vehicle) => (
          <div>
            <h3>{vehicle.make} {vehicle.model}</h3>
            <p>Mileage: {vehicle.mileage}</p>
          </div>
        ))}
      </div>
    </div>
  );
}