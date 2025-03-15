import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ButtonComponent } from "../../../components/button/button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
    <div class="bg-white  shadow-md border rounded-xl p-6 flex gap-4 items-center">
      <img class="w-[50px] h-[50px] object-contain" [src]="item().image" alt="">
      <div>
        <span class="text-md font-bold"> {{ item().title }}</span>
        <span class="text-md">  $ {{ item().price }}</span>
      </div>
      <div class="flex-1"></div>
      <app-button label="Remove" (btnClicked)="cartService.removeFromCart(item().id)"> </app-button>
    </div>
  `,
  styles: ``
})
export class CartItemComponent {
   item = input.required<Product>();

   cartService = inject(CartService);
}
