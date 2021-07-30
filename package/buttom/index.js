import AnButton from './src/Button.vue'

AnButton.install = Vue => {
    Vue.component(AnButton.name, AnButton)
}

export default AnButton