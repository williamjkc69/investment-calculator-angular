import { Component, computed, inject } from '@angular/core';
import { investmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(investmentService);

  // results = this.investmentService.resultData.asReadonly(); //same below
  results = computed(() => this.investmentService.resultData());
}
