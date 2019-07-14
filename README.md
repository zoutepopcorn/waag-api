# waag-api


### getAllSensors
```
https://data.waag.org/api/getAllSensors
```
```json
[{
  "time": "2019-07-14T09:14:18.823Z",
  "pm25_last": 0.9,
  "pm25_mean": 0.95,
  "pm25_min": 0.6,
  "pm25_max": 1.2,
  "pm10_last": 3.9,
  "pm10_mean": 3.7045000000000003,
  "pm10_min": 1.8,
  "pm10_max": 7.1,
  "no2a_last": null,
  "no2a_mean": null,
  "no2a_min": null,
  "no2a_max": null,
  "no2b_last": null,
  "no2b_mean": null,
  "no2b_min": null,
  "no2b_max": null,
  "temperature_last": 19.65,
  "temperature_mean": 19.2335,
  "temperature_min": 17.38,
  "temperature_max": 20.51,
  "humidity_last": 54.35,
  "humidity_mean": 88.50899999999999,
  "humidity_min": 53.59,
  "humidity_max": 655.35,
  "id": "10"
}]
```

### getStations
```
https://data.waag.org/api/getStations
```
```json
[{
  "id": 52,
  "latitude": 52.495931,
  "longitude": 4.595755,
  "extended": false,
  "tag": "Wijk aan Zee",
  "name": "Stetweg"
}]
```



### getOfficialMeasurement
```
https://data.waag.org/api/getOfficialMeasurement?formula=PM25&start=2019-07-03T17:00:00.000Z&end=2019-07-03T17:00:00.000Z&station_id=NL49007&station_id=NL49017&station_id=NL49012&station_id=NL49014&station_id=NL49016&station_id=NL49561&station_id=NL49570&station_id=NL49556&station_id=NL49551&station_id=NL49703&station_id=NL49573&station_id=NL49572&station_id=NL49553&station_id=NL49701&station_id=NL49704&station_id=NL10538
```
```
[  
   {  
      "station_number":"NL49704",
      "timestamp_measured":"2019-07-03T17:00:00+00:00",
      "value":8.3,
      "formula":"PM25",
      "coordinates":[  
         52.428,
         4.773
      ],
      "name":"Zaanstad-Hoogtij"
   }
   ]
```
