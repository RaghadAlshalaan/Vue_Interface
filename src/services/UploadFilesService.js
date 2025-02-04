import http from "../plugins/http-common.js";

class UploadFilesService {
  upload(file, onUploadProgress) {
    
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/UploadFile?k=cms", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }
  uploadScanner(file) {
    
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/UploadFile?k=cms", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
    });
  }
  

}


export default new UploadFilesService();
