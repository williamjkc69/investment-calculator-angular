import { Component, computed, inject, input, Input } from '@angular/core';
import { TableType } from '../investment-input.model';
import { CurrencyPipe } from '@angular/common';
import { investmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(investmentService);

  // results = this.investmentService.resultData.asReadonly(); //same below
  results = computed(() => this.investmentService.resultData());
}
