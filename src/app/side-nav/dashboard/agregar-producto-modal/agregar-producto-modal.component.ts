import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-agregar-producto-modal',
  templateUrl: './agregar-producto-modal.component.html',
  styleUrls: ['./agregar-producto-modal.component.css']
})
export class AgregarProductoModalComponent {
  codigo: string = '';
  producto: string = '';
  cantidad: number = 0;
  categoria: string = '';
  fechaIngreso: Date = new Date();
  fechaCaducidad: Date = new Date();
  proveedor: string = '';
  precioCosto: number = 0;
  precioVenta: number = 0;

  constructor(public dialogRef: MatDialogRef<AgregarProductoModalComponent>) {}

  cancelar(): void {
    this.dialogRef.close();
  }

  confirmar(): void {
    const nuevoProducto = {
      codigo: this.codigo,
      producto: this.producto,
      cantidad: this.cantidad,
      categoria: this.categoria,
      fechaIngreso: this.fechaIngreso,
      fechaCaducidad: this.fechaCaducidad,
      proveedor: this.proveedor,
      precioCosto: this.precioCosto,
      precioVenta: this.precioVenta
    };

    this.dialogRef.close(nuevoProducto);
  }
}
