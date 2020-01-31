import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  rootUrl: string = 'http://localhost:3000/';
  
  constructor(private httpClient: HttpClient) { }

  public async post(model:any, controller:string){
    console.log("post")
    try {
        var res = await this.httpClient.post<any>(`${this.rootUrl}${controller}`, model);
    return res;
    } catch (error) {
      console.log("error",error)
    }
  
  }

  public async get(controller:string, id?: number){
    if(id){
      return await this.httpClient.get<any>(`${this.rootUrl}${controller}/${id}`); 
    }
    return await this.httpClient.get<any>(`${this.rootUrl}${controller}`);
  }

}
