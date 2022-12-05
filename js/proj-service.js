var gProjs = [
    {
        id: "minesweeper",
        name: "minesweeper",
        title: "minesweeper game",
        desc: "minesweeper game",
        url: "projs/minesweeper",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "bookshop",
        name: "bookshop",
        title: "bookshop application",
        desc: "Track what you are reading ",
        url: "projs/bookshop",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "pacman",
        name: "pacman",
        title: "pacman game",
        desc: "Enjoy the classic pacman ",
        url: "projs/pacman",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
]

$(document).ready(initPage)

function initPage() {
    renderProjects()
}

function renderProjects() {
    var strHtmls = gProjs.map(proj => `
    <div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
                </div>
                </div>
                <img class="img-fluid" src="img/portfolio/${proj.id}.png" alt="">
                </a>
                <div class="portfolio-caption">
                <h4>${proj.name}</h4>
                <p class="text-muted">${proj.title}</p>
                </div>
                </div>
                `
    )
    $('.bg-light .row-proj').html(strHtmls)
}
