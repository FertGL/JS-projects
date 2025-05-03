let textarea = document.querySelector('formJSON')
let inputFile = document.querySelector('importFile')

inputFile.addEventListener('click', function (params) {
    const jsonFilePath = "test.json";

    fetch(jsonFilePath).then(response => {
        if(!response.ok) {
            console.error('Ошибка получения JSON')
        }

        return response.json()
    }).then( data => {
        console.log(data)
    }

    )
})