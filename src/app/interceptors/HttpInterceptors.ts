import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

class HttpInterceptors implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    console.log('in interceptor');
    if (! token) {
      return next.handle(req);
    } else {
      const newReq = req.clone(
        {headers: new HttpHeaders().set('Authorization', token)}
      );
      return next.handle(newReq);
    }
  }

}

export const AuthentificationInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpInterceptors,
  multi: true
};
