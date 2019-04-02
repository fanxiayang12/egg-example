<html>
  <head>
    <title>Hacker News</title>
  </head>
  <body>
    <h1>{{ worksheetName }}</h1>
    <table border=1>
      <tr>
        <td>位置</td>
        <td>来源-模块</td>
        <td>来源-字段</td>
        <td>来源</td>
      </tr>
      {% for item in array %}
        <tr>
          <td>{{ item.key }}</td>
          <td>{{ item.table }}</td>
          <td>{{ item.filed }}</td>
          {% if item.validate %}
            
          {% else %}
            <td style="color: red;">{{ item.val }}</td>
          {% endif %}
        </tr>
      {% endfor %}
    </table>

    <h1>{{ worksheetName }}(去重)</h1>
    <table border=1>
      <tr>
        <td>位置</td>
        <td>来源-模块</td>
        <td>来源-字段</td>
      </tr>
      {% for item in uniqArray %}
        <tr>
          <td>{{ item.key }}</td>
          <td>{{ item.table }}</td>
          <td>{{ item.filed }}</td>
        </tr>
      {% endfor %}
    </table>
  </body>
</html>