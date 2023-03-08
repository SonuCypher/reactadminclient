import{ redirect }from 'react-router-dom'

export const authloader=()=>{
    const auth = null
    if(!auth){
       return redirect('/login')
    }
    return null;
}