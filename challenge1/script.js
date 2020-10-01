const linkData = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/8/comments")
    .then((resp) => {
      const filterData = resp.data.filter((val) => {
        return val.postId == 8;
      });
      console.log("Nama: M. Farhan Athaullah");
      console.log(`Jumlah komen: ${resp.data.length}`);
      console.log(filterData);
    });
};

linkData();
