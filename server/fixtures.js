var postsData = [ {
  title: 'Introducing Telescope',
  url: 'http://sachagreif.com/introducing-telescope/'
},
{
  title: 'Meteor',
  url: 'http://meteor.com'
}, {
  title: 'The Meteor Book',
  url: 'http://themeteorbook.com'
}
];

if(Posts.find().count() === 0){
  for(var i =0; i < postsData.length; i++){
    Posts.insert(postsData[i])
  }
};
