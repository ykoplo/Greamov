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
        3: {
            title: "Monkey Men",
            description: "A thief who enters the dreams of others to steal secrets from their subconscious.",
            image: "https://i.pinimg.com/474x/5d/0e/ea/5d0eea0f99f19fa474b90374f0347162.jpg",
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
        1: {
            title: "Start Up",
            description: "A thief who enters the dreams of others to steal secrets from their subconscious.",
            image: "https://i.pinimg.com/236x/a5/92/4f/a5924f80801cc96f40753591fd60adda.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
                { text: "More Info", url: "https://www.imdb.com/title/tt1375666/" }
            ]
        },
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
        2: {
            title: "King the Land",
            description: "game dengan hadiah besar dan bertaruhkan nyawa.",
            image: "https://i.pinimg.com/236x/c0/f2/8e/c0f28ef0c47afc069b988a2138e5e8a9.jpg",
            links: [
                { text: "Watch Trailer", url: "https:linkdisiniiii" },
                { text: "More Info", url: "https:link disinii" }
            ]
        },
        3: {
            title: "Big Mouth",
            description: "game dengan hadiah besar dan bertaruhkan nyawa.",
            image: "https://i.pinimg.com/236x/bd/bf/be/bdbfbe51aa478ccab7290a01e4d02634.jpg",
            links: [
                { text: "Watch Trailer", url: "https:linkdisiniiii" },
                { text: "More Info", url: "https:link disinii" }
            ]
        },
        // Isi dengan data series TV
    }
    
};

//kolompencarian
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

        // Navigasi saat data ditemukan
        if (filteredPosters.length > 0) {
            if (filteredPosters.length === 1 && redirect) {
                const singleResult = filteredPosters[0];
                console.log("Navigasi ke poster detail:", singleResult);
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
});
//akhir kolom pencarian

// 1. Pertama, ubah fungsi displayHomePagePosters menjadi lebih robust:
function displayHomePagePosters() {
    // Helper function untuk memastikan container ada sebelum mencoba mengisinya
    function displaySection(sectionKey, containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Container ${containerId} tidak ditemukan`);
            return;
        }

        const section = curatedSelections[sectionKey];
        if (!section || !section.items) {
            console.warn(`Section ${sectionKey} tidak valid`);
            return;
        }

        container.innerHTML = '';
        section.items.forEach(item => {
            if (!posters[item.category] || !posters[item.category][item.id]) {
                console.warn(`Poster tidak ditemukan untuk category: ${item.category}, id: ${item.id}`);
                return;
            }

            const poster = posters[item.category][item.id];
            const posterElement = createPosterElement(poster, item.id, item.category);
            container.appendChild(posterElement);
        });
    }

    displaySection('trending', 'trendingMovies');
    displaySection('series', 'updatedSeries');
    displaySection('creepy', 'creepyMovies');
}


// 2. Perbaiki event listener untuk DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;

    if (path.includes('poster-detail.html')) {
        console.log('Menampilkan detail poster');
        displayPosterDetail(); // Hanya panggil di halaman detail
    } else if (path.includes('index.html') || path === '/') {
        console.log('Menampilkan halaman utama');
        displayHomePagePosters();
    }
});


// 3. Perbaiki fungsi createPosterElement untuk menangani error
function createPosterElement(poster, id, category) {
    if (!poster || !poster.image || !poster.title) {
        console.error('Data poster tidak lengkap:', { poster, id, category });
        return document.createElement('div'); // Kembalikan elemen kosong jika data tidak valid
    }

    const posterElement = document.createElement('div');
    posterElement.className = 'poster';
    posterElement.innerHTML = `
        <a href="poster-detail.html?poster=${id}&category=${category}">
            <div class="poster-wrapper">
                <img src="${poster.image}" alt="${poster.title}" onerror="this.style.display='none'; this.parentElement.style.backgroundColor='#e0e0e0'; this.parentElement.innerHTML='<p>Image Not Available</p>';">
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

// Daftar ID poster terpilih untuk setiap kategori
const curatedSelections = {
    trending: {
        items: [
            { category: 'drama', id: '1' },    // Shadowplay
            { category: 'drama', id: '2' },    // Parasite
            { category: 'movies', id: '1' },   // FALL
            { category: 'movies', id: '2' },   // HER
            { category: 'horror', id: '1' },   // Annabelle
            { category: 'horror', id: '5' },   // MEGAN
            { category: 'horror', id: '7' },   // The Exorcist
            { category: 'horror', id: '9' }    // Trap
        ],
        title: 'Trending Movies'
    },
    series: {
        items: [
            { category: 'series', id: '1' },   // Squid Game
            { category: 'series', id: '2' },   // King the Land
            { category: 'series', id: '3' },   // Big Mouth
            { category: 'netflix', id: '1' }   // Start Up
        ],
        title: 'Updated Series'
    },
    creepy: {
        items: [
            { category: 'horror', id: '1' },   // Annabelle
            { category: 'horror', id: '2' },   // Indigo
            { category: 'horror', id: '3' },   // Bayi Ajaib
            { category: 'horror', id: '4' },   // Don't Look Away
            { category: 'horror', id: '5' },   // MEGAN
            { category: 'horror', id: '10' }   // Insidious
        ],
        title: 'Creepy Movies'
    }
};


document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    if (path.includes('index.html') || path === '/') {
        displayHomePagePosters();
    } else if (path.includes('poster-detail.html')) {
        displayPosterDetail();
    } else {
        const category = path.split('/').pop().split('.')[0];
        displayCategoryPosters(category);
    }

    

    // ... kode dropdown dan event listener lainnya tetap sama ...
});

// Fungsi untuk menampilkan detail poster
function displayPosterDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('poster');
    const category = urlParams.get('category');
    const poster = posters[category]?.[id];
    console.log("Parameter URL:", { id, category });
    console.log("Poster data:", poster);

    // Elemen HTML yang digunakan
    const titleElement = document.getElementById('posterTitle');
    const descriptionElement = document.getElementById('posterDescription');
    const imageElement = document.getElementById('posterImage');
    const trailerLink = document.getElementById('watchTrailer');
    const infoLink = document.getElementById('moreInfo');
    console.log("HTML Elements:", {
        titleElement,
        descriptionElement,
        imageElement,
        trailerLink,
        infoLink
    });

    if (poster) {
        console.log("Data poster ditemukan:", poster);
        // Isi elemen dengan data poster
        titleElement.textContent = poster.title;
        descriptionElement.textContent = poster.description;
        imageElement.src = poster.image;
        imageElement.alt = poster.title;

        // Isi tautan
        const trailer = poster.links.find(link => link.text === "Watch Trailer");
        const info = poster.links.find(link => link.text === "More Info");

        if (trailer) {
            trailerLink.href = trailer.url;
            trailerLink.style.display = "inline-block";
        } else {
            trailerLink.style.display = "none";
        }

        if (info) {
            infoLink.href = info.url;
            infoLink.style.display = "inline-block";
        } else {
            infoLink.style.display = "none";
        }
    } else {
        console.error("Data poster tidak ditemukan:", { id, category });
        console.error("Poster tidak ditemukan untuk kategori:", category, "dan ID:", id);
        titleElement.textContent = "Poster Not Found";
        descriptionElement.textContent = "Data untuk poster ini tidak tersedia.";
        imageElement.src = "";
        trailerLink.style.display = "none";
        infoLink.style.display = "none";
    }
}




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

