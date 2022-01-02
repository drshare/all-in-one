import DefaultLayout from './DefaultLayout.vue';

const layoutMap = new Map();
function useLayout() {
    const layout = '';
    return layout ? layoutMap.get(layout) : DefaultLayout;
}
export default useLayout();
