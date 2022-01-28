import { ProductService } from './../product/product.service';
import { ProductReadComponent } from './../product/product-read/product-read.component';
import { Product } from './../product/product.model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductReadTableTemplateDataSource } from './product-read-table-template-datasource';

@Component({
  selector: 'app-product-read-table-template',
  templateUrl: './product-read-table-template.component.html',
  styleUrls: ['./product-read-table-template.component.css']
})


export class ProductReadTableTemplateComponent implements AfterViewInit {

  //remover
  //products!: Product[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Product>;
  dataSource: ProductReadTableTemplateDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price'];

  constructor(
      // private productService: ProductService
    ) {
    this.dataSource = new ProductReadTableTemplateDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;

    // inicio remover
    // this.table.dataSource = this.listProduct();
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    //fim remover
  }

  //remover
  // listProduct(): Product[] {
  //   this.productService.read().subscribe(products => {
  //     this.products = products
  //     this.ngAfterViewInit()
  //   })
  //   return this.products
  // }
}
