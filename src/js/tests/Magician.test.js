import Magician from '../Magician';

test('Создание Magician с корректными параметрами', () => {
  const correct = {
    name: 'Mage',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  };

  const Magician = new Magician('Mage');

  expect(Magician).toEqual(correct);
});

test('Повышение уровня Magician', () => {
  const Magician = new Magician('Mage');
  Magician.levelUp();
  expect(Magician.level).toBe(2);
  expect(Magician.health).toBe(100);
  expect(Magician.attack).toBe(12); // 10 * 1.2 = 12
  expect(Magician.defence).toBe(48); // 40 * 1.2 = 48
});

test('Урон для Magician', () => {
  const Magician = new Magician('Mage');
  Magician.damage(50);
  expect(Magician.health).toBeCloseTo(30); // health -= 50*(1-40/100) = 30
});