import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SaveUserEntity } from "../components/user/model/userModel";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    readonly apiUrl: string = 'http://localhost:3001/';

    constructor(private httpClient: HttpClient) { }

    public GetAllUsers(): Observable<any> {
        return this.httpClient.get<any>(this.apiUrl + 'userList');
    }

    public SaveUser(user: SaveUserEntity): Observable<any> {
        return this.httpClient.post<any>(this.apiUrl + 'saveUser', user);
    }

}