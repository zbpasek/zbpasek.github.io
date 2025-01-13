---
layout: page
title: Publikacje
permalink: /publikacje/
nav: true
nav_order: 2
---

{% assign sections_order = "Książki,Redaktor prac zbiorowych,Fragmenty książek,Hasła w słownikach i encyklopediach,Recenzje" | split: "," %}
{% assign publications_by_section = site.publications | group_by:"section" %}

{% for section_name in sections_order %}
  {% assign section = publications_by_section | where: "name", section_name | first %}
  {% if section %}
## {{ section_name }}
    {% assign sorted_publications = section.items | sort:"year" | reverse %}
    {% for publication in sorted_publications %}
{{ publication.citation }}

    {% endfor %}
  {% endif %}
{% endfor %}
