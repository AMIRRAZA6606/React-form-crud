import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";

const Get = () => {


const [mydata,setMydata] = useState([])

console.log(mydata)
// get data
const getData=async()=>{
try{


    const data1 =await axios.get('https://processflow-services.three60.pm/v1/sample')
    const res= data1.data;

  setMydata(res.data)
    

}
catch(error){


    console.log(error)
}
}

// Edit

const edit=async(id)=>{

  const data=await axios.get(`https://processflow-services.three60.pm/v1/sample/${id}`)

  const get= data.data

    

  // alert(id)
}

    useEffect(()=>{
        getData()
    },[])



  // del data

  const delData= async(id)=>{
    alert(id)
                    await axios.delete(`https://processflow-services.three60.pm/v1/sample/${id}`)
                    getData()
  }
  return (
   <>
   <section class="mx-auto w-full max-w-7xl px-4 py-4">
  <div class="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
    <div>
      <h2 class="text-lg font-semibold">Employees</h2>
      <p class="mt-1 text-sm text-gray-700">
        This is a list of all employees. You can add new employees, edit or
        delete existing ones.
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
          <table class="min-w-full divide-y divide-gray-200">
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
            <tbody class="divide-y divide-gray-200 bg-white">
            {

                // 
  mydata.map((cure)=>{
    return(
        <>
        
        <tr>
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
                    
                      <div class="text-sm text-gray-700">{cure.simple}</div>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-12 py-4">
                  {/* <div class="text-sm text-gray-900 ">Back-end Developer</div> */}
                  <div class="text-sm text-gray-700">{cure.select}</div>
                </td>
                <td class="whitespace-nowrap px-4 py-4">
                  <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                  {cure.date}
                  </span>
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                  <div className='w-[30px] h-[30px] bg-red-600'>{cure.color}</div>
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
               {cure.range}
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
               {cure.radio==true? "YES" : "NO"}
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
               {cure.radio===true ? "male" : "female"}
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium ">
                <button className='bg-blue-500 text-white p-2 mr-3'onClick={(e)=>NavigationPreloadManager('form'(cure.id))}>Edit</button>
                <button className='bg-red-500 text-white p-2' onClick={(e)=>delData(cure.id)}>Delete</button>
                </td>
              </tr>
        </>
    )
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
  )
}

export default Get;
