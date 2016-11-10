var key = 'AIzaSyDnHWkrm1UcqjHXw87mfHhZhXIgax7F-Fk';

var YouTube = {
    getLastVideos: function (){
        var dfd = jQuery.Deferred();
        $.ajax({
            url: "https://www.googleapis.com/youtube/v3/videos",
            data: {
                part: 'snippet',
                maxResults: 50 ,
                key : key,
                chart: 'mostPopular'
            },
            success: function(result) {
               dfd.resolve(result)

            },
            beforeSend: function() {
               var loader = document.querySelector("#myDiv");
                loader.style.textAlign = "center";
                loader.style.display = "block";


            },
            complete: function(){
                var loader = document.querySelector("#myDiv");
                loader.style.display = "none";

            }
        });
     return dfd.promise();
    }
}