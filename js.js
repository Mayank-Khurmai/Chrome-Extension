window.onload=function(){
    chrome.history.search({text:""}, function(data){
        var i;
        for(i=0; i<data.length; i++)
        {
            var title = data[i].title;
            var url = data[i].url;
        
            var heading = document.createElement("H4");
            heading.innerHTML = title;

            var link = document.createElement("A");
            link.innerHTML=url;
            link.href=url;

            document.body.append(heading);
            document.body.append(link);
        }
    });
}