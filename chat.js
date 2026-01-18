function sendMsg() {
let msg = document.getElementById('msg').value;
if (!msg) return;


let chat = document.getElementById('chat');
chat.innerHTML += `<div class='user'>You: ${msg}</div>`;


fetch('/chat', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ message: msg })
})
.then(res => res.json())
.then(data => {
chat.innerHTML += `<div class='bot'>Bot: <pre>${data.reply}</pre></div>`;
chat.scrollTop = chat.scrollHeight;
});


document.getElementById('msg').value = '';
}