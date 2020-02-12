// create groups to highlight groupUpdate
var groups = new vis.DataSet([
    {id: 'A', content: 'Ação'},
    {id: 'O', content: 'Observação'}
]);

// create items
var items = new vis.DataSet([
    {id: 1, content: 'Pré-para-ação da sala', editable: false, start: '2020-02-07T18:00:00', end: '2020-02-07T18:30:00', group: 'A'},
    {id: 2, content: 'Dinâmica de Mapeamento Inicial', editable: false, start: '2020-02-07T18:40:00', end: '2020-02-07T19:20:00', group: 'A'},
    {id: 3, content: 'Vivência LED+Bateria', editable: false, start: '2020-02-07T19:25:00', end: '2020-02-07T19:55:00', group: 'A'},
    {id: 4, content: 'Apresentação Lina Lopes, Cellular Installation e NANA', editable: false, start: '2020-02-07T20:00:00', end: '2020-02-07T20:10:00', group: 'A'},
    {id: 5, content: 'Vivência LED no corpo', editable: false, start: '2020-02-07T20:10:00', end: '2020-02-07T20:20:00', group: 'A'},
    {id: 6, content: 'Dinâmica Mapeamento Finalização', editable: false, start: '2020-02-07T20:20:00', end: '2020-02-07T20:30:00', group: 'A'},
]);

// specify options
var options = {
    min: new Date(2020, 0, 1),                // lower limit of visible range
    max: new Date(2020, 6, 30),                // upper limit of visible range
    showCurrentTime: true,
    zoomMin: 1000 * 60,             // one day in minutes
    zoomMax: 1000 * 60 * 60 * 24,     // about one day
    editable: true,
    stack: false,
    orientation: 'top',
    onDropObjectOnItem: function(objectData, item, callback) {
        if (!item) { return; }
        alert('dropped object with content: "' + objectData.content + '" to item: "' + item.content + '"');
    }
};

// create a Timeline
var container = document.getElementById('visualization');
timeline1 = new vis.Timeline(container, items, groups, options);

document.getElementById('window1').onclick = function() {
    timeline1.setWindow('2020-02-07T18:45:00', '2020-02-07T20:30:00');
  };

function handleDragStart(event) {
    var dragSrcEl = event.target;

    event.dataTransfer.effectAllowed = 'move';
    var itemType = event.target.innerHTML.split('-')[1].trim();
    var item = {
        id: new Date(),
        type: itemType,
        content: event.target.innerHTML.split('-')[0].trim()
    };

    event.dataTransfer.setData("text", JSON.stringify(item));
}

function handleObjectItemDragStart(event) {
    var dragSrcEl = event.target;

    event.dataTransfer.effectAllowed = 'move';
    var objectItem = {
        content: 'objectItemData',
        target: 'item'
    };
    event.dataTransfer.setData("text", JSON.stringify(objectItem));
}

var items = document.querySelectorAll('.items .item');

var objectItems = document.querySelectorAll('.object-item');

for (var i = items.length - 1; i >= 0; i--) {
    var item = items[i];
    item.addEventListener('dragstart', handleDragStart.bind(this), false);
}

for (var i = objectItems.length - 1; i >= 0; i--) {
    var objectItem = objectItems[i];
    objectItem.addEventListener('dragstart', handleObjectItemDragStart.bind(this), false);
}