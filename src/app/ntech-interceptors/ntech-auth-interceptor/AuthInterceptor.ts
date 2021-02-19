import { Injectable } from "@angular/core";
import 
{ 
  HttpEvent, HttpInterceptor, HttpHandler,
  HttpRequest, HttpErrorResponse, HttpResponse, HttpHeaders
} from "@angular/common/http";
import {  Observable, of } from "rxjs";
import { catchError, map, finalize } from "rxjs/operators";
import { LoaderService } from '../../ntech-services/ntech-core-services/loder.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    public commonData = new Map<String,any>();
    
    constructor(public loaderService: LoaderService,public route:Router){
      
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Interceptor . . . .")
        let processReq=true;
        let authReq : any;
        //Start Loader
        this.loaderService.show();
        
        
        authReq = request.clone({
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Access-Control-Allow-Origin' : '*'
            })
          });

          if(localStorage.getItem('ntechhash')!=null)
          {
            authReq = authReq.clone({
                headers: new HttpHeaders({
                  'Content-Type':  'application/json',
                  //'NtechHash': localStorage.getItem('ntechhash')
                })
              });
          }

        if(!authReq.url.endsWith('ntechcore/signin') && !authReq.url.endsWith('ntechcore/getvaluebyid'))
        {
            if(localStorage.getItem('ntechhash')!=null)
            {
                processReq=true;
            }
        }
        else
            processReq=true;


    if(processReq)
    {          
        return next.handle(authReq).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) 
                {
                    if(event.url.endsWith('ntechcore/signin'))
                    {
                        
                      if(event.body.responseStatus!=null)
                      {
                        localStorage.setItem('ntechhash',"asdasd");
                      }
                      else
                      {
                        this.loaderService.hide();
                       // this.route.navigate(['/ntecherror']);
                      }

                    }
                        console.log('event--->>>', event);
                }
                return event;
            })
            , catchError((err: any) => {
                if(err instanceof HttpErrorResponse) 
                {
                    console.log('Ntech Error Type : [ Service Error : ' + err.message +' ]');
                }
                return of(err);
            })
            ,finalize(() => this.loaderService.hide())
        );

       
    }
    else
    {
        this.loaderService.hide();
        //this.route.navigate(['/ntecherror']);
    }   
}
    
    
}