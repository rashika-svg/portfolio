import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ISkill } from '../models/skills.model';
import { environment } from 'src/environments/environment';
import { ExpResponse } from './experience.service';

export type SkillResponse = ISkill[];

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(
    private _httpClient: HttpClient,
  ) { }

  _apiBaseUrl = `${environment.apiBaseUrl}/skill`;

  getSkills(params: any): Observable<SkillResponse> {
    return this._httpClient.get<SkillResponse>(this._apiBaseUrl, { params: params }).pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = ''
    if (error.error instanceof ErrorEvent) {
      //client side
      errorMessage = `Error : ${error.error.message}`;
    } else {
      //server Side
      errorMessage = `Status: ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
