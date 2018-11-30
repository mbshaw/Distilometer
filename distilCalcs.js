
// dilute a volume from one percentage to another
function diluteToPpercent(vol = 1,alc1,alc2) {
  return vol*((alc1/alc2)-1).toFixed(3);
}

// make a set volume of a fixed percentage returns an array of alcohol and water
function volOfPercent(vol = 1,alc1,alc2) {
  var alcVol = vol*(alc2/alc1);
  return [alcVol.toFixed(3),(vol-alcVol).toFixed(3)];
}

