import { useState, useEffect } from "react"
const Form = ({patients, setPatients, patient, setPatient}) => {
// States
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [discharge, setDischarge] = useState('')
const [symptoms, setSymptoms] = useState('')
const [error, setError] = useState(false)
// Effects
useEffect(() => {
  if(Object.values(patient).length > 0){
    setName(patient.name)
    setEmail(patient.email)
    setDischarge(patient.discharge)
    setSymptoms(patient.symptoms)
  }
},[patient])
// Functions
// Validation
const handleSubmit = e => {
  e.preventDefault()
  if([name, email, discharge, symptoms].includes('')){
    setError(true)
    return
  }
  setError(false)
  // Generate Id Patient
  const generateId = () => {
    const date = Date.now()
    const random = Math.random() * 9
    const id = Math.round(date - random)
    return id
  }
  /* Create Patient Object */
  const patientObject = {
    name,
    email,
    discharge,
    symptoms
  }
  /* Edit or Create - Validation */
  /* Modify patient */
  if(patient.id){
    /* Add id */
    patientObject.id = patient.id
    /* Set patiens */
    const patientUpdated = patients.map(patientState => patientObject.id === patientState.id ? patientObject : patientState)
    setPatients(patientUpdated)
    /* Clean Patient State */
    setPatient({})
  } else {
    /* Add id */
    patientObject.id = generateId()
    /* Set patients */
    setPatients([...patients, patientObject])
  }
  /* Reset form */
  setName('')
  setEmail('')
  setDischarge('')
  setSymptoms('')
}
// Page
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
    <h1 className="font-black text-3xl text-center">Patients {''}
    <span className="text-blue-600">Follow-up</span></h1>
    <p className="text-lg mt-5 text-center mb-10 font-bold">
      Add patients and {''}
      <span className="text-blue-600 font-bold">Manage them</span>
    </p>
    <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
      {/* If error exist, error div appears */}
      {error && 
        <div className="bg-red-800 text-center text-white uppercase font-bold mb-5 p-3 rounded">
          <p>Fill in all fields</p>
        </div>}
      {/* Form */}
      <div className="mb-2">
        <label htmlFor="patientname" className="block text-gray-700 uppercase font-bold ml-2 pl-2">Patient's Name</label>
        <input
        id="patientname"
        type="text"
        placeholder="Name"
        className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"
        value={name}
        onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="block text-gray-700 uppercase font-bold ml-2 pl-2">Patient's Email</label>
        <input
        id="email"
        type="email"
        placeholder="Email"
        className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="discharge" className="block text-gray-700 uppercase font-bold ml-2 pl-2">Patient's discharge</label>
        <input
        id="discharge"
        type="date"
        placeholder="Discharge"
        className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"
        value={discharge}
        onChange={e => setDischarge(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold ml-2 pl-2">Symptoms</label>
        <textarea
        id="symptoms"
        className="border-2 w-full resize-none p-2 m-2 placeholder-gray-400 rounded-md"
        placeholder="Symptoms"
        value={symptoms}
        onChange={e => setSymptoms(e.target.value)}
        />
      </div>
      <input
        type="submit"
        className="bg-blue-600 w-full p-3 text-white uppercase font-bold hover:bg-blue-700 cursor-pointer transition-colors rounded"
        value={patient.id ? 'Update' : 'Add'}
      />
    </form>
    </div>
  )
}

export default Form