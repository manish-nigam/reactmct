import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import "./User.css"

const User = () => {
    const [gender, setgender] = useState("all")
    const [Udata, setUdata] = useState([])
    function hello(e){
        setgender(e.target.value)
        console.log(gender);
        console.log(Udata);

    }
    useEffect(()=>{
      getData();
    },[gender])
    async function getData(){
        const res=await fetch(`https://randomuser.me/api/?results=30`)
        const data= await res.json();
        console.log(Udata);
        if(gender==="male" || gender==="female"){   
        const filtereddata=data.results.filter((e)=>e.gender===gender)
        setUdata(filtereddata);
    }
    else if(gender==="all"){
        setUdata(data.results)
        console.log(Udata);
        console.log("elseif");
    }
   

    }
  return (
    <>
        <Navbar/>
    <div className='user container center col '>
    <div className="userHead  "><h2>User Details</h2></div>
    <div className="desc ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illo delectus odit voluptate enim quas debitis, illum doloribus inventore quo, nam praesentium, iste autem dolor. Tenetur debitis eveniet quia aliquid.
    Assumenda, illo dolore quos consectetur veniam asperiores ad perferendis, numquam sapiente quibusdam quo fugiat reprehenderit quisquam nemo itaque, sequi a magnam laudantium dicta amet? Quo, ducimus blanditiis. Corporis, reprehenderit atque.
    Ab nostrum dicta aut optio iusto animi lae dignissimos incidunt commodi aliquid nemo, exercitationem autem minus tempora non corporis maxime excepturi corrupti vero blanditiis eveniet dolore quasi possimus distinctio. Perspiciatis.</div>
    <div className="inputsRadio " onChange={(e)=>hello(e)}>
    <span><input type="radio" name="gender" id="" value="all" defaultChecked />
        All</span>
        <span>
        <input type="radio" name="gender" value="female" id="" />
        Female</span>
        <span>
        <input type="radio" name="gender" value="male" id="" />
       Male</span>
    </div>
    <div className="cardContainer ">
        <div className="cardHeader ">
            <div className='img'>IMAGE</div>
            <div className='name1'>NAME</div>
            <div className='email'>EMAIL</div>
            <div className='gender'>GENDER</div>
        </div>
        <div className="card1 col">
        {Udata.length>1?(Udata.map((e,i)=>{
            return(
                <div className='card' key={i}>
                <div className='img'>
            <img src={e.picture.thumbnail} alt="" width={50} />
        </div>
            <div className='name1'>{e.name.title} {e.name.first} {e.name.last}</div>
            <div className='email'>{e.email}</div>
            <div className='gender'>{e.gender}</div>
            </div>
            )
        })):null}
        </div>
    </div>
       
    </div>
    </>
  )
}

export default User