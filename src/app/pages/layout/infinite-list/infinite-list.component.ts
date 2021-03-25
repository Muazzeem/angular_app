import {NewsService} from '../news.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ApiService} from '../../../@core/mock/api.service';


@Component({
  selector: 'ngx-infinite-list',
  templateUrl: 'infinite-list.component.html',
  styleUrls: ['infinite-list.component.scss'],
})
export class InfiniteListComponent implements OnInit {
  stackList = '/api/valid-tags';
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  stacksCtrl = new FormControl();
  filteredStacks: Observable<string[]>;
  stacks: string[] = [];
  allStacks: string[] = [];

  firstCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  pageSize = 10;

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;


  constructor(private newsService: NewsService, private apiService: ApiService) {
    this.filteredStacks = this.stacksCtrl.valueChanges.pipe(
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allStacks.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our stacks
    if ((value || '').trim()) {
      // this.stacks.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.stacksCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.stacks.indexOf(fruit);

    if (index >= 0) {
      this.stacks.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.stacks.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.stacksCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allStacks.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  loadNext(cardData) {
    if (cardData.loading) {
      return;
    }

    cardData.loading = true;
    cardData.placeholders = new Array(this.pageSize);
    this.newsService.load(cardData.pageToLoadNext, this.pageSize)
      .subscribe(nextNews => {
        cardData.placeholders = [];
        cardData.news.push(...nextNews);
        cardData.loading = false;
        cardData.pageToLoadNext++;
      });
  }

  ngOnInit(): void {
    const url = this.stackList;
    this.apiService.get(url).subscribe((data: any) => {
      this.allStacks = data.stacks;
    });

  }
}
