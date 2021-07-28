import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LaunchData } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  loadingData: any = false;

  SpaceXData: any = [];
  constructor(private http: HttpClient) { }

  BASE_URL: any = 'https://api.spaceXdata.com/v3/launches?limit=100';

  getSpaceXDataAPI(launch_success?: any, land_success?: any, launch_year?: any) {
    return this.http.get(this.BASE_URL + '&launch_success=' + launch_success + '&land_success=' + land_success + '&launch_year=' + launch_year);
  }

  getSpaceXData(launch_success?: any, land_success?: any, launch_year?: any) {
    this.loadingData = true;
    this.getSpaceXDataAPI(launch_success, land_success, launch_year)
      .subscribe((response: any) => {
        console.log(response);
        this.SpaceXData = response;
        this.loadingData = false;
      })
  }

}
