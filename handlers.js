/* register all our click handlers etc */

$(document).ready(function() {
  // init the schedule
  Schedule.coen();
  Schedule.update();

  $('#reset').click(function() {
    Schedule.reset();
    Schedule.resetReq();
    Schedule.coen();
    Schedule.update();
    $('input').removeAttr('checked');
    $('select').val('5');
  });

  // Math 11 transfer credit handler
  //
  $('#math-11-input-transfer').change(function() {
    if(this.checked) {
      if(checkAP('math-11', 4) || checkAP('math-12', 3)) {
        return;
      } else {
        Schedule.setMath(11);
      }
    } else {
      $('#math-12-input-transfer, #math-13-input-transfer').prop('checked', false);

      if(checkAP('math-12', 4)) {
        Schedule.setMath(12);
      } else if(checkAP('math-11', 4) || checkAP('math-12', 3)) {
        Schedule.setMath(11);
      } else {
        Schedule.setMath();
      }
    }

    Schedule.update();
  });

  // Math 11 AP credit handler
  //
  $('#math-11-input-ap, #math-11-select').change(function() {
    if(checkAP('math-12', 3) || checkTransfer('math-12')) {
      return;
    } else if(checkAP('math-11', 4) || checkTransfer('math-11')) {
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

      if(checkAP('math-12', 4)) {
        return;
      } else {
        Schedule.setMath(12);
      }
    } else {
      $('#math-13-input-transfer').prop('checked', false);

      if(checkAP('math-12', 4)) {
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
      Schedule.setMath(13);
    } else {
      Schedule.setMath(12);
    }

    Schedule.update();
  });

  // Math 13 AP credit handler (Calculus BC)
  //
  $('#math-12-input-ap, #math-12-select').change(function() {
    
    if(checkTransfer('math-13')) {
      return;
    } else if(checkAP('math-12', 4) || checkTransfer('math-12')) {
      Schedule.setMath(12);
    } else if(checkTransfer('math-11') || checkAP('math-11', 4) || checkAP('math-12', 3)) {
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
      if(checkAP('coen-10', 3) || checkRadio("progexp")) {
        return;
      } else {
        Schedule.setCoen(10);
      }
    } else {
      $('#coen-11-input-transfer').prop('checked', false);

      if(checkAP('coen-10', 4) || checkTransfer('coen-11')) {
        return;
      } else if(checkAP('coen-10', 3) || checkRadio('progexp')) {
        Schedule.setCoen(10);
      } else {
        Schedule.setCoen();
      }
    }

    Schedule.update();
  });

  // COEN 10 AP credit handler
  //
  $('#coen-10-input-ap, #coen-10-select').change(function() {
    if(checkAP('coen-10', 4) || checkTransfer('coen-11')) {
      Schedule.setCoen(11);
    } else if(checkRadio('progexp') || checkAP('coen-10', 3) || checkTransfer('coen-10')) {
      Schedule.setCoen(10);
    } else if(checkTransfer('coen-10') || checkRadio("progexp")) {
      return;       // if the transfer credit is checked, or they have progexp, don't change anything
    } else {
      Schedule.setCoen();
    }

    Schedule.update();
  });

  $('.coen-10-input-radio').change(function() {
    if(checkAP('coen-10', 4) || checkTransfer('coen-11')) {
      return;
    } else if(checkRadio("progexp") || checkAP('coen-10', 3) || checkTransfer('coen-10')) {
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
    } else if(checkAP('coen-10', 4)) {
      return;
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
    } else if(checkAP('chem-11', 3)) {
      return;
    } else {
      Schedule.setChemistry(false);
    }

    Schedule.update();
  });


  // Chem 11 AP credit handler
  //
  $('#chem-11-input-ap, #chem-11-select').change(function() {
    if(checkAP('chem-11', 3)) {
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
    if(this.checked || checkAP('phys-31', 4)) {
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
    if(checkAP('phys-31', 4) || checkTransfer('phys-31')) {
      Schedule.setPhysics(31);
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
    if(checkAP('phys-33', 4)) {
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

function checkAP(subject, minimumScore) {
  if($("#" + subject + '-input-ap').prop('checked') && $('#' + subject +'-select').val() >= minimumScore) {
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
