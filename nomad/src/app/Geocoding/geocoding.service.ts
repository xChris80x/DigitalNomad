import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  private geocodingClient: MapboxGeocoding.GeocodingService;

  constructor() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNnNDAiLCJhIjoiY2xlbjk4cGwwMTdwZzNubjhvamdiN2JzbCJ9.BtJ2age8-ZGJlCHOgMMidA';
    this.geocodingClient = MapboxGeocoding({
      accessToken: mapboxgl.accessToken
    });
  }

  geocode(query: string): Promise<MapboxGeocoding.GeocodeResponse> {
    return this.geocodingClient.forwardGeocode({
      query: query,
      countries: ['de'], // optional: Filterung auf ein Land
      limit: 1
    }).send();
  }
}