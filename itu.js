function submitBooking() {
  const name = document.getElementById('name').value;
  const destination = document.getElementById('destination').value;
  const date = document.getElementById('date').value;

  fetch('/booking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, destination, date })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('response').textContent = data.message;
  });
}


