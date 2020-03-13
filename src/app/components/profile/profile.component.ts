import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { User } from 'src/app/models/UserModels';
import { AdminManageService } from 'src/app/services/admin-manage.service';
import { OrderItem } from 'src/app/models/OrderModels';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  constructor(private backandService: BackendService, private adminService: AdminManageService) { }
  
  user:User;
  orders: OrderItem[];
  ngOnInit() {
  this.user = this.backandService.getCurrentUser();

  this.adminService.observeUserOrders().subscribe((value)=> {
    this.orders = value;
  })

  this.adminService.getAllOrdersForUser(this.user.id).then(res => this.orders = res);
  }


  
  async cancelOrder(order: OrderItem): Promise<void> {
  
    await this.adminService.deleteOrder(order);
  }
}
