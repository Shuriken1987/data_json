function getData(url) {
    return new Promise((resolve, reject) => {
        let xml = new XMLHttpRequest();
        xml.open('get', url);
        xml.onreadystatechange = function () {
            if (xml.readyState === 4 && xml.status === 200) {
                let data = JSON.parse(xml.responseText);
                resolve(data);
            } else if (xml.status === 404) {
                reject('Error');
            }
        };
        xml.send();
    });
}