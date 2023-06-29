import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

interface Supplier {
  codigo: string;
  proveedor: string;
  departamento: string;
  ruc: string;
  telefono: string;
}

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'proveedor', 'departamento', 'ruc', 'telefono'];
  dataSource: MatTableDataSource<Supplier> = new MatTableDataSource<Supplier>([]);

  constructor(private http: HttpClient, private dialog: MatDialog, private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.getSuppliers().subscribe((suppliers: Supplier[]) => {
      this.dataSource.data = suppliers;
    });
  }

  getSuppliers() {
    // Realiza la solicitud HTTP para obtener los datos de los proveedores desde la API
    return this.http.get<Supplier[]>('URL_DE_TU_API');
  }

}
