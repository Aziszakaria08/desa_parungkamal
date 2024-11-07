var wms_layers = [];

var format_gadm41_IDNADM_ADM_4_0 = new ol.format.GeoJSON();
var features_gadm41_IDNADM_ADM_4_0 = format_gadm41_IDNADM_ADM_4_0.readFeatures(json_gadm41_IDNADM_ADM_4_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_IDNADM_ADM_4_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_IDNADM_ADM_4_0.addFeatures(features_gadm41_IDNADM_ADM_4_0);
var lyr_gadm41_IDNADM_ADM_4_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_IDNADM_ADM_4_0, 
                style: style_gadm41_IDNADM_ADM_4_0,
                popuplayertitle: "gadm41_IDN — ADM_ADM_4",
                interactive: false,
                title: '<img src="styles/legend/gadm41_IDNADM_ADM_4_0.png" /> gadm41_IDN — ADM_ADM_4'
            });
var format_hutan_sawah_1 = new ol.format.GeoJSON();
var features_hutan_sawah_1 = format_hutan_sawah_1.readFeatures(json_hutan_sawah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hutan_sawah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hutan_sawah_1.addFeatures(features_hutan_sawah_1);
var lyr_hutan_sawah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hutan_sawah_1, 
                style: style_hutan_sawah_1,
                popuplayertitle: "hutan_sawah",
                interactive: true,
    title: 'hutan_sawah<br />\
    <img src="styles/legend/hutan_sawah_1_0.png" /> hutan<br />\
    <img src="styles/legend/hutan_sawah_1_1.png" /> sawah<br />'
        });
var format_sungaikecil_2 = new ol.format.GeoJSON();
var features_sungaikecil_2 = format_sungaikecil_2.readFeatures(json_sungaikecil_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungaikecil_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungaikecil_2.addFeatures(features_sungaikecil_2);
var lyr_sungaikecil_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungaikecil_2, 
                style: style_sungaikecil_2,
                popuplayertitle: "sungai kecil",
                interactive: true,
                title: '<img src="styles/legend/sungaikecil_2.png" /> sungai kecil'
            });
var format_sungai_river_3 = new ol.format.GeoJSON();
var features_sungai_river_3 = format_sungai_river_3.readFeatures(json_sungai_river_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_river_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_river_3.addFeatures(features_sungai_river_3);
var lyr_sungai_river_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_river_3, 
                style: style_sungai_river_3,
                popuplayertitle: "sungai_river",
                interactive: true,
                title: '<img src="styles/legend/sungai_river_3.png" /> sungai_river'
            });
var format_rt_rw_4 = new ol.format.GeoJSON();
var features_rt_rw_4 = format_rt_rw_4.readFeatures(json_rt_rw_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rt_rw_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rt_rw_4.addFeatures(features_rt_rw_4);
var lyr_rt_rw_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rt_rw_4, 
                style: style_rt_rw_4,
                popuplayertitle: "rt_rw",
                interactive: true,
    title: 'rt_rw<br />\
    <img src="styles/legend/rt_rw_4_0.png" /> RT 001 RW 1<br />\
    <img src="styles/legend/rt_rw_4_1.png" /> RT 002 RW 1<br />\
    <img src="styles/legend/rt_rw_4_2.png" /> RT 003 RW 1<br />\
    <img src="styles/legend/rt_rw_4_3.png" /> RT 005 RW 1<br />\
    <img src="styles/legend/rt_rw_4_4.png" /> RT 007 RW 2<br />\
    <img src="styles/legend/rt_rw_4_5.png" /> RT 008 RW 2<br />\
    <img src="styles/legend/rt_rw_4_6.png" /> RT 009 RW2<br />\
    <img src="styles/legend/rt_rw_4_7.png" /> RT 010 RW 3<br />\
    <img src="styles/legend/rt_rw_4_8.png" /> RT 011 RW 3<br />\
    <img src="styles/legend/rt_rw_4_9.png" /> RT 012 RW 3<br />\
    <img src="styles/legend/rt_rw_4_10.png" /> RT 013 RW 4<br />\
    <img src="styles/legend/rt_rw_4_11.png" /> RT 015 RW 4<br />\
    <img src="styles/legend/rt_rw_4_12.png" /> RT 016 RW 5<br />\
    <img src="styles/legend/rt_rw_4_13.png" /> RT 018 RW 6<br />\
    <img src="styles/legend/rt_rw_4_14.png" /> RT 019 RW 6<br />\
    <img src="styles/legend/rt_rw_4_15.png" /> RT 020 RW 6<br />\
    <img src="styles/legend/rt_rw_4_16.png" /> RT 021 RW 7<br />\
    <img src="styles/legend/rt_rw_4_17.png" /> RT 022 RW 7<br />\
    <img src="styles/legend/rt_rw_4_18.png" /> RT 023 RW 7<br />\
    <img src="styles/legend/rt_rw_4_19.png" /> RT 024 RW 8<br />\
    <img src="styles/legend/rt_rw_4_20.png" /> RT 025 RW 8<br />\
    <img src="styles/legend/rt_rw_4_21.png" /> RT 17 RW 6<br />\
    <img src="styles/legend/rt_rw_4_22.png" /> RT 004 RW 2<br />\
    <img src="styles/legend/rt_rw_4_23.png" /> RT 005 RW 2<br />\
    <img src="styles/legend/rt_rw_4_24.png" /> RT 006 RW 2<br />\
    <img src="styles/legend/rt_rw_4_25.png" /> RT 007 RW 3<br />\
    <img src="styles/legend/rt_rw_4_26.png" /> RT 008 RW 3<br />\
    <img src="styles/legend/rt_rw_4_27.png" /> RT 009 RW 3<br />\
    <img src="styles/legend/rt_rw_4_28.png" /> RT 010 RW 4<br />\
    <img src="styles/legend/rt_rw_4_29.png" /> RT 011 RW 4<br />\
    <img src="styles/legend/rt_rw_4_30.png" /> RT 012 RW 4<br />\
    <img src="styles/legend/rt_rw_4_31.png" /> RT 013 RW 5<br />\
    <img src="styles/legend/rt_rw_4_32.png" /> RT 014 RW 5<br />\
    <img src="styles/legend/rt_rw_4_33.png" /> RT 015 RW 6<br />\
    <img src="styles/legend/rt_rw_4_34.png" /> RT 016 RW 6<br />\
    <img src="styles/legend/rt_rw_4_35.png" /> RT 017 RW 6<br />\
    <img src="styles/legend/rt_rw_4_36.png" /> RT 018 RW 7<br />\
    <img src="styles/legend/rt_rw_4_37.png" /> RT 019 RW 7<br />\
    <img src="styles/legend/rt_rw_4_38.png" /> RT 020 RW 8<br />\
    <img src="styles/legend/rt_rw_4_39.png" /> RT 021 RW 8<br />'
        });
var format_jalan_residental_5 = new ol.format.GeoJSON();
var features_jalan_residental_5 = format_jalan_residental_5.readFeatures(json_jalan_residental_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_residental_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_residental_5.addFeatures(features_jalan_residental_5);
var lyr_jalan_residental_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_residental_5, 
                style: style_jalan_residental_5,
                popuplayertitle: "jalan_residental",
                interactive: true,
                title: '<img src="styles/legend/jalan_residental_5.png" /> jalan_residental'
            });
var format_jalan_tertiary_6 = new ol.format.GeoJSON();
var features_jalan_tertiary_6 = format_jalan_tertiary_6.readFeatures(json_jalan_tertiary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_tertiary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_tertiary_6.addFeatures(features_jalan_tertiary_6);
var lyr_jalan_tertiary_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_tertiary_6, 
                style: style_jalan_tertiary_6,
                popuplayertitle: "jalan_tertiary",
                interactive: true,
                title: '<img src="styles/legend/jalan_tertiary_6.png" /> jalan_tertiary'
            });
var format_parungkamal_poly_fix_7 = new ol.format.GeoJSON();
var features_parungkamal_poly_fix_7 = format_parungkamal_poly_fix_7.readFeatures(json_parungkamal_poly_fix_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parungkamal_poly_fix_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parungkamal_poly_fix_7.addFeatures(features_parungkamal_poly_fix_7);
var lyr_parungkamal_poly_fix_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parungkamal_poly_fix_7, 
                style: style_parungkamal_poly_fix_7,
                popuplayertitle: "parungkamal_poly_fix",
                interactive: true,
                title: '<img src="styles/legend/parungkamal_poly_fix_7.png" /> parungkamal_poly_fix'
            });
var format_jalan_trunk_8 = new ol.format.GeoJSON();
var features_jalan_trunk_8 = format_jalan_trunk_8.readFeatures(json_jalan_trunk_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_trunk_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_trunk_8.addFeatures(features_jalan_trunk_8);
var lyr_jalan_trunk_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_trunk_8, 
                style: style_jalan_trunk_8,
                popuplayertitle: "jalan_trunk",
                interactive: true,
                title: '<img src="styles/legend/jalan_trunk_8.png" /> jalan_trunk'
            });
var format_point_parungkamal_9 = new ol.format.GeoJSON();
var features_point_parungkamal_9 = format_point_parungkamal_9.readFeatures(json_point_parungkamal_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_parungkamal_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_parungkamal_9.addFeatures(features_point_parungkamal_9);
var lyr_point_parungkamal_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_parungkamal_9, 
                style: style_point_parungkamal_9,
                popuplayertitle: "point_parungkamal",
                interactive: true,
                title: '<img src="styles/legend/point_parungkamal_9.png" /> point_parungkamal'
            });
var format_dusun_10 = new ol.format.GeoJSON();
var features_dusun_10 = format_dusun_10.readFeatures(json_dusun_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dusun_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dusun_10.addFeatures(features_dusun_10);
var lyr_dusun_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dusun_10, 
                style: style_dusun_10,
                popuplayertitle: "dusun",
                interactive: true,
                title: '<img src="styles/legend/dusun_10.png" /> dusun'
            });
var format_parungkamal_point_11 = new ol.format.GeoJSON();
var features_parungkamal_point_11 = format_parungkamal_point_11.readFeatures(json_parungkamal_point_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parungkamal_point_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parungkamal_point_11.addFeatures(features_parungkamal_point_11);
var lyr_parungkamal_point_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parungkamal_point_11, 
                style: style_parungkamal_point_11,
                popuplayertitle: "parungkamal_point",
                interactive: false,
                title: '<img src="styles/legend/parungkamal_point_11.png" /> parungkamal_point'
            });

lyr_gadm41_IDNADM_ADM_4_0.setVisible(true);lyr_hutan_sawah_1.setVisible(true);lyr_sungaikecil_2.setVisible(true);lyr_sungai_river_3.setVisible(true);lyr_rt_rw_4.setVisible(true);lyr_jalan_residental_5.setVisible(true);lyr_jalan_tertiary_6.setVisible(true);lyr_parungkamal_poly_fix_7.setVisible(true);lyr_jalan_trunk_8.setVisible(true);lyr_point_parungkamal_9.setVisible(true);lyr_dusun_10.setVisible(true);lyr_parungkamal_point_11.setVisible(true);
var layersList = [lyr_gadm41_IDNADM_ADM_4_0,lyr_hutan_sawah_1,lyr_sungaikecil_2,lyr_sungai_river_3,lyr_rt_rw_4,lyr_jalan_residental_5,lyr_jalan_tertiary_6,lyr_parungkamal_poly_fix_7,lyr_jalan_trunk_8,lyr_point_parungkamal_9,lyr_dusun_10,lyr_parungkamal_point_11];
lyr_gadm41_IDNADM_ADM_4_0.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_hutan_sawah_1.set('fieldAliases', {'id': 'id', 'nama_tmpt': 'nama_tmpt', });
lyr_sungaikecil_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_sungai_river_3.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_rt_rw_4.set('fieldAliases', {'id': 'id', 'nama rt/rw': 'nama rt/rw', 'dusun': 'dusun', });
lyr_jalan_residental_5.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_jalan_tertiary_6.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_parungkamal_poly_fix_7.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'railway': 'railway', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'amenity': 'amenity', 'name': 'name', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'denominati': 'denominati', 'historic': 'historic', 'status': 'status', 'aeroway': 'aeroway', 'leisure': 'leisure', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'highway': 'highway', 'water': 'water', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', });
lyr_jalan_trunk_8.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_point_parungkamal_9.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'jenis': 'jenis', });
lyr_dusun_10.set('fieldAliases', {'id': 'id', 'nama_dusun': 'nama_dusun', });
lyr_parungkamal_point_11.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'railway': 'railway', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'amenity': 'amenity', 'name': 'name', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'denominati': 'denominati', 'historic': 'historic', 'status': 'status', 'aeroway': 'aeroway', 'leisure': 'leisure', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'highway': 'highway', 'water': 'water', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', });
lyr_gadm41_IDNADM_ADM_4_0.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_hutan_sawah_1.set('fieldImages', {'id': 'TextEdit', 'nama_tmpt': 'TextEdit', });
lyr_sungaikecil_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_sungai_river_3.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_rt_rw_4.set('fieldImages', {'id': 'TextEdit', 'nama rt/rw': 'TextEdit', 'dusun': 'TextEdit', });
lyr_jalan_residental_5.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_jalan_tertiary_6.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_parungkamal_poly_fix_7.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'health_fac': 'TextEdit', 'depth': 'TextEdit', 'office': 'TextEdit', 'railway': 'TextEdit', 'operator_t': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'rooms': 'TextEdit', 'tourism': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'staff_coun': 'TextEdit', 'public_tra': 'TextEdit', 'width': 'TextEdit', 'access': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'beds': 'TextEdit', 'covered': 'TextEdit', 'landuse': 'TextEdit', 'staff_co_1': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'healthcare': 'TextEdit', 'opening_ho': 'TextEdit', 'government': 'TextEdit', 'isced_leve': 'TextEdit', 'denominati': 'TextEdit', 'historic': 'TextEdit', 'status': 'TextEdit', 'aeroway': 'TextEdit', 'leisure': 'TextEdit', 'toilets_di': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'health_f_1': 'TextEdit', 'emergency': 'TextEdit', 'highway': 'TextEdit', 'water': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'toilets_ha': 'TextEdit', 'health_f_2': 'TextEdit', 'layer': 'TextEdit', 'military': 'TextEdit', 'shop': 'TextEdit', 'medical_sy': 'TextEdit', 'addr_house': 'TextEdit', 'religion': 'TextEdit', });
lyr_jalan_trunk_8.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_point_parungkamal_9.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'jenis': 'TextEdit', });
lyr_dusun_10.set('fieldImages', {'id': 'TextEdit', 'nama_dusun': 'TextEdit', });
lyr_parungkamal_point_11.set('fieldImages', {'osm_id': '', 'osm_type': '', 'health_fac': '', 'depth': '', 'office': '', 'railway': '', 'operator_t': '', 'blockage': '', 'roof_mater': '', 'rooms': '', 'tourism': '', 'amenity': '', 'name': '', 'staff_coun': '', 'public_tra': '', 'width': '', 'access': '', 'bridge': '', 'smoothness': '', 'beds': '', 'covered': '', 'landuse': '', 'staff_co_1': '', 'diameter': '', 'access_roo': '', 'building_m': '', 'healthcare': '', 'opening_ho': '', 'government': '', 'isced_leve': '', 'denominati': '', 'historic': '', 'status': '', 'aeroway': '', 'leisure': '', 'toilets_di': '', 'waterway': '', 'parking': '', 'tunnel': '', 'building': '', 'operator': '', 'barrier': '', 'capacity': '', 'man_made': '', 'health_f_1': '', 'emergency': '', 'highway': '', 'water': '', 'surface': '', 'pump': '', 'natural': '', 'oneway': '', 'addr_stree': '', 'toilets_ha': '', 'health_f_2': '', 'layer': '', 'military': '', 'shop': '', 'medical_sy': '', 'addr_house': '', 'religion': '', });
lyr_gadm41_IDNADM_ADM_4_0.set('fieldLabels', {'fid': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_hutan_sawah_1.set('fieldLabels', {'id': 'hidden field', 'nama_tmpt': 'no label', });
lyr_sungaikecil_2.set('fieldLabels', {'id': 'hidden field', 'nama': 'hidden field', });
lyr_sungai_river_3.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'hidden field', 'depth': 'hidden field', 'railway': 'no label', 'blockage': 'hidden field', 'amenity': 'hidden field', 'name': 'inline label - visible with data', 'width': 'hidden field', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_rt_rw_4.set('fieldLabels', {'id': 'hidden field', 'nama rt/rw': 'header label - always visible', 'dusun': 'no label', });
lyr_jalan_residental_5.set('fieldLabels', {'osm_id': 'inline label - always visible', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_jalan_tertiary_6.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'hidden field', 'depth': 'hidden field', 'railway': 'no label', 'blockage': 'hidden field', 'amenity': 'header label - always visible', 'name': 'header label - visible with data', 'width': 'inline label - always visible', 'public_tra': 'hidden field', 'bridge': 'hidden field', 'smoothness': 'hidden field', 'landuse': 'hidden field', 'covered': 'hidden field', 'diameter': 'hidden field', 'aeroway': 'hidden field', 'waterway': 'hidden field', 'parking': 'hidden field', 'tunnel': 'hidden field', 'building': 'hidden field', 'operator': 'hidden field', 'barrier': 'hidden field', 'capacity': 'hidden field', 'man_made': 'hidden field', 'water': 'hidden field', 'highway': 'hidden field', 'surface': 'hidden field', 'pump': 'hidden field', 'oneway': 'hidden field', 'layer': 'hidden field', 'natural': 'hidden field', });
lyr_parungkamal_poly_fix_7.set('fieldLabels', {'osm_id': 'hidden field', 'osm_type': 'hidden field', 'health_fac': 'hidden field', 'depth': 'hidden field', 'office': 'hidden field', 'railway': 'hidden field', 'operator_t': 'hidden field', 'blockage': 'hidden field', 'roof_mater': 'hidden field', 'rooms': 'hidden field', 'tourism': 'hidden field', 'amenity': 'hidden field', 'name': 'header label - always visible', 'staff_coun': 'hidden field', 'public_tra': 'hidden field', 'width': 'hidden field', 'access': 'hidden field', 'bridge': 'hidden field', 'smoothness': 'hidden field', 'beds': 'hidden field', 'covered': 'hidden field', 'landuse': 'hidden field', 'staff_co_1': 'hidden field', 'diameter': 'hidden field', 'access_roo': 'hidden field', 'building_m': 'hidden field', 'healthcare': 'hidden field', 'opening_ho': 'hidden field', 'government': 'inline label - always visible', 'isced_leve': 'hidden field', 'denominati': 'hidden field', 'historic': 'hidden field', 'status': 'hidden field', 'aeroway': 'hidden field', 'leisure': 'hidden field', 'toilets_di': 'hidden field', 'waterway': 'hidden field', 'parking': 'hidden field', 'tunnel': 'hidden field', 'building': 'hidden field', 'operator': 'hidden field', 'barrier': 'hidden field', 'capacity': 'hidden field', 'man_made': 'hidden field', 'health_f_1': 'hidden field', 'emergency': 'hidden field', 'highway': 'hidden field', 'water': 'hidden field', 'surface': 'hidden field', 'pump': 'hidden field', 'natural': 'hidden field', 'oneway': 'hidden field', 'addr_stree': 'hidden field', 'toilets_ha': 'hidden field', 'health_f_2': 'hidden field', 'layer': 'hidden field', 'military': 'hidden field', 'shop': 'hidden field', 'medical_sy': 'hidden field', 'addr_house': 'hidden field', 'religion': 'hidden field', });
lyr_jalan_trunk_8.set('fieldLabels', {'osm_id': 'hidden field', 'osm_type': 'hidden field', 'depth': 'hidden field', 'railway': 'hidden field', 'blockage': 'hidden field', 'amenity': 'hidden field', 'name': 'header label - always visible', 'width': 'inline label - visible with data', 'public_tra': 'hidden field', 'bridge': 'hidden field', 'smoothness': 'hidden field', 'landuse': 'hidden field', 'covered': 'hidden field', 'diameter': 'hidden field', 'aeroway': 'hidden field', 'waterway': 'hidden field', 'parking': 'hidden field', 'tunnel': 'hidden field', 'building': 'no label', 'operator': 'hidden field', 'barrier': 'hidden field', 'capacity': 'hidden field', 'man_made': 'hidden field', 'water': 'hidden field', 'highway': 'hidden field', 'surface': 'hidden field', 'pump': 'hidden field', 'oneway': 'hidden field', 'layer': 'hidden field', 'natural': 'hidden field', });
lyr_point_parungkamal_9.set('fieldLabels', {'id': 'hidden field', 'nama': 'header label - always visible', 'jenis': 'inline label - always visible', });
lyr_dusun_10.set('fieldLabels', {'id': 'hidden field', 'nama_dusun': 'header label - always visible', });
lyr_parungkamal_point_11.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'railway': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'amenity': 'no label', 'name': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'denominati': 'no label', 'historic': 'no label', 'status': 'no label', 'aeroway': 'no label', 'leisure': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'highway': 'no label', 'water': 'no label', 'surface': 'no label', 'pump': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'religion': 'no label', });
lyr_parungkamal_point_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});