
// create a dataset with items
// we specify the type of the fields `start` and `end` here to be strings
// containing an ISO date. The fields will be outputted as ISO dates
// automatically getting data from the DataSet via items.get().
var items = new vis.DataSet({
    type: { start: 'ISODate', end: 'ISODate' }
});
var groups = new vis.DataSet([
    {
        id: 'bar',
        content: 'bar',
        subgroupVisibility: { sg_1: true, sg_3: true }
    },
    {
        id: 'foo',
        content: 'foo'
    }
]);
// add items to the DataSet
items.add([
    { id: 'A', start: '2020-02-07T18:30:00', end: '2020-02-07T18:45:00', type: 'background', group: 'foo' },
    {
        id: 'B',
        start: '2020-02-07T18:30:00',
        end: '2020-02-07T18:45:00',
        type: 'background',
        group: 'foo',
        className: 'negative'
    },
    { id: 0, content: 'no subgroup', start: '2014-01-20', end: '2014-01-22', group: 'foo' },

    {
        id: 'SG_1_1',
        start: '2020-02-07T18:30:00',
        end: '2020-02-07T18:15:00',
        type: 'background',
        group: 'bar',
        subgroup: 'sg_1'
    },
    {
        id: 'SG_1_2',
        start: '2014-01-26',
        end: '2014-01-27',
        type: 'background',
        className: 'positive',
        group: 'bar',
        subgroup: 'sg_1'
    },
    {
        id: 1,
        content: 'subgroup0_1',
        start: '2014-01-23T12:00:00',
        end: '2014-01-26T12:00:00',
        group: 'bar',
        subgroup: 'sg_1'
    },
//    {
//        id: 2,
//        content: 'subgroup0_2',
//        start: '2014-01-22T12:00:01',
//        end: '2014-01-25T12:00:00',
//        group: 'bar',
//        subgroup: 'sg_1'
//    },
//
//    {
//        id: 'SG_2_1',
//        start: '2014-02-01',
//        end: '2014-02-02',
//        type: 'background',
//        group: 'bar',
//        subgroup: 'sg_2'
//    },
//    {
//        id: 'SG_2_2',
//        start: '2014-02-2',
//        end: '2014-02-03',
//        type: 'background',
//        className: 'negative',
//        group: 'bar',
//        subgroup: 'sg_2'
//    },
//    {
//        id: 3,
//        content: 'subgroup1_1',
//        start: '2014-01-27T02:00:00',
//        end: '2014-01-29',
//        group: 'bar',
//        subgroup: 'sg_2'
//    },
//    {
//        id: 4,
//        content: 'subgroup1_2',
//        start: '2014-01-28',
//        end: '2014-02-02',
//        group: 'bar',
//        subgroup: 'sg_2'
//    },
//
//    {
//        id: 'SG_3_1',
//        start: '2014-01-23',
//        end: '2014-01-25',
//        type: 'background',
//        group: 'bar',
//        subgroup: 'sg_3',
//        content: 'a'
//    },
//    {
//        id: 'SG_3_2',
//        start: '2014-01-26',
//        end: '2014-01-28',
//        type: 'background',
//        className: 'positive',
//        group: 'bar',
//        subgroup: 'sg_3',
//        content: 'b'
//    },
//    {
//        id: 5,
//        content: 'subgroup2_1',
//        start: '2014-01-23T12:00:00',
//        end: '2014-01-26T12:00:00',
//        group: 'bar',
//        subgroup: 'sg_3'
//    },
//    {
//        id: 6,
//        content: 'subgroup2_2',
//        start: '2014-01-26T12:00:01',
//        end: '2014-01-29T12:00:00',
//        group: 'bar',
//        subgroup: 'sg_3'
//    },
//
//    {
//        id: 'background',
//        start: '2014-01-29',
//        end: '2014-01-30',
//        type: 'background',
//        className: 'negative',
//        group: 'bar'
//    },
    {
        id: 'background_all',
        start: '2014-01-31',
        end: '2014-02-02',
        type: 'background',
        className: 'positive'
    }
]);

var container = document.getElementById('visualization');
var options = {
    // orientation:'top'
    start: '2014-01-10',
    end: '2014-02-10'
};

var timeline = new vis.Timeline(container, items, groups, options);

function toggleSubgroupVisibility(subgroup) {
    groups.get('bar').subgroupVisibility[subgroup] = !groups.get('bar').subgroupVisibility[subgroup];
    document.getElementById('subgVis' + subgroup).innerHTML = groups
        .get('bar')
        .subgroupVisibility[subgroup].toString();
    timeline.setGroups(groups);
}
