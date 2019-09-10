import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit, OnDestroy {
  dataSource: MatTableDataSource<any>;
  members: any[];
  toggleField: string;
  public myDocData: any;
  showMode;
  error = false;
  errorMessage: string;
  savedChanges = false;
  dataLoading = false;
  private querySubscription;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[] = [
    'category',
    'userid',
    'name',
    'price',
    '_id'
  ];

  // tslint:disable-next-line: variable-name
  constructor(private _backendService: BackendService) {}

  ngOnInit() {
    this.toggleField = 'searchMode';
    this.dataSource = new MatTableDataSource(this.members);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  toggle(filter?) {
    if (!filter) {
      filter = 'searchMode';
    } else {
      filter = filter;
    }
    this.toggleField = filter;
  }
  getData() {
    this.dataLoading = true;
    this.querySubscription = this._backendService
      .getProducts('cart')
      .subscribe(
        members => {
          this.members = members;
          this.dataSource = new MatTableDataSource(members);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {
          this.error = false;
          this.dataLoading = false;
        }
      );
  }

  getFilterData(filters) {
    this.dataLoading = true;
    this.querySubscription = this._backendService
      .getFilterProducts('cart', filters)
      .subscribe(
        members => {
          this.members = members;
          this.dataSource = new MatTableDataSource(members);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {
          this.error = false;
          this.dataLoading = false;
        }
      );
  }

  setData(formData) {
    this.dataLoading = true;
    this.querySubscription = this._backendService
      .setProducts('cart', formData)
      .subscribe(
        members => {
          if (members) {
            this.savedChanges = true;
          }
        },
        error => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {
          this.error = false;
          this.dataLoading = false;
        }
      );
  }

  updateData(formData) {
    this.dataLoading = true;
    this.querySubscription = this._backendService
      .updateProducts('cart', formData)
      .subscribe(
        members => {
          if (members) {
            this.savedChanges = true;
          }
        },
        error => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {
          this.error = false;
          this.dataLoading = false;
        }
      );
  }
  getDoc(docId) {
    this.dataLoading = true;
    this.querySubscription = this._backendService
      .getOneProductDoc('cart', docId)
      .subscribe(
        res => {
          if (res) {
            this.myDocData = res;
            this.toggle('editMode');
            this.dataLoading = false;
          }
        },
        error => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
        },
        () => {
          this.error = false;
          this.dataLoading = false;
        }
      );
  }

  deleteDoc(docId) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.dataLoading = true;
      this.querySubscription = this._backendService
        .delOneProduct('cart', docId)
        .subscribe(
          res => {
            if (res) {
              this.myDocData = res;
              this.toggle('searchMode');
            }
          },
          error => {
            this.error = true;
            this.errorMessage = error.message;
            this.dataLoading = false;
          },
          () => {
            this.error = false;
            this.dataLoading = false;
          }
        );
    }
  }
  // getFilterData(filters) {
  //   this.dataLoading = true;
  //   this.querySubscription = this._backendService
  //     .getFilterProducts('cart', filters);
  // }

  // setData(formData) {
  //   formData.tags = formData.tags.split(',');
  //   this.dataLoading = true;
  //   this._backendService
  //     .setProduct('cart', formData);
  // }

  // updateData(formData) {
  //   formData.tags = formData.tags.split(',');
  //   if (confirm('Are you sure want to update this record ?')) {
  //     this.dataLoading = true;
  //     this._backendService
  //       .updateProduct('cart', formData);
  //   }
  // }

  // function for data table

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}


