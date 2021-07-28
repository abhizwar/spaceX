export interface LaunchData {
    flight_number?: number;
    mission_name?: string;
    mission_id?: string[];
    launch_year?: string;
    launch_success?: boolean;
    rocket?: {
      first_stage: { cores: Cores[] };
      second_stage?: { cores: Cores[] };
    };
    links?: { mission_patch_small: string };
  }
  
  export interface Cores {
    land_success: boolean;
    landing_intent?: boolean;
    landing_type?: string;
    landing_vehicle?: any;
    block?: number;
    payload: Array<any>;
  }
  
  export interface Filters {
    isSelected: boolean;
    year?: number;
    value?: any;
  }