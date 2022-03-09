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

        let list = document.getElementById('goals-content');
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
        listGoals.forEach((element) => {
            const itemGoal = document.createElement('p');
            const itemGoalTitle = document.createElement('h1');

            const li = document.createElement('div');
            li.classList.add('content-description');
            // li.classList.add('content-description');
            // li.classList.remove('list-style-type: none');

            if(element.categoryLabel === 'title'){
                itemGoalTitle.classList.add('content-description');
                itemGoalTitle.innerHTML = element.description;
                li.appendChild(itemGoalTitle);

            } else{
                    itemGoal.classList.add('content-description');
                    itemGoal.innerHTML = element.description;
                    li.appendChild(itemGoal);
            }
        
            list.appendChild(li);
        })
       
       // item.classList.add('cat-' + element.category);
       
            
    }

}