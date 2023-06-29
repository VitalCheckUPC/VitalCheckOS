import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
interface Product {
  quantity: number;
  salePrice: number;
  user: {};
  medicine: {
    commercialName: string;
    genericName: string;
    costPrice: number;
  }
}
@Component({
  selector: 'app-agregar-producto-modal',
  templateUrl: './agregar-producto-modal.component.html',
  styleUrls: ['./agregar-producto-modal.component.css']
})
export class AgregarProductoModalComponent {
  quantity: number = 0;
  salePrice: number = 0;
  commercialName: string = '';
  genericName: string = '';
  costPrice: number = 0;
  constructor(
    public dialogRef: MatDialogRef<AgregarProductoModalComponent>,
    private http: HttpClient
  ) {}
  cancelar(): void {
    this.dialogRef.close();
  }
  confirmar(): void {
    const nuevoProducto: Product = {
      quantity: this.quantity,
      salePrice: this.salePrice,
      user: {},
      medicine: {
        commercialName: this.commercialName,
        genericName: this.genericName,
        costPrice: this.costPrice
      }
    };
    this.http.post<Product>('http://localhost:8080/api/v1/inventory', nuevoProducto)
      .subscribe(response => {
        this.dialogRef.close(response);
      });
  }
}
