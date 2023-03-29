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

  constructor() {
    this.books = getStaticBookList();
  }
}

