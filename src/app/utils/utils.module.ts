import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashCounterComponent } from './cash-counter/cash-counter.component';
import { UtilsRoute } from "./utils-route/utils-route";
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { FormItemComponent } from './cash-counter/models/form-item/form-item.component';


@NgModule({
  imports: [
    CommonModule,
    UtilsRoute

  ],
  declarations: [CashCounterComponent, MainComponent, NavComponent, FormItemComponent],
  bootstrap:[NavComponent,CashCounterComponent,MainComponent]
})
export class UtilsModule { }
