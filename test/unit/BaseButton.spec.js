import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import BaseButton from '../../src/vue/components/BaseButton.vue'

describe('BaseButton.vue', () => {
	const wrapper = shallowMount(BaseButton)

	it('should contain class "BaseBtn"', () => {
		expect(wrapper.find('button:first-child').classes()).toContain('BaseBtn')
	})

	it('should have text "Base Button"', () => {
		expect(wrapper.find('button:first-child').text()).toEqual('Base Button')
	})
})


