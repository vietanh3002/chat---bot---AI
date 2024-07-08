function startQnA() {
    Swal.fire({
        title: "Chào bạn, bạn tên gì?",
        input: 'text',
        inputPlaceholder: 'Nhập tên của bạn nhé',
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            let name = result.value;
            Swal.fire({
                title: `Chào ${name}, tôi có thể giúp gì cho bạn?`,
                showCancelButton: true,
                confirmButtonText: 'Cho tôi một lời khuyên',
                cancelButtonText: 'Nói chuyện với tôi'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Vậy bạn cần lời khuyên về điều gì?',
                        showCancelButton: true,
                        confirmButtonText: 'Về tình cảm',
                        cancelButtonText: 'Về cuộc sống'
                    }).then((result) => {
                        Swal.fire({
                            title: 'Bạn đang mệt lắm phải không?',
                            input: 'text',
                            inputPlaceholder: 'Nhập câu trả lời',
                            showCancelButton: true,
                            confirmButtonText: 'OK',
                            cancelButtonText: 'Cancel'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire({
                                    title: 'Tôi rất tiếc vì điều đó :(',
                                    input: 'text',
                                    inputPlaceholder: 'Nhập câu trả lời',
                                    showCancelButton: true,
                                    confirmButtonText: 'OK',
                                    cancelButtonText: 'Cancel'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        giveAdvice();
                                    }
                                });
                            }
                        });
                    });
                } else {
                    Swal.fire({
                        title: 'What do you want to talk about?',
                        input: 'text',
                        inputPlaceholder: 'Enter your topic here',
                        showCancelButton: true,
                        confirmButtonText: 'OK',
                        cancelButtonText: 'Cancel'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire('Great! Let\'s talk about it.');
                        }
                    });
                }
            });
        }
    });
}

function giveAdvice() {
    let advices = [
        "Tôi biết bạn đã rất mệt, hãy học cách nghỉ ngơi và đừng bỏ cuộc.",
        "Ăn uống lành mạnh, tập thể dục và ngủ đủ giấc.",
        "Dành thời gian để nghỉ ngơi, xem phim, đọc sách hoặc làm điều gì đó bạn thích.",
        "Cố gắng học hỏi và phát triển bản thân mỗi ngày",
        "Hãy nhớ rằng mỗi người có một hành trình riêng, đừng tự so sánh mình với người khác.",
        "Và điều cuối cùng bạn là phiên bản độc nhất trên thế gian."
    ];

    (function showAdvice(index) {
        if (index < advices.length) {
            Swal.fire({
                title: advices[index],
                showCancelButton: false,
                confirmButtonText: 'OK',
            }).then((result) => {
                if (result.isConfirmed) {
                    showAdvice(index + 1);
                }
            });
        } else {
            Swal.fire('Hãy chăm sóc và giữ gìn sức khoẻ bạn nhé!');
        }
    })(0);
}
