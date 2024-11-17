$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

// Define the Google Sheets URL with your Sheet ID and API Key
const sheetURL = "https://sheets.googleapis.com/v4/spreadsheets/1ZpZpA03YaTcpmzKFFdojaIoEOXRGu-I7omGq_i19aKg/values/Sheet1?key=AIzaSyAtzNkNQXuSR_PZU4gucITJaTZpBMH5vuU";
document.addEventListener('DOMContentLoaded', () => {
    // Define the Google Sheets API URL
    const sheetURL = "https://sheets.googleapis.com/v4/spreadsheets/1ZpZpA03YaTcpmzKFFdojaIoEOXRGu-I7omGq_i19aKg/values/Sheet1?key=AIzaSyAtzNkNQXuSR_PZU4gucITJaTZpBMH5vuU";
  
    // Fetch and display tournament data
    fetch(sheetURL)
      .then(response => response.json())
      .then(data => {
        const rows = data.values; // Extract rows from the response
        const tournamentBody = document.getElementById('tournament-body');
        
        // Skip the header row and iterate over the data
        rows.slice(1).forEach(row => {
          const [name, date,registrationFee, mode, prize, imageUrl, bookinUrl] = row; // Adjust indices based on your data structure
  
          // Create the card dynamically
          const card = document.createElement('div');
          card.classList.add('card'); // Add a class for styling
          
          card.innerHTML = `
          <div class="image-card-component popular">
                    <div class="image-card" style="background-image: url('${imageUrl}');"></div>
                      <div class="content-card">
                        <div class="content-text-card">
                          <h4 class="h4-card">${name}</h4>
                <p class="p-card">Date:- ${date} <br> Mode:- ${mode} <br> Prize:- ${prize} <br> Registration Fee:- ${registrationFee}</p>
                        </div>
                        <a href="${bookinUrl}" class="cta-card">Book now</a>
                      </div>
                    </div>
          `;
  
          // Append the card to the container
          tournamentBody.appendChild(card);
        });
      })
      .catch(error => console.error('Error fetching tournament data:', error));
  });
  