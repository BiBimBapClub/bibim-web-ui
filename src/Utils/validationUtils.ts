export function validateEmail(email: string): boolean {
  // 이메일 유효성 검사 로직
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

export function validatePassword(password: string): boolean {
// 비밀번호 유효성 검사 로직
  if (password.length < 8) {
    return false;
  }

  // 대문자, 소문자, 숫자, 특수문자가 모두 포함되었는지 확인
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  if (!regex.test(password)) {
    return false;
  }

  return true;
}

export function validateUsername(username: string): boolean {
// 사용자 이름 유효성 검사 로직
  const usernameRegex = /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;
  // 허용되는 문자: 알파벳 대/소문자, 숫자, '_'(언더스코어), '-', ' '(공백)
  return usernameRegex.test(username);
}
