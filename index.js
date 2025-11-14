  window.addEventListener('DOMContentLoaded', (event) => {
    const HASH_PASS1 = "9222a46a1794da2a0307cd52b90076fa617ba41cdffe9ccc4d4e4a0f628b5496";
    const HASH_PASS2 = "a5ad895656074bb12930374348bf903460016bcf430bf7039d7e34f0c505a7b1";

    const storedPassword = sessionStorage.getItem('auth1');
    const storedPassword2 = sessionStorage.getItem('auth2');

    const isPasswordCorrect = storedPassword && HASH_PASS1 === storedPassword;
    const isPassword2Correct = storedPassword2 && HASH_PASS2 === storedPassword2;
    
    if (!isPasswordCorrect || !isPassword2Correct) {
      alert("Access denied. Please log in.");
      window.location.href = "index.html"; 
    }
  });
