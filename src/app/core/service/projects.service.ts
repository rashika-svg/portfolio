import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IProject } from '../models/project.model';
import { environment } from 'src/environments/environment';

export type ProjectResponse = IProject[];

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  _apiBaseUrl = `${environment.apiBaseUrl}/projects`;

  getProjects(params: any): Observable<ProjectResponse> {
    return this._httpClient.get<ProjectResponse>(this._apiBaseUrl, { params: params }).pipe(catchError(this.handleError));
  }

  getProjectById(id: string): Observable<ProjectResponse> {
    return this._httpClient.get<ProjectResponse>(`${this._apiBaseUrl}/${id}`).pipe(catchError(this.handleError));
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
