import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Alexis';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male':'invitarlo',
    'female':'invitarla'
  }

  changeClient():void {
    this.name = 'Adriana';
    this.gender = 'female'
  }

  // i18n Plural
  public clients: string[] = ['Alexis','Adriana','Jose','Maria','Sofia'];
  public clientsMap = {
    '=0':'no tenemos clientes esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando',
  }

  deleteClient():void {
    this.clients.shift()
  }

  // KeyValue Pipe
  public person = {
    name:'Alexis',
    age:'29',
    address:'Santiago, Chile'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap',value))
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject)=> {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 3500);
  })

}
