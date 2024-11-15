import {Injectable} from '@angular/core';
import {ResultModel} from '../result-set/result.model';
import {CalculationModel} from './calculation.model';

@Injectable({providedIn: 'root'})
export class CalculatorService {

  private resultSet: ResultModel[] = [];

  get getResultSet(): ResultModel[] {
    return this.resultSet;
  }

  calculateResults(calculation: CalculationModel){
    if (
      calculation.duration === 0 &&
      calculation.initialInvestment === 0 &&
      calculation.annualInvestment === 0 &&
      calculation.expectedReturn === 0) {
      this.resultSet = [];
    }

    const annualData: ResultModel[] = [];
    let investmentValue = calculation.initialInvestment;

    for (let i = 0; i < calculation.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (calculation.expectedReturn / 100);
      investmentValue += interestEarnedInYear + calculation.annualInvestment;
      const totalInterest =
        investmentValue - calculation.annualInvestment * year - calculation.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: calculation.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: calculation.initialInvestment + calculation!.annualInvestment * year,
      });
    }

    this.resultSet = annualData;
  }

}
