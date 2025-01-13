---
layout: page
title: Granty
permalink: /granty/
nav: true
nav_order: 1
---

<div class="news">
  {% assign grants = site.data.grants | sort: 'year' | reverse %}
  {% for grant in grants %}
  <div class="news-item">
    <div class="news-date">
      {{ grant.year }}
    </div>
    <div class="news-content">
      <strong>{{ grant.title }}</strong><br>
      {{ grant.description }}
    </div>
  </div>
  {% endfor %}
</div>
