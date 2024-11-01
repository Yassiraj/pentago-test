import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  getEndpointFor(api: string,withPrefix=true): string {
    return withPrefix ?  `${environment.serverUrl}/${environment.apiPrefix}/${api}`:`${environment.serverUrl}/${api}`;
  }
}
