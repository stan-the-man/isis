/* register all our click handlers etc */


$(document).ready(function() {
  $('.math-11-input').change(function() {
    Schedule.setMath(11);
    Schedule.update();
  });

  $('.math-12-input').change(function() {
    Schedule.setMath(12);
    Schedule.update();
  });

  $('.math-13-input').change(function() {
    Schedule.setMath(13);
    Schedule.update();
  });

  $('.coen-10-input').change(function() {
    Schedule.setCoen(10);
    Schedule.update();
  });

  $('.coen-11-input').change(function() {
    Schedule.setCoen(11);
    Schedule.update();
  });

  $('.chem-11-input').change(function() {
    Schedule.setChemistry(true);
    Schedule.update();
  });

  $('.phys-31-input').change(function() {
    Schedule.setPhysics(31);
    Schedule.update();
  });

  $('.phys-33-input').change(function() {
    Schedule.setPhysics(33);
    Schedule.update();
  });

  $('#change-major').click(function() {
    Schedule.changeMajor();
  });
});
