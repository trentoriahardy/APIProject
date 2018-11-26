$("#music-search ").click(function() {
  const musicInput = $("#name").val();
  //stores value in search box
  console.log(
    `hhttp://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${musicInput}&api_key=45ad45107e1b90317c77a05fe5de2a32&format=json`
  );

  $.ajax({
    url: `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${musicInput}&api_key=45ad45107e1b90317c77a05fe5de2a32&format=json`, //take info from API and bring it back
    success: function(data) {
      console.log(data);
      $("#musicName").html(data.name);
      const bioMusic = data.artist.bio.summary
      $("#bioMusic").html(data.artist.bio.summary);
      
      //const pic = data.artist.image
      //$("#pic").attr("src", pic)
      console.log(data.artist.image);
      console.log(data.artist.bio.summary);
      
   //console.log(
        //`https://lastfm-img2.akamaized.net/i/u/174s/42c44c83143196311a4549d4b9bd88ce.png`
     // );
      //const pic = data.artist.image[2]
      //$("#pic").attr("src", pic)
    },
    error: function(request, error) {
      alert("not a valid artist");
    }
  });
});
