import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import UserList from '../components/UserList.vue'
import { generateUsers } from '../helpers'

describe('UserList test suite', () => {
  it('should render a list of 5 users', () => {
    const users = generateUsers(5)
    expect(UserList).toBeTruthy();

    const wrapper = mount(UserList, {
      props: {
        users
      }
    });
    expect(wrapper.find('.user-list').classes()).toContain('user-list')
    expect(wrapper.findAll('.user-item')).toHaveLength(5)
  })
})