/*
    Filename: layers.js
    Description:
        This vuex module handles the "layers" object generated by leaflet
        when converting the GeoJSON features into visible icons on the map
        component that we can interact with.

        In leaflet all visible points & things have a layer object where
        we can programmatically interact with the map graphical items.

        We index layers by their coordinates (it's the one thing we can guarantee
        will be unique to each GeoJSON feature).
*/

const state = {
  layers: {},
  tooltips: []
}

const getters = {
  getLayerByCoordinates: (state) => (coordinates) => {
    return state.layers[coordinates]
  }
}

const mutations = {
  addLayer: (state, { layer, coordinates }) => {
    state.layers[coordinates] = layer
  },
  addTooltip: (state, tooltipLayer) => {
    state.tooltips.push(tooltipLayer)
  },
  showTooltips: (state, _payload) => {
    state.tooltips.map(tooltip => tooltip.openTooltip())
  },
  hideTooltips: (state, _payload) => {
    state.tooltips.map(tooltip => tooltip.closeTooltip())
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}