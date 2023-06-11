import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
interface Sale {
  codigo: string;
  cliente: string;
  fecha: string;
  precio: string;
  medio: string;
}
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'cliente', 'fecha', 'precio', 'medio'];
  dataSource: MatTableDataSource<Sale> = new MatTableDataSource<Sale>([]);

  constructor(private http: HttpClient, private dialog: MatDialog, private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.getSale().subscribe((sale: Sale[]) => {
      this.dataSource.data = sale;
    });
  }

  getSale() {
    // Realiza la solicitud HTTP para obtener los datos de los proveedores desde la API
    return this.http.get<Sale[]>('URL_DE_TU_API');
  }
}
