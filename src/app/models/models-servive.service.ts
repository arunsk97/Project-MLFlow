import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModelsServiveService {
  
  public baseUrl = 'https://adminerp9g-server.ostack.babyrocket.net/ajax-api/2.0/mlflow/';
  
  constructor(private http: HttpClient) { }

  getModels(data:any){
    let url = `${this.baseUrl}registered-models/search?filter=${data?.filter}&max_results=${data.max}&order_by=name+${data.order}`;
    return this.http.get(url);
  }

  createModels(data:any){//registered-models/create
    let url = `${this.baseUrl}registered-models/create`;
    return this.http.post(url, data);
  }
}
