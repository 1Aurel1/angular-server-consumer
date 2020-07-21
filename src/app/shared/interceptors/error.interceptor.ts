import {HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ErrorInterceptor implements HttpInterceptor{

  constructor() {
  }

  handleError(err: HttpErrorResponse){
      switch (err.status) {
        case 400: {
          break;
        }
        case 404: {
          console.log('Hello world');
          break;
        }
        default: {
          console.log('Hello world');
          break;
        }
      }
      const notification = err.message || err.statusText;
      return throwError(notification);
  }

  // @ts-ignore
  intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    console.log(req);

    return next.handle(req)
      .pipe(catchError(this.handleError));
  }
}
