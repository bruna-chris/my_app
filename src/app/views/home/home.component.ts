import { PeriodicElement } from './../../models/PeriodicElement';
import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ElementDialogComponent } from '../../shared/element-dialog/element-dialog.component';
import { PeriodicElementService } from '../../services/periodicElementservice';




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
  styleUrl: './home.component.scss',
  providers: [PeriodicElementService]
})
export class HomeComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['position', 'product', 'value', 'category', 'action'];
  dataSource!: PeriodicElement[];

  constructor (
    public dialog: MatDialog,
    public periodicElementService: PeriodicElementService
    ) {
      this.periodicElementService.getElements()
       .subscribe((data: PeriodicElement[]) => {
         console.log(data);
         this.dataSource = data;
       });
    }

  ngOnInit(): void {

  }

  openDialog(element: PeriodicElement | null ): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
        width: '250px',
        data: element === null ? {
          position: null,
          product: '',
          value: null,
          category: ''
        } : {
          position: element.position,
          product: element.product,
          value: element.value,
          category: element.category
        }
      });

      dialogRef.afterClosed().subscribe(result => {
      if(result !==undefined) {
        console.log(result)
        if(this.dataSource.map(p => p. position).includes(result.position)) {
          this.periodicElementService.editElement(result)
          .subscribe((data:PeriodicElement) => {
            this.dataSource[result.position -1] = data;
            this.table.renderRows();
          });
        }else {
          this.periodicElementService.createElements(result)
           .subscribe((data: PeriodicElement) => {
            this.dataSource.push(data);
            this.table.renderRows();

           });

        }

      }
    });
  }

  deleteElement(posiition:number) : void {
    this.periodicElementService.deleteElement(posiition)
     .subscribe(() => {
      this.dataSource = this.dataSource.filter(p => p.position !== posiition);
     })

  }

  editElement(element: PeriodicElement) : void {
    this.openDialog(element);
  }

}


