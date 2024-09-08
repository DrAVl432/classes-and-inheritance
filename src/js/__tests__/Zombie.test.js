import Zombie from '../src/models/Zombie';

test('Создание Zombie с корректными параметрами', () => {
  const correct = {
    name: 'Walker',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  };

  const Zombie = new Zombie('Walker');

  expect(Zombie).toEqual(correct);
});

test('Повышение уровня Zombie', () => {
  const Zombie = new Zombie('Walker');
  Zombie.levelUp();
  expect(Zombie.level).toBe(2);
  expect(Zombie.health).toBe(100);
  expect(Zombie.attack).toBe(48); // 40 * 1.2 = 48
  expect(Zombie.defence).toBe(12); // 10 * 1.2 = 12
});

test('Урон для Zombie', () => {
  const Zombie = new Zombie('Walker');
  Zombie.damage(50);
  expect(Zombie.health).toBeCloseTo(55); // health -= 50*(1-10/100) = 55
});