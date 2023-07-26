const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./movies.db', sqlite3.OPEN_READWRITE, err => {
    if (err) {
        console.error(err.message);
      }
      console.log('Connected to the movies database.');
});


const user_id = document.getElementByID('user_id').innerHTML;



// Create new AJAX object
var ajax = new XMLHttpRequest();

    

// When page is loaded
ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200){
        document.getElementsByClassName("form-check-input").onclick(function(event) {
            var triggerObject = event.srcElement();
            var movie_id = triggerObject.value();
            if (triggerObject.checked){
                ids = [user_id, movie_id];
                db.run("INSERT INTO watchlist(user_id, movie_id) VALUES (?, ?)", ids, function(err) {
                    // Print message if couldn't update table
                    if (err) {
                        return console.error(err.message);
                    }
                });
            }
        })    
    }
}

db.close();

