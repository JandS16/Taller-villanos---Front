import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-villano-card',
  templateUrl: './villano-card.component.html',
  styleUrls: ['./villano-card.component.css']
})
export class VillanoCardComponent implements OnInit {
  @Input() villano:any= [];
  @Input() index :number;

  @Output() villanoSelected: EventEmitter<number>;
  constructor(  ) { 
    this.villanoSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }
  vervillano(){
    this.villanoSelected.emit(this.index);
  }

}
