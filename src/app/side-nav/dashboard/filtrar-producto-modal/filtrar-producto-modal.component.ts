import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filtrar-producto-modal',
  templateUrl: './filtrar-producto-modal.component.html',
  styleUrls: ['./filtrar-producto-modal.component.css']
})
export class FiltrarProductoModalComponent {
  codigo: string = '';
  producto: string = '';
  categoria: string = '';

  constructor(public dialogRef: MatDialogRef<FiltrarProductoModalComponent>) {}

  filtrar(): void {
    const filtro = {
      codigo: this.codigo,
      producto: this.producto,
      categoria: this.categoria
    };

    this.dialogRef.close(filtro);
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
