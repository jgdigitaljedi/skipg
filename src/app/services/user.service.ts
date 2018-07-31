import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _http: HttpService) {}

  /**
   * Deletes localStorage token and admin on user logout
   *
   * @memberof UserService
   */
  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('admin');
  }

  /**
   * Writes user info to localStorage
   *
   * @param {string} token
   * @param {boolean} admin
   * @memberof UserService
   */
  setUser(token: string, admin: boolean) {
    if (token) {
      localStorage.setItem('userToken', token);
    }
    localStorage.setItem('admin', admin ? admin.toString() : 'false');
  }

  /**
   * Gets user token from localStorage
   *
   * @returns {(string | boolean)}
   * @memberof UserService
   */
  getToken(): string | boolean {
    try {
      return localStorage.getItem('userToken');
    } catch (e) {
      return false;
    }
  }

  /**
   * Gets admin status from localStorage and returns it
   * If manually changed, server will still stop action. This is only used for template views
   *
   * @returns {boolean}
   * @memberof UserService
   */
  isAdmin(): boolean {
    try {
      return JSON.parse(localStorage.getItem('admin'));
    } catch (e) {
      return false;
    }
  }

  /**
   * Takes user password and hashes it so not sent plain text
   *
   * @param {string} password
   * @returns {number}
   * @memberof UserService
   */
  hashPassword(password: string): number {
    return password
      .split('')
      .reduce((prevHash, currVal) => ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0, 0);
  }

  login() {}
}
