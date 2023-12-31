import { DatePipe, NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TEST_DATA } from '../../../assets/data/example';
import { Book, BookData } from '../../models/book';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    NgOptimizedImage,
    DatePipe,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  books: BookData[] = [];
  dataSource!: MatTableDataSource<BookData>;
  displayedColumns: Iterable<string> = [
    'id',
    'name',
    'cover',
    'coverType',
    'createdAt',
    'updatedAt',
  ];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.getBookData(TEST_DATA.data));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private getBookData(books: Book[]): BookData[] {
    return books.map((book) => {
      return {
        id: book.id,
        name: book.attributes.content,
        coverType: book.attributes.display_properties.type,
        cover: book.attributes.display_properties.image,
        createdAt: book.attributes.created_at,
        updatedAt: book.attributes.updated_at,
      };
    });
  }
}
