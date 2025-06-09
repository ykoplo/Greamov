// Data Poster untuk setiap kategori
const posters = {
    
    horror: {
        1: {
            title: "Annabelle",
            description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
            image: "https://i.pinimg.com/236x/56/c1/45/56c145d19ef20f7185c84f33f7ccd78e.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=k10ETZ41q5o" },
                { text: "More Info", url: "https://www.imdb.com/title/tt1457767/" }
            ]
        },
        2: {
            title: "Indigo",
            description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
            image: "https://i.pinimg.com/236x/3a/7c/05/3a7c05c9f4517ccf2ae798307e22f00d.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=k10ETZ41q5o" },
                { text: "More Info", url: "https://www.imdb.com/title/tt1457767/" }
            ]
        },
        3: {
            title: "Bayi Ajaib",
            description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
            image: "https://i.pinimg.com/236x/b4/ba/70/b4ba70a358d558fb5df2e959fe360167.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=k10ETZ41q5o" },
                { text: "More Info", url: "https://www.imdb.com/title/tt1457767/" }
            ]
        },
        4: {
            title: "Don't Look Away",
            description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
            image: "https://i.pinimg.com/236x/7f/3b/4e/7f3b4e38480fcd9775921b4e3fc26eec.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=k10ETZ41q5o" },
                { text: "More Info", url: "https://www.imdb.com/title/tt1457767/" }
            ]
        },
        5: {
            title: "MEGAN",
            description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
            image: "https://i.pinimg.com/474x/5c/51/de/5c51de70a6e6857bceb6cb01581b101f.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=k10ETZ41q5o" },
                { text: "More Info", url: "https://www.imdb.com/title/tt1457767/" }
            ]
        },
        6: {
            title: "Deadly",
            description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
            image: "https://i.pinimg.com/236x/a2/97/ba/a297ba3ae7d34d94991370ac3c7366f6.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=k10ETZ41q5o" },
                { text: "More Info", url: "https://www.imdb.com/title/tt1457767/" }
            ]
        },
        7: {
            title: "The Exorcist",
            description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
            image: "https://i.pinimg.com/236x/20/fa/db/20fadb7b746327416e4610fc19c455e8.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=k10ETZ41q5o" },
                { text: "More Info", url: "https://www.imdb.com/title/tt1457767/" }
            ]
        },
        8: {
            title: "i see you",
            description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
            image: "https://i.pinimg.com/236x/ee/96/5a/ee965ac84db81f45ca69bd670a2f10ad.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=k10ETZ41q5o" },
                { text: "More Info", url: "https://www.imdb.com/title/tt1457767/" }
            ]
        },
        9: {
            title: "Trap",
            description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
            image: "https://i.pinimg.com/474x/17/8b/ff/178bffc933242eba860d24d8527c753d.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=k10ETZ41q5o" },
                { text: "More Info", url: "https://www.imdb.com/title/tt1457767/" }
            ]
        },
        10: {
            title: "Insidious",
            description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
            image: "https://i.pinimg.com/enabled_hi/236x/37/ac/bd/37acbda5073f224b69a91caa2d03af22.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=k10ETZ41q5o" },
                { text: "More Info", url: "https://www.imdb.com/title/tt1457767/" }
            ]
        },
        // Tambahkan lebih banyak film horror di sini
    },
    drama: {
        1: {
            title: "Shadowplay",
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            image: "https://i.pinimg.com/236x/8d/27/ab/8d27abb52a33bb6c933ded4f707177a3.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=6hB3S9bIaco" },
                { text: "More Info", url: "https://www.imdb.com/title/tt0111161/" }
            ]
        },
        2: {
            title: "Parasite",
            description: "sebuah keluarga yang memilih untuk menjadi patasite dan merugikan keluarga lain agar tidak kembali hidup dibawah besmen.",
            image: "https://i.pinimg.com/enabled_hi/236x/e5/57/bb/e557bb2a985b989cff576961a0fd6d12.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=6hB3S9bIaco" },
                { text: "More Info", url: "https://www.imdb.com/title/tt0111161/" }
            ]
        },
        // Tambahkan lebih banyak film drama di sini
    },
    movies: {
        1: {
            title: "FALL",
            description: "A thief who enters the dreams of others to steal secrets from their subconscious.",
            image: "https://i.pinimg.com/236x/4f/7b/a9/4f7ba914f6d889951b2a12b191aa662c.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
                { text: "More Info", url: "https://www.imdb.com/title/tt1375666/" }
            ]
        },
        2: {
            title: "HER",
            description: "A thief who enters the dreams of others to steal secrets from their subconscious.",
            image: "https://i.pinimg.com/236x/f4/ad/55/f4ad55274604a04aec5255ce120eedbb.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
                { text: "More Info", url: "https://www.imdb.com/title/tt1375666/" }
            ]
        },
        // Tambahkan lebih banyak film di sini
    },
    comedy: {
        // Isi dengan data film komedi
    },
    action: {
        // Isi dengan data film aksi
    },
    netflix: {
        // Isi dengan data film Netflix
    },
    series: {
        1: {
            title: "Squit Game",
            description: "game dengan hadiah besar dan bertaruhkan nyawa.",
            image: "https://i.pinimg.com/236x/23/cc/bf/23ccbf28137082dc795cf308f74f5ec0.jpg",
            links: [
                { text: "Watch Trailer", url: "https:linkdisiniiii" },
                { text: "More Info", url: "https:link disinii" }
            ]
        },
        // Isi dengan data series TV
    }
    
};

document.addEventListener('DOMContentLoaded', function() {
    // Event listener untuk tombol pencarian dan input pencarian
    document.getElementById('searchButton').addEventListener('click', searchPosters);
    document.getElementById('searchInput').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchPosters(true); // true untuk langsung mengarahkan ke halaman detail jika hanya ada 1 hasil
        } else {
            searchPosters(false); // Menampilkan hasil secara real-time saat mengetik
        }
    });

    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropbtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (window.innerWidth <= 600) {
                dropdownContent.classList.toggle('show');
            }
        });
    });

    // Menutup dropdown saat mengklik di luar
    window.addEventListener('click', function(e) {
        if (!e.target.matches('.dropbtn')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });

    // Menampilkan poster berdasarkan kategori
    const path = window.location.pathname;
    if (path.includes('index.html') || path === '/') {
        displayHomePagePosters();
    } else if (path.includes('poster-detail.html')) {
        displayPosterDetail();
    } else {
        const category = path.split('/').pop().split('.')[0];
        displayCategoryPosters(category);
    }

    // Menampilkan poster horizontal
    displayHorizontalScrollPosters();
});


    // Fungsi pencarian yang lebih canggih
    function searchPosters(redirect = false) {
        const query = document.getElementById('searchInput').value.toLowerCase();
        const resultsContainer = document.getElementById('searchResults');
        resultsContainer.innerHTML = ''; // Kosongkan hasil pencarian sebelumnya

        if (query.trim() === '') {
            resultsContainer.style.display = 'none';
            return; // Jika input kosong, tidak melakukan apa pun
        }

        const allPosters = Object.keys(posters).flatMap(category => 
            Object.entries(posters[category]).map(([id, poster]) => ({ ...poster, id, category }))
        );

        // Filter poster berdasarkan string query yang mirip
        const filteredPosters = allPosters.filter(poster => 
            isSimilar(query, poster.title.toLowerCase())
        ).sort((a, b) => a.title.localeCompare(b.title)); // Sortir berdasarkan abjad

        if (filteredPosters.length > 0) {
            // Jika hanya ada satu hasil dan pengguna menekan enter, langsung ke halaman detail
            if (filteredPosters.length === 1 && redirect) {
                const singleResult = filteredPosters[0];
                window.location.href = `poster-detail.html?poster=${singleResult.id}&category=${singleResult.category}`;
                return;
            }

            // Jika ada beberapa hasil, tampilkan di hasil pencarian
            filteredPosters.forEach(poster => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <a href="poster-detail.html?poster=${poster.id}&category=${poster.category}">
                        <img src="${poster.image}" alt="${poster.title}" />
                        <h4>${poster.title}</h4>
                    </a>
                `;
                resultsContainer.appendChild(resultItem);
            });
        } else {
            resultsContainer.innerHTML = '<p>No results found</p>';
        }

        resultsContainer.style.display = 'block'; // Tampilkan hasil pencarian
    }

    // Fungsi untuk membandingkan string dan menangani kesalahan ketik kecil (1-2 huruf)
    function isSimilar(query, title) {
        const maxDistance = 2; // Toleransi kesalahan ketik (2 huruf)
        return levenshteinDistance(query, title) <= maxDistance || title.startsWith(query);
    }

       // Fungsi untuk menghitung Levenshtein Distance
       function levenshteinDistance(a, b) {
        const matrix = [];

        // Inisialisasi matriks
        for (let i = 0; i <= b.length; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= a.length; j++) {
            matrix[0][j] = j;
        }

        // Isi matriks
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1, // Substitusi
                        matrix[i][j - 1] + 1,     // Insert
                        matrix[i - 1][j] + 1      // Hapus
                    );
                }
            }
        }

        return matrix[b.length][a.length];
    }





// Fungsi untuk membuat elemen poster
function createPosterElement(poster, id, category) {
    const posterElement = document.createElement('div');
    posterElement.className = 'poster';
    posterElement.innerHTML = `
        <a href="poster-detail.html?poster=${id}&category=${category}">
            <div class="poster-wrapper">
                <img src="${poster.image}" alt="${poster.title}">
                <h3>${poster.title}</h3>
            </div>
        </a>
    `;
    return posterElement;
}

// Fungsi untuk menampilkan poster berdasarkan kategori
function displayCategoryPosters(category) {
    const container = document.getElementById('categoryPosters');
    if (container && posters[category]) {
        container.innerHTML = '';
        Object.entries(posters[category]).forEach(([id, poster]) => {
            container.appendChild(createPosterElement(poster, id, category));
        });
    }
}

// Fungsi untuk menampilkan poster di halaman utama
function displayHomePagePosters() {
    const trendingContainer = document.getElementById('trendingMovies');
    const seriesContainer = document.getElementById('updatedSeries');
    const creepyContainer = document.getElementById('creepyMovies');
    const horizontalScrollContainer = document.getElementById('horizontalScrollPosters');

    // Fungsi helper untuk menampilkan poster secara acak dari kategori tertentu
    function displayRandomPosters(container, categories, count) {
        if (container) {
            container.innerHTML = '';
            const allPosters = categories.flatMap(category => 
                Object.entries(posters[category] || {}).map(([id, poster]) => ({id, category, poster}))
            );
            for (let i = 0; i < count && allPosters.length > 0; i++) {
                const randomIndex = Math.floor(Math.random() * allPosters.length);
                const {id, category, poster} = allPosters.splice(randomIndex, 1)[0];
                container.appendChild(createPosterElement(poster, id, category));
            }
        }
    }

    // Menampilkan poster secara acak untuk setiap bagian
    displayRandomPosters(trendingContainer, ['action', 'drama', 'comedy', 'movies'], 15);
    displayRandomPosters(seriesContainer, ['series', 'drama'], 15);
    displayRandomPosters(creepyContainer, ['horror'], 15);
    displayRandomPosters(horizontalScrollContainer, Object.keys(posters), 10);
}

// Fungsi untuk menampilkan detail poster
function displayPosterDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('poster');
    const category = urlParams.get('category');
    const poster = posters[category]?.[id];

    if (poster) {
        document.getElementById('posterTitle').textContent = poster.title;
        document.getElementById('posterDescription').textContent = poster.description;
        document.getElementById('posterImage').src = poster.image;
        document.getElementById('posterImage').alt = poster.title;

        const linksContainer = document.getElementById('posterLinks');
        linksContainer.innerHTML = '';
        poster.links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.text;
            a.target = "_blank";
            linksContainer.appendChild(a);
        });
    } else {
        document.getElementById('posterTitle').textContent = "Poster Not Found";
        document.getElementById('posterDescription').textContent = "Sorry, we couldn't find the poster you were looking for.";
        document.getElementById('posterImage').src = "";
        document.getElementById('posterImage').alt = "Poster Not Found";
    }
}


// Event listener untuk menginisialisasi halaman

    // Menambahkan fungsionalitas dropdown untuk perangkat mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropbtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (window.innerWidth <= 600) {
                dropdownContent.classList.toggle('show');
            }
        });
    });

    // Dropdwon kolom
    window.addEventListener('click', function(e) {
        if (!e.target.matches('.dropbtn')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });



/* JavaScript untuk horizontal scroll */
function createHorizontalScrollPoster(poster, id, category) {
    const posterElement = document.createElement('div');
    posterElement.className = 'poster';
    posterElement.innerHTML = `
        <a href="poster-detail.html?poster=${id}&category=${category}">
            <img src="${poster.image}" alt="${poster.title}">
            <h3>${poster.title}</h3>
        </a>
    `;
    return posterElement;
}

function displayHorizontalScrollPosters() {
    const container = document.getElementById('horizontalScrollPosters');
    if (container) {
        container.innerHTML = '';
        const allPosters = Object.keys(posters).flatMap(category => 
            Object.entries(posters[category] || {}).map(([id, poster]) => ({id, category, poster}))
        );
        const shuffled = allPosters.sort(() => 0.5 - Math.random());
        shuffled.slice(0, 10).forEach(({id, category, poster}) => {
            container.appendChild(createHorizontalScrollPoster(poster, id, category));
        });
    }
}

// Panggil fungsi ini setelah DOM dimuat
document.addEventListener('DOMContentLoaded', function() {
    displayHorizontalScrollPosters();
    // ... kode lain yang sudah ada ...
});
// Event listener untuk scroll horizontal
const scrollContainer = document.querySelector('.horizontal-scroll');
if (scrollContainer) {
    scrollContainer.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });

    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        scrollContainer.classList.add('active');
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mouseleave', () => {
        isDown = false;
        scrollContainer.classList.remove('active');
    });

    scrollContainer.addEventListener('mouseup', () => {
        isDown = false;
        scrollContainer.classList.remove('active');
    });

    scrollContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainer.scrollLeft = scrollLeft - walk;
    });
}
