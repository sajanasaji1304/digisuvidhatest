import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

  createUser(user:any){
    return this._http.post("https://dev.digisuvidhacentre.com/Profile/api/MockUser",user)

  }
  getAllUser(){
    return this._http.get(" https://dev.digisuvidhacentre.com/Profile/api/MockUser")
  }
  editUser(user:any){
    return this._http.post(". https://dev.digisuvidhacentre.com/Profile/api/MockUser/{id}",user)

  }
  deleteUser(user:any){
    return this._http.delete(" https://dev.digisuvidhacentre.com/Profile/api/MockUser/Delete/{id}"+user.id)
  }
}
