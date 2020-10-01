const url = "https://jsonplaceholder.typicode.com/posts";

const linkData = () => {
  axios.get(url).then((res) => {
    const filterData1 = res.data.filter((val) => {
      return val.userId == 8;
    });
    console.log("Nama: M. Farhan Athaullah");
    console.log(filterData1);
  });
};

linkData();
