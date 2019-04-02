<html>
  <head>
    <title>Hacker News</title>
    <script src="http://lib.sinaapp.com/js/jquery/2.0.2/jquery-2.0.2.min.js">
    </script>
    <script>
      $(function(){
          $('#submit').click(function(){
            $.ajax({
                type: "GET",
                url: "test.json",
                data: {username:$("#username").val(), content:$("#content").val()},
                dataType: "json",
                success: function(data){
                            
                }
            });
          });
      });
    </script>
  </head>
  <body>
    <form method="post" action="/news" enctype="multipart/form-data">
      <input type='text' name='worksheet' placeholder='请输入Sheet名称' />
      <input type='file' name='file' />
      <input type='submit' text='分析' id='submit' />
    </form>
</html>