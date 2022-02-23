document.getElementById("get-news").addEventListener("click", loadData);

function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "news.txt", true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      document.querySelector(".output").innerHTML = `
        <p>
          ${this.response}
        </p>
      `;
    } else if (this.status === 404) {
      alert("Can not connect to DB!");
    }
  };

 

  xhr.send();
}

// document.getElementById("get-news").addEventListener("click", loadData);

// function loadData() {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "news.txt", true);

//   xhr.onload = function () {
//     if (this.status === 200) {

//       const news = JSON.parse(this.response);

//       let output = document.createElement(ul);

//       news.forEach(new => {
//         output += `
//            <li>
//             ${this.new[]}
//             </li>
//             `;
// });
    
//       document.querySelector(".output").innerHTML = output;
// }
//   };

//   xhr.send();
// };



