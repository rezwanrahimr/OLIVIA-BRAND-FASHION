import { useEffect, useState } from "react"

const useAdmin = user =>{
    const [admin,setAdmin] = useState(false);
    useEffect(()=>{
        const email = user?.email;
        if(email){
            fetch(`https://pacific-journey-95029.herokuapp.com/admin/${email}`,{
                method:'GET',
                headers:{
                    'content-type':'application/json',
                    authorization: `Bearer ${localStorage.getItem('accesToken')}`

                }
            })
            .then(res => res.json())
            .then(data =>  {
                setAdmin(data.admin);
            })
        }
    },[user])
    return [admin];
}
export default useAdmin;