import { Component } from '@angular/core';
import { ShoppingCartService } from '../../../services/shoppingcart.service'
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private shoppingCartService: ShoppingCartService, private store: Store<IState>) { }

  get totalQuantity() {
    return this.shoppingCartService.getTotalQuantity()
  }
}
