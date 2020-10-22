import Home from './components/Home.vue';
import About from './components/About.vue';
import Gallery from './components/Gallery/Gallery.vue';


export const routes = [
    {path: '/', component: Home},
    {path: '/gallery', component: Gallery},
    {path: '/about', component: About},
];