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
  public  isLoading = this.loadingSource.asObservable();
  private req = 0; // Contador de Requests

  /**
   * Muestra el Loader
   */
  mostrarLoader() {
    this.req < 0 ?  this.req = 0 : this.req++; // se añade una request.
    
    if(this.req === 1){ // si tengo una request loading pasa a true.
      this.loadingSource.next(true);
    }
  }

  /**
   * Oculta el Loader
   */
  ocultarLoader() {
    this.req < 0 ?  this.req = 0 : this.req--; // se resta una request.

    if(this.req === 0 && this.loadingSource.value === true){ 
      this.loadingSource.next(false); // si es la ultima request loading pasa a false y se oculta el loader.
    }
  }
}
