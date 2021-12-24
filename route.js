const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
    
};

const routes = {
    404: "/404.html",
    "/": "/home.html",
    "/resource": "/resource.html",
    "/bonus": "/bonus.html",
    "/contributer": "/contributer.html",
};


const handleLocation =  () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    fetch(route).then((data) => data.text().then((text)=> {
        document.getElementById("main-page").innerHTML = text;
    }));
};

window.onpopstate = handleLocation;
window.route = route;
window.onpopstate()

handleLocation();

