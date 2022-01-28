import { HeaderData } from './header.data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _haderData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''

  })
  constructor() { }

  get headerData(): HeaderData{
    return this._haderData.value

  }

  set headerData(headerData: HeaderData){
    this._haderData.next(headerData)
  }
}
