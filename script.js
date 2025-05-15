const firebaseConfig = {
  apiKey: "AIzaSyBYAS9ZpzVnU2PQnVg1ZLui00Gv_XGA7jk",
  authDomain: "legendboard-358f3.firebaseapp.com",
  projectId: "legendboard-358f3",
  storageBucket: "legendboard-358f3.firebasestorage.app",
  messagingSenderId: "242445085904",
  appId: "1:242445085904:web:12c6a0311ffee58fe882d5",
  measurementId: "G-ZGCDM3G6CT"
};

 function postThought() {
  const input = document.getElementById('thoughtInput');
  const feed = document.getElementById('feed');

  if (input.value.trim() === "") return;

  const newThought = document.createElement('div');
  newThought.className = 'thought';
  newThought.textContent = input.value;

  feed.prepend(newThought); // Add on top
  input.value = "";
}
