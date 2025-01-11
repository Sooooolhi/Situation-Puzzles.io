document.getElementById("start-button").onclick = function() {
    document.getElementById("main-page").style.display = "none";
    document.getElementById("game-page").style.display = "block";
    loadQuestions();
};

function loadQuestions() {
    const questions = [
        "질문 1: 남자는 절벽에서 떨어졌습니까?",
        "질문 2: 남자는 자살을 시도했습니까?",
        "질문 3: 남자는 다른 사람에 의해 죽임을 당했습니까?",
        "질문 4: 남자는 사고로 죽었습니까?",
        "질문 5: 남자는 연을 날리다가 사고를 당했습니까?"
    ];

    questions.forEach((q, index) => {
        const button = document.createElement("button");
        button.innerText = q;
        button.onclick = () => showPopup(index + 1);
        document.getElementById("questions").appendChild(button);
    });
}

function showPopup(questionNumber) {
    const response = confirm(`질문 ${questionNumber}에 대한 답변을 선택하세요.\n\n예/아니오 또는 그럴 수도 있음/관련없음`);
    if (response) {
        alert("예/아니오 또는 그럴 수도 있음/관련없음");
    } else {
        alert("관련없음");
    }
}
