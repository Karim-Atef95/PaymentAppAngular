import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail } from '../shared/payment-detail.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit{
  
  constructor(public service:PaymentDetailService) { 
    
  }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(pd:PaymentDetail)
  {
    this.service.formData=pd;
  }
  onDelete(id:number)
  {
    this.service.deletePaymentDetail(id).subscribe({
      next:res=>{this.service.list=res as PaymentDetail[]},
      error:err=>{console.log(err)}
    });
  }
}
