/* register all our click handlers etc */

$(document).ready(function() {
  // init the schedule
  Schedule.coen();
  Schedule.update();

  // Math 11 transfer credit handler
  //
  $('#math-11-input-transfer').change(function() {
    if(this.checked) {
      if(checkAP('math-11-12')) {
        Schedule.setMath(12);
      } else {
        Schedule.setMath(11);
      }
    } else {
      $('#math-12-input-transfer, #math-13-input-transfer').prop('checked', false);

      if(checkAP('math-11-12')) {
        return; // if we have AP credit we return
      } else {
        Schedule.setMath();
      }
    }

    Schedule.update();
  });

  // Math 11 AP credit handler
  //
  $('#math-11-12-input-ap, #math-11-12-select').change(function() {
    if($('#math-11-12-input-ap').prop('checked')) {
      $('#math-13-input-ap').prop('checked', false);
    }

    if(checkAP('math-11-12') && !checkAP('math-13')) {
      Schedule.setMath(12);
    } else if(checkTransfer('math-12')) {
      return;       // if the transfer credit is checked, don't change anything
    } else if(checkTransfer('math-11')) {
      Schedule.setMath(11);
    } else {
      Schedule.setMath();
    }

    Schedule.update();
  });

  // Math 12 transfer credit handler
  //
  $('#math-12-input-transfer').change(function() {
    if(this.checked) {
      $('#math-11-input-transfer').prop('checked', true);

      if(checkAP('math-11-12')) {
        return;
      } else {
        Schedule.setMath(12);
      }
    } else {
      $('#math-13-input-transfer').prop('checked', false);

      if(checkAP('math-11-12')) {
        return;
      } else {
        Schedule.setMath(11)
      }
    }

    Schedule.update();
  });

  // Math 13 transfer credit handler
  //
  $('#math-13-input-transfer').change(function() {
    if(this.checked) {
      $('#math-11-input-transfer, #math-12-input-transfer').prop('checked', true);

      if(checkAP('math-13')) {
        return;
      } else {
        Schedule.setMath(13);
      }
    } else {

      if(checkAP('math-13')) {
        return;
      } else {
        Schedule.setMath(12);
      }
    }

    Schedule.update();
  });

  // Math 13 AP credit handler (Calculus BC)
  //
  $('#math-13-input-ap, #math-13-select').change(function() {
    if(checkAP('math-13')) {
      Schedule.setMath(13);
      $('#math-11-12-input-ap').prop('checked', true);
      $('#math-11-12-select').val('5');
    } else if(checkTransfer('math-13')) {
      return;       // if the transfer credit is checked, don't change anything
    } else if(checkAP('math-11-12')) {
      Schedule.setMath(12);
    } else if(checkTransfer('math-12')) {
      Schedule.setMath(12);
    } else if(checkTransfer('math-11')) {
      Schedule.setMath(11);
    } else {
      Schedule.setMath();
    }

    Schedule.update();
  });

  // COEN 10 transfer credit handler
  //
  $('#coen-10-input-transfer').change(function() {
    if(this.checked) {
      Schedule.setCoen(10);
    } else {
      $('#coen-11-input-transfer').prop('checked', false);
      Schedule.setCoen();
    }

    Schedule.update();
  });

  // COEN 10 AP credit handler
  //
  $('#coen-10-input-ap').change(function() {
    $('#coen-10-select').removeAttr('disabled');
    if(this.checked && parseInt($('#coen-10-select').val()) >= 4) {
      $('#coen-10-input-ap').prop('checked', true);
      Schedule.setCoen(10);
    } else {
      $('#coen-10-select').attr('disabled', 'disabled');
      Schedule.setCoen();
    }

    Schedule.update();
  });

  // COEN 10 AP score handler
  //
  $('#coen-10-select').change(function() {
    if(this.value >= 4) {
      Schedule.setCoen(10);
    } else {
      Schedule.setCoen();
    }

    Schedule.update();
  });

  $('.coen-10-input-radio').change(function() {
    if($("input[name=progexp]:checked").val() == 'yes') {
      Schedule.setCoen(10);
    } else {
      Schedule.setCoen();
    }

    Schedule.update();
  });

  // COEN 11 transfer credit handler
  //
  $('#coen-11-input-transfer').change(function() {
    if(this.checked) {
      $('#coen-10-input-transfer').prop('checked', true);
      Schedule.setCoen(11);   
    } else {
      Schedule.setCoen(10);
    }

    Schedule.update();
  });

  // Chem 11 transfer credit handler
  //
  $('#chem-11-input-transfer').change(function() {
    if(this.checked) {
      Schedule.setChemistry(true);   
    } else {
      Schedule.setChemistry(false);
    }

    Schedule.update();
  });


  // Chem 11 AP credit handler
  //
  $('#chem-11-input-ap').change(function() {
    $('#chem-11-select').removeAttr('disabled');
    if(this.checked && parseInt($('#chem-11-select').val()) >= 4) {
      Schedule.setChemistry(true);
    } else {
      $('#chem-11-select').attr('disabled', 'disabled');
      Schedule.setChemistry(false);
    }

    Schedule.update();
  });

  // Chem 11 AP score handler
  //
  $('#chem-11-select').change(function() {
    if(this.value >= 4) {
      Schedule.setChemistry(true); 
    } else {
      Schedule.setChemistry(false);
    }

    Schedule.update();
  });

  // PHYS 31 transfer credit handler
  //
  $('#phys-31-input-transfer').change(function() {
    if(this.checked) {
      Schedule.setPhysics(31);
    } else {
      $('#phys-32-input-transfer').prop('checked', false);
      Schedule.setPhysics();
    }

    Schedule.update();
  });

  // PHYS 31 AP credit handler
  //
  $('#phys-31-input-ap').change(function() {
    $('#phys-31-select').removeAttr('disabled');
    if(this.checked && parseInt($('#phys-31-select').val()) >= 4) {
      Schedule.setPhysics(31);
    } else {
      $('#phys-31-select').attr('disabled', 'disabled');
      if($('#phys-33-input-ap').prop('checked') && parseInt($('#phys-33-select').val()) >= 4) {
        Schedule.setPhysics();
        Schedule.setPhysics(33);
      } else {
        Schedule.setPhysics();
      }
    }

    Schedule.update();
  });

  // PHYS 31 AP score handler
  //
  $('#phys-31-select').change(function() {
    if(this.value >= 4) {
      Schedule.setPhysics(31);
    } else {
      Schedule.setPhysics();
    }
  });

  // PHYS 33 transfer credit handler
  //
  $('#phys-32-input-transfer').change(function() {
    var phys31 = $()
    if(this.checked) {
      $('#phys-31-input-transfer').prop('checked', true);
      Schedule.setPhysics(32);
    } else {
      Schedule.setPhysics(31);
    }

    Schedule.update();
  });

  // PHYS 33 AP credit handler
  //
  $('#phys-33-input-ap').change(function() {
    $('#phys-33-select').removeAttr('disabled');
    if(this.checked && parseInt($('#phys-33-select').val()) >= 4) {
      Schedule.setPhysics(33);
    } else {
      $('#phys-33-select').attr('disabled', 'disabled');
      if($('#phys-31-select').prop('checked') && parseInt($('#phys-31-select').val()) >= 4) {
        Schedule.setPhysics(31);
        Schedule.setPhysics(33);
      } else {
        Schedule.setPhysics();
      }
    }

    Schedule.update();
  });

  // PHYS 33 AP score handler
  //
  $('#phys-33-select').change(function() {
    if(this.value >= 4) {
      Schedule.setPhysics(33);
    } else {
      Schedule.setPhysics();
    }

    Schedule.update();
  });

  // Change major handler
  $('#change-major').click(function() {
    Schedule.changeMajor();
  });
});

function checkTransfer(subject) {
  if($("#" + subject + "-input-transfer").prop('checked')) {
    return true;
  } else {
    return false;
  }
}

function checkAP(subject) {
  if($("#" + subject + '-input-ap').prop('checked') && $('#' + subject +'-select').val() >= 4) {
    return true;
  } else {
    return false;
  }
}
