// Data Poster
const posters = {
    trendingMovies: {
        1: {
            title: "Parasite",
            description: "A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. But their easy life gets complicated when their deception is threatened with exposure.",
            image: "https://i.pinimg.com/564x/30/a2/cb/30a2cbc7830110cd118272af60923148.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=5xH0HfJHsaY" },
                { text: "IMDb", url: "https://www.imdb.com/title/tt6751668/" }
            ]
        },
        2: {
            title: "Inception",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            image: "https://i.pinimg.com/564x/b5/a7/22/b5a72273c8670c69d259e405f8fbffc5.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
                { text: "IMDb", url: "https://www.imdb.com/title/tt1375666/" }
            ]
        },
        3: {
            title: "IT",
            description: "badut pembunuh psikopat, yang suka membunuh mimpi anak kecil lewat ketakutan dan teror yang sangat sangat mendalam, namun semua mimpi buruk itu berakhir ketia setiap anak mulai menemui jati dirinya masing masing.",
            image: "https://i.pinimg.com/236x/60/c7/28/60c72822e1f4be0d4fd86a72410fad38.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=YoHD9XEInc0" },
                { text: "IMDb", url: "https://www.imdb.com/title/tt1375666/" }
            ]
        },
        // Tambahkan lebih banyak trending movies di sini
    },
    series: {
        1: {
            title: "Stranger Things",
            description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
            image: "https://i.pinimg.com/236x/25/04/f7/2504f76a3a28a228d6fd9db0bff5af19.jpg",
            links: [
                { text: "Watch on Netflix", url: "https://www.netflix.com/title/80057281" },
                { text: "IMDb", url: "https://www.imdb.com/title/tt4574334/" }
            ]
        },
        2: {
            title: "Breaking Bad",
            description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
            image: "https://i.pinimg.com/236x/a1/14/d3/a114d33283484eeecc5f98a23d43890c.jpg",
            links: [
                { text: "Watch on Netflix", url: "https://www.netflix.com/title/70143836" },
                { text: "IMDb", url: "https://www.imdb.com/title/tt0903747/" }
            ]
        },
        // Tambahkan lebih banyak series di sini
    },
    adrenalin: {
        1: {
            title: "Mad Max: Fury Road",
            description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
            image: "https://i.pinimg.com/236x/07/72/5a/07725a4383b6158cf22cc362492faea1.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=hEJnMQG9ev8" },
                { text: "IMDb", url: "https://www.imdb.com/title/tt1392190/" }
            ]
        },
        2: {
            title: "John Wick",
            description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
            image: "https://i.pinimg.com/236x/02/12/b4/0212b4a89dc44f6cf134af4a4d13f156.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=2AUmvWm5ZDQ" },
                { text: "IMDb", url: "https://www.imdb.com/title/tt2911666/" }
            ]
        },
        3: {
            title: "titanic",
            description: "kapal tenggelam dan hanyut. tu ceweknya ditinggal mati sama si cowok. kasian banget lah pokoknya.",
            image: "https://i.pinimg.com/236x/8c/e3/5f/8ce35f08a33293522c4d60cbc5e642be.jpg",
            links: [
                { text: "Watch Trailer", url: "https://www.youtube.com/watch?v=2AUmvWm5ZDQ" },
                { text: "IMDb", url: "https://www.imdb.com/title/tt2911666/" }
            ]
        },
        // Tambahkan lebih banyak film adrenalin di sini
    }
};

// Fungsi untuk mengambil ID poster dan kategori dari URL
function getPosterInfoFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        id: urlParams.get('poster'),
        category: urlParams.get('category')
    };
}

// Fungsi untuk menampilkan detail poster
function displayPosterDetail() {
    const { id, category } = getPosterInfoFromUrl();
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

// Fungsi untuk membuat elemen poster
function createPosterElement(poster, id, category) {
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

// Fungsi untuk menampilkan poster di halaman utama
function displayPosters() {
    const trendingMoviesContainer = document.getElementById('trendingMovies');
    const seriesContainer = document.getElementById('series');
    const adrenalinContainer = document.getElementById('adrenalin');
    const horizontalScrollContainer = document.querySelector('.poster-container');

    if (trendingMoviesContainer && seriesContainer && adrenalinContainer && horizontalScrollContainer) {
        // Menampilkan Trending Movies
        Object.entries(posters.trendingMovies).forEach(([id, poster]) => {
            trendingMoviesContainer.appendChild(createPosterElement(poster, id, 'trendingMovies'));
        });

        // Menampilkan Series
        Object.entries(posters.series).forEach(([id, poster]) => {
            seriesContainer.appendChild(createPosterElement(poster, id, 'series'));
        });

        // Menampilkan Adrenalin Movies
        Object.entries(posters.adrenalin).forEach(([id, poster]) => {
            adrenalinContainer.appendChild(createPosterElement(poster, id, 'adrenalin'));
        });

        // Menampilkan semua poster di horizontal scroll
        Object.entries(posters).forEach(([category, categoryPosters]) => {
            Object.entries(categoryPosters).forEach(([id, poster]) => {
                const scrollPosterItem = document.createElement('div');
                scrollPosterItem.className = 'poster-item';
                scrollPosterItem.innerHTML = `
                    <a href="poster-detail.html?poster=${id}&category=${category}">
                        <img src="${poster.image}" alt="${poster.title}">
                        <h3>${poster.title}</h3>
                    </a>
                `;
                horizontalScrollContainer.appendChild(scrollPosterItem);
            });
        });
    }
}

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

// Fungsi untuk menampilkan poster di halaman utama
function displayPosters() {
    const trendingMoviesContainer = document.getElementById('trendingMovies');
    const seriesContainer = document.getElementById('series');
    const adrenalinContainer = document.getElementById('adrenalin');
    const horizontalScrollContainer = document.querySelector('.poster-container');

    if (trendingMoviesContainer && seriesContainer && adrenalinContainer && horizontalScrollContainer) {
        // Menampilkan Trending Movies
        Object.entries(posters.trendingMovies).forEach(([id, poster]) => {
            trendingMoviesContainer.appendChild(createPosterElement(poster, id, 'trendingMovies'));
        });

        // Menampilkan Series
        Object.entries(posters.series).forEach(([id, poster]) => {
            seriesContainer.appendChild(createPosterElement(poster, id, 'series'));
        });

        // Menampilkan Adrenalin Movies
        Object.entries(posters.adrenalin).forEach(([id, poster]) => {
            adrenalinContainer.appendChild(createPosterElement(poster, id, 'adrenalin'));
        });

        // Menampilkan poster di horizontal scroll
        displayHorizontalScrollPosters(horizontalScrollContainer);
    }
}

// Fungsi baru untuk menampilkan poster di horizontal scroll 
//{ id: [id_poster], category: '[nama_kategori]', poster: posters.[nama_kategori][id_poster] },
function displayHorizontalScrollPosters(container) {
    // Daftar poster untuk horizontal scroll
    const horizontalScrollPosters = [
        { id: 1, category: 'trendingMovies', poster: posters.trendingMovies[1] },
        { id: 2, category: 'series', poster: posters.series[1] },
        { id: 1, category: 'adrenalin', poster: posters.adrenalin[1] },
        { id: 2, category: 'trendingMovies', poster: posters.trendingMovies[2] },
        { id: 2, category: 'series', poster: posters.series[2] },
        { id: 3, category: 'trendingMovies', poster: posters.trendingMovies[3] },
        { id: 2, category: 'adrenalin', poster: posters.adrenalin[2] },
        { id: 3, category: 'adrenalin', poster: posters.adrenalin[3] },
        // Tambahkan poster lain sesuai kebutuhan
    ];

    horizontalScrollPosters.forEach(({ id, category, poster }) => {
        const scrollPosterItem = document.createElement('div');
        scrollPosterItem.className = 'poster-item';
        scrollPosterItem.innerHTML = `
            <a href="poster-detail.html?poster=${id}&category=${category}">
                <img src="${poster.image}" alt="${poster.title}">
                <h3>${poster.title}</h3>
            </a>
        `;
        container.appendChild(scrollPosterItem);
    });
}

// ... (kode selanjutnya tetap sama)

// Panggil fungsi yang sesuai berdasarkan halaman yang sedang dibuka
if (window.location.pathname.includes('poster-detail.html')) {
    window.onload = displayPosterDetail;
} else {
    window.onload = displayPosters;
}

// Dropdown functionality for mobile devices
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropbtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (window.innerWidth <= 600) {
                if (dropdownContent.style.display === 'block') {
                    dropdownContent.style.display = 'none';
                } else {
                    // Hide all other dropdowns
                    document.querySelectorAll('.dropdown-content').forEach(content => {
                        content.style.display = 'none';
                    });
                    dropdownContent.style.display = 'block';
                }
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.matches('.dropbtn')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                if (dropdown.style.display === 'block') {
                    dropdown.style.display = 'none';
                }
            });
        }
    });
});
