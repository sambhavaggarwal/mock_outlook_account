import Landing from '../components/Landing/index';
import Chat from '../components/Chat/index';
import Calendar from '../components/Calendar/index';
import Notes from '../components/Notes/index';

export default [
    {
        exact: true,
        path: "/",
        component: Landing
    },
    {
        exact: true,
        path: "/chat",
        component: Chat
    },
    {
        exact: true,
        path: "/calendar",
        component: Calendar
    },
    {
        exact: true,
        path: "/notes",
        component: Notes
    },
];