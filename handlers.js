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
    $('select').val('');
    $('.navpill').removeClass('active');
  });

  $('.hidden-checkbox').change(function() {
    if($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
    } else {
      $(this).parent().addClass('active');
    }
  });

  $('select').change(function() {
    if($(this).val().length > 0) {
      $(this).parent().addClass('active');
    } else {
      $(this).parent().removeClass('active');
    }
  });


  /******** MATH HANDLERS *********/

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
  $('#math-11-select').change(function() {
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
      disableMath(11);
      Schedule.setMath(12);
    } else {
      enableMath(11);

      if(checkAP('math-12', 4)) {
        return;
      } else {
        Schedule.setMath(11);
      }
    }

    Schedule.update();
  });

  // Math 12 AP credit handler (Calculus BC)
  //
  $('#math-12-select').change(function() {
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

  // Math 13 transfer credit handler
  //
  $('#math-13-input-transfer').change(function() {
    if(this.checked) {
      disableMath(12);
      Schedule.setMath(13);
    } else {
      enableMath(12);
      Schedule.setMath(12);
    }

    Schedule.update();
  });

  $('#math-14-input-transfer').change(function() {
    if(this.checked) {
      disableMath(13);
      Schedule.setMath(14);
    } else {
      enableMath(13);
      Schedule.setMath(13);
    }

    Schedule.update();
  });

  $('#math-53-input-transfer').change(function() {
    if(this.checked) {
      Schedule.setLinearAlgebra(true);
    } else {
      Schedule.setLinearAlgebra(false);
    }

    Schedule.update();
  });

  $('#math-106-input-transfer').change(function() {
    if(this.checked) {
      Schedule.setMath106(true);
    } else {
      Schedule.setMath106(false);
    }

    Schedule.update();
  });

  $('#math-108-input-transfer').change(function() {
    if(this.checked) {
      Schedule.setMath108(true);
    } else {
      Schedule.setMath108(false);
    }

    Schedule.update();
  });

  /********* END MATH HANDLERS ********/

  /********* START COEN HANDLERS ********/

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
  $('#coen-10-select').change(function() {
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
      disableCoen(10);
      Schedule.setCoen(11);   
    } else if(checkAP('coen-10', 4)) {
      return;
    } else {
      enableCoen(10);
      Schedule.setCoen(10);
    }

    Schedule.update();
  });

  $('#coen-12-input-transfer').change(function() {
    if(this.checked) {
      disableCoen(11);
      Schedule.setCoen(12);
    } else  {
      enableCoen(11);
      Schedule.setCoen(11);
    }

    Schedule.update();
  });

  /********* END COEN HANDLERS ********/

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
  if($('#' + subject +'-select').val() >= minimumScore) {
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

function disableMath(level) {
  var courses;
  switch(level) {
    case(11):
      courses = $("#math-11-input-transfer");
      break;
    case(12):
      courses = $("#math-11-input-transfer, #math-12-input-transfer");
      break;
    case(13):
      courses = $("#math-11-input-transfer, #math-12-input-transfer, #math-13-input-transfer");
      break;
  }
  courses.prop('checked', true);
  courses.prop('disabled', true);
  courses.parent().addClass('disabled');
}

function disableCoen(level) {
  var courses;
  switch(level) {
    case(10):
      courses = $("#coen-10-input-transfer");
      break;
    case(11):
      courses = $("#coen-10-input-transfer, #coen-11-input-transfer");
      break;
  }

  courses.prop('checked', true);
  courses.prop('disabled', true);
  courses.parent().addClass('disabled');
}

function enableMath(level) {
  var courses;
  switch(level) {
    case(11):
      courses = $("#math-11-input-transfer");
      break;
    case(12):
      courses = $("#math-12-input-transfer");
      break;
    case(13):
      courses = $("#math-13-input-transfer");
      break;
  }

  courses.prop('disabled', false);
  courses.parent().removeClass('disabled').addClass('active');
}

function enableCoen(level) {
  var courses;
  switch(level) {
    case(10):
      courses = $("#coen-10-input-transfer");
      break;
    case(11):
      courses = $("#coen-11-input-transfer");
      break;
  }

  courses.prop('disabled', false);
  courses.parent().removeClass('disabled').addClass('active');
}