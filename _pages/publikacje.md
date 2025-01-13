---
layout: page
title: Publikacje
permalink: /publikacje/
nav: true
nav_order: 2
---

{% assign publications_by_section = site.publications | group_by:"section" %}

{% for section in publications_by_section %}
## {{ section.name }}
{% assign sorted_publications = section.items | sort:"year" | reverse %}
{% for publication in sorted_publications %}
- {{ publication.citation }}
{% endfor %}
{% endfor %}
