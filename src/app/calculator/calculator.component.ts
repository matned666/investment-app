import {Component, output, signal} from '@angular/core';
import {FrameComponent} from '../shared/frame/frame.component';
import {FormsModule} from '@angular/forms';
import {CalculatorService} from './calculator.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    FrameComponent,
    FormsModule
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  calculated = output<boolean>();

  constructor(private calculatorService: CalculatorService) {}

  enteredInitialInvest = signal<number>(0);
  enteredAnnualInvest = signal<number>(0);
  enteredExpectedReturn = signal<number>(0);
  enteredDuration = signal<number>(10);

  onSubmitForm() {
    this.calculatorService.calculateResults({
      initialInvestment: this.enteredInitialInvest(),
      annualInvestment: this.enteredAnnualInvest(),
      expectedReturn: this.enteredExpectedReturn(),
      duration: this.enteredDuration()
    });
    this.clearFields();
    this.calculated.emit(true)
  }

  onClearButtonClick() {
    this.clearFields();
    this.calculated.emit(false);
  }

  private clearFields() {
    this.enteredInitialInvest.set(0);
    this.enteredAnnualInvest.set(0);
    this.enteredExpectedReturn.set(0);
    this.enteredDuration.set(10);
  }
}
