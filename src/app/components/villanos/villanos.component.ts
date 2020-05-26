import { Component, OnInit } from '@angular/core';
import { VillanoService,Villano } from '../../service/villano.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styles: [
  ]
})
export class villanosComponent implements OnInit {
  
  // villano:any[]=[];
  villano:Villano[]=[];
  constructor( private _villanoService: VillanoService, private _router: Router) { 
  }

  ngOnInit(): void {
    this.villano = this._villanoService.getVillanos();
    console.log(this.villano);
  }
  
  verVillano(id:number){
    this._router.navigate(['/detalles2',id]);
  }


}
