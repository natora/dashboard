const Projects =  [
  {
    username: 'Dessie',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg',
    name: 'Dr. Alfred Knoppers',
    deadline: '30.11.2018',
    progress: 90,
    color: 'pink',
  },
  {
    username: 'Jakayla',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/suprb/128.jpg',    
    name: 'Dr. Markus Baum',
    deadline: '20.12.2020',
    progress: 10,
    color: 'success'
  },
  {
    username: 'Ludwiczakpawel',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg',    
    name: 'Fikret Caner',
    deadline: '12.05.2019',
    progress: 50,
    color: 'info'
  },
  {
    username: 'Damenleeturks',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/damenleeturks/128.jpg',    
    name: 'Carla Baum',
    deadline: '31.12.2017',
    progress: 30,
    color: 'teal'
  },
  {
    username: 'Caspergrl',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/caspergrl/128.jpg',    
    name: 'Alfred Teufel',
    deadline: '31.12.2021',
    progress: 15,
    color: 'grey'
  },

];

const getProject = (limit) => {
  return (limit) ? Projects.slice(0, limit) : Projects;
};


export {
  Projects,
  getProject
};