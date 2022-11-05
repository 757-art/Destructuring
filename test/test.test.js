import showMe from '../src/index';

const arr = [
  {
    id: 9,
    name: 'Нокаутирующий удар',
    description: 'Описание недоступно',
    icon: 'http://...',
  },
];

const obj = {
  id: 9,
  name: 'Нокаутирующий удар',
  icon: 'http://...',
};

test('Тестируем правильную деструктуризацию объекта', () => {
  expect(arr).toEqual(showMe(obj));
});
