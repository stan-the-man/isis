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
      if(checkAP('coen-10') || checkRadio("progexp")) {
        return;
      } else {
        Schedule.setCoen(10);
      }
    } else {
      $('#coen-11-input-transfer').prop('checked', false);

      if(checkAP('coen-10') || checkRadio("progexp")) {
        return;
      } else {
        Schedule.setCoen();
      }
    }

    Schedule.update();
  });

  // COEN 10 AP credit handler
  //
  $('#coen-10-input-ap, #coen-10-select').change(function() {
    if(checkAP('coen-10')) {
      Schedule.setCoen(10);
    } else if(checkTransfer('coen-10') || checkRadio("progexp")) {
      return;       // if the transfer credit is checked, or they have progexp, don't change anything
    } else {
      Schedule.setCoen();
    }

    Schedule.update();
  });

  $('.coen-10-input-radio').change(function() {
    if(checkRadio("progexp")) {
      Schedule.setCoen(10);
    } else if(checkAP('coen-10') || checkTransfer('coen-10')) {
        return;
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

  // CHEM 11 transfer credit handler
  //
  $('#chem-11-input-transfer').change(function() {
    if(this.checked) {
      Schedule.setChemistry(true);   
    } else if(checkAP('chem-11')) {
      return;
    } else {
      Schedule.setChemistry(false);
    }

    Schedule.update();
  });


  // Chem 11 AP credit handler
  //
  $('#chem-11-input-ap, #chem-11-select').change(function() {
    if(checkAP('chem-11')) {
      Schedule.setChemistry(true);
    } else if(checkTransfer('chem-11')) {
      return;
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
  $('#phys-31-input-ap, #phys-31-select').change(function() {
    if(checkAP('phys-31')) {
      Schedule.setPhysics(31);
    } else if(checkTransfer('phys-31')) {
      return;
    } else {
      Schedule.setPhysics();
    }

    Schedule.update();
  });


  // PHYS 33 transfer credit handler
  //
  $('#phys-32-input-transfer').change(function() {
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
  $('#phys-33-input-ap, #phys-33-select').change(function() {
    if(checkAP('phys-33')) {
      Schedule.setPhysics(33, true);
    } else {
      Schedule.setPhysics(33, false);
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

function checkRadio(subject) {
  if($("input[name=" + subject + "]:checked").val() == 'yes') {
    return true;
  } else {
    return false;
  }
}
