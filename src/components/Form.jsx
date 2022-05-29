const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
    <h1 className="font-black text-3xl text-center">Patients Follow-up</h1>
    <p className="text-lg mt-5 text-center mb-10">
      Add patients and {''}
      <span className="text-indigo-600 font-bold">Manage them</span>
    </p>
    <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
      <div className="mb-2">
        <label htmlFor="patientname" className="block text-gray-700 uppercase font-bold ml-2 pl-2">Patient's Name</label>
        <input
        id="patientname"
        type="text"
        placeholder="Name"
        className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="block text-gray-700 uppercase font-bold ml-2 pl-2">Patient's Email</label>
        <input
        id="email"
        type="email"
        placeholder="Email"
        className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="discharge" className="block text-gray-700 uppercase font-bold ml-2 pl-2">Patient's discharge</label>
        <input
        id="discharge"
        type="date"
        placeholder="Discharge"
        className="border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold ml-2 pl-2">Symptoms</label>
        <textarea
        id="symptoms"
        className="border-2 w-full resize-none p-2 m-2 placeholder-gray-400 rounded-md"
        placeholder="Symptoms"
        />
      </div>
      <input
        type="submit"
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
        value="Agregar"
      />
    </form>
    </div>
  )
}

export default Form