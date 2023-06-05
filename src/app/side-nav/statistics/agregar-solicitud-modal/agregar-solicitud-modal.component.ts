import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Producto {
  producto: string;
  cantidad: number;
}

@Component({
  selector: 'app-agregar-solicitud-modal',
  templateUrl: './agregar-solicitud-modal.component.html',
  styleUrls: ['./agregar-solicitud-modal.component.css']
})
export class AgregarSolicitudModalComponent {
  descripcion: string = '';
  producto: string = '';
  cantidad: number = 0;
  productos: Producto[] = [];

  @Output() solicitudAgregada: EventEmitter<Producto[]> = new EventEmitter<Producto[]>();

  constructor(
    private dialogRef: MatDialogRef<AgregarSolicitudModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  agregarProducto(): void {
    const nuevoProducto: Producto = { producto: this.producto, cantidad: this.cantidad };
    this.productos.push(nuevoProducto);
    this.producto = '';
    this.cantidad = 0;
  }

  confirmarAbastecimiento(): void {
    this.solicitudAgregada.emit(this.productos);
  }

  cancelar(): void {
    // Restablecer los valores
    this.descripcion = '';
    this.producto = '';
    this.cantidad = 0;
    this.productos = []; // Limpiar la lista de productos agregados

    // Cerrar el modal
    this.dialogRef.close();
  }

}
