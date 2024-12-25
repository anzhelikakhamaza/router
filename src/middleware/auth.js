export default function auth({ next }) {
    const isAuthenticated = localStorage.getItem('authToken');

    if(!isAuthenticated){
        return next('/login');
    }
    next();
}