import axios from "axios";
import React, { useEffect, useState } from "react";

const Form = () => {
  const Country =[
    {value:1, name:"pakisatn"},
    {value:2,name:"USA"},
    {value:3,name:"India"}
  ]
  const [mydata, setMydata] = useState([]);
  const [id,setId] = useState(0)
  const [update, setUpdate] = useState(false);
  const [name, setname] = useState("");
  const [country, setcountry] = useState();
  const [date, setDate] = useState("");
  const [color, setColor] = useState("");
  const [range, setRane] = useState("");
  const [age, setAge] = useState(false);
  const [gender, setgender] = useState();

  const submitForm = async (e) => {
    try {
      e.preventDefault();
      await axios.post(" https://processflow-services.three60.pm/v1/sample", {
        select: parseFloat(country),
        simple: name,
        color: color,
        range: parseInt(range),
        radio: gender,
        checkbox: age,
        date: date,
      });
      setname("")
      setcountry("")
      setDate("")
      setRane("")
      setAge("")
      setDate("")
      setgender("")
      getData()
    } catch (error) {
      console.log("there is some error", error);
    }
  };

  // get data
  const getData = async () => {
    try {
      const data1 = await axios.get(
        "https://processflow-services.three60.pm/v1/sample"
      );
      const res = data1.data;

      setMydata(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // del data
  const delData = async (id) => {
    alert(id);
    await axios.delete(
      `https://processflow-services.three60.pm/v1/sample/${id}`
    );
    getData();
  };

  // Edit data
  const edit = async (currentid) => {
    alert(currentid);
    const data = await axios.get(
      `https://processflow-services.three60.pm/v1/sample/${currentid}`
    );
  

    const get = data.data;
    const date = get.data.date;
    var dateObj = new Date(date);
    var year = dateObj.getFullYear();
    var month = dateObj.getMonth() + 1; // Adding 1 because months are zero-based
    var day = dateObj.getDate();
    var formattedDate = year + "-" + month.toString().padStart(2, '0') + "-" + day.toString().padStart(2, '0');

console.log(formattedDate)
    setname(get.data.simple);
    setcountry(get.data.select);
    setColor(get.data.color);
    setRane(get.data.range);
    setgender(get.data.radio);
    setDate(formattedDate);
    setAge(get.data.checkbox);
 
    setId(currentid)
    setUpdate(true);
   
  };


  // update data 
  const updatedata = async (id) => {
    try {
      await axios.put(`https://processflow-services.three60.pm/v1/sample/${id}`, {
        simple: name,
        select: country,
        color: color,
        range: range,
        radio: gender,
        checkbox: age,
        date: date
      });
      getData();

      setUpdate(false)
   setname("")
   setcountry("")
   setDate("")
   setRane("")
   setAge("")
   setgender("")
   setColor("")
   
     
      // setUpdate(false)
     
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  return (
    <>
      <div className="mt-6">
        <form
          className="flex flex-col p-1 bg-green-600 w-[600px] mx-auto gap-6 mt-3"
          
        >
          {/* name */}
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your name "
            value={name}
            onChange={(e) => setname(e.target.value)}
          />

          {/* country */}
          <select
            name=""
            id="country"
            value={country}
            onChange={(e) => setcountry(e.target.value)}
          >
            <option value="country">Select your country</option>
            <option value={1}>pakistan</option>
            <option value={2}>USA</option>
            <option value={3}>India</option>
            <option value={4}>Dubai</option>
          </select>

          {/* date */}
          <input
            type="date"
            name=""
            id=""
            placeholder="select date"
            value={date}
            onSelect={(e) => setDate(e.target.value)}
          />

          {/* color */}
          <input
            type="color"
            placeholder="Select color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          {/* range */}
          <input
            type="range"
            min={0}
            max={100}
            className="w-24 mx-auto"
            value={range}
            onChange={(e) => setRane(e.target.value)}
          />

          {/* age */}
          <div className=" flex gap-3 justify-center">
            <label htmlFor="">Are your 18 year old</label>
            <input
              type="checkbox"
              value={age}
              onChange={(e) => setAge(true)}
          checked={age}  />{" "}
            yes
          </div>

          <label htmlFor="">select your gender</label>
          <div className="flex p-4 gap-2 justify-center">
            <label htmlFor="male">
              <input
                id="male"
                type="radio"
                name="gender"
                value="male"
                onChange={(e) => setgender(true)}
             checked={gender===true} />
              Male
            </label>
            <label htmlFor="">
              <input
                id="female"
                type="radio"
                name="gender"
                value="female"
                onChange={(e) => setgender(false)}
              checked={gender===false}/>
              Female
            </label>
          </div>
          <div className="flex ">
            {!update ? (
              <button className="bg-blue-900 w-20 mx-auto p-3 text-white" 
              onClick={submitForm}>
                Submit
              </button>
            ) : (
              <button className="bg-blue-900 w-20 mx-auto p-3 text-white"
              onClick={(e)=>{
                e.preventDefault()
                updatedata(id)}}>
                Update
              </button>
            )}
          </div>
        </form>
      </div>

      {/* get data  */}

      <section class="mx-auto w-full max-w-7xl px-4 py-4">
        <div class="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 class="text-lg font-semibold">Employees</h2>
            <p class="mt-1 text-sm text-gray-700">
              This is a list of all employees. You can add new employees, edit
              or delete existing ones.
            </p>
          </div>
          <div>
            <button
              type="button"
              class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new employee
            </button>
          </div>
        </div>
        <div class="mt-6 flex flex-col">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200 bg-white ">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Name</span>
                      </th>
                      <th
                        scope="col"
                        class="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Country
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Date
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        color
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        range
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        age
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Gender
                      </th>
                      <th scope="col" class="relative px-4 py-3.5">
                        {/* <span class="sr-only">Action</span> */}
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 ">
                    {
                      //
                      mydata.map((cure) => {
                        return (
                          <>
                            <tr style={{background: cure?.color}} className="text-black">
                              <td class="whitespace-nowrap px-4 py-4">
                                <div class="flex items-center">
                                  <div class="h-10 w-10 flex-shrink-0">
                                    {/* <img
                        class="h-10 w-10 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
                        alt=""
                      /> */}
                                  </div>
                                  <div class="ml-4">
                                    <div class="text-lg text-black font-bold">
                                      {cure.simple}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td class="whitespace-nowrap px-12 py-4">
                                {/* <div class="text-sm text-gray-900 ">Back-end Developer</div> */}
                                <div class="text-lg text-black font-bold">
                              {Country.find((opetion)=>opetion.value===parseInt(cure.select))?.name}
                                </div>
                              </td>
                              <td class="whitespace-nowrap px-4 py-4">
                                <span class="inline-flex rounded-full bg-green-100 px-2  leading-5text-lg text-black font-bold">
                                  {cure.date}
                                </span>
                              </td>
                              <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                <div className="w-[30px] h-[30px  border-solid border-2 border-gray-200" style={{background:cure.color}}>
                                
                                </div>
                              </td>
                              <td class="whitespace-nowrap px-4 py-4 text-right text-lg text-black font-bold">
                                {cure.range}
                              </td>
                              <td class="whitespace-nowrap px-4 py-4 text-right text-lg text-black font-bold">
                                {cure.radio == true ? "YES" : "NO"}
                              </td>
                              <td class="whitespace-nowrap px-4 py-4 text-righttext-lg text-black font-bold">
                                {cure.radio === true ? "male" : "female"}
                              </td>
                              <td class="whitespace-nowrap px-4 py-4 text-right text-lg text-black font-bold ">
                                <button
                                  className="bg-blue-500 text-white p-2 mr-3"
                                  onClick={(e) => edit(cure.id)}
                                >
                                  Edit
                                </button>
                                <button
                                  className="bg-red-500 text-white p-2"
                                  onClick={(e) => delData(cure.id)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          </>
                        );
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
