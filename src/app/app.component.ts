import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { BoardComponent } from "./board/board.component";
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { routerAnimation, slideAnimation } from './animations/animations';
import { ConnectionStatusService } from './services/connection-status.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, BoardComponent, SignUpComponent, LoginComponent],
    animations: [
      routerAnimation,
      slideAnimation,
    ]
})
export class AppComponent {

  private context = inject(ChildrenOutletContexts);
  online = inject(ConnectionStatusService).online;
  constructor() {
  }

  getRouterAnimationData(){
    return this.context.getContext('primary')?.route?.snapshot?.data['animation'];
  }
}
