import { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import PatientList from './components/PatientList'
/* Page */
function App() {
  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})
/* Delete function */
const deletePatient = id => {
  const patientsUpgraded = patients.filter(patient => patient.id !== id)
  setPatients(patientsUpgraded)
}
  return (
    <div className='container mx-auto mt-9'>
    <Header/>
    <div className='mt-12 md:flex'>
      <Form patients = {patients} setPatients = {setPatients} patient = {patient} setPatient = {setPatient}/>
      <PatientList patients = {patients} setPatient = {setPatient} deletePatient = {deletePatient}/>
    </div>
    </div>
  )
}

export default App