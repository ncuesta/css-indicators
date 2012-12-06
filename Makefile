# CSS
css:
		sass --style expanded src/indicator.default.scss:build/indicator.css

css-min:
		sass --style compressed src/indicator.default.scss:build/indicator.min.css

watch:
		sass --watch --style compressed src/indicator.default.scss:build/indicator.min.css

release:
		make css
		make css-min

.PHONY: css css-min watch release
