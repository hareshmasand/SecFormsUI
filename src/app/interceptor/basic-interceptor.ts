import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class BasicInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header
    console.log("interceptor called");
    request = request.clone({
        setHeaders: {
        'Content-Type':'application/json',
        'Authorization':'1ef0fc50-568f-4baf-8ba0-b61d797a7867',
      }
    });

    if(!request.headers.has("accept")){
      request.headers.append('accept','application/json');
    }
    return next.handle(request);
  }
}
