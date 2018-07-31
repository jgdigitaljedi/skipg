import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // base url for all requests
  baseUrl = environment.baseUrl;
  constructor(private _httpClient: HttpClient) {}

  /**
   * Makes http post request
   *
   * @param {string} endpoint
   * @param {*} request
   * @returns {Observable<any>}
   * @memberof HttpService
   */
  makePost(endpoint: string, request: any): Observable<any> {
    return this._httpClient.post(`${this.baseUrl}${endpoint}`, request);
  }

  /**
   * Makes http get request
   *
   * @param {string} endpoint
   * @returns {Observable<any>}
   * @memberof HttpService
   */
  makeGet(endpoint: string): Observable<any> {
    return this._httpClient.get(this.baseUrl + endpoint);
  }

  /**
   * Makes http delete request
   *
   * @param {string} endpoint
   * @returns {Observable<any>}
   * @memberof HttpService
   */
  makeDelete(endpoint: string): Observable<any> {
    return this._httpClient.delete(`${this.baseUrl}${endpoint}`);
  }

  /**
   * Makes http patch request
   *
   * @param {string} endpoint
   * @param {*} request
   * @returns {Observable<any>}
   * @memberof HttpService
   */
  makePatch(endpoint: string, request: any): Observable<any> {
    return this._httpClient.patch(`${this.baseUrl}${endpoint}`, request);
  }
}
