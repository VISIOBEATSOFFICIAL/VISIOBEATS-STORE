async function buyBeat(name, price) {
  try {
    const res = await fetch('http://localhost:3000/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, price })
    });

    const data = await res.json();

    // Redirect to Stripe checkout
    window.location.href = data.url;
  } catch (err) {
    alert('Error starting checkout');
    console.error(err);
  }
}