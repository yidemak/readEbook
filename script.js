document.addEventListener('DOMContentLoaded', function() {
    // Sample book data
    const books = [
        { id: 1, title: 'Apprenez à créer votre site web avec html5 et css3', pdf: 'resources/Apprenez-a-creer-votre-site-web-avec-html5-et-css3.pdf', category: 'category1' },
        { id: 2, title: 'Cours Complet JavaScript 2020', pdf: 'resources/Cours-Complet-JavaScript-2020.pdf', category: 'category1' },
        { id: 3, title: 'Un zeste de python', pdf: 'resources/un-zeste-de-python.pdf', category: 'category1' },
        { id: 4, title: 'Libre pour apprendre', pdf: 'resources/Peter Gray - Libre pour apprendre.pdf', category: 'category2' },
        { id: 5, title: 'Le Petit bon usage de la langue Française Grammaire', pdf: 'resources/Le_Petit_bon_usage_de_la_langue_française_Grammaire_by_Cédrick.pdf', category: 'category2' },
        { id: 6, title: 'Le pouvoir de la pensée flexible pourquoi garder l’esprit ouvert', pdf: 'resources/Le_pouvoir_de_la_pensée_flexible_pourquoi_garder_l’esprit_ouvert.pdf', category: 'category2' }
    ];

    // Event listener for category links
    document.querySelectorAll('.category-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = event.currentTarget.getAttribute('data-category');
            displayBooks(category);
        });
    });


    const showAllBooks =  ()=> {
        const bookList = document.getElementById('book-list');
        books.forEach(book => {
            const li = document.createElement('li');
            li.style.display = 'flex';
            li.classList.add('book-item');
            li.innerHTML = `
                            <a href="#" data-id="${book.id}" class="list-books"> 
                            <img src="resources/img/book.png" style="width: 50px; color:#00dfc4;" />
                                ${book.title}
                            </a>`;
            bookList.appendChild(li);
        });
    }

    showAllBooks();


    // Load books into the book list
    function displayBooks(category) {
        const bookList = document.getElementById('book-list');
        bookList.innerHTML = ''; // Clear the book list
        const filteredBooks = books.filter(book => book.category === category);
        filteredBooks.forEach(book => {
            const li = document.createElement('li');
            li.style.display = 'flex';
            li.classList.add('book-item');
            li.innerHTML = `
                            <a href="#" data-id="${book.id}" class="list-books"> 
                            <img src="resources/img/book.png" style="width: 50px; color:#00dfc4;" />
                                ${book.title}
                            </a>`;
            bookList.appendChild(li);
        });
    }

    // Event listener for book links
    document.getElementById('book-list').addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const bookId = event.target.getAttribute('data-id');
            const book = books.find(b => b.id == bookId);
            if (book) {
                document.getElementById('book-title').innerText = book.title;
                document.getElementById('pdf-viewer').src = book.pdf;
                showSection('reader');
            }
        }
    });

    // Event listener for back to list button
    document.getElementById('back-to-list').addEventListener('click', function() {
        showSection('books');
    });

    // Event listener for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = event.target.getAttribute('data-target');
            showSection(target);
        });
    });

    // Function to show the specified section and hide others
    function showSection(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
    }

    // Show the home section by default
    showSection('home');
});
