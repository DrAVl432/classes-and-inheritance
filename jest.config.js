module.exports = {
  roots: ['<rootDir>/tests'], // Указать корневую директорию для тестов
  testEnvironment: 'node', // Указать тестовую среду
  moduleDirectories: ['node_modules', 'src'], // Указать места для поиска модулей
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Настройка алиасов для более удобного импорта
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Трансформация jsx (для JavaScript и TypeScript)
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Файлы для настройки после окружения
};