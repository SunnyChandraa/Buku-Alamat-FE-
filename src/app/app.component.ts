import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from './api.service';
import { DetailAlamatComponent } from './detail-alamat/detail-alamat.component';
import { DialogKonfirmasiComponent } from './dialog-konfirmasi/dialog-konfirmasi.component';
import { TambahAlamatComponent } from './tambah-alamat/tambah-alamat.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buku-alamat';
  constructor(public dialog: MatDialog, public api: ApiService) {
    // trigger res get data ketika halaman terbuka
    this.getData();
  }

  dataAlamat:any=[];
  getData(){
    this.api.findData("data").subscribe(res=>{
      this.dataAlamat=res;
    })
  }

  buatAlamat(data: any){
    const dialogRef = this.dialog.open(TambahAlamatComponent, {  
      width: "450px", 
      data: data
      });       
      dialogRef.afterClosed().subscribe(res => {            
       if(res){
        this.getData();
       }              
      });
  }
  detailAlamat(data: any){
    const dialogRef = this.dialog.open(DetailAlamatComponent, {  
      width: "450px",
      data: data  
      });       
  }

  konfirmasiHapus(data: any)  {         
    const dialogRef = this.dialog.open(DialogKonfirmasiComponent, {             
    width: "450px",
    data: data              
    });         
    dialogRef.afterClosed().subscribe(res => {            
     if(res){
      this.getData();
     }         
    });  
    }
}

