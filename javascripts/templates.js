(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/templates/article.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<!-- <ul class=\"pager\"> -->\n<!--   <li class=\"previous disabled\"><a href=\"#\">← Older</a></li> -->\n<!--   <li class=\"next\"><a href=\"#\">Newer →</a></li> -->\n<!-- </ul> -->\n<h2 class=\"page-header\">";
output += runtime.suppressValue(env.getFilter("title").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"description", env.autoesc)), env.autoesc);
output += "</h2>\n";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"div", env.autoesc), env.autoesc);
output += "\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"disqus_name", env.autoesc)) {
output += "\n<div id=\"disqus_thread\">\t\t\t\n</div>\n<script type=\"text/javascript\">\n  disqus_shortname = \"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"disqus_name", env.autoesc), env.autoesc);
output += "\"; // required: replace example with your forum shortname\n\tvar disqus_identifier = window.location.hash.replace('#','');\n\tvar disqus_url = window.location.href.replace('/#','');\n\tvar disqus_title = \"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"description", env.autoesc), env.autoesc);
output += "\"|| $('.gist-meta a').eq(1).text() || document.title;\n  (function() {\n  var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;\n  dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';\n\tdsq.id = 'disqus'\n\toldDisqus = document.getElementById('disqus')\n\tif (oldDisqus) oldDisqus.remove();\n  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);\n  })();\n</script>\n";
;
}
output += "\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/templates/gistlist.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<table class=\"table table-striped table-hover \">\n  <tbody>\n\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "data");
if(t_3) {for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("gist", t_4);
output += "\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<a href=\"#/gist/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id", env.autoesc), env.autoesc);
output += "/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description", env.autoesc), env.autoesc);
output += "\">\n\t\t\t\t";
if(runtime.memberLookup((t_4),"description", env.autoesc)) {
output += "\n\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description", env.autoesc), env.autoesc);
output += "\n\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t";
frame = frame.push();
var t_7 = runtime.memberLookup((t_4),"files", env.autoesc);
if(t_7) {var t_5;
if(runtime.isArray(t_7)) {
for(t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5][0]
frame.set("name", t_7[t_5][0]);
var t_9 = t_7[t_5][1]
frame.set("file", t_7[t_5][1]);
output += "\n\t\t\t\t";
output += runtime.suppressValue(t_8, env.autoesc);
output += " \n\t\t\t\t";
;
}
} else {
t_5 = -1;
for(var t_10 in t_7) {
t_5++;
var t_11 = t_7[t_10];
frame.set("name", t_10);
frame.set("file", t_11);
output += "\n\t\t\t\t";
output += runtime.suppressValue(t_10, env.autoesc);
output += " \n\t\t\t\t";
;
}
}
}
frame = frame.pop();
output += "\n\t\t\t\t";
;
}
output += "\n\t\t\t</a>\n\t\t\t</td>\n\t\t</tr>\n\t\t";
;
}
}
frame = frame.pop();
output += "\n  </tbody>\n</table>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/templates/header.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"container\">\n\t<div class=\"navbar-header\">\n\t\t<button data-target=\".navbar-responsive-collapse\" data-toggle=\"collapse\" class=\"navbar-toggle\" type=\"button\">\n\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t<span class=\"icon-bar\"></span>\n\t\t</button>\n\t\t<a href=\"#/\" class=\"navbar-brand\">Blogist</a>\n\t</div>\n\t<div class=\"navbar-collapse collapse navbar-responsive-collapse\">\n\t\t<ul class=\"nav navbar-nav\">\n\t\t\t<li class=\"active\"><a href=\"#\">Archives</a></li>\n\t\t</ul>\n\t\t<form class=\"navbar-form navbar-left\">\n\t\t\t<input type=\"text\" placeholder=\"Search\" class=\"form-control col-lg-8\">\n\t\t</form>\n\t\t\n\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"login", env.autoesc)) {
output += "\n\t\t\t<li>\n\t\t\t\t<a class=\"name\" href=\"#\">\n\t\t\t\t\t<img width=\"20\" height=\"20\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"avatar_url", env.autoesc), env.autoesc);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"name", env.autoesc), env.autoesc);
output += "\"> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"name", env.autoesc), env.autoesc);
output += "\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t";
;
}
else {
output += "\n\t\t\t<li><a href=\"#\">Login</a></li>\n\t\t\t";
;
}
output += "\n\t\t</ul>\n\t</div>\n</div>\n\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
