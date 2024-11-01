import { inject, Injectable } from '@angular/core';
import { Item } from '../state';
import { delay, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class EvaService {

  private http: HttpClient = inject(HttpClient);
  private resourceService: ResourceService = inject(ResourceService);
  resourceUrl: string = this.resourceService.getEndpointFor('items');

  getItemCollection():Observable<Item[]>{
    return this.http.get<Item[]>(`${this.resourceUrl}`).pipe(delay(2000));//delay to simulate server
  }

  postNewItem(newItem: Item):Observable<Item>{
    return this.http.post<Item>(`${this.resourceUrl}`, newItem).pipe(delay(1000));//delay to simulate server
  }

}
