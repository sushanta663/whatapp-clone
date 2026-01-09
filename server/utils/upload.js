import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

import dotenv from 'dotenv';

dotenv.config();
const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// const storage = new GridFsStorage({
//   url: `mongodb+srv://${usserName}:${password}@sushantam.k1r5e.mongodb.net/?retryWrites=true&w=majority&appName=SushantaM`,
//   file: (request , file) => {
//     const match = ['image/png' , 'image/jpg'];

//     if(match.indexOf(file.mimeType) === -1){
//       return `${Date.now()}-file-${ file.originalname }`;
//     }

//     return {
//       bucketName: "photos",
//       fileName: `${Date.now()}-file-${ file.originalname }`
//     }
//   }

// });
const storage = new GridFsStorage({
  url: `mongodb+srv://${userName}:${password}@sushantam.k1r5e.mongodb.net/?retryWrites=true&w=majority&appName=SushantaM`,
  file: (request, file) => {
    const match = ['image/png', 'image/jpg', 'application/pdf', 'text/plain'];

    if (match.indexOf(file.mimetype) === -1) {
      console.error('Rejected file with unsupported mimetype:', file.mimetype);
      return null;
    }

    return {
      bucketName: 'photos',
      fileName: `${Date.now()}-file-${file.originalname}`,
    };
  },
});

export default multer({ storage });