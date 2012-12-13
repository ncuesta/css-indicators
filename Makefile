SRC      = sass
SRC_FILE = $(SRC)/indicator.scss
OUTPUT   = build

clean:
		@rm -f $(OUTPUT)/*.css

css:
		sass --style expanded $(SRC_FILE):$(OUTPUT)/indicator.css

css-min:
		sass --update --style compressed $(SRC_FILE):$(OUTPUT)/indicator.min.css

js-hint:
		jshint --config=js/.jshintrc js/*.js

all:
		make clean
		make css
		make css-min
		make js-hint

.PHONY: all clean css css-min js-hint