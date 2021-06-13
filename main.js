
const youtube = [
    {
        img: "mobile2.jpg",
        name: `<a href="https://youtu.be/hpX6pL35KxI">Mobile Legends</a>`,
        image: "https://thumbs.gfycat.com/RaggedPastelAtlasmoth-max-1mb.gif",
    },
    {
        img: "xafa.jpg",
        name: `<a href="https://youtu.be/uz6pJIIhpPY">Xafa bo'lish yo'q</a>`,
        image: "xafa2.jpg",
    },
    {
        img: "pusu.jpg",
        name: `<a href="https://youtu.be/4EI9-zFIruI">Qashqirlar Makoni</a>`,
        image: "pusu2.gif",
    },
    {
        img: "barca2.jpg",
        name: `<a href="https://youtu.be/h4m68r8kWAc">Barcelona vs PSG</a>`,
        image: "barca3.jpg",
    },
    {
        img: "https://i.ytimg.com/vi/LI75-Z1U830/maxresdefault.jpg",
        name: `<a href="https://youtu.be/7GLYBoBK1Zw">Ubuntu o'rnatish</a>`,
        image: "https://www.e-sort.net/blog/wp-content/uploads/2013/04/tuyetkiemcomic.gif",
    },
    {
        img: "https://static10.tgstat.ru/channels/_0/82/822112a233e1245f3c89e44dfedde5ba.jpg",
        name: `<a href="https://youtu.be/x4bA40ugZeQ">Bass music</a>`,
        image: "https://i.ytimg.com/vi/9P7zJUVEfVc/maxresdefault.jpg",
    },
    {
        img: "https://sun9-33.userapi.com/impf/jCBTVkO6I0yq5JbRDlYpffe8hJ-qH_7uLKxJyQ/a2llQji5gp0.jpg?size=590x590&quality=96&sign=b7a061610b10ef28ef990b647f54a66b&type=album",
        name: `<a href="https://youtu.be/RKtGywpwpTk">Nortoy (kinouz)</a>`,
        image: "https://uzb-film.ucoz.com/_nw/4/21263462.jpg",
    },
    {
        img: "https://static10.tgstat.ru/channels/_0/82/822112a233e1245f3c89e44dfedde5ba.jpg",
        name: `<a href="https://youtu.be/x4bA40ugZeQ">Bass music</a>`,
        image: "https://i.ytimg.com/vi/Or0kOSlHMKs/maxresdefault.jpg",
    },
];

const youtubeList = document.getElementById("youtube-list");
youtubeList.innerHTML = "";

const setData = (search) => {
    console.log("search: " + search);
    youtubeList.innerHTML = "";

    const filtered = youtube.filter((value, index) => {
        return value.name.toLowerCase().indexOf(search.toLowerCase()) != -1;
    });

    filtered.map((value, index) => {
        const div = document.createElement("div");
        div.className = `col-md-3 `;
        div.innerHTML = `
        <div class="mt-3"><img src="${value.image}" alt="" width="100%" class="mobile"></div>
        <div class="d-flex mt-3" >
            <img src="${value.img}" alt="" class="image1">
            <p class="mt-4" ><b>${value.name}</b></p>
        </div>
        `;

        youtubeList.appendChild(div);
    });
};

setData("");

const filterData = () => {
    const search = document.getElementById("search-input").value;

    setData(search);
};

function myEnterFunction() {
    document.getElementById("demo2").innerHTML = "Assalomualekum";
}

function myOutFunction() {
    document.getElementById("demo2").innerHTML = `<h1 class="bir2" id="demo2"><b><i class="fab fa-youtube"></i> MY TUBE</b></h1>`;
}

