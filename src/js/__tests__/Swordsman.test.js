import Swordsman from '../src/models/Swordsman';

test('Создание Swordsman с корректными параметрами', () => {
  const correct = {
    name: 'Warrior',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  };

  const swordsman = new Swordsman('Warrior');

  expect(swordsman).toEqual(correct);
});

test('Повышение уровня Swordsman', () => {
  const swordsman = new Swordsman('Warrior');
  swordsman.levelUp();
  expect(swordsman.level).toBe(2);
  expect(swordsman.health).toBe(100);
  expect(swordsman.attack).toBe(48); // 40 * 1.2 = 48
  expect(swordsman.defence).toBe(12); // 10 * 1.2 = 12
});

test('Урон для Swordsman', () => {
  const swordsman = new Swordsman('Warrior');
  swordsman.damage(50);
  expect(swordsman.health).toBeCloseTo(55); // health -= 50*(1-10/100) = 55
});