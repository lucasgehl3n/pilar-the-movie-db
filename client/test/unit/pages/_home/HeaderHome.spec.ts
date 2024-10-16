import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import HeaderHome from '../../../../pages/_home/HeaderHome.vue';
import Tab from '../../../../_components/Utils/Tab.vue';
import FiltersGroup from '../../../../_components/Utils/Filters/FiltersGroup.vue';
import { createTestingPinia } from '@pinia/testing'

const factory = () => {
    return mount(HeaderHome, {
        global: {
            mocks: {
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn,
                        stubActions: true,
                    }),
                ],
            },
        },
    });
};

describe('When HeaderHome.vue is rendered', () => {
    describe('Then render FiltersGroup component', () => {
        it('Then render FiltersGroup component', () => {
            const wrapper = factory();
            expect(wrapper.findComponent(FiltersGroup).exists()).toBe(true);
        });
    });

    describe('Then render Tab component', () => {
        it('Then render Tab component', () => {
            const wrapper = factory();
            const tabComponent = wrapper.findComponent(Tab);
            expect(tabComponent.exists()).toBe(true);
        });

        it('Then Tab component has correct props', () => {
            const wrapper = factory();
            const tabComponent = wrapper.findComponent(Tab);
            expect(tabComponent.props('tabs')).toEqual(['Popular', 'Tendência']);
        });
    });
});