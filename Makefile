SRC      = sass
SRC_FILE = $(SRC)/indicator.scss
OUTPUT   = build

clean:
		@rm -f $(OUTPUT)/*.css

css:
		sass --style expanded $(SRC_FILE):$(OUTPUT)/indicator.css

css-min:
		sass --update --style compressed $(SRC_FILE):$(OUTPUT)/indicator.min.css

all:
		make clean
		make css
		make css-min

.PHONY: all clean css css-min