function make_album(artist, title, tracks = 0) {
    return { artist, title, tracks };
  }
  let album1 = make_album("The Beatles", "Abbey Road");
  let album2 = make_album("Taylor Swift", "Red", 16);
  let album3 = make_album("Queen", "A Night at the Opera");
  console.log(album1);
  console.log(album2);
  console.log(album3);
  