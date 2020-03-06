function showTodos(){

    $.ajax({
        method : 'GET',
        url : 'http://localhost:3000/cookplans',
        headers : {
            token : localStorage.getItem('token'),
        }
    })

        .done (function(response){
            
            $('.card-container').empty() ;
            response.data.forEach(element => {
                let due_date = new Date (element.due_date)
                let year = due_date.getFullYear() ;
                let month = due_date.getMonth() + 1 ;
                let day = due_date.getDate() + 1 ;

                if (month < 10){
                    month = `0${month}`
                }
                if (day < 10){
                    day = `0${day}`
                }
                let formatted_date = day  + "-" + month + "-" + year ;

                $('.card-container').append(`
                <div class="card-todo" id=card-${element.id}>
                    ${element.name}<br>
                    ${element.goals}<br>
                    ${formatted_date}<br>
                    <a href="${elemement.recipe_link}">Get Receipe</a>
                    <a href="${elemement.video_link}">Too lazy to cook? get restaurant recommendation</a><br><br><br>
                    <button class="btn btn-danger" onClick="deleteTodo(${element.id})" id="btn-delete-${element.id}">Delete</button>
                </div>
                `)

            });
        })
        .fail (function(err){            
            console.log(err);
        })
}