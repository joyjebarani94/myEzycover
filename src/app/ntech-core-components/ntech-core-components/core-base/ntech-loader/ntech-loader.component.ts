import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../../../ntech-services/ntech-core-services/loder.service';


@Component({
  selector: 'ntech-loader',
  templateUrl: './ntech-loader.component.html',
  styleUrls: ['./ntech-loder.component.css']
})
export class NtechLoaderComponent {
  color = 'Warn';
  mode = 'indeterminate';
  value = 50;
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  constructor(private loaderService: LoaderService){}
}