"/"!=window.location.pathname&&(window.location=window.location.origin+"#"+window.location.pathname.replace(".html",""));var username=$("meta[name=username]").attr("content"),bloglistModel=new Model("bloglist","get@https://api.github.com/users/"+username+"/gists"),blogdetailModel=Model.extend({dataOptions:{dataType:"jsonp"}}),BlogDetailView=View.extend({el:$(".container .article"),template:"src/templates/article.html"}),BloglistView=View.extend({model:bloglistModel,el:$(".container .article"),template:"src/templates/gistlist.html"}),bloglist=new BloglistView,router=new Router;router.get("/",function(){bloglist.render()});var blogDetailOf=function(a){return new BlogDetailView({model:new blogdetailModel(a,"get@https://gist.github.com/"+username+"/"+a+".json")}).render({disqus_name:$("meta[name=disqus_name]").attr("content")})};router.get("/gist/:gistid/?",function(a){blogDetailOf(a.gistid)}),router.get("/gist/:gistid/.+",function(a){blogDetailOf(a.gistid)});