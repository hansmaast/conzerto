export const sceneMap = {
  sc_R: 'rockefeller',
  sc_S: 'sentrum scene',
  sc_J: 'john dee',
  sc_L: 'leiligheten',
};

export const ticketStatusMap = {
  st3: 'Get tickets',
  st4: 'Few tickets',
  st5: 'Sold out',
  st6: 'Cancelled',
};

const filterScene = (shows = [], scene = '') => {
  return shows.filter((show) => show.scene === scene);
};

export const sortRockefellerShowsByScene = (shows) => ({
  rockefeller: filterScene(shows, 'rockefeller'),
  'sentrum scene': filterScene(shows, 'sentrum scene'),
  'john dee': filterScene(shows, 'john dee'),
  leiligheten: filterScene(shows, 'leiligheten'),
});
