
function filterPGs(selectedCity) {
  // Placeholder logic for demonstration
  const pgResults = document.getElementById('pg-results');
  pgResults.innerHTML = `<h2>Searching for PGs in ${selectedCity}...</h2>`;

  // Example PG data (replace with your actual data)
  const pgData = [
      {
          city: "pune",
          name: "ganesh Residenxy",
          location: "Hinjewadi Phase 1",
          amenities: ["Wi-Fi", "Laundry", "Security"],
          price: 5000
      },
      {
          city: "hyderabad",
          name: "Sunshine PG",
          location: "Some Location",
          amenities: ["Wi-Fi", "Laundry", "Security"],
          price: 6000
      },
      {
          city: "bangalore",
          name: "Silver Oak PG",
          location: "Another Location",
          amenities: ["Wi-Fi", "Laundry", "Security"],
          price: 5500
      },
      {
          city: "delhi",
          name: "Mlabar PG",
          location: "Yet Another Location",
          amenities: ["Wi-Fi", "Laundry", "Security"],
          price: 5200
      }
  ];

  // Loop through PG data and create HTML for each PG
  pgData.forEach(samplePG => {
      pgResults.innerHTML += `
          <div class="pg-card">
              <h3>${samplePG.name}</h3>
              <p>Location: ${samplePG.location}</p>
              <ul class="amenities">
                  ${samplePG.amenities.map(amenity => `<li>${amenity}</li>`).join('')}
              </ul>
              <p class="price">₹ ${samplePG.price} per month</p>
          </div>
      `;
  });
}
