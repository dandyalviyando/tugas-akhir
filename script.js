let fetchAll = async () => {
    const url = "https://feriirawan-api.herokuapp.com/list/symbols/province/200";
    const response = await fetch(url, {
        method: "GET"
    });

    const json = await response.json();

    allData = json.lambang;

    console.log(allData);

    return allData;
}

let displayResult = async () => {

    const data = await fetchAll();

    data.forEach((res) => {
        document.getElementById("cards").insertAdjacentHTML(
            'beforeend',
            `<div class="card pt-3 pl-1 pr-1 m-3" style="width: 18rem;">
                <img class="card-img-top" src=${res.url} alt="${res.title}">
                <div class="card-body">
                    <h5 class="card-title">${res.title}</h5>
                </div>
            </div>`
        );
    })
}