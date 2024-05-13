import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonToggleComponent } from "./button-toggle/button-toggle.component";
import { ButtonMeta } from './button-toggle/button-meta.mode';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ButtonToggleComponent]
})
export class AppComponent implements OnInit{ 
  options: ButtonMeta[] = [];
  ngOnInit(): void {
    const data1: ButtonMeta = {
      id: '1',
      isActive: true,
      title: 'data 1'
    };
    const data2: ButtonMeta = {
      id: '2',
      isActive: true,
      title: 'data 2'
    };
    const data3: ButtonMeta = {
      id: '1',
      isActive: true,
      title: 'data 3'
    };
    this.options.push(data1);
    this.options.push(data2);
    this.options.push(data3);
  }
 
  onSelection(data: ButtonMeta) {
    data.isActive = !data.isActive;
  }
}
