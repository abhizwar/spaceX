import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServicesService } from '../services/spacex-service';
import { LaunchData, Filters } from '../models/models';
import { LAUNCH_VALUE, LANDING_VALUE, YEARS_VALUE } from '../constants/constants';

@Component({
  selector: 'app-plat-form',
  templateUrl: './plat-form.component.html',
  styleUrls: ['./plat-form.component.scss']
})
export class PlatFormComponent implements OnInit {

  [x: string]: any;
  LoaderArray: any = [1,2,3,4,5,6,7,8]
  launch_year: any = '';
  launch_success: any = '';
  land_success: any = '';

  constructor(public service: ApiServicesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getValues();
    this.service.getSpaceXData('','', '');
  }

  onClickLaunchYearFilter(year: any) {
    this.launch_year = year;
    this.service.getSpaceXData(this.launch_success, this.land_success, this.launch_year);
  }

  onClickLaunchSuccess(data:any) {
    this.launch_success = data;
    this.service.getSpaceXData(this.launch_success, this.land_success, this.launch_year);
  }

  onClickLandSuccess(data:any) {
    this.land_success = data;
    this.service.getSpaceXData(this.launch_success, this.land_success, this.launch_year);
  }
   // get all the filter constant data
   getValues() {
    this.launchValues = LAUNCH_VALUE;
    this.landingValues = LANDING_VALUE;
    this.yearValues = YEARS_VALUE;
  }

}
