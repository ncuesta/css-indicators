#!/usr/bin/env ruby

min = 3
max = 36

html = ''

content_template = <<HTML
  <span class="bar"></span>
HTML

%w{small medium normal large x-large}.each do |size|
  html += <<-HTML
  <article id="by-size-#{size}">
    <h1>#{size}</h1>
    <p>
  HTML

  for bars in (min..max) do
    content = '<span class="bar"></span>' * bars

    html += <<HTML
      <!-- #{size} indicator - #{bars} bars -->
      <span class="indicator #{size} bars-#{bars}">
        #{content}
      </span>

HTML
  end

  html += <<-HTML
    </p>
  </article>
  HTML
end

print html