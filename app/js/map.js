import ol from 'openlayers'

class Map {

  constructor() {
    this.layer = 'https://onxcluster4.onxmaps.com/arcgis/rest/services/1ParcelCoverage/ParcelCoverage/MapServer'
    this.basemap = new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'https://tiles.production.onxmaps.com/topo/global/{z}/{x}/{y}.png'
      })
    })
  }

	drawMap() {
		var map = new ol.Map({
      layers: [
        this.basemap
      ],
      target: 'map',
      view: new ol.View({
        maxZoom: 22,
        minZoom: 3,
      }),
    });
	}
}

const map = new Map()
export default map