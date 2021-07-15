import http from '../http';




class servicePayment {
  getPayment(){
    return http.get();
  }
  
  getImage(uri){
    return http.post(`${uri}`);
  }
}

export default new servicePayment;

