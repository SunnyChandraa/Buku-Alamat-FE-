import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl:any= "http://localhost:8030/restapi_codeigniter3/index.php/api/";

  constructor(public http: HttpClient) { }
  status()   {       
    return this.http.get(this.apiUrl+"status");   
  }

  // get data
  // findData(){
  //   return this.http.get(this.apiUrl+"data");
  // }   
  findData(url: String){
    return this.http.get(this.apiUrl+url);
  }
  
  // tambah data
  addData(url : String, data: Object){
    return this.http.post(this.apiUrl+url, data);
  }
  updateData(url: any, data: Object){
    return this.http.put(this.apiUrl+url, data);
  }
  deleteData(url: any){
    return this.http.delete(this.apiUrl+url);
  }
}
