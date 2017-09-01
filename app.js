$(document).ready(function(){

           _loadDoc("./component/intro.gf","display_intro");

            const display ="display_load";
            const script = "my_script";

            function loadPage(u)
            {
               
                 _loadDoc(u,function(r){
                       if (r == false)
                       {  
                          alert("Upzz Something is Wrong ! Can't connect to server !");
                          return;
                       }
                    
                       _printTo("display_load",r);
                  });
            }
             _onClick("btn_get_start",function(){
                 loadPage("Getting-Started.html");
            });

            _onClick("btn_all_function",function(){
                  loadPage("index-index.html");
            });

            function part1()
            {
              _loadDoc("./code/part-one.html",function(res){
                     if (res)
                     {
                         _printTo(display,res);
                         _loadDoc("./code/part-one.js",script,_ajaxSetup.header,"script"); 
                     }
                });
            }
            function part2()
            {
               _loadDoc("./code/part-two.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-two.js",script,_ajaxSetup.header,"script"); 
                       }
                  });
            }
            function part3()
            {
               _loadDoc("./code/part-four.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-four.js",script,_ajaxSetup.header,"script"); 
                       }
                    });
            }
            _onClick("part_one",function(){
                 part1();
            });

            _onClick("part_two",function(){
                part2();
            });

             _onClick("part_three",function(){
               part3();
            });

            _onClick("part_four",function(){
                 _loadDoc("./code/part-four.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-four.js",script,_ajaxSetup.header,"script"); 
                       }
                  });
            });

            _onClick("part_five",function(){
                 _loadDoc("./code/part-five.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-five.js",script,_ajaxSetup.header,"script"); 
                       }
                  });
            });
             _onClick("part_six",function(){
                 _loadDoc("./code/part-six.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-six.js",script,_ajaxSetup.header,"script"); 
                       }
                  });
            });

          
            _onClick("part_seven",function(){
                 _loadDoc("./code/part-seven.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-seven.js",script,_ajaxSetup.header,"script"); 
                       }
                  });
            });
             _onClick("part_eight",function(){
                 _loadDoc("./code/part-eight.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-eight.js",script,_ajaxSetup.header,"script"); 
                       }
                  });
            });
            _onClick("part_nine",function(){
                 _loadDoc("./code/part-nine.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-nine.js",script,_ajaxSetup.header,"script"); 
                       }
                  });
            });

            _onClick("part_ten",function(){
                 _loadDoc("./code/part-ten.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-ten.js",script,_ajaxSetup.header,"script"); 
                       }
                  });
            });

            _onClick("part_eleven",function(){
                 _loadDoc("./code/part-eleven.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-eleven.js",script,_ajaxSetup.header,"script"); 
                       }
                  });
            });



            function message(a,b)
            {
              return '<article class="message is-success"><div class="message-body"> <p>'+a+'</p>  '+b+' </div> </article>';
            }

            const documentationPage = [
               'home','part1','part2','part3',
               'part4','part5','part6','part7',
               'part8','part9','part10','part11'
            ]

           
            _saveStorage("page",documentationPage[0]);
              

            var now_page = _getStorage("page");

            _keyCustom(function(){
                 if (now_page==='home')
                 {
                    part1();
                    _saveStorage("page",documentationPage[1]);
                    now_page = _getStorage("page");
                 }
                 else if(now_page==='part1')
                 {
                      part2();
                      _saveStorage("page",documentationPage[2]);
                      now_page = _getStorage("page");
                 }
                   else if(now_page==='part2')
                 {
                     part3();
                    _saveStorage("page",documentationPage[3]);
                     now_page = _getStorage("page");
                 }
                  else if(now_page==='part3')
                 {
                     _loadDoc("./code/part-four.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-four.js",script,_ajaxSetup.header,"script"); 
                       }
                    });
                    _saveStorage("page",documentationPage[4]);
                     now_page = _getStorage("page");
                 }
                  else if(now_page==='part4')
                 {
                     _loadDoc("./code/part-five.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-five.js",script,_ajaxSetup.header,"script"); 
                       }
                    });
                    _saveStorage("page",documentationPage[5]);
                     now_page = _getStorage("page");
                 }
                  else if(now_page==='part5')
                 {
                     _loadDoc("./code/part-six.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-six.js",script,_ajaxSetup.header,"script"); 
                       }
                    });
                    _saveStorage("page",documentationPage[6]);
                     now_page = _getStorage("page");
                 }
            },_keyCode.ctrl);
          
            
		});