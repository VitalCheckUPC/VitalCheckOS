import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
interface Supplier {
  saleId: number;
  client: {
    clientID: number;
    firstName: string;
    lastName: string;
  }
  medicine:{
    medicineId: string;
    commercialName: string;
  };
  quantity: string;
  date: string;
  totalPrice: number;

}
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  displayedColumns: string[] = ['saleId', 'client', 'medicine', 'quantity', 'date', 'totalPrice'];
  dataSource: MatTableDataSource<Supplier> = new MatTableDataSource<Supplier>([]);

  constructor(private http: HttpClient, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getSuppliers();
  }

  getSuppliers() {
    this.http.get<Supplier[]>('https://api-open-tf-production.up.railway.app/api/v1/sale')
      .subscribe((suppliers: Supplier[]) => {
        this.dataSource = new MatTableDataSource(suppliers);
      });
  }
}
