import{ redirect }from 'react-router-dom'
import Cookies from "universal-cookie"

export const authloader=()=>{
    const cookies = new Cookies()
    const auth = cookies.get("jwt")
    if(!auth){
       return redirect('/login')
    }
    return null;
}