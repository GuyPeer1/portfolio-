
$(initPage)

function initPage() {
    renderProjects()
}

function renderProjects() {
  var projs = getProj()
    var strHtmls = projs.map(proj => `
    <div class="col-md-4 col-sm-6 portfolio-item" data-toggle="modal" href="#portfolioModal1">
    <a class="portfolio-link" onclick="renderModal('${proj.id}')">
                <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
                </div>
                </div>
                <img class="img-fluid" src="img/portfolio/${proj.id}.png" alt="${proj.name}">
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

function renderModal(id) {
    const proj = getProjById(id)
    var strHtmls = `
    <!-- Project Details Go Here -->
    <h2>${proj.name}</h2>
    <p class="item-intro text-muted">${proj.title}</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.png" alt="${proj.name}">
    <p>${proj.desc}</p>
    <ul class="list-inline">
      <li>Published at ${getDate(proj.publishedAt)}</li>
      <li>Category: ${proj.labels}</li>
    
      <a id="link" href="${proj.url}" target="_blank" >Try It!</a>

    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project</button>
`
$('.modal-body').html(strHtmls)
    
}

function getProjById(projId) {
    const proj = gProjs.find(proj => projId === proj.id)
    return proj
}

function onFormSubmit(){
console.log('a');
var $email = $('.email').val()
}
