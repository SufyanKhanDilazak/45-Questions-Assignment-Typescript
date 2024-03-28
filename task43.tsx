function make_sandwich(...items) {
    console.log(`Making a sandwich with:`);
    for (const item of items) {
      console.log(`- ${item}`);
    }
  }
  make_sandwich("ham", "cheese");
  make_sandwich("turkey", "lettuce", "tomato");
  make_sandwich("peanut butter", "jelly");
  