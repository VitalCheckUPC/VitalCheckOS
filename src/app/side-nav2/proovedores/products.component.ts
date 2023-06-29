import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { FiltrarProveedoresComponent } from './filtrar-proveedores/filtrar-proveedores.component';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';

interface Supplier {
  userId: number;
  userName: string;
  ruc: number;
  userType: {
    userTypeId: number;
    typeName: string;
  };
  favorite: boolean; // Nueva propiedad para almacenar el estado de favorito
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'typeName', 'userName', 'ruc', 'favorite'];
  dataSource: MatTableDataSource<Supplier> = new MatTableDataSource<Supplier>([]);
  favoriteMode = true; // Estado del modo de visualización de favoritos

  constructor(private http: HttpClient, private dialog: MatDialog, private elementRef: ElementRef) {}

  ngOnInit() {
    this.getSuppliers().subscribe((suppliers: Supplier[]) => {
      this.dataSource.data = suppliers;
      // Marcar los proveedores como favoritos
      this.dataSource.data.forEach(supplier => {
        supplier.favorite = true;
      });
    });
  }

  getSuppliers() {
    return this.http.get<Supplier[]>('http://localhost:8080/api/v1/user').pipe(
      map((suppliers: Supplier[]) => {
        return suppliers.filter(supplier => {
          return supplier.userType.typeName === 'Provider';
        });
      })
    );
  }

  openFiltrarProveedoresModal(): void {
    const dialogRef = this.dialog.open(FiltrarProveedoresComponent, {
      width: '600px'
    });

    dialogRef.componentInstance.filtrar.subscribe((filtro: any) => {
      console.log('Filtro aplicado:', filtro);
      this.filtrarProveedores(filtro.proveedor);
    });
  }

  filtrarProveedores(proveedor: string): void {
    this.dataSource.filter = proveedor.trim().toLowerCase();
  }

  toggleFavoriteMode(): void {
    this.favoriteMode = !this.favoriteMode;
  }
}
