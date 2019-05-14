import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
  })
};
const WIKI_URL = 'https://en.wikipedia.org/w/api.php?format=json&action' +
  '=query&origin=*&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|' +
  'extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http: HttpClient) { }

  getWikiSearch(search: string): Observable<{}> {
    return this.http.get(`${WIKI_URL}${search}`)
      .pipe(
        // @ts-ignore
        map( data => data.query.pages)
      );
  }
}

