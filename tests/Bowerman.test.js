import Bowerman from '../src/models/Bowerman';

test('Создание Bowerman с корректными параметрами', () => {
  const correct = {
    name: 'Bowman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  };

  const bowerman = new Bowerman('Bowman');

  expect(bowerman).toEqual(correct);
});

test('Повышение уровня Bowerman', () => {
  const bowerman = new Bowerman('Bowman');
  bowerman.levelUp();
  expect(bowerman.level).toBe(2);
  expect(bowerman.health).toBe(100);
  expect(bowerman.attack).toBe(30); // 25 * 1.2 = 30
  expect(bowerman.defence).toBe(30); // 25 * 1.2 = 30
});

test('Урон для Bowerman', () => {
  const bowerman = new Bowerman('Bowman');
  bowerman.damage(50);
  expect(bowerman.health).toBeCloseTo(62.5); // health -= 50*(1-25/100) = 62.5
});