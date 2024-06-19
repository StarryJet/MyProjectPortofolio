const doctorSelect = document.getElementById('doctor-appointment');
const dateInput = document.getElementById('date-appointment');
const timeSelect = document.getElementById('time-appointment');
const availabilityMessage = document.getElementById('availability-message');

let doctorValue, dateValue, timeValue;

doctorSelect.addEventListener('change', () => {
  doctorValue = doctorSelect.value;
  checkAvailability();
});

dateInput.addEventListener('change', () => {
  dateValue = dateInput.value;
  checkAvailability();
});

timeSelect.addEventListener('change', () => {
  timeValue = timeSelect.value;
  checkAvailability();
});

function checkAvailability() {
  if (doctorValue && dateValue && timeValue) {
    // Only run the availability check when all three values are selected
    const availabilityData = {
      // Your simulated availability data goes here
    };

    const doctorAvailability = availabilityData[doctorValue];
    if (doctorAvailability) {
      const dateAvailability = doctorAvailability[dateValue];
      if (dateAvailability) {
        const timeAvailability = dateAvailability[timeValue];
        if (timeAvailability) {
          availabilityMessage.textContent = `Availability: ${timeAvailability.toUpperCase()}`;
          availabilityMessage.style.color = timeAvailability === 'available'? 'green' : 'ed';
        } else {
          availabilityMessage.textContent = 'Availability: Not Found';
          availabilityMessage.style.color = 'gray';
        }
      } else {
        availabilityMessage.textContent = 'Availability: Not Found';
        availabilityMessage.style.color = 'gray';
      }
    } else {
      availabilityMessage.textContent = 'Availability: Not Found';
      availabilityMessage.style.color = 'gray';
    }
  }
}