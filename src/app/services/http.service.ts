import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  rootUrl: string = 'http://localhost:3000/';
  
  constructor(private httpClient: HttpClient) { }

  public async post(model:any, controller:string){
    try {
        var res = await this.httpClient.post<any>(`${this.rootUrl}${controller}`, model);
    return res;
    } catch (error) {
      console.log("error",error)
    }
  
  }

  public async get<T>(controller:string, id?: number){
    if(id){
      return await this.httpClient.get<T>(`${this.rootUrl}${controller}/${id}`); 
    }
    return await this.httpClient.get<T>(`${this.rootUrl}${controller}`);
  }

  public async patch(controller:string, id: number, data: any){
try {
  var jsonData = JSON.stringify(data);
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  this.httpClient.patch(`${this.rootUrl}${controller}/${id}`,jsonData,httpOptions)
  .subscribe(
    (val) => {
        console.log("PATCH call successful value returned in body", 
                    val);
    },
    response => {
        console.log("PATCH call in error", response);
    },
    () => {
        console.log("The PATCH observable is now completed.");
    });

} catch (error) {
  console.log("error", error);

}
 
  }

}
