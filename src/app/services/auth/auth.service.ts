import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Usuario } from '../../models/usuario';
import { Url } from '../../shared/url/url';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  private static usuario = false;

  constructor(
    private http: Http
  ) { }

  public authenticate(usuario: Usuario): Observable<any> {
    return this.http.post(Url.AUTHENTICATE, usuario.toJson())
      .map((response: Response) => { response.json(); AuthService.usuario = true; })
      .catch((response: Response) => response.json());
  }

  public static hasUsuario(): boolean {
    return AuthService.usuario;
  }
}
