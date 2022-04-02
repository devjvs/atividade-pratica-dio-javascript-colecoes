function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value == 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Kaio', 'Admin');
usuarios.set('Rodrigo', 'Admin');
usuarios.set('Ariella', 'Admin');
usuarios.set('Victor', 'Admin');
usuarios.set('Paloma', 'Admin');

console.log(getAdmins(usuarios));