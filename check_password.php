<?php
// 입력한 비밀번호
$enteredPassword = $_POST['password'];

// 정상 비밀번호
$correctPassword = "23104math"; // 원하는 비밀번호로 변경하세요

if ($enteredPassword === $correctPassword) {
    // 비밀번호가 일치하는 경우
    echo "비밀번호가 올바릅니다. 페이지에 접속 가능합니다.";
    // 여기에 접속을 허용하는 내용을 추가하세요.
} else {
    // 비밀번호가 일치하지 않는 경우
    echo "올바르지 않은 비밀번호입니다. 다시 시도해주세요.";
    // 또는 다른 조치를 취하세요.
}
?>
