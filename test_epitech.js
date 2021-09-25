class Character {
    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    introduce() {
        return `Hi my name is ${this.first_name} ${this.last_name}`;
    }
}

class Warrior extends Character {
    constructor(first_name, last_name, role, weapon) {
        super(first_name, last_name);
        this.role = role
        this.weapon = weapon
    }

    getRole() {
        return `${super.introduce()}, i'm ${this.role}`;
    }

    getAction() {
        return `i can attack with a ${this.weapon}`
    }

    getFullIntroduce() {
        return `${this.getRole()} and ${this.getAction()}`
    }
}

const communityOfTheRing = []

const gandalf = new Warrior('gandalf', 'the white', 'wizard', 'stick');
const aragorn = new Warrior('aragorn', 'son of arathorn', 'knight', 'sword');
const legolas = new Warrior('legolas', 'Thranduilion', 'elf', 'bow')
const gimli = new Warrior('gimli', 'son of Glóin', 'dwarf', 'axe')

communityOfTheRing.push(gandalf, aragorn, legolas, gimli);

communityOfTheRing.forEach(member => console.log(member.getFullIntroduce()))
