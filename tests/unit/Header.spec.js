import { mount} from '@vue/test-utils'
import Header from "../../src/components/Header.vue";

describe('Header is rendered correctly', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(Header)

    // Check that this component properly displays today's date

    it('Renders the correct date', () => {
        let today = new Date();
        let date = today.getDate() < 10 ?  `0${today.getDate()}` : today.getDate();
        expect(wrapper.html()).toContain(date)
    })
	
	it('Renders the correct day', () =>{
		let today = new Date();
		let weekday = today.toLocaleDateString('en-US', { weekday: 'long' });
		expect(wrapper.html()).toContain(weekday.toUpperCase())
	})
	
	it('Renders the correct year', () =>{
		let today = new Date();
		let year = today.toLocaleDateString('en-US', {year: 'numeric'});
		expect(wrapper.html()).toContain(year)
	})
	
	it('Renders the correct month', () =>{
		let today = new Date();
		let month = today.toLocaleDateString('en-US', {month: 'short'});
		expect(wrapper.html()).toContain(month.toUpperCase())
	})
});

