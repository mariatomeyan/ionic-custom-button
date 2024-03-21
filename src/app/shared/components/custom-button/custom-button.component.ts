import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  imports: [
    IonicModule, CommonModule
  ]
})
export class CustomButtonComponent  implements OnInit {
  @Input() label: string | undefined;
  @Input() isLoading: boolean = false;
  @Output() btnClick = new EventEmitter<string>();

  ngOnInit() {
  }
}
