import Home from '../components/Home';
import Contact from '../components/Contact';
import Article from '../components/Article';

export const roadMap = [
    { path: "/home", name: "Home", component: Home },
    { path: "/contact", name: "Contact", component: Contact },
    { path: "/article/:id/:title", name: "Article", component: Article },
    { redirect: true, path:"/", to:"/home", name: "Home"}
];
