import Daemon from '../Daemon';

test('Создание Daemon с корректными параметрами', () => {
  const correct = {
    name: 'Evil',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  };

  const Daemon = new Daemon('Evil');

  expect(Daemon).toEqual(correct);
});

test('Повышение уровня Daemon', () => {
  const Daemon = new Daemon('Evil');
  Daemon.levelUp();
  expect(Daemon.level).toBe(2);
  expect(Daemon.health).toBe(100);
  expect(Daemon.attack).toBe(12); // 10 * 1.2 = 12
  expect(Daemon.defence).toBe(48); // 40 * 1.2 = 48
});

test('Урон для Daemon', () => {
  const Daemon = new Daemon('Evil');
  Daemon.damage(50);
  expect(Daemon.health).toBeCloseTo(30); // health -= 50*(1-40/100) = 30
});