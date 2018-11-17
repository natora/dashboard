const Menu =  [
  { header: 'Apps' },
  {
    title: 'Dashboard',
    group: 'apps',
    icon: 'dashboard',
    name: 'Dashboard',
  },
  {
    title: 'Persönlicher Assistent',
    group: 'apps',
    icon: 'chat_bubble',
    target: '_blank',
    name: 'Chat',
  },
  {
    title: 'Expat versichern',
    group: 'apps',
    name: 'Mail',
    target: '_blank',
    icon: 'email',
  }

  
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
