import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import Index from '../../../pages/index.vue';
import HeaderHome from '../../../pages/_home/HeaderHome.vue';
import HomeListView from '../../../pages/_home/HomeListView.vue';
import { createTestingPinia } from '@pinia/testing'

vi.mock('vue-router', () => ({
    ...vi.importActual('vue-router'),
    useRoute: () => ({
      params: {
        id: '1', 
      },
    }),
  }));
  
const factory = (initialState = {}) => mount(Index, {
    global: {
        plugins: [
            createTestingPinia({
                createSpy: vi.fn,
                stubActions: true,
                initialState: {
                    movies: {
                        ...initialState,
                    },
                },
            }),
        ],
    },
});

describe('When index.vue is rendered', () => {
    it('Then render HeaderHome component', () => {
        const wrapper = factory();
        expect(wrapper.findComponent(HeaderHome).exists()).toBe(true);
    });

    it('Then render HomeListView component', () => {
        const wrapper = factory();
        expect(wrapper.findComponent(HomeListView).exists()).toBe(true);
    });
});