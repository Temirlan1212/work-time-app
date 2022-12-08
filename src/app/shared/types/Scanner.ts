export interface IRes {
  text: string;
}
export interface IGeoLocationCoordinates {
  accuracy: number;
  altitude: null;
  altitudeAccuracy: null;
  heading: null;
  latitude: number;
  longitude: number;
  speed: null;
}
export interface IGeoLocationPosition {
  coords: IGeoLocationCoordinates;
  timestamp: number;
}
