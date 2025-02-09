//COMMENTS ADDED TO UNDERSTAND THE CODE!

document.getElementById('countrydrop').addEventListener('change', async function(event) { // self explanatory!
    const countryCode = event.target.value;  // getting country code to fetch visa countries for using rough sun API.
    const flashcardsContainer = document.getElementById('flashcardsContainer'); //self explanatory
    flashcardsContainer.innerHTML = '';  //empty the flashcards to show new countries

    try {
        const responsevisaa = await fetch(`https://rough-sun-2523.fly.dev/country/${countryCode}`); //fetches visa free / visa on arrival countries.
        const data = await responsevisaa.json(); // awaits return of data from response visa

        if (data.VR && data.VR.length > 0 ) { // getting visa free
            data.VR.forEach(async (country) => { // for each country creating a flashcard.
                const card = document.createElement('div');
                card.classList.add('flashcard', 'visa-required'); // self explan
                const flagUrl = `https://flagcdn.com/w320/${country.code.toLowerCase()}.png`; //fetches flag by using Country code 

                const countryInfoResponse = await fetch(`https://restcountries.com/v3.1/alpha/${country.code}`); //fetches country info like population and all that.
                const countryInfoData = await countryInfoResponse.json(); 

                const countryInfo = countryInfoData[0];

                card.innerHTML = 
                
                
                `
                    <img src="${flagUrl}" alt="${country.name} Flag">
                    <div class="flashcard-text">
                        <h3>${country.name}</h3>
                        <p><strong>Country Code:</strong> ${country.code}</p>
                        <p><strong>Capital:</strong> ${countryInfo.capital ? countryInfo.capital[0] : 'N/A'}</p>
                        <p><strong>Population:</strong> ${countryInfo.population ? countryInfo.population.toLocaleString() : 'N/A'}</p>
                        <p><strong>Languages:</strong> ${countryInfo.languages ? Object.values(countryInfo.languages).join(', ') : 'N/A'}</p>
                        <p><strong>Currency:</strong> ${countryInfo.currencies ? Object.values(countryInfo.currencies)[0].name : 'N/A'}</p>
                    </div>
                    <div class="visa-status-container">
                        <div class="visa-status">Visa Free</div>
                    </div> `;


                flashcardsContainer.appendChild(card); //appends the flashcard to div to display on page.


            });
        } 
        
    

        if (data.VOA && data.VOA.length > 0) { // Visa on arrival
            data.VOA.forEach(async (country) => {
                const card = document.createElement('div');
                card.classList.add('flashcard', 'visa-on-arrival');
                const flagUrl = `https://flagcdn.com/w320/${country.code.toLowerCase()}.png`; // Fetch flag image dynamically

            
                const countryInfoResponse = await fetch(`https://restcountries.com/v3.1/alpha/${country.code}`);
                const countryInfoData = await countryInfoResponse.json();

                const countryInfo = countryInfoData[0];

                card.innerHTML = `
                    <img src="${flagUrl}" alt="${country.name} Flag">
                    <div class="flashcard-text">
                 <h3>${country.name}</h3>
                        <p><strong>Country Code:</strong> ${country.code}</p>
                    <p><strong>Capital:</strong> ${countryInfo.capital ? countryInfo.capital[0] : 'N/A'}</p>
                        <p><strong>Population:</strong> ${countryInfo.population ? countryInfo.population.toLocaleString() : 'N/A'}</p>
                <p><strong>Languages:</strong> ${countryInfo.languages ? Object.values(countryInfo.languages).join(', ') : 'N/A'}</p>
            <p><strong>Currency:</strong> ${countryInfo.currencies ? Object.values(countryInfo.currencies)[0].name : 'N/A'}</p>
                    </div>
                    <div class="visa-status-container">
      <div class="visa-status">Visa on Arrival</div>
                    </div>
                `;
                flashcardsContainer.appendChild(card);


            });
        } 
        


    } 
    
    
    
    catch (error) {   //throws an error if unable to fetch data / no visa free countries available / API does not have that countries data
        // console.error('Error fetching country data:', error);
        flashcardsContainer.innerHTML = '<p>Error loading country data. Please try again later.</p>';
    }

    
});