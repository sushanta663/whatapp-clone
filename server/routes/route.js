import express from 'express';

import upload from '../utils/upload.js';
import { uploadFile } from '../controller/image-controller.js';

const userRoute = express.Router();
import { addUser , getUsers } from '../controller/add-controller.js';
import { newConversation , getConversation } from '../controller/conversation-controller.js';
import { newMessage ,getMessages } from '../controller/message-controller.js';

userRoute.post('/add',addUser);
userRoute.get('/users',getUsers);

userRoute.post('/coversation/add',newConversation);
userRoute.post('/coversation/get',getConversation);

userRoute.post('/message/add',newMessage);
userRoute.get('/message/get/:id',getMessages);

userRoute.post('/file/upload', upload.single('file'), uploadFile);

export default userRoute;