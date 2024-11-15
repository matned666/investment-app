import { Component } from '@angular/core';
import {FrameComponent} from '../shared/frame/frame.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FrameComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
