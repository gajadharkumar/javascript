let form = document.querySelector("form");
const userManager = {
  users: [],
  init: function() {
    this.loadUsers();
    this.renderCards();
    form.addEventListener("submit", this.submitForm.bind(this));
  },
  loadUsers: function() {
    const stored = localStorage.getItem('users');
    if (stored) {
      this.users = JSON.parse(stored);
    } else {
      // Default users
      this.users = [
        { name: 'Alex Kumar', email: 'alex.kumar@example.com', role: 'Product Designer', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80' },
        { name: 'Priya Singh', email: 'priya.singh@example.com', role: 'Frontend Developer', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80' },
        { name: 'Rohit Verma', email: 'rohit.verma@example.com', role: 'Marketing Lead', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80' },
        { name: 'Neha Patel', email: 'neha.patel@example.com', role: 'UX Researcher', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80' }
      ];
    }
  },
  saveUsers: function() {
    localStorage.setItem('users', JSON.stringify(this.users));
  },
  submitForm: function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const role = document.getElementById('role').value.trim();
    const image = document.getElementById('image').value.trim();
    if (name && email && role && image) {
      this.users.unshift({ name, email, role, image });
      this.saveUsers();
      this.renderCards();
      form.reset();
    }
  },
  renderCards: function() {
    const grid = document.getElementById('cardsGrid');
    grid.innerHTML = '';
    this.users.forEach((user, index) => {
      const card = document.createElement('article');
      card.className = 'user-card';
      card.innerHTML = `
        <img src="${user.image}" alt="User ${user.name}" />
        <div class="card-content">
          <h2>${user.name}</h2>
          <p>Email: ${user.email}</p>
          <p>Role: ${user.role}</p>
          <button class="delete-btn" data-index="${index}">Delete</button>
        </div>
      `;
      grid.appendChild(card);
    });
    // Add event listeners to delete buttons
    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        this.users.splice(index, 1);
        this.saveUsers();
        this.renderCards();
      });
    });
  }
};

userManager.init();