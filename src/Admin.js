import{useState,useEffect}from "react";
import {db} from './firebase-config'
import {collection,getDocs, addDoc} from "firebase/firestore";



const Admin = () => {

    const [newTitle,setNewTitle]=useState("")
    const [newText,setNewText]=useState("")


    const [notice, setNotice]=useState([]);
    const noticeCollectionRef=collection(db,"notice")


 

    const createNotice=async()=>{

        await addDoc(noticeCollectionRef,{ title:newTitle, text:newText});
      
      alert("Saved")
      
      }
      
      
      
      
      
      
      
      
      
      useEffect(()=>{
         const getNotice=async()=>{
      
      
          const data= await getDocs(noticeCollectionRef)
          setNotice(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
         }
      
      
         getNotice()
      
      
      },[ ])











      return (

        <div className=" flex h-screen w-full items-center">



      <div class="relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10 space-y-2">

   <h1 className="text-center font-semibold text-lg">Write Notice</h1> 





<div className="flex flex-col space-y-5"> 

   <input type="text" placeholder="Title" className="border-2"  
   onChange= {(event)=> {setNewTitle( event.target.value)
}}  />






  <textarea id="w3review" name="w3review" rows="4" cols="50" className="border-2" 
  onChange= {(event)=> {setNewText( event.target.value)
  }}> Text </textarea>





<button className="bg-cyan-300 border-2 p-1 text-white rounded rounded-sm" onClick={createNotice}>  Submit </button>




</div>

</div>

        </div>
    )
}

export default Admin
