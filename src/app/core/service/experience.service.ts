import { Injectable } from '@angular/core';
import { IExperience } from '../models/experience.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

export type ExpResponse = IExperience[];

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(
    private _httpClient: HttpClient,
  ) { }

  _apiBaseUrl = `${environment.apiBaseUrl}/experience`;

  getExperiences(params: any): Observable<ExpResponse> {
    return this._httpClient.get<ExpResponse>(this._apiBaseUrl, { params: params }).pipe(catchError(this.handleError));
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
