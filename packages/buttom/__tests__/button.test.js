import btn from '../src/Button.vue'
import { mount } from '@vue/test-utils'

describe('an-button', () => {
    test('button-click', () => {
        const wrapper = mount(btn, {
            data() {
                return {
                  count: 0
                }
              },
              listeners: {
                click: function() {
                    wrapper.vm.count++
                }
              }
        })
        expect(wrapper.vm.count).toBe(0)
        const button = wrapper.find('button')
        button.trigger('click')
        expect(wrapper.vm.count).toBe(1)
    })
})