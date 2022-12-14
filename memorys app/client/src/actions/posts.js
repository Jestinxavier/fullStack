import * as api  from '../api'

// Action creater

export const getPosts = ()=> async(dispatch)=> {
    try{
        const {data} = await api.fetchPost()
        dispatch({type:'FETCH_ALL',payload:data});
        console.log(data,"getpost,")

    }catch(err){
        console.log(err.message);
    }

   
}

export const createPost = (post)=> async (dispatch)=>{
    try{
        const {data} = await api.createPost(post)
        dispatch({type:'CREATE',payload:data})
    }catch(error){
        console.log(error.message);

    }
}
   
export const updatePost = (id,post)=> async(dispatch)=>{
    try{
        const {data}= await api.updatePost(id,post)
        dispatch({type:'UPDATE',payload:data})
    }catch(error){
        console.log(error.message);
    }
}