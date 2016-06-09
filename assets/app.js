$(document).ready(function() {
  $('#calendar').fullCalendar({
    events: [
      {
        title  : 'event1',
        start  : '2016-06-01'
      },
      {
        title  : 'event2',
        start  : '2016-06-05',
        end    : '2016-06-07'
      },
      {
        title  : 'event3',
        start  : '2016-06-09T12:30:00',
        allDay : false // will make the time show
      }
    ]
  });
});
