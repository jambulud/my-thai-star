import { Filter } from '../backendModels/interfaces';
import { Injectable, Injector } from '@angular/core';
import { Response, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {IDishesDataService} from './dishes-data-service-interface';
import { config } from '../../../config';
import { DishView } from '../../viewModels/interfaces';

@Injectable()
export class DishesRestService implements IDishesDataService {

 private readonly filtersRestPath: string = 'dishmanagement/v1/dish/search';

 private http: Http;

 constructor(private injector: Injector) {
   this.http = this.injector.get(Http);
 }

 filter(filters: Filter): Observable<DishView[]> {
    return this.http.post(`${config.restServiceRoot}${this.filtersRestPath}`, filters)
                    .map((res: Response) => res.json());
 }

}
