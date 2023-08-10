import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ExperimentsService {

  constructor(private http: HttpClient) {  }
  private baseURL = 'https://adminerp9g-server.ostack.babyrocket.net/ajax-api/2.0/mlflow/';

  getExperiments(){
    let url = this.baseURL + 'experiments/search?max_results=20000';
    return this.http.get(url);
  }

  updateExperiment(obj: {}){
    let url = this.baseURL + 'experiments/update';
    return this.http.post(url, obj);
  }

  getExperimentbyId(id: any){
    let url = this.baseURL + 'experiments/get?experiment_id=' + id;
    return this.http.get(url);
  }

  getExperimentDetails(obj: any){
    let url = this.baseURL + 'runs/search'
    return this.http.post(url, obj);
  }

  rename(data:any){
    let url = this.baseURL + 'experiments/update';
    return this.http.post(url, data);
  }

  delete(data:any){
    let url = `${this.baseURL}experiments/delete`;
    return this.http.post(url, data);
  }

  notesSave(data:any){
    let url = `${this.baseURL}experiments/set-experiment-tag`;
    return this.http.post(url, data);
  }

  createExp(data:any){
    let url = `${this.baseURL}experiments/create`;
    return this.http.post(url, data)
  }
}
