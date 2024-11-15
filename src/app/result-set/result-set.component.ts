import { Component } from '@angular/core';
import {FrameComponent} from '../shared/frame/frame.component';
import {CalculatorService} from '../calculator/calculator.service';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-result-set',
  standalone: true,
  imports: [
    FrameComponent,
    CurrencyPipe
  ],
  templateUrl: './result-set.component.html',
  styleUrl: './result-set.component.css'
})
export class ResultSetComponent {

  constructor(private calculationService: CalculatorService) {}

  get actualResultSet() {
    return this.calculationService.getResultSet;
  }
}
