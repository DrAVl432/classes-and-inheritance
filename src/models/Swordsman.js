import Character from './Character';

class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 10;
    this.defence = 40;
  }
}

export default Swordsman;