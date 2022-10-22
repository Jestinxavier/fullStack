import PostMessage from "../Modal/postMessage.js";
export const getPost = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    console.log(postMessage,);
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createPost = async(req, res) => {
    const post = req.body;
    console.log(post,"post********");
    const newPost = new PostMessage(post);
try{
  // console.log("im inside***");
  await newPost.save();
res.status(201).json(newPost);
}catch(error){
res.status(409).json({message:error.message});
}
};

export const updatepost = async(req, res)=>{
  const {id:_id} = req.params;
  const post = req.body
   
  if(mongooose.Types.Objectid.isValid(_id)){
    return res.status(404).send("No post with that id ")
  }
   const updatedPost = await PostMessage.findByIdAndUpdate(_id,post,{new:true})
  res.json(updatedPost)
}
