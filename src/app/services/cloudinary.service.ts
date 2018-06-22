import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photo } from './photo';
import { Cloudinary } from '@cloudinary/angular-5.x';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {
  constructor(private http: HttpClient, private cloudinary: Cloudinary) { }

  getPhotos(): Observable<Photo[]> {
    let url = this.cloudinary.url('skipg', {
      format: 'json',
      type: 'list',
      version: Math.ceil(new Date().getTime() / 1000)
    });
    console.log('url', url);
    return this.http.get(url).pipe(map((data: any) => data.resources));
  }

  photoBaseUrl() {
    return 'http://res.cloudinary.com/skipg-me/image/upload/v1529667001/';
  }
}
