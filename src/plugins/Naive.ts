import {
    // create naive ui
    create,
    // component
    NButton,
    NCard,
    NBackTop,
    NConfigProvider,
    NLayout,
} from 'naive-ui';

const naive = create({
    components: [NButton, NCard, NBackTop, NConfigProvider, NLayout],
});

export default naive;
