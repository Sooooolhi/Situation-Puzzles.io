import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onChildAdded } from "firebase/database";

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





function sendMessage() {
    const input = document.getElementById('user-input');
    const userMessage = input.value;
    if (userMessage.trim() === '') return;

    // Firebase에 메시지 저장
    push(chatRef, { message: userMessage, timestamp: Date.now() });
    input.value = '';
}

// Firebase에서 메시지 수신
onChildAdded(chatRef, (snapshot) => {
    const chat = document.getElementById('chat');
    const data = snapshot.val();
    const messageBubble = document.createElement('div');
    messageBubble.textContent = `사용자: ${data.message}`;
    chat.appendChild(messageBubble);
});










function sendMessage() {
    const input = document.getElementById('user-input');
    const chat = document.getElementById('chat');

    const userMessage = input.value;
    if (userMessage.trim() === '') return;

    // 사용자의 메시지를 채팅에 추가
    const userBubble = document.createElement('div');
    userBubble.textContent = `사용자: ${userMessage}`;
    chat.appendChild(userBubble);

    // AI 응답 (임시)
    const aiBubble = document.createElement('div');
    aiBubble.textContent = `AI: 이건 임시 응답입니다.`;
    chat.appendChild(aiBubble);

    // 입력 필드 초기화
    input.value = '';
}
