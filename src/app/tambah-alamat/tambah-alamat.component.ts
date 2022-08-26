import { Component, Inject, inject, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tambah-alamat',
  templateUrl: './tambah-alamat.component.html',
  styleUrls: ['./tambah-alamat.component.scss']
})
export class TambahAlamatComponent implements OnInit {
  alamat: any = {};
  constructor(
    public api: ApiService,
    public DialogRef: MatDialogRef<TambahAlamatComponent>,
    // ambil data memakai inject
    @Inject(MAT_DIALOG_DATA) public updateData: any

  ) { }

  ngOnInit(): void {
    if(this.updateData !=  false){
      this.alamat = this.updateData
    }
  }

  close(){

  }
loading: boolean = false;
  saveData(){
    if(this.updateData == false) {
      this.loading = true;
    this.api.addData(`data`, this.alamat).subscribe(res=> {
      this.loading = false;
      this.DialogRef.close(true);
    },err=>{
      this.loading = false;
      alert("Data tidak tersimpan, silahkan coba lagi");
    })
    }else{
      this.api.updateData('data/'+this.alamat.id, this.alamat).subscribe(res=>{
        this.loading = false;
        this.DialogRef.close(true);
      },err=>{
        this.loading = false;
        alert("Tidak dapat memperbarui data, silahkan coba lagi");
      })
    }  
  }

}
