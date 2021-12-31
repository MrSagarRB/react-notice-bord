import{useState,useEffect}from "react";
import {db} from './firebase-config';
import {collection,getDocs, addDoc} from "firebase/firestore";


function Dashbord() {

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
 


        <div className='flex h-screen w-full justify-center items-center'>
    



<div className=" flex flex-col space-y-6 container mx-auto  items-center "> 

    {notice.map((notice)=> {
      return(
    
    
        <div className=" border-2  h-36 w-56">{""}

        <div ><h1>{notice.title} </h1> </div>

        <div className="text-justify"> <h1>{notice.text} </h1></div>
        
        </div>





      );
    
    })}
    
    
    
        </div>
    
    

        </div>
    
    
      );
}

export default Dashbord
