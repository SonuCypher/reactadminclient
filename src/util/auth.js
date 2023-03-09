import{ redirect }from 'react-router-dom'
import { cookies } from '../App';



  export const authloader=()=>{
    const auth = cookies.get("jwt")
    if(!auth){
       return redirect('/login')
    }
    return null;
}