import { mount } from '@vue/test-utils'
import Element from '../src/link.vue'

describe('Anxx-Link', () => {
    test('link-to', () => {
        const wrapper = mount(Element, {
            propsData: {
              to: '/a'
            }
          })
        // expect(wrapper.text()).toBe('/a')
        expect(wrapper.html()).toContain('a href="/a"')
    })   
})
