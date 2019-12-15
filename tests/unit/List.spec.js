import { mount } from "@vue/test-utils";
import List from "../../src/components/List.vue";
import Item from "../../src/models/Item";

describe("List is rendered correctly", () => {
  

  it("if no list item is provided List component displays text 'Add your first Todo task'", () => {
    const wrapper = mount(List)
    expect(wrapper.contains(".list-item")).toBe(false);
    expect(wrapper.html()).toContain("Add your first Todo task");
  });

  it("when an item in the list is marked as done, item is updated correctly. #1",() => {
    const wrapper = mount(List,{
      propsData: {
  
        list: [
          new Item("car"),
          new Item("bath"),
          new Item("eat")]
      }
    })

    wrapper.find(".list-item:nth-of-type(2) span").trigger("click")
    expect(wrapper.props().list[0].done).toBe(false)
    expect(wrapper.props().list[1].done).toBe(true)
    expect(wrapper.props().list[2].done).toBe(false)

  });

});
