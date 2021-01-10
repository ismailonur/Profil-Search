class UI {
    constructor() {
        this.profileContainer = document.querySelector('#profileContainer');
        this.alert = document.querySelector('#alert');
    }

    showProfile(profile) {
        this.profileContainer.innerHTML = `

            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                        <a href="https://placeholder.com" >
                            <img src="https://via.placeholder.com/350"
                            class="img-thumbnail">
                        </a>
                    </div>
                    <div class="col-md-9">
                        <h4>Cantact</h4>
                        <ul class="list-group">
                            <li class"list-group">
                                İsim: ${profile.name}
                            </li>
                            <li class"list-group">
                                Kullanıcı Adı: ${profile.username}
                            </li>
                            <li class"list-group">
                                Email: ${profile.email}
                            </li>
                            <li class"list-group">
                                Adres: 
                                ${profile.address.street}
                                ${profile.address.city}
                                ${profile.address.zipcode}
                                ${profile.address.suite}
                            </li>
                            <li class"list-group">
                                Telefon Numarası: ${profile.phone}
                            </li>
                            <li class"list-group">
                                Website: ${profile.website}
                            </li>
                            <li class"list-group">
                                Şirket: ${profile.company.name}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    showAlert(text) {
        this.alert.innerHTML = `${text} is not found.`;
    }

    clear() {
        this.profileContainer.innerHTML = "";
        this.alert.innerHTML = "";
    }
}