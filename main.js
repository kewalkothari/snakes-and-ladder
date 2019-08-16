var _gameConfiguration;

window.onload = function (e) {
    includeFile('js/configure-game.js').then(function () {
        _gameConfiguration = new ConfigureGame();
    });
}

var includeFiles = function(fileURLs) {
    let promiseList = [];
    for (let fileIndex = 0; fileIndex < fileURLs.length; fileIndex++) {
        promiseList.push(includeFile(fileURLs[fileIndex]));
    }

    return new Promise(function(resolve, reject) {
        Promise.all(promiseList).then(function() {
            resolve();
        }).catch(function (error) {
            reject(error);
        })
    })
}

var includeFile = function(fileURL) {
    return new Promise(function(resolve, reject) {
        let script  = document.createElement('script');
        script.src  = fileURL;
        script.type = 'text/javascript';
        script.async = false;
        document.head.appendChild(script);

        script.onload = function () {
            resolve();
        }
    })
    
}