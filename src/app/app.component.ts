import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
     SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
}
}
