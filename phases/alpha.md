---
layout: default
title: Alpha
---

# Alpha

{% for topic in site.data.alpha %}
{% assign topic_name = topic[0] %}
{% assign points = topic[1] %}

## {{ topic_name }}

{% for data in points %}
{% assign point = data[0] %}
{% assign info = data[1] %}
<hr>
{% if point == "group"%}
{% for group_point in info.points %}
{% assign sub_point = group_point[0] %}
{% assign sub_criteria = group_point[1] %}
### <a href="https://www.gov.uk/service-manual/digital-by-default#criterion-{{ sub_point }}" id="point-{{ sub_point }}" class="expandpoints">DBD point {{ sub_point }}</a>

#### Criteria
*{{ sub_criteria }}*


{% endfor %}

{% else %}
### <a href="https://www.gov.uk/service-manual/digital-by-default#criterion-{{ point }}" id="point-{{ point }}" class="expandpoints">DBD point {{ point }}</a>

#### Criteria
*{{ info.criteria }}*

{% endif %}


####Prompts
{{ info.prompts }}


#### Evidence
{{  info.evidence }}

{% endfor %}

{% endfor %}