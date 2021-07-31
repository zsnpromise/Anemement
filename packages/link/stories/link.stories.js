import AnxxLink from '../src/link.vue'

export default {
  title: 'AnxxLink',
  component: AnxxLink
}

export const Link = _ => ({
  components: { AnxxLink },
  template: `
    <div>
      <Anxx-link></Anxx-link>
    </div>
  `
})