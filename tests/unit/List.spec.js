import { mount } from "@vue/test-utils";
import List from "../../src/components/List.vue";

describe("List is rendered correctly", () => {
  const wrapper = mount(List);
  it("if no list item is provided List component displays text 'Add your first Todo task'", () => {
    expect(wrapper.contains(".list-item")).toBe(false);
    expect(wrapper.html()).toContain("Add your first Todo task");
  });
});
