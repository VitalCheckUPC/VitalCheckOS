import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface Productos {
  producto: string;
  cantidad: number;
  mensual: number;
  diaria: number;
}

const PRODUCTOS_DATA: Productos[] = [
  {producto: "Ventonil", cantidad: 3, mensual: 60, diaria: 2},
  {producto: "Omeprazol", cantidad: 2, mensual: 120, diaria: 4},
  {producto: "Diabetizol", cantidad: 3, mensual: 60, diaria: 2},
  {producto: "Hemorrodil", cantidad: 2, mensual: 120, diaria: 4},
];

export interface PeriodicElement {
  name: string;
  positio: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {positio: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {positio: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {positio: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {positio: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {positio: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {positio: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {positio: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {positio: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {positio: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {positio: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})

export class ReportesComponent implements OnInit {
  displayedColumns: string[] = ['producto', 'cantidad', 'mensual', 'diaria'];
  dataSource2 = PRODUCTOS_DATA;
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }


}
