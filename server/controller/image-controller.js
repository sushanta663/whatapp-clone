

const url = "http://localhost:8000";

export const uploadFile = async (request , response) => {
  if(!request.file){
    return response.status(404).json("File not Found");
  }

  const imageUrl = `${url}/file/${request.file.filename}`

  return response.status(200).json(imageUrl);
}


// export const uploadFile = async (request, response) => {
//   if (!request.file) {
//     return response.status(400).json({ error: 'Invalid file type or no file uploaded.' });
//   }

//   const imageUrl = `${url}/file/${request.file.filename}`;
//   console.log('File successfully uploaded:', imageUrl);

//   return response.status(200).json(imageUrl);
// };