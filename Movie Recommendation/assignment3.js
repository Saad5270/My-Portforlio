(async function(){
    const response = await fetch("./data.json");
    const data = await response.json();

    const genre = document.getElementById("genreId");
    const year = document.getElementById("yearId");
    const languages = document.getElementById("languagesId");
    // const ratings = document.getElementById("ratingsId");
    const movieListNames= document.getElementById("movie-names");
    const movieYear= document.getElementById("year-released");

    const btn = document.getElementById("searchBtn")

    function displayValues(result){
      movieListNames.innerHTML = "";
      movieYear.innerHTML = "";

      result.forEach(function (userValue) {
      
      const liName = document.createElement("li");
      const liYear = document.createElement("li")

      const movieNames = `
          <h2 class="title">${userValue.title}</h2>
          
      `;

      const movieYearRelease = `
        <h2 class="title">${userValue.release_date.slice(0, 4)}</h2>
      `;
      liName.innerHTML = movieNames;
      liYear.innerHTML = movieYearRelease;
      
      movieListNames.appendChild(liName);
      movieYear.appendChild(liYear)
    })
      

    }

    function search(){
        let genreValue = genre.value;
        let yearValue = year.value;
        let languagesValue = languages.value;
        // let ratingsValue = ratings.value;
        
        const result = data.filter(function(userValue) {
          if (typeof userValue.genres === 'string') {
            return userValue.genres.toLowerCase().includes(genreValue.toLowerCase()) || userValue.release_date.includes(yearValue)
            || userValue.original_language.toLowerCase().includes(languagesValue.toLowerCase());
          
            //the condition should be with && operator but it is not working for me
              
          }else{
            return false;
          }
          
        });

        displayValues(result)
    }

    
    btn.addEventListener("click",search);
    
    

})()