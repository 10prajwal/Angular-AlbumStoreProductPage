import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductService {

  constructor(private _http: Http, private response: Response) { }

  public getAlbum(id: number) {

  }
}
