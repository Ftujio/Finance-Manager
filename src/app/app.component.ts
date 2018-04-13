import { Component } from '@angular/core';

import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private electronService: ElectronService) {
    this.electronService.ipcRenderer.on('open', (event, file) => {
      console.log(JSON.parse(file));
    });
  }

  setActive(clicked: any, otherItems: any[]) {
    clicked.classList.add('active');
    for(const item of otherItems) {
      item.classList.remove('active');
    }
  }

}
