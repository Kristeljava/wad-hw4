import { mount } from "@vue/test-utils";
import Footer from "../../src/components/Footer.vue";

describe("Footer is rendered correctly", () => {
  const wrapper = mount(Footer);
  it("'+' button is clicked in Footer component 'open' property in Footer component changes to true", () => {
    wrapper.find("span").trigger("click");
    expect(wrapper.vm.open).toBe(true);
  });
});
