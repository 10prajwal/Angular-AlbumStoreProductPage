import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

  private _albumurl = '../assets/album.json';

  constructor(private _http: Http) { }

  public getAlbum(id: number) {
    return this._http.get(this._albumurl).pipe(map((response) => {

      return response.json();
    }))
  }
}
