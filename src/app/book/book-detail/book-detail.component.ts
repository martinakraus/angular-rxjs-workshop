import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models';

@Component({
    selector: 'ws-book-detail',
    styleUrls: [ './book-detail.component.scss' ],
    templateUrl: 'book-detail.component.html',
})
export class BookDetailComponent {
    public book!: Book;

    constructor(private route: ActivatedRoute) {
    }

    remove() {}
}
