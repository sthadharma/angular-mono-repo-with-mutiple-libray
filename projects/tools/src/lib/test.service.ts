import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  get message(): string {
    return 'Hello World , This is test!';
  }
}
