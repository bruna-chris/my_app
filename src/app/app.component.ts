import { Products } from './models/products';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  product = {} as Products;
  products: Products[] | undefined;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
  }
  // Chama o serviço para obtém todos os produtos
  getProducts(...args: []): void {
    this.productsService.getProducts().subscribe((products: Products[]) => {
      this.products = products;
    });
  }

  // deleta um produto
  deleteProducts(car: Products) {
    this.productsService.deleteProducts(this.product).subscribe(() => {
      this.getProducts();
    });
  }

  // copia o produto para ser editado.
  editProducts(product: Products) {
    this.product = { ...product };
  }

  // atualiza o produto
  updateProducts(products: Products){
    this.product = products;
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getProducts();
    form.resetForm();
    this.product = {} as Products;
  }

}
