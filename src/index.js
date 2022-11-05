const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};
console.log(character);
export default function showMe(elem) {
  const resArr = [];
  const { description = 'Описание недоступно', ...rest } = elem;
  const elemArr = {
    id: rest.id,
    name: rest.name,
    description,
    icon: rest.icon,
  };
  resArr.push(elemArr);
  return resArr;
}

showMe({
  id: 9,
  name: 'Нокаутирующий удар',
  icon: 'http://...',
  // <- обратите внимание, описание "засекречено"
});
