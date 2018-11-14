const routes = [
    {file: 'views/hikes.html', label: 'Hiking'},
    {file: 'views/parks.html', label: 'Parks'}
];


export default function buildNavigation(parent) {

    routes.forEach(element => {
        let listElement = document.createElement('li');
        listElement.innerHTML = '<a href="#">' + element.label + '</a>';
        parent.appendChild(listElement);
        addNavEvent(listElement, element.file);
    });
};

function getView(viewPath) {
    return fetch(viewPath).then((response) => {
      return response.text();  
    })
    .catch(err => {
        console.log('something went wrong', err);
    })
}

function addNavEvent(element, path) {

    element.addEventListener("touchend", (e) => {
        insertView(getView(path)); 
    });
}

function insertView(viewPromise) {
    const contentElement = document.getElementById('content');
    viewPromise.then((data) => {
        contentElement.innerHTML = data;
    });
}