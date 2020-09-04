import { Component } from '@angular/core';
import { LoaderService } from '../../infrastructure/services/loader.service';

@Component({
    selector: 'loader',
    templateUrl: './loader.component.html',
    styleUrls: ['loader.component.css']
})
export class LoaderComponent {
    constructor(public loaderService: LoaderService) {}
}
