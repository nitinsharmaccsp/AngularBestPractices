import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthenticationService {
  private headers : HttpHeaders;
  constructor(private _http:HttpClient ) {
    this.headers = this.getHeaders()
   }

  public getRequest(requestUrl : string) : Observable<any> {
      return this._http.get(requestUrl , {headers : this.headers})
             .map( response => { this.handleResponse(response)})
             .catch(error => this.handleError(error))
  }
  
  public postRequest <T> (requestUrl :string , postBody : T) :Observable<any>{
    return this._http.post(requestUrl , postBody)
           .map( response => {this.handleResponse(response)})
           .catch( error => this.handleError(error))  
  }

  private getHeaders () : HttpHeaders {
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin','*');
    return header;
  }

  private handleResponse(response : any) : any {
    // Identify out if error exist   
    if(response.error !== undefined ) {
        //Handle Error
    }
    return response;
  }

  private handleError(error : any) : any {
    //if there's an error based on standardized format throw an error
    Observable.throw(error);
  }
  
}
