const SERVERS = [
  { name: 'Thawing Springs', url: 'https://thawing-springs-53971.herokuapp.com/' },
  { name: 'Secret Lowlands', url: 'https://secret-lowlands-62331.herokuapp.com/' },
  { name: 'Calm Anchorage', url: 'https://calm-anchorage-82141.herokuapp.com/' },
  { name: 'Node 4', url: 'https://localhost:3000/' },
];

const END_POINT = {
  STATUS: 'api/v1/status',
  BLOCKS: 'api/v1/blocks',
};

export const endPointUrl = () => END_POINT;
const url = () => SERVERS;

export default url;
