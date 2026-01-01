const userListEl = document.querySelector("#userList");

const users = [
  { profile: { name: "mustafa", soyad: "yildirim" } },
  { profile: { name: "ahmet", soyad: null } },
  { profile: {} },
  null,
];

// Liste elemanı oluştur
const ul = document.createElement("ul");

users.forEach((user, index) => {
  const li = document.createElement("li");

  // Kullanıcı adı yoksa "guesst" kullan
  const userName = user?.profile?.name ?? "guesst";

  li.textContent = `Kullanıcı ${index + 1}: ${userName}`;
  ul.appendChild(li);
});

userListEl.appendChild(ul);
