import { Component } from '@angular/core';

import { Cors, CorsService } from './cors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cors';

  constructor(private cors: CorsService) {}

  public onGetBoop(e: any) {
    this.cors.doGet().subscribe((res: Cors) => console.log(res));
  }

  public onPostBoop(e: any) {
    this.cors.doPost({}).subscribe((res: Cors) => console.log(res));
  }
}
