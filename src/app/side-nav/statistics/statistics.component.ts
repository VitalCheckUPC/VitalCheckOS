import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AgregarSolicitudModalComponent } from './agregar-solicitud-modal/agregar-solicitud-modal.component';
import { map } from 'rxjs/operators';

interface Solicitud {
  medicineId: number;
  entryDate: string;
  descripcion: string;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  displayedColumns: string[] = ['medicineId', 'entryDate', 'descripcion'];
  dataSource = new MatTableDataSource<Solicitud>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<any[]>('http://localhost:8080/api/v1/dispatch').pipe(
      map(data => data.map(item => ({
        medicineId: item.medicine.medicineId,
        entryDate: item.entryDate,
        descripcion: item.description
      })))
    ).subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  agregarSolicitud(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '1500px';
    const dialogRef = this.dialog.open(AgregarSolicitudModalComponent, dialogConfig);




    dialogRef.afterClosed().subscribe(result => {
      if (result) {




        // Lógica para agregar una solicitud de abastecimiento
        console.log('Solicitud agregada:', result);
        this.fetchData(); // Actualizar la tabla con los nuevos datos
      }
    });
  }
}
