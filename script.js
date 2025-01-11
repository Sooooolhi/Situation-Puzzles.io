<!DOCTYPE html>
    document.getElementById('start-button').addEventListener('click', function() {
    window.location.href = 'game.html';
});

<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>게임</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="game-container">
        <div class="situation-box">
            <h2>상황: ‘치명적인 장난’</h2>
            <p>한 남자가 높은 절벽 아래에서 사망한 채로 발견되었습니다. 경찰은 처음에 자살로 의심했지만, 절벽 위에는 그가 남긴 유서도, 발자국도 없었습니다. 그러나 근처에서 낡은 연이 발견되었고, 남자의 손에는 끊어진 줄이 쥐어져 있었습니다. 남자는 어떻게 죽게 되었을까요?</p>
        </div>

        <div class="question-buttons">
            <button class="question-button" onclick="showPopup('남자는 자살한 건가요?')">질문 1: 남자는 자살한 건가요?</button>
            <button class="question-button" onclick="showPopup('남자는 다른 사람에 의해 밀려서 죽은 건가요?')">질문 2: 남자는 다른 사람에 의해 밀려서 죽은 건가요?</button>
            <button class="question-button" onclick="showPopup('남자는 연과 관련이 있나요?')">질문 3: 남자는 연과 관련이 있나요?</button>
            <button class="question-button" onclick="showPopup('연줄이 끊어진 것이 사고의 원인인가요?')">질문 4: 연줄이 끊어진 것이 사고의 원인인가요?</button>
            <button class="question-button" onclick="showPopup('제3자가 사고에 간접적으로 관여했나요?')">질문 5: 제3자가 사고에 간접적으로 관여했나요?</button>
        </div>

        <div id="popup" class="popup">
            <div class="popup-content">
                <span class="popup-close" onclick="closePopup()">&times;</span>
                <p id="popup-message"></p>
            </div>
        </div>
    </div>

    <script>
        // 버튼 클릭 시 팝업창 띄우기
        function showPopup(message) {
            let responseMessage = '';
            // 예시 답변 (질문에 맞는 답변을 추가)
            if (message === '남자는 자살한 건가요?') {
                responseMessage = '아니요';
            } else if (message === '남자는 다른 사람에 의해 밀려서 죽은 건가요?') {
                responseMessage = '아니요';
            } else if (message === '남자는 연과 관련이 있나요?') {
                responseMessage = '네';
            } else if (message === '연줄이 끊어진 것이 사고의 원인인가요?') {
                responseMessage = '네';
            } else if (message === '제3자가 사고에 간접적으로 관여했나요?') {
                responseMessage = '그럴수도 있고 아닐수도 있습니다';
            }
            
            document.getElementById('popup-message').textContent = responseMessage;
            document.getElementById('popup').style.display = 'block';  // 팝업 띄우기
        }

        // 팝업 닫기
        function closePopup() {
            document.getElementById('popup').style.display = 'none';  // 팝업 숨기기
        }
    </script>
</body>
</html>
