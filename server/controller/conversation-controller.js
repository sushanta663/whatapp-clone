
import Conversation from "../models/conversation.js";

export const newConversation = async (request , response) => {
  let senderId = request.body.senderId;
  let receiverId = request.body.receiverId;

  const exist = await Conversation.findOne({ members: { $all: [receiverId , senderId] }})

  try{
    if(exist){
      return response.status(200).json("Conversation already exist!");
    }

    const newConversation = new Conversation({
      members: [senderId , receiverId]
    });
    
    await newConversation.save();
    return response.status(200).json("New Conversation Added! ");
  } catch(error){
    return response.status(500).json(error.message);
  }
}


export const getConversation = async (request , response) => {
  try{

    const senderId = request.body.senderId;
    const receiverId = request.body.receiverId;
    const coversationObj = await Conversation.findOne({ members: { $all: [senderId , receiverId] }});
    return response.status(200).json(coversationObj);  

  } catch(error){
    return response.status(500).json(error.message);
  }
}