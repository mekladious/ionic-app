import {Injectable} from '@angular/core'; 
import {Http} from '@angular/http';
import  'rxjs/Rx';

@Injectable()
export class App{
    http:any;
    baseUrl:String;
}