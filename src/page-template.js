const generatePage = () => {
    const page = [];

    const managerCard = manager => {
        return `
        <div class="card " style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.name}</h5>
          <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email:<a href="mailto:${manager.email}">${manager.email}</a></li>
          <li class="list-group-item">Office Number: 42</li>
        </ul>
        </div>
      </div>
      `
    }

    const engineerCard = engineer => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${engineer.name}</h5>
          <p class="card-text">Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:${engineer.id}</li>
          <li class="list-group-item">Email:<a href="mailto:${engineer.email}">${engineer.email}</a></li>
          <li class="list-group-item">Github:${engineer.github}</li>
        </ul>
        </div>
      </div>
        `
    }

    const internCard = intern => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${intern.name}</h5>
          <p class="card-text">Intern</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:${intern.id}</li>
          <li class="list-group-item">Email:<a href="mailto:${intern.email}">${intern.email}</a></li>
          <li class="list-group-item">School:${intern.school}</li>
        </ul>
        </div>
      </div>
        `
    }
}