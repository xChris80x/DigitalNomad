import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';




@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const map = L.map('map').setView([51.146089, 7.590706], 10);

   

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
    }).addTo(map);


    L.marker([51.146089, 7.590706]).addTo(map)
      .bindPopup('I am here!');


    
      var popup1 = L.popup()
      .setLatLng([51.146089, 7.590706])
      .setContent('<p>Hallo<br />Ich bin hier.</p>')
      .addTo(map);


      


  }


}


