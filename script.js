// Firebase 설정
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Firebase Config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const chatRef = ref(db, "chats");

// 메시지 전송 함수
function sendMessage() {
    const input = document.getElementById('user-input');
    const userMessage = input.value;
    if (userMessage.trim() === '') return;

    // Firebase에 사용자 메시지 저장
    push(chatRef, { message: userMessage, timestamp: Date.now() });

    // 사용자 메시지를 채팅 창에 추가
    const chat = document.getElementById('chat');
    const userBubble = document.createElement('div');
    userBubble.textContent = `사용자: ${userMessage}`;
    chat.appendChild(userBubble);

    // 입력 필드 초기화
    input.value = '';

    // OpenAI API로 AI 응답 가져오기
    getAIResponse(userMessage);
}

// Firebase에서 메시지 수신
onChildAdded(chatRef, (snapshot) => {
    const chat = document.getElementById('chat');
    const data = snapshot.val();
    const messageBubble = document.createElement('div');
    messageBubble.textContent = `사용자: ${data.message}`;
    chat.appendChild(messageBubble);
});

// OpenAI API로 AI의 예/아니오 응답 받기
function getAIResponse(userMessage) {
    const apiKey = 'YOUR_OPENAI_API_KEY'; // OpenAI API 키를 여기에 입력
    const url = 'https://api.openai.com/v1/completions';
    const data = {
        model: "text-davinci-003",
        prompt: `User asked: ${userMessage}. Please answer "yes" or "no" in a short sentence.`,
        max_tokens: 50,
    };

    axios.post(url, data, {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        const aiMessage = response.data.choices[0].text.trim();

        // AI의 응답을 채팅 창에 추가
        const chat = document.getElementById('chat');
        const aiBubble = document.createElement('div');
        aiBubble.textContent = `AI: ${aiMessage}`;
        chat.appendChild(aiBubble);
    })
    .catch(error => {
        console.error("Error fetching AI response:", error);
    });
}
