import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import HomeListView from '../../../../pages/_home/HomeListView.vue';
import { createTestingPinia } from '@pinia/testing'
import LoadingSkeletonGrid from '../../../../_components/Utils/LoadingSkeletonGrid.vue';
import CardMovie from '../../../../_components/Utils/Card/CardMovie.vue';

const factory = (initialState = {}) => mount(HomeListView, {
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

describe('HomeListView', () => {
    describe('And loading is true', () => {
        it('Then render LoadingSkeletonGrid component', async () => {
            const wrapper = factory({ loading: true });
            await wrapper.vm.$nextTick();
            expect(wrapper.findComponent(LoadingSkeletonGrid).exists()).toEqual(true);
        });
    });

    describe('And loading is false', () => {
        beforeEach(() => {
            vi.clearAllMocks();
        });

        it('Then render list of movies', async () => {
            const wrapper = factory({
                loading: false,
                movies: [
                    {
                        id: 1,
                        title: 'Movie 1',
                        poster_path: 'path',
                        vote_average: 5,
                        release_date: '2021-01-01',
                    },
                    {
                        id: 2,
                        title: 'Movie 2',
                        poster_path: 'path',
                        vote_average: 5,
                        release_date: '2021-01-01',
                    },
                ],
            });

            await wrapper.vm.$nextTick();
            expect(wrapper.findAllComponents(CardMovie).length).toEqual(2);
        });
    });
});