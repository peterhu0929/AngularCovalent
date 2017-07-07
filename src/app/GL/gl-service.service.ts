/**
 * Created by winston.ws.lu on 2017/5/18.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GlService {
  private heroesUrl: any = '/api/heroes';  // URL to web api
  constructor(private http: Http) {
  }
  getkendoDatas(): Promise<any> {
    return this.http.get('/api/kendoDatas')
      .toPromise()
      .then((response: any) => response.json().data)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    alert('An err occud' + error);
    return Promise.reject(error.message || error);
  }
}
