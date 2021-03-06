// DATA
// Below data will hold all of the possible friend matches.

var friends = [
    {
        name: "John",
        photo: "https://www.aceshowbiz.com/images/photo/john_mayer.jpg",
        scores: ['5', '1', '4', '4', '5', '1', '2', '5', '4', '1']
    }, 
    {   name: "Kanye",
        photo: "https://e-cdns-images.dzcdn.net/images/artist/ede9b27e10a97024653d6d0d21fbccae/200x200-000000-80-0-0.jpg",
        scores: ['1', '4', '2', '4', '3', '2', '3', '5', '5', '5']
    },
    {
        name: "Kim",
        photo: "https://pbs.twimg.com/profile_images/994943919371706368/QTyfb7-M_400x400.jpg",
        scores: ['3', '2', '1', '2', '5', '4', '4', '1', '3', '4']
    },
    {
        name: "Cassie",
        photo: "http://thesource.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-17-at-11.52.09-AM.png",
        scores: ['2', '3', '5', '1', '2', '5', '1', '2', '4', '2']
    }
  ];
  //Export array so it's accessible to other files using require.
  module.exports = friends;