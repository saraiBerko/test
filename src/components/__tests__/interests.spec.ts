import { describe, it, expect, beforeAll, vi } from 'vitest'
import { useBaseStore } from "../../stores/BaseStore"
import { useInterestsStore } from "../../stores/InterestsStore"
import { shallowMount } from '@vue/test-utils'
import Interests from '../interests-panel/interests.vue'

describe('Test Interests component', () => {

  let interestsStore: any = null
  let baseStore: any = null
  beforeAll(async () => {
    interestsStore = useInterestsStore()
    baseStore = useBaseStore()
  })

  it('Test getInterestsString func', () => {
    const wrapper = shallowMount(Interests)
    const interestsString = await wrapper.vm.getInterestsString(['a', 'b', 'c'])
    expect(interestsString).toEqual = 'a, b, c'
  })

  it('Test setSelectedInterests func', () => {
    const wrapper = shallowMount(Interests)
    await wrapper.vm.getInterestsString(['a', 'b', 'c'], 0)
    expect(wrapper.vm.selectedInterests[0]).toEqual = ['a', 'b', 'c']
    expect(wrapper.vm.displayEmptyAlert).toBeFalsy()
  })
  
  it('Test submitUserInterestsSelection func', () => {
    const wrapper = shallowMount(Interests)
    const spyGetRecommendationByInterests = vi.spyOn(wrapper.vm, getRecommendationByInterests)
    await wrapper.vm.submitUserInterestsSelection()
    expect(spyGetRecommendationByInterests).toHaveBeenCalled()
  })
})
