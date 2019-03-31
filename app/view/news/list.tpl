<html>
  <head>
    <title>Hacker News</title>
  </head>
  <body>
    <ul>
      {% for item in list %}
        <li>
          <a href="{{ item.url }}">{{ item.title }}</a>
          {# <span>{{ item.time }}</span> #}
          {{ helper.format(item.time) }}
        </li>
      {% endfor %}
    </ul>
  </body>
</html>