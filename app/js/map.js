import ol from 'openlayers'

class Map {

	drawMap() {
		console.log('drawing')

		var map = new ol.Map({
      // layers: [
      //   // basemaps
      //   layers.basemaps.topoGlobal,
      //   layers.basemaps.topoUs,

      //   // overlays - apply counties and then states on top
      //   layers.overlays.counties.chipLayer,
      //   layers.overlays.counties.appLayer,
      //   layers.overlays.states
      // ],
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