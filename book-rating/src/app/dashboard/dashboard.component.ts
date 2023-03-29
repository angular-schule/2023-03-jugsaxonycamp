import { Component } from '@angular/core';
import { Book } from '../shared/book';
import { getStaticBookList } from '../shared/book-data';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  books: Book[] = [];
  cart: Book[] = [];

  constructor() {
    this.books = getStaticBookList();
  }

  addToCart(book: Book) {
    this.cart.push(book);
    console.log(this.cart);
  }
}

