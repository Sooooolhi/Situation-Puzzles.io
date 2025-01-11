// 버튼 클릭 시 팝업 표시
const buttons = document.querySelectorAll('.question-button');
const popup = document.querySelector('.answer-popup');
const answerText = document.getElementById('answer-text');
const closePopupButton = document.querySelector('.close-popup');

// 버튼 클릭 시 팝업 내용과 함께 띄우기
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const question = button.textContent;
        let answer = '';

        // 예시 질문과 답변
        switch (question) {
            case '남자는 절벽 아래에서 발견되었나요?':
                answer = '예';
                break;
            case '남자는 절벽 위에서 혼자 있었나요?':
                answer = '아니오';
                break;
            case '남자는 연을 날리고 있었나요?':
                answer = '예';
                break;
            case '남자의 손에 쥐어져 있던 것은 끊어진 연줄인가요?':
                answer = '예';
                break;
            case '절벽 위에는 남자가 남긴 유서가 있었나요?':
                answer = '아니오';
                break;
            case '남자는 아이들과 함께 있었나요?':
                answer = '예';
                break;
            case '남자가 절벽 가장자리로 다가간 이유는 무엇인가요?':
                answer = '연을 잡으려는 아이들을 막으려 함';
                break;
            case '남자가 자살한 것인가요?':
                answer = '아니오';
                break;
            case '남자의 죽음은 사고로 인한 것인가요?':
                answer = '예';
                break;
            case '남자가 절벽 아래로 떨어진 이유는 연줄이 끊어졌기 때문인가요?':
                answer = '예';
                break;
            case '남자의 죽음에 아이들이 간접적으로 관여했나요?':
                answer = '예';
                break;
            case '남자가 절벽에서 발자국을 남겼나요?':
                answer = '아니오';
                break;
            case '연이 낡아서 끊어졌을 가능성이 있나요?':
                answer = '예';
                break;
            case '아이들은 남자의 죽음에 대해 어떤 증언을 했나요?':
                answer = '남자가 연을 잡으려 했다고 주장함';
                break;
            case '남자가 절벽 아래로 떨어지기 전에 어떤 일이 발생했나요?':
                answer = '연이 바람에 날아갔다';
                break;
            case '남자는 연을 날리던 중 바람이 강해졌나요?':
                answer = '예';
                break;
            case '남자의 죽음은 의도적인 살인이었나요?':
                answer = '아니오';
                break;
            case '남자가 절벽에서 몸부림을 쳤다는 증거가 있나요?':
                answer = '아니오';
                break;
            case '남자는 연을 날리던 중 다른 사람과 다투었나요?':
                answer = '아니오';
                break;
            default:
                answer = '알 수 없음';
                break;
        }

        // 팝업에 답변 표시
        answerText.textContent = `정답: ${answer}`;

        // 팝업 표시
        popup.style.display = 'block';
    });
});

// 팝업 닫기
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});
