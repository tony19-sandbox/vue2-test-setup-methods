import { shallowMount } from '@vue/test-utils'
import { getUsers } from '@/components/mylib'
import HelloWorld from '@/components/HelloWorld.vue'

jest.mock('@/components/mylib')

describe('HelloWorld.vue', () => {
  beforeEach(() => jest.resetAllMocks())

  it('calls getUsers() on mount', () => {
    shallowMount(HelloWorld)
    expect(getUsers).toHaveBeenCalledTimes(1)
  })
})
