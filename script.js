var app = new Vue({
  el: "#app",
  data: function () {
    return {
        ascOrder: true,
        modalID: '',
        users: []
    }
  },

  methods: {
      getUsers: function() {
          let app = this;
          fetch('https://my-json-server.typicode.com/Vespand/crmm-tasks/users')
              .then(function (response) {
                  return response.json();
              })
              .then((data) => {
                  this.DESCSort(data);
                  data.forEach((user, index) => user.place = ++index)
                  app.users = data;
              })
              .catch(function (error) {
                  console.log(error.message);
              });
      },
      ratingSort: function() {
          this.ascOrder ? this.DESCSort(this.users) : this.ASCSort(this.users);
          this.ascOrder = !this.ascOrder
      },
      ASCSort: function (array) {
          array.sort((a, b) => a.rating - b.rating);
      },
      DESCSort: function (array) {
          array.sort((a, b) => b.rating - a.rating);
      },
  },

  created() {
      this.getUsers();
  },
});