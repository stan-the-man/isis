/* register all our click handlers etc 
  Written by Jason Dougherty and Ashley Sehatti
  Last updated: 12/1/2014 
  
  Below are all the on click handlers for the website. 
  
  DESCRIPTION OF WHY WE USED THE METHODS WE USED HERE

*/

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
    $('.navpill').removeClass('disabled');
  });

  $('#change-major').click(function() {
    Schedule.changeMajor();
    Schedule.update();
  });
  /******** MATH HANDLERS *********/

  // Handles all calculus transfer credit
  //
  $('.calc-transfer').change(function() {
    toggleActive(this);

    if(!this.checked) {
      clearCalcTransfer();
    }
    checkCalc();

    Schedule.update();
  });

  // Handles all calculus AP credit
  //
  $('.calc-ap').change(function() {
    toggleActive(this);
    checkCalc();
    Schedule.update();
  });

  // Rest of the Math courses
  //
  $('#math-53-input-transfer').change(function() {
    toggleActive(this);
    if(this.checked) {
      Schedule.setLinearAlgebra(true);
    } else {
      Schedule.setLinearAlgebra(false);
    }

    Schedule.update();
  });

  $('#math-106-input-transfer').change(function() {
    toggleActive(this);
    if(this.checked) {
      Schedule.setMath106(true);
    } else {
      Schedule.setMath106(false);
    }

    Schedule.update();
  });

  $('#math-108-input-transfer').change(function() {
    toggleActive(this);
    if(this.checked) {
      Schedule.setMath108(true);
    } else {
      Schedule.setMath108(false);
    }

    Schedule.update();
  });

  $('.math-9-input-radio').change(function() {
    checkCalc();
    Schedule.update();
  });

  /********* END MATH HANDLERS ********/

  /********* START COEN HANDLERS ********/

  $('.coen-transfer').change(function() {
    toggleActive(this);

    if (!this.checked) {
      clearCoenTransfer();
    }

    checkCoen();

    Schedule.update();
  });

  $('.coen-ap').change(function() {
    toggleActive(this);
    checkCoen();
    Schedule.update();
  });

  $('.coen-10-input-radio').change(function() {
    checkCoen();
    Schedule.update();
  });
  /********* END COEN HANDLERS ********/

  /********* START SCIENCE HANDLERS ********/

  // CHEM 11 transfer credit handler
  //
  $('#chem-11-input-transfer, #chem-11-select').change(function() {
    toggleActive(this);

    if(checkAP('chem-11', 4)) {
      Schedule.setChemistry(true);
      Schedule.setMath106(true);  // 4 or 5 gets us chem 12 too which can be used for AMTH 106
    } else if(checkTransfer('chem-11') || checkAP('chem-11', 3)) {
      if(!checkTransfer('math-106')) Schedule.setMath106(false);
      Schedule.setChemistry(true);   
    } else {
      if(!checkTransfer('math-106')) Schedule.setMath106(false);
      Schedule.setChemistry(false);
    }

    Schedule.update();
  });

  // PHYS 31 handler
  //
  $('#phys-31-input-transfer, #phys-31-select').change(function() {
    toggleActive(this);

    if(checkTransfer('phys-31') || checkAP('phys-31', 4)) {
      Schedule.setPhysics(31, true);
    } else {
      Schedule.setPhysics(31, false);
    }

    Schedule.update();
  });


  // PHYS 33 transfer credit handler
  //
  $('#phys-32-input-transfer').change(function() {
    toggleActive(this);

    if(this.checked) {
      Schedule.setPhysics(32, true);
    } else {
      Schedule.setPhysics(32, false);
    }

    Schedule.update();
  });

  // PHYS 33 AP credit handler
  //
  $('#phys-33-input-transfer, #phys-33-select').change(function() {
    toggleActive(this);

    if(checkTransfer('phys-33') || checkAP('phys-33', 4)) {
      Schedule.setPhysics(33, true);
    } else {
      Schedule.setPhysics(33, false);
    }

    Schedule.update();
  });

  $('#envsci-select').change(function() {
    toggleActive(this);

    if(checkAP('envsci', 4)) {
      Schedule.setNaturalScience(true);
    } else {
      Schedule.setNaturalScience(false);
    }

    Schedule.update();
  });

  /********* END SCIENCE HANDLERS ********/
});

/********* HELPER FUNCTIONS ********/

//checks if the element is active
//if yes, turns given element to inactive and vice versa
function toggleActive(el) {
  if($(el).hasClass('transfer')) {
    if($(el).parent().hasClass('active')) {
      $(el).parent().removeClass('active');
    } else {
      $(el).parent().addClass('active');
    }
  } else {
    if($(el).val().length > 0) {
      $(el).parent().addClass('active');
    } else {
      $(el).parent().removeClass('active');
    }
  }

}


//checks to see if the element is already checked in the transfer credits
function checkTransfer(subject) {
  if($("#" + subject + "-input-transfer").prop('checked')) {
    return true;
  } else {
    return false;
  }
}

//checks to see if an element is already checked in AP credits
function checkAP(subject, minimumScore) {
  if($('#' + subject +'-select').val() >= minimumScore) {
    return true;
  } else {
    return false;
  }
}

//
function checkMathAP() {
  if($('#math-12-select').val() >= 4) {
    Schedule.setMath(12);
    return true;
  } else if($('#math-11-select').val() >= 4 || $('#math-12-select').val() >= 3) {
    Schedule.setMath(11);
    return true;
  }

  Schedule.setMath();

  return false;
}

function checkCoenAPandExp() {
  if($('#coen-10-select').val() >= 4) {
    Schedule.setCoen(11);
    return true;
  } else if($('#coen-10-select').val() >= 3 || checkRadio('progexp')) {
    Schedule.setCoen(10);
    return true;
  }

  return false;
}

function checkRadio(subject) {
  if($("input[name=" + subject + "]:checked").val() == 'yes') {
    return true;
  } else {
    return false;
  }
}

//if click on a math class that is higher in the sequence than others, auto selects the rest and greys them out
//so that user cannot manipulate them.
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
  courses.parent().removeClass('active').addClass('disabled');
}

//if select a coen class deeper in the sequence, auto highlights all pre-req credits
//and greys them out so that user cannot maniuplate and screw up schedule
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
  courses.parent().removeClass('active').addClass('disabled');
}

function checkCalc() {
  var isAP = checkMathAP();

  if(checkTransfer('math-14')) {
    Schedule.setMath(14);
    disableMath(13);
  } else if(checkTransfer('math-13')) {
    Schedule.setMath(13);
    disableMath(12);
  } else if(checkTransfer('math-12')) {
    Schedule.setMath(12);
    disableMath(11);
  } else if(checkTransfer('math-11') && !isAP){
    Schedule.setMath(11);
  } else if(!isAP) {
    Schedule.setMath();
  }

  // for the readiness exam - OVERRIDE EVERYTHING ELSE
  if(checkRadio('calcread')) {
    Schedule.setMath(9);
  }
}

function checkCoen() {
  var isAPorHasExp = checkCoenAPandExp();

  if(checkTransfer('coen-12')) {
    Schedule.setCoen(12);
    disableCoen(11);
  } else if(checkTransfer('coen-11')) {
    Schedule.setCoen(11);
    disableCoen(10);
  } else if(checkTransfer('coen-10') && !isAPorHasExp) {
    Schedule.setCoen(10);
  } else if(!isAPorHasExp) {
    Schedule.setCoen();
  }
}

function clearCalcTransfer() {
  var courses =  $("#math-11-input-transfer, #math-12-input-transfer, #math-13-input-transfer");
  courses.prop('checked', false);
  courses.prop('disabled', false);
  courses.parent().removeClass('disabled');
}

function clearCoenTransfer() {
  var courses = $("#coen-10-input-transfer, #coen-11-input-transfer, #coen-12-input-transfer");
  courses.prop('checked', false);
  courses.prop('disabled', false);
  courses.parent().removeClass('disabled');
}
