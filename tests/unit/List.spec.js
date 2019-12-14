import { mount} from '@vue/test-utils'
import List from "../../src/components/List.vue";

describe('List is rendered correctly', () => {
    const wrapper = mount(List)
    it('Add your first Todo task is displayed with no items', () => {
        expect(wrapper.html()).toContain('Add your first Todo task')
    })
});