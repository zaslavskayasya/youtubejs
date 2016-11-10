var videos=[];

$.when(YouTube.getLastVideos()).then(function (result) {
    videos = result.items; /* перезаписали переменную видеос . заполнили массив полученными данными*/

        renderVideos(videos);



});

function renderVideos (videos) {
    videos.forEach(function (data, index) {
        console.log(data);


        var video =
            '<div class="col-sm-6 col-md-4">' +
            '<div class="thumbnail">' +
            '<img src=" ' + data.snippet.thumbnails.high.url + '" alt="">' +
            '<div class="caption">' +
            '<h6>'+ data.snippet.channelTitle+'</h6>'+
            '<h6>'+ data.snippet.publishedAt+'</h6>'+
          /* '<h6>'+  moment('data.snippet.publishedAt', 'en') +'</h6> '+ */

            '<h3>' + data.snippet.title + '</h3>' +
            '<p>' + data.snippet.description + '</p>' +
            '<p>' +
            '<a href="#" class="btn btn-primary" role="button">Button</a>' +
            '<a href="#" class="btn btn-default" role="button">Button</a>' +
            '</p>' +
            '</div>' +
            '</div>' +
            '</div>';
        $('#last .row').append(video);
    })
}

/*дз добавить вывод автора и дату . есть в объекте + maxResults чтоб выводило больше видео + прелоадер
* ajax beforeSend в функцию вставить лоадер + fontawesome
*
*
* */