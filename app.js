$(document).ready(function(){
             var now_page = _getStorage("page");
            const documentationPage = [
               'home','part1','part2','part3',
               'part4','part5','part6','part7',
               'part8','part9','part10','part11'
               ,"Get-Start","All-Function"
            ]
 
             _saveStorage("page",documentationPage[0]);
              

         
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
                  getStart();
            });

            _onClick("btn_all_function",function(){
                  allFunction();
            });

            function getStart()
            {
                 loadPage("Getting-Started.html");
                  _saveStorage("page",documentationPage[12]);
            }

            function allFunction()
            {
                  loadPage("index-index.html");
                   _saveStorage("page",documentationPage[13]);
            }

            function part1()
            {
              _loadDoc("./code/part-one.html",function(res){
                     if (res)
                     {
                         _printTo(display,res);
                         _loadDoc("./code/part-one.js",script,_ajaxSetup.header,"script"); 
                          _saveStorage("page",documentationPage[1]);
                          now_page = _getStorage("page"); 
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
                            _saveStorage("page",documentationPage[2]);
                            now_page = _getStorage("page"); 
                       }
                  });
            }
            function part3()
            {
               _loadDoc("./code/part-three.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-four.js",script,_ajaxSetup.header,"script"); 
                           _saveStorage("page",documentationPage[3]);
                            now_page = _getStorage("page"); 
                       }
                    });
            }
             function part4()
            {
                    _loadDoc("./code/part-four.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-four.js",script,_ajaxSetup.header,"script"); 
                           _saveStorage("page",documentationPage[4]);
                            now_page = _getStorage("page"); 
                       }
                  });

            }
            function part5()
            {
                 _loadDoc("./code/part-five.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-five.js",script,_ajaxSetup.header,"script"); 
                           _saveStorage("page",documentationPage[5]);
                            now_page = _getStorage("page"); 
                       }
                  });

            }
            function part6()
            {
                 _loadDoc("./code/part-six.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-six.js",script,_ajaxSetup.header,"script"); 
                           _saveStorage("page",documentationPage[6]);
                            now_page = _getStorage("page"); 

                       }
                  });

            }
            function part7()
            {

                 _loadDoc("./code/part-seven.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-seven.js",script,_ajaxSetup.header,"script"); 
                           _saveStorage("page",documentationPage[7]);
                            now_page = _getStorage("page"); 
                       }
                  });
            }

            function part8()
            {
                  _loadDoc("./code/part-eight.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-eight.js",script,_ajaxSetup.header,"script"); 
                           _saveStorage("page",documentationPage[8]);
                            now_page = _getStorage("page"); 
                       }
                  });

            }
             function part9()
            {
                 _loadDoc("./code/part-nine.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-nine.js",script,_ajaxSetup.header,"script"); 
                           _saveStorage("page",documentationPage[9]);
                            now_page = _getStorage("page"); 
                       }
                  });

            }
             function part10()
            {
                 _loadDoc("./code/part-ten.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-ten.js",script,_ajaxSetup.header,"script"); 
                           _saveStorage("page",documentationPage[10]);
                            now_page = _getStorage("page"); 
                       }
                  });

            }
             function part11()
            {
                 _loadDoc("./code/part-eleven.html",function(res){
                       if (res)
                       {
                           _printTo(display,res);
                           _loadDoc("./code/part-eleven.js",script,_ajaxSetup.header,"script"); 
                             _saveStorage("page",documentationPage[11]);
                            now_page = _getStorage("page"); 
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
                part4();
            });

            _onClick("part_five",function(){
                 part5();
            });
             _onClick("part_six",function(){
                 part6();
            });

          
            _onClick("part_seven",function(){
                 part7();
            });
             _onClick("part_eight",function(){
                part8();
            });
            _onClick("part_nine",function(){
                 part9();
            });

            _onClick("part_ten",function(){
                 part10();
            });

            _onClick("part_eleven",function(){
                 part11();
            });



            function message(a,b)
            {
              return '<article class="message is-success"><div class="message-body"> <p>'+a+'</p>  '+b+' </div> </article>';
            }

           
           
           

            _keyCustom(function(){
                 if (now_page==='home')
                 {
                    part1();
                   
                 }
                 else if(now_page==='part1')
                 {
                      part2();
                     
                 }
                   else if(now_page==='part2')
                 {
                     part3();
                 
                 }
                  else if(now_page==='part3')
                 {
                    part4();
                  
                 }
                  else if(now_page==='part4')
                 {
                     part5();
                   
                 }
                  else if(now_page==='part5')
                 {
                     part6();
                 
                 }
                  else if(now_page==='part6')
                 {
                     part7();
                 
                 }
                  else if(now_page==='part7')
                 {
                     part8();
                 
                 }
                  else if(now_page==='part8')
                 {
                     part9();
                 
                 }
                  else if(now_page==='part9')
                 {
                     part10();
                 
                 }
                  else if(now_page==='part10')
                 {
                     part11();
                 
                 }
                  else if(now_page==='part11')
                 {
                     part1();
                 }
            },_keyCode.ctrl);
          
              
            _keyCustom(function(){
                _refresh("./");
            },_keyCode.home);

            _keyCustom(function(){
                getStart();
            },_keyCode.f2);

            _keyCustom(function(){
                allFunction();
            },_keyCode.f4);
		});
