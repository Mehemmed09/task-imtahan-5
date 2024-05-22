import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import FormAdd from '../../components/FormAdd/FormAdd'
import './Admin.scss'


const AddPage = () => {
const [data,setData]=useState([])
const [search,setSearch]=useState("")
const [property,setProperty]=useState(null)
async function getData(){
  const res=await axios("http://localhost:5000/api/products")
  setData(res.data)
}
async function deleteData(id){
  const res=await axios.delete(`http://localhost:5000/api/products/${id}`)
  getData()
}
  return (
    <div>
      
        <FormAdd getData={getData}/>
        <div className="filter">
          <input type="search" value={search}  placeholder='search' onChange={(e)=>setSearch(e.target.value)}/>
          <button onClick={()=>setProperty({name:"text",asc:null})}>Default</button>
          <button onClick={()=>setProperty({name:"text",asc:true})}>A-Z</button>
          <button onClick={()=>setProperty({name:"text",asc:false})}>Z-A</button>
          <button onClick={()=>setProperty({name:"price",asc:null})}>Default</button>
          <button onClick={()=>setProperty({name:"price",asc:true})}>Inc</button>
            <button onClick={()=>setProperty({name:"price",asc:false})}>Dec</button>
        </div>
        <table>
          <thead>
            <tr>
              <td>Image</td>
              <td>Title</td>
              <td>Text</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {data&&data
            
            
            .filter(x => x.text.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => {
              if (property && property.asc === true) {
                return (a[property.name] < b[property.name]) ? -1 : ((b[property.name] < a[property.name]) ? 1 : 0)
              } else if (property && property.asc === false) {
                return (a[property.name] > b[property.name]) ? -1 : ((b[property.name] > a[property.name]) ? 1 : 0)
              } else {
                return 0;
              }

            })
            
            
            
            
            
            .map(x=>

              <tr>
                <th><img src={x.image} alt="" /></th>
                <th>{x.text}</th>
                <th>{x.title}</th>
                <th>{x.price}</th>
                <th><button onClick={()=>deleteData(x._id)}>Delete</button></th>
              </tr>

              )}
          </tbody>
        </table>
    </div>
  )
}

export default AddPage