// {
//     "characters": "https://rickandmortyapi.com/api/character",
//     "locations": "https://rickandmortyapi.com/api/location",
//     "episodes": "https://rickandmortyapi.com/api/episode"
// }

  


let app = new Vue({
  el: "#App",

  data: {
    url: "https://rickandmortyapi.com/api/character/?page=2",
    result: '',
  },
  methods: {
    getWeather: function () {
      axios.get(this.url)
      .then((response) => {
        this.result = response.data.results;
    
      });
    },
  },
});


