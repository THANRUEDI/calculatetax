import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-200 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-red-500">
          Fill in Information
        </h1>
        <form onSubmit={submitForm} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium mb-1">เงินเดือน:</label>
            <input
              type="text"
              name="salary"
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">โบนัส:</label>
            <input
              type="text"
              name="bonus"
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">หักประกันสังคมต่อเดือน:</label>
            <input
              type="text"
              name="socialsecurity"
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">จำนวนบุตร:</label>
            <input
              type="text"
              name="children"
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-1">ค่าเบี้ยประกันชีวิต:</label>
            <input
              type="text"
              name="lifepremiums"
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-medium py-2 rounded-lg shadow-lg hover:bg-pink-300 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormData;
