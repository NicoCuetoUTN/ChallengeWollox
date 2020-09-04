import { NgModule } from '@angular/core';
// Servicios
import { UserService } from './services/user.service';
import { CacheService } from './services/cache.service';
import { LoaderService } from './services/loader.service';


/**
 * Directivas para exportar
 */
const DIRECTIVES = [];

@NgModule({
  providers: [
    // Servicios
    UserService,
    CacheService,
    LoaderService
  ],
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
})
export class InfrastructureModule {
}
