var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_StopOvers2025021709_00_32_1 = new ol.format.GeoJSON();
var features_StopOvers2025021709_00_32_1 = format_StopOvers2025021709_00_32_1.readFeatures(json_StopOvers2025021709_00_32_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopOvers2025021709_00_32_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopOvers2025021709_00_32_1.addFeatures(features_StopOvers2025021709_00_32_1);
var lyr_StopOvers2025021709_00_32_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StopOvers2025021709_00_32_1, 
                style: style_StopOvers2025021709_00_32_1,
                popuplayertitle: 'StopOvers-2025-02-17 09_00_32',
                interactive: true,
                title: '<img src="styles/legend/StopOvers2025021709_00_32_1.png" /> StopOvers-2025-02-17 09_00_32'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_StopOvers2025021709_00_32_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_StopOvers2025021709_00_32_1];
lyr_StopOvers2025021709_00_32_1.set('fieldAliases', {'Name': 'Name', 'Description': 'Description', 'Photo': 'Photo', 'Photo2': 'Photo2', 'accuracy': 'accuracy', 'date': 'date', 'time': 'time', 'mode': 'mode', });
lyr_StopOvers2025021709_00_32_1.set('fieldImages', {'Name': '', 'Description': '', 'Photo': '', 'Photo2': '', 'accuracy': '', 'date': '', 'time': '', 'mode': '', });
lyr_StopOvers2025021709_00_32_1.set('fieldLabels', {'Name': 'no label', 'Description': 'no label', 'Photo': 'no label', 'Photo2': 'no label', 'accuracy': 'no label', 'date': 'no label', 'time': 'no label', 'mode': 'no label', });
lyr_StopOvers2025021709_00_32_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});