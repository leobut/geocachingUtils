
function save_options() {
  var elevationMeasurement = document.getElementById('elevation_measurement').value;
  chrome.storage.sync.set({
    elevation_measurement: elevationMeasurement
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved';
    setTimeout(function() {
      status.textContent = '';
    }, 2000);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    elevation_measurement: 'meters' // in case nothing was defined yet, use meters
  }, function(items) {
    document.getElementById('elevation_measurement').value = items.elevation_measurement;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);