const Patient = ({patient, setPatient}) => {
  return (
    <div className="bg-white my-3 mx-5 px-5 py-10 shadow-md rounded-xl">
      <p className="font-bold mx-2 mb-3 text-gray-700 uppercase">
        Name: {''}
        <span className="font-normal normal-case">{patient.name}</span>
      </p>
      <p className="font-bold mx-2 mb-3 text-gray-700 uppercase">
        Email: {''}
        <span className="font-normal normal-case">{patient.email}</span>
      </p>
      <p className="font-bold mx-2 mb-3 text-gray-700 uppercase">
        Patient Discharge: {''}
        <span className="font-normal normal-case">{patient.discharge}</span>
      </p>
      <p className="font-bold mx-2 mb-3 text-gray-700 uppercase">
        Symptoms: {''}
        <span className="font-normal normal-case">{patient.symptoms}</span>
      </p>
      <div className="flex mt-4">
        <button onClick={() => setPatient(patient)} type="button" className="bg-blue-600 w-full p-2 mx-1 text-white uppercase font-bold hover:bg-blue-700 cursor-pointer transition-colors rounded">Edit</button>
        <button type="button" className="bg-red-600 w-full p-2 mx-1 text-white uppercase font-bold hover:bg-red-700 cursor-pointer transition-colors rounded">Delete</button>
      </div>
    </div>
  )
}

export default Patient