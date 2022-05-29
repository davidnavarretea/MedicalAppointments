const Patient = () => {
  return (
    <div className="bg-white my-3 mx-5 px-5 py-10 shadow-md rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Name: {''}
        <span className="font-normal normal-case">David</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {''}
        <span className="font-normal normal-case">david@david.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Patient Discharge: {''}
        <span className="font-normal normal-case">1 June 2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Symptoms: {''}
        <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perspiciatis minus beatae quas nobis deserunt omnis, quae recusandae debitis fugiat repellendus harum tempora modi commodi veniam sequi id possimus cum.</span>
      </p>
    </div>
  )
}

export default Patient