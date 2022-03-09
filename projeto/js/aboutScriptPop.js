window.onload = function () {
    console.log('here')
    var requestURL = 'projeto/js/db.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var items = request.response.items;
        var listAbout = [];
        var listGoals = [];
        var listProjects = [];

        let list = document.getElementById('about-content');
        console.log(list, 'list')
        items.forEach((element) => {
            if(element.category == 1){
                listAbout.push(element);
            } 
            if(element.category == 2){
                listGoals.push(element);
            }
            if(element.category == 3){
                listProjects.push(element);
            }
        })
        listAbout.forEach((element) => {
            const itemAbout = document.createElement('p');
            const itemAboutTitle = document.createElement('h1');

            const li = document.createElement('div');
            li.classList.add('content-description');
            li.classList.add('content-description');

            if(element.categoryLabel === 'title'){
                itemAboutTitle.classList.add('content-description');
                itemAboutTitle.innerHTML = element.description;
                li.appendChild(itemAboutTitle);

            } else{
                    itemAbout.classList.add('content-description');
                    itemAbout.innerHTML = element.description;
                    li.appendChild(itemAbout);
            }
        
            list.appendChild(li);
        })
       
       // item.classList.add('cat-' + element.category);
       
            
    }

}