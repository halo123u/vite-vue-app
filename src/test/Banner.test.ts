import { describe, it, expect } from "vitest"
import { mount } from '@vue/test-utils'
import Banner from '../components/Banner.vue'

describe('Banner Component', () => {
  it('should render banner', () => {
    expect(Banner).toBeTruthy()

    const wrapper = mount(Banner, {
      props: {
        msg: 'Hello world'
      }
    })

    expect(wrapper.text()).toContain('Hello world')
    expect(wrapper.classes()).toContain('banner')

  })
})