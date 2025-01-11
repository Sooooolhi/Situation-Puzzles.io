const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const chatRef = ref(db, "chats");

document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
    const input = document.getElementById('user-input');
    const userMessage = input.value;
    if (userMessage.trim() === '') return;

    // Firebase에 메시지 저장
    push(chatRef, { message: userMessage, timestamp: Date.now() });
    input.value = '';
    
    // AI의 답변을 받아서 화면에 표시
    getAIResponse(userMessage).then(aiResponse => {
        const chatLog = document.getElementById('chat-log');
        const aiBubble = document.createElement('div');
        aiBubble.textContent = `AI: ${aiResponse}`;
        chatLog.appendChild(aiBubble);
    });
}

async function getAIResponse(question) {
    const response = await fetch('/get-ai-response', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
    });
    const data = await response.json();
    return data.answer;
}
