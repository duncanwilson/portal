!function(){var a=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{};l["tmpl-tr"]=a({compiler:[6,">= 2.0.0-beta.1"],main:function(a,l,e,n){var t,s=l.helperMissing,r="function",o=this.escapeExpression;return'<tr><td><a href="#" onclick="showResult(\''+o((t=null!=(t=l.result||(null!=a?a.result:a))?t:s,typeof t===r?t.call(a,{name:"result",hash:{},data:n}):t))+"');return false;\" >"+o((t=null!=(t=l.task_name||(null!=a?a.task_name:a))?t:s,typeof t===r?t.call(a,{name:"task_name",hash:{},data:n}):t))+"</a></td><td>"+o((t=null!=(t=l.timestamp||(null!=a?a.timestamp:a))?t:s,typeof t===r?t.call(a,{name:"timestamp",hash:{},data:n}):t))+"</td><td>"+o((l.json_metatags||a&&a.json_metatags||s).call(a,null!=a?a.tags:a,{name:"json_metatags",hash:{},data:n}))+"</td></tr>\n"},useData:!0}),l["tmpl-user"]=a({compiler:[6,">= 2.0.0-beta.1"],main:function(a,l,e,n){var t,s=l.helperMissing,r="function",o=this.escapeExpression;return'      <h2>User Profile</h2>\n      <div id="user_profile">\n          <div id="photo" class="col-md-2" style="width:200px ">\n            <img src="'+o((t=null!=(t=l.gravator_url||(null!=a?a.gravator_url:a))?t:s,typeof t===r?t.call(a,{name:"gravator_url",hash:{},data:n}):t))+'?s=180&d=mm"><br>\n            <a href="https://en.gravatar.com/" target="_blank" style="clear:both;">Profile Image</a><br><br>\n            <a id="reset_password" style="clear:both;">Reset Password</a>\n          </div>\n          <form  id="view_form" class="form-horizontal col-md-4" onsubmit="return edit_user();">\n              <div class="form-group">\n                <label class="col-md-3 control-label">Username</label>\n                  <div class="col-md-09">\n                <p class="form-control-static">'+o((t=null!=(t=l.username||(null!=a?a.username:a))?t:s,typeof t===r?t.call(a,{name:"username",hash:{},data:n}):t))+'</p>\n                </div>\n            </div>\n             <div class="form-group">\n                  <label class="col-md-3 control-label">Name</label>\n                    <div class="col-md-09">\n                  <p class="form-control-static">'+o((t=null!=(t=l.name||(null!=a?a.name:a))?t:s,typeof t===r?t.call(a,{name:"name",hash:{},data:n}):t))+'</p>\n                  </div>\n            </div>\n              <div class="form-group">\n                <label class="col-md-3 control-label">Email</label>\n                  <div class="col-md-09">\n                    <p class="form-control-static">'+o((t=null!=(t=l.email||(null!=a?a.email:a))?t:s,typeof t===r?t.call(a,{name:"email",hash:{},data:n}):t))+'</p>\n                 </div>\n             </div>\n             <button type="submit" id="form_submit" class="btn btn-default pull-right" style="margin-right:40px;">Edit</button>\n         </form>\n          <form class="col-md-4" id="user_form" onsubmit="return submit_user();">\n              <div style="display:none">\n                  <input type="hidden" name="csrfmiddlewaretoken" value="'+o((t=null!=(t=l.csrftoken||(null!=a?a.csrftoken:a))?t:s,typeof t===r?t.call(a,{name:"csrftoken",hash:{},data:n}):t))+'"/>\n             </div>\n              <div class="form-group">\n                 <label for="first_name">First Name</label>\n                  <input type="text" class="form-control" name="first_name" placeholder="John" value="'+o((t=null!=(t=l.first_name||(null!=a?a.first_name:a))?t:s,typeof t===r?t.call(a,{name:"first_name",hash:{},data:n}):t))+'">\n             </div>\n              <div class="form-group">\n                   <label for="last_name">Last Name</label>\n                    <input type="text" class="form-control" name="last_name" placeholder="Doe" value="'+o((t=null!=(t=l.last_name||(null!=a?a.last_name:a))?t:s,typeof t===r?t.call(a,{name:"last_name",hash:{},data:n}):t))+'">\n               </div>\n              <div class="form-group">\n                 <label for="email">Email address</label>\n                  <input type="email" class="form-control" name="email" placeholder="Enter email" value="'+o((t=null!=(t=l.email||(null!=a?a.email:a))?t:s,typeof t===r?t.call(a,{name:"email",hash:{},data:n}):t))+'">\n             </div>\n             <button type="submit" id="form_submit" class="btn btn-default pull-right">Update</button>\n         </form>\n         <div class="row" style="width:100%;clear:both;"></div>\n          <form class="form-inline" id="pass_form" onsubmit="return set_password();" style="display:none">\n            <div style="display:none">\n                    <input type="hidden" name="csrfmiddlewaretoken" value="'+o((t=null!=(t=l.csrftoken||(null!=a?a.csrftoken:a))?t:s,typeof t===r?t.call(a,{name:"csrftoken",hash:{},data:n}):t))+'"/>\n           </div>\n            <div class="form-group">\n             <label for="password">New Password</label>\n              <input type="password" class="form-control" name="password" placeholder="New Password">\n           </div>\n            <div class="form-group">\n             <label for="password2">Retype New Password</label>\n              <input type="password" class="form-control" name="password2" placeholder="Retype New Password">\n           </div>\n           <button type="submit" class="btn btn-default">Set Password</button>\n         </form>\n     </div>\n'},useData:!0})}();