import {Injectable} from '@angular/core';
import {Vinho} from '../models/vinho';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class VinhosService {

  constructor(private http: Http) {
  }

  public listar(): Promise<Array<Vinho>> {
    return this.http.get('api/vinhos')
      .toPromise()
      .then(response => response.json().data as Array<Vinho>)
      .catch(this.tratarErro);
  }

  private tratarErro(error: any): Promise<any> {
    console.log(error);
    return Promise.reject(error.message | error);
  }

}
