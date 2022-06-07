const Patient = ({patient}) => {
  return (
    <div className="bg-white my-3 mx-5 px-5 py-10 shadow-md rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Name: {''}
        <span className="font-normal normal-case">{patient.name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {''}
        <span className="font-normal normal-case">{patient.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Patient Discharge: {''}
        <span className="font-normal normal-case">{patient.discharge}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Symptoms: {''}
        <span className="font-normal normal-case">{patient.symptoms}</span>
      </p>
    </div>
  )
}

export default Patient