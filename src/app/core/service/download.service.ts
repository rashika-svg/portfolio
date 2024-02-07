import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  private resumeUrl = '../../../assets/Rashika_Resume.pdf';

  constructor(
    private httpClient: HttpClient
  ) { }

  downloadResume(): Observable<Blob> {
    return this.httpClient.get(this.resumeUrl, { responseType: 'blob' });
  }
}
