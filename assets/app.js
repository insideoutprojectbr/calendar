$(document).ready(function() {
  $('#calendar').fullCalendar({
    header: {
      left: 'prev, next, today',
      center: 'title',
      right: 'month, basicWeek, basicDay'
    },
    events: '../events.json',
    eventColor: '#D3360B'
  });
});
