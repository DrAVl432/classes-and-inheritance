import Undead from '../Undead';

test('Создание Undead с корректными параметрами', () => {
  const correct = {
    name: 'Ghoul',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  };

  const Undead = new Undead('Ghoul');

  expect(Undead).toEqual(correct);
});

test('Повышение уровня Undead', () => {
  const Undead = new Undead('Ghoul');
  Undead.levelUp();
  expect(Undead.level).toBe(2);
  expect(Undead.health).toBe(100);
  expect(Undead.attack).toBe(30); // 25 * 1.2 = 30
  expect(Undead.defence).toBe(30); // 25 * 1.2 = 30
});

test('Урон для Undead', () => {
  const Undead = new Undead('Ghoul');
  Undead.damage(50);
  expect(Undead.health).toBeCloseTo(62.5); // health -= 50*(1-25/100) = 62.5
});