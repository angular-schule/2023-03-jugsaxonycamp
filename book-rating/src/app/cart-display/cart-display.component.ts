import { Component, Input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.scss']
})
export class CartDisplayComponent {
  @Input() books: Book[] = [];

  get totalValue(): number {
    return this.books.reduce((acc, book) => acc + book.price, 0);
  }
}
