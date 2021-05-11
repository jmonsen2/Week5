class Character {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
    describe() {
        return `${this.name} is ${this.age}`;
    }
}

class Role {
    constructor(name) {
        this.name = name;
        this.characters = [];
    }

    addCharacter() {
        if(character instanceof Character) {
            this.characters.push(character);
        } else {
            throw('Only add a character!')
        }
    }

    describe() {
        return `${this.name} has ${this.characters.length} characters.`;
 
    }
}

class List {
    constructor() {
        this.roles = [];
        this.selectedRole = null;
    }

    start() {
        let selection = this.options();
        while (selection != 0) {
        switch (selection) {
            case 'V':
                this.viewRole();
                break;
            case 'C':
                this.createRole();
                break;
            case 'D':
                this.deleteRole();
                break;
            default:
                selection = 0;
            

        }
        selection = this.options();

        }
        alert('Have a nice day!');

    }
    options() {
        return prompt(`
        
        Type V to view a role.

        Type C to create a role.

        Type D to delete a role.
        `)
    }

    characterOptions(roleInfo) {
        return prompt(`
        0 - Go Back
        
        1 - Create Character
        
        2 - Delete Character


        ${roleInfo}
        `);
    }

    createRole() {
        let name = prompt('Enter the role you wish a character to have:');
        this.roles.push(new Role(name));
    }

    viewRole() {
        let index = prompt('Enter the role you would like to view:')
        if (index > -1 && index < this.roles.length) {
            this.selectedRole = this.roles[index];
            let description = 'Role: ' + this.selectedRole.name + '/n';


            for(let i = 0; this.selectedRole.characters.length; i++) {
                description += i + this.selectedRole.characters[i].name + ' - ' + this.selectedRole.characters[i].position + '/n';
            }

            let selection = this.options(description);
            switch(selection) {
                case 'V':
                    this.viewCharacter();
                    break;
                case 'C':
                    this.createCharacter();
                    break;
                case 'D':
                    this.deleteCharacter();
            }
        }
    
    }

    deleteRole() {
        let index = prompt('What is the number of the role that you want deleted?');
        if(index > -1 && index < this.roles.length) {
            this.roles.splice(index, 1);
        }
    }

    createCharacter() {
        let name = prompt('Enter character name: ');
        let age = prompt('What is their age?');
        this.selectedRole.characters.push(new Character(name, age));
    }

    deleteCharacter() {
        let index = prompt('What is the number of the character that you want deleted?');
        if(index > -1 && index < this.selectedRole.characters.length) {
            this.selectedRole.characters.splice(index, 1);
        }

    }
}

let list = new List();
list.start();