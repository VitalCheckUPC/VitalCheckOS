import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { AgregarProductoModalComponent } from './agregar-producto-modal/agregar-producto-modal.component';
import {FiltrarProductoModalComponent} from "./filtrar-producto-modal/filtrar-producto-modal.component";

interface Product {
  inventoryId: string;
  producto: string;
  quantity: number;
  categoria: string;
  fechaIngreso: Date;
  fechaCaducidad: Date;
  proveedor: string;
  precioCosto: number;
  precioVenta: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'inventoryId',
    'producto',
    'quantity',
    'categoria',
    'fechaIngreso',
    'fechaCaducidad',
    'proveedor',
    'precioCosto',
    'precioVenta'
  ];
  dataSource = new MatTableDataSource<Product>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http
      .get<Product[]>('http://localhost:8080/api/v1/inventory')
      .subscribe((data) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
      });
  }

  openAgregarProductoModal(): void {
    const dialogRef = this.dialog.open(AgregarProductoModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Realizar acciones después de agregar el producto
        console.log('Producto agregado:', result);
        // Puedes llamar a la función fetchData() para actualizar la tabla con los nuevos datos
        this.fetchData();
      }
    });
  }

  openFiltrarProductoModal(): void {
    const dialogRef = this.dialog.open(FiltrarProductoModalComponent, { width: '400px',});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Realizar acciones después de filtrar los productos
        console.log('Filtro aplicado:', result);
        // Puedes llamar a la función de filtrar los productos en la tabla
        this.filtrarProductos(result);
      }
    });
  }

  private filtrarProductos(result: any) {

  }
}
