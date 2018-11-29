
// dilute a volume from one percentage to another
function diluteToPpercent(vol,alc1,alc2) {
  return vol*((alc1/alc2)-1);
}

// make a set volume of a fixed percentage returns an array of alcohol and water
function volOfPercent(vol,alc1,akc2) {
  var alcVol = vol*(alc2/alc1);
  return [alcVOL,(vol-alcVol)];
}

