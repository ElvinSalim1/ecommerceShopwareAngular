import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shoppingcart.service';
import { IShoppingCart } from 'src/app/models/ishoppingcart.model';

@Component({
  selector: 'app-shoppingcart-item',
  templateUrl: './shoppingcart-item.component.html',
  styleUrls: ['./shoppingcart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() item: IShoppingCart
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  deleteFromCart(id) {
    this.shoppingCartService.delete(id)
  }

  increment(item) {
    this.shoppingCartService.increment(item)
  }

  decrement(item) {
    this.shoppingCartService.decrement(item)
  }
}
