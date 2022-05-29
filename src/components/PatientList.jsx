import Patient from "./Patient"
const PatientList = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
    <h2 className="font-black text-3xl text-center">Patient List</h2>
    <p className="text-lg mt-5 text-center mb-10">
      Manage your {''}
      <span className="text-indigo-600 font-bold">Patients and Appointments</span>
    </p>
    <Patient/>
    <Patient/>
    <Patient/>
    <Patient/>
    <Patient/>
    <Patient/>
    <Patient/>
    </div>
  )
}

export default PatientList