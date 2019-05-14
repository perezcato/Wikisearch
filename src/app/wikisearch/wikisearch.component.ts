import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wikisearch',
  templateUrl: './wikisearch.component.html',
  styleUrls: ['./wikisearch.component.css']
})
export class WikisearchComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  description: string;

  @Input()
  pageId: string;

  @Input()
  imageUrl: string;
  constructor() { }

  ngOnInit() {
  }

}
