import { Component } from '@angular/core';


export interface PeriodicElement {
  product: string;
  position: number;
  value: number;
  category: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, product: 'Carregador', value: 40.00, category: 'Acessorio'},
  {position: 2, product: 'Fone de Ouvido', value: 15.00, category: 'Headset'},
  {position: 3, product: 'HD Notebook', value: 200.00, category: 'Disco Rigido'},
  {position: 4, product: 'Cabo USB', value: 10.00, category: 'Cabos'},
  {position: 5, product: 'Fonte ATX', value: 70.00, category: 'Fonte'},
  {position: 6, product: 'Estabilizador', value: 60.00, category: 'Estabilizador'},
  {position: 7, product: 'Cooler VGA', value: 70.00, category: 'VGA'},
  {position: 9, product: 'Case Ipod', value: 15.00, category: 'Acessorio'},
  {position: 10, product: 'Computador Game', value: 2000.00, category: 'Completo'},
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  displayedColumns: string[] = ['position', 'product', 'value', 'category', 'action'];
  dataSource = ELEMENT_DATA;
}
