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

  constructor(private service: ApiServicesService, private route: ActivatedRoute, private router: Router) { }

  developerName: any = "Abhijeet Singh"
  rocketData: any
  launchList: LaunchData[] = [];
  yearValues: any;
  launchValues: any
  landingValues: any
  year: any
  launch: any
  landing: any
  appliedYear: any
  isLanded: any
  isLaunched: any

  ngOnInit(): void {
    this.getValues();
    this.queryParameter()
  }


  /**
   * Get the query params from url
   */
  queryParameter() {
    this.route.queryParamMap.subscribe((params) => {
      this.appliedYear = params.get('year');
      this.isLanded = params.get('landing');
      this.isLaunched = params.get('launch');
      
      // Service call
      this.homePage();
    });
  }

  /**
   * set default limit 20
   */
  limit: number = 20;

  /**
   * @param {SelectedFilter} : get the value after click on event for year filter 
   */
  clickOnYear(SelectedFilter: Filters) {
    if (this.appliedYear === SelectedFilter.value) {
      delete this.appliedYear
    } else {
      this.appliedYear = SelectedFilter.value;
    }
    this.rootPage()
  }

  /**
   * @param {field} : get the properties of click event from constant data
   * @param {SelectedFilter} : get the value after click on event for launch filter
   */
  clickOnLaunch(field: string, SelectedFilter: Filters) {
    this.MappingFromClick(field, SelectedFilter);
    if (this.isLaunched === SelectedFilter.value) {
      delete this.isLaunched
    } else {
      this.isLaunched = SelectedFilter.value;
    }
    this.rootPage();
  }

  /**
   *@param {field} : get the properties of click event from constant data
   * @param {SelectedFilter} : get the value after click on event for land filter
   */
  clickOnLand(field: string, SelectedFilter: Filters) {
    this.MappingFromClick(field, SelectedFilter);
    if (this.isLanded === SelectedFilter.value) {
      delete this.isLanding
    } else {
      this.isLanding = SelectedFilter.value;
    }
    this.rootPage()
  }


  /**
   * @param field mapped values
   * @param Properties getting all the values
   */
  MappingFromClick(field: any, properties: any) {
    this[field].map((property: { isSelected: boolean; value: any; year: number }) => {

      // condition based on click event
      property.isSelected = property.value === properties.value ? !property.value : false;
    });

  }

  /* method to call rootpage for filters */
  rootPage() {
    this.router.navigate(['/root'], {
      queryParams: {
        year: this.appliedYear,
        launch: this.isLaunched,
        landing: this.isLanding,
      },
    });
  }

  /* method to call the home page */
  homePage() {
    this.service.getMethod(this.appliedYear, this.isLaunched, this.isLanding, this.limit).subscribe((Data: LaunchData[]) => {
      this.rocketData = Data;
    },
      (error: any) => {
        return error
      }
    )
  }

  // get all the filter constant data
  getValues() {
    this.launchValues = LAUNCH_VALUE;
    this.landingValues = LANDING_VALUE;
    this.yearValues = YEARS_VALUE;
  }

}
