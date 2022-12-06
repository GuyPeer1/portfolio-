var gProjs = [
    {
        id: "minesweeper",
        name: "minesweeper",
        title: "minesweeper game",
        desc: "minesweeper game",
        url: "https://guypeer1.github.io/Mine-Sweeper/",
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
        url: "https://guypeer1.github.io/Pacman/",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
]

function getProj() {
    return gProjs
}

function getProjById(projId) {
    const project = gProjs.find(project => project.id === projId)
    return project
}

function getDate(projTimestamp) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var date = new Date(projTimestamp)
    var month = date.getMonth()
    var year = date.getFullYear()
    var str = `${months[month]} ${year}`
        return str
}