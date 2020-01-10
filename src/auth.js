export function getAuthForm() {
    return `
    <form class="mui-form" id="auth-form">
      <div class="mui-textfield mui-textfield--float-label">
        <input type="email" id="email" required autocomplete="off">
        <label for="email">Email</label>
      </div>
      <div class="mui-textfield mui-textfield--float-label">
        <input type="password" id="password" required autocomplete="off">
        <label for="password">Пароль</label>
      </div>
      <button 
        id="submit"
        class="mui-btn mui-btn--raised mui-btn--danger"
      >Войти</button>
    </form>
    `
}

export function authWithEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyBHRY1BVc_vj2jZy5z0mUMAMV8t6XZULyg'
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            email, password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => data.idToken)
}