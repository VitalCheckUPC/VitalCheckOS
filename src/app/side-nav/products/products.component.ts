import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { FiltrarProveedoresComponent } from './filtrar-proveedores/filtrar-proveedores.component';
import { MatDialog } from '@angular/material/dialog';

interface Supplier {
  codigo: string;
  proveedor: string;
  departamento: string;
  ruc: string;
  telefono: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'proveedor', 'departamento', 'ruc', 'telefono'];
  dataSource: MatTableDataSource<Supplier> = new MatTableDataSource<Supplier>([]);

  constructor(private http: HttpClient, private dialog: MatDialog, private elementRef: ElementRef) {}

  ngOnInit() {
    this.getSuppliers().subscribe((suppliers: Supplier[]) => {
      this.dataSource.data = suppliers;
    });
  }

  getSuppliers() {
    // Realiza la solicitud HTTP para obtener los datos de los proveedores desde la API
    return this.http.get<Supplier[]>('URL_DE_TU_API');
  }

  openFiltrarProveedoresModal(): void {
    const dialogRef = this.dialog.open(FiltrarProveedoresComponent, {
      width: '600px',});

    dialogRef.componentInstance.filtrar.subscribe((filtro: any) => {
      // Realiza las acciones de filtrado de proveedores aquí
      // Utiliza el objeto 'filtro' que contiene los datos ingresados en el modal
      console.log('Filtro aplicado:', filtro);
      // Llama a la función para filtrar los proveedores utilizando el filtro
      this.filtrarProveedores(filtro);
    });
  }
  filtrarProveedores(filtro: any): void {
    // Implementa la lógica para filtrar los proveedores en base al filtro
    // Utiliza los datos de 'filtro' para realizar el filtrado
  }
}
