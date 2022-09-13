import { useEffect, useState } from "react"

const useToken = user => {
    const [token,setToken] = useState('');
    useEffect(()=>{
        const email = user?.user?.email;
        const currentUser = {email: email};
        if(email){
            fetch(`https://pacific-journey-95029.herokuapp.com/user/${email}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => 
            {
                    

                    const accesToken = data.token;
                    localStorage.setItem('accesToken',accesToken);
                    setToken(accesToken);
            }
                
                )

            

        }
    },[user])
    return [token];

}

export default useToken;