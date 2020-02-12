// Configuration for the Timeline
var options = {
    min: new Date(2020, 1, 1),                // lower limit of visible range
    max: new Date(2020, 6, 30),                // upper limit of visible range
    zoomMin: 1000 * 60,             // one day in minutes
    zoomMax: 1000 * 60 * 60 * 24,     // about one week
    editable: true,
    stack: false,
    orientation: 'bottom',
    groupTemplate: function(group){
      var container = document.createElement('div');
      var label = document.createElement('span');
      label.innerHTML = group.content + ' ';
      container.insertAdjacentElement('afterBegin',label);
      var hide = document.createElement('button');
      hide.innerHTML = 'x';
      hide.style.fontSize = 'small';
      hide.addEventListener('click',function(){
        groups.update({id: group.id, visible: false});
      });
      container.insertAdjacentElement('beforeEnd',hide);
      return container;
    },
};

// create groups to highlight groupUpdate
var groups = new vis.DataSet([
    {id: 'E', content: 'Expectativa'},
    {id: 'R', content: 'Realidade'}
]);

function showAllGroups(){
    groups.forEach(function(group){
        groups.update({id: group.id, visible: true});
    })
};

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
    {id: 1, content: 'Divisão de grupos: corte e lixamento', type: 'range', start: '2020-02-07T18:30:00', end: '2020-02-07T18:40:00', group: 'E'},
    {id: 2, content: 'item 2', start: '2020-02-07T18:45:00', end: '2020-02-07T19:00:00', group: 'E'},
    {id: 3, content: 'item 3', start: '2020-02-07T19:00:00', end: '2020-02-07T19:15:00', group: 'E'},
    {id: 4, content: 'item 4', start: '2020-02-07T19:15:00', end: '2020-02-07T19:30:00', group: 'E'},
    {id: 5, content: 'item 5', start: '2020-02-07T19:30:00', end: '2020-02-07T19:45:00', group: 'E'},
    {id: 6, content: 'item 6', start: '2020-02-07T19:45:00', end: '2020-02-07T19:20:00', group: 'E'},

    {id: 7, content: 'item 1', start: '2020-02-07T18:30:00', end: '2020-02-07T18:40:00', group: 'R'},
    {id: 8, content: 'item 2', start: '2020-02-07T18:45:00', end: '2020-02-07T19:00:00', group: 'R'},
    {id: 9, content: 'item 3', start: '2020-02-07T19:00:00', end: '2020-02-07T19:15:00', group: 'R'},
    {id: 10, content: 'item 4', start: '2020-02-07T19:15:00', end: '2020-02-07T19:30:00', group: 'R'},
    {id: 11, content: 'item 5', start: '2020-02-07T19:30:00', end: '2020-02-07T19:45:00', group: 'R'},
    {id: 12, content: 'item 6', start: '2020-02-07T19:45:00', end: '2020-02-07T19:20:00', group: 'R'},
]);


// Create a Timeline
var container = document.getElementById('visualization');
timeline = new vis.Timeline(container, null, options);
timeline.setGroups(groups);
timeline.setItems(items);

// function to make all groups visible again
