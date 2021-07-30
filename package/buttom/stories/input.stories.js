import AnButton from '../'

export default {
    title: 'Anbutton',
    component: AnButton
}

export const Button = () => ({
    components: { AnButton },
    template: '<an-button @click="handel">btn</an-button>',
    methods: {
        handel() {
            alert('我被点击了')
        }
    }
})