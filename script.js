document.getElementById('tattooForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const idea = document.getElementById('idea').value;

    alert(`Thanks ${name}! Your request for "${idea}" has been sent. Jayden will contact you soon.`);
    
    // To make this functional, you would link this to a service like Formspree:
    // fetch('https://formspree.io/f/your-id', { method: 'POST', body: new FormData(this) });
});