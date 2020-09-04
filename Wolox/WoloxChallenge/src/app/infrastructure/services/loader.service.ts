import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Servicio para controlar el Loader,
 * permite mostrar y ocultar el Loader.
 *
 * Ver tambien: LoaderComponent
 */
@Injectable()
export class LoaderService {
  private loadingSource = new BehaviorSubject<boolean>(false);
  public isLoading = this.loadingSource.asObservable();
  private req = 0;

  mostrarLoader() {
    this.req < 0 ? (this.req = 0) : this.req++;
    if (this.req === 1) {
      this.loadingSource.next(true);
    }
  }

  ocultarLoader() {
    this.req < 0 ? (this.req = 0) : this.req--;

    if (this.req === 0 && this.loadingSource.value === true) {
      this.loadingSource.next(false);
    }
  }
}
