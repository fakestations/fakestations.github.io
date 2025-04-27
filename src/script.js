document.getElementById('chatForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const platform = document.getElementById('platform').value;
    const message = document.getElementById('message').value;
    
    if (message.trim() === '') {
        alert('Please enter a message.');
        return;
    }
    
    let output = `<h2>${platform} Chat</h2>`;
    output += `<p><strong>Message:</strong> ${message}</p>`;
    
    document.getElementById('output').innerHTML = output;
});
