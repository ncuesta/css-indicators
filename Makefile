SRC      = sass
SRC_FILE = $(SRC)/indicator.scss
JS_DIR   = js
JS_FILE  = $(JS_DIR)/css-indicator-generator.js
OUTPUT   = build

JS_MIN_FILE = $(JS_DIR)/css-indicator-generator.min.js
JS_TMP_FILE = $(JS_MIN_FILE)-tmp
COPYRIGHTJS = $(JS_DIR)/copyright.js

clean:
		@rm -f $(OUTPUT)/*.css
		@echo "Cleaning output directory... done"

css:
		@sass --style expanded $(SRC_FILE):$(OUTPUT)/indicator.css
		@echo "Compiling SCSS files to CSS... done"

css-min:
		@sass --update --style compressed $(SRC_FILE):$(OUTPUT)/indicator.min.css
		@echo "Compiling SCSS files to minified CSS... done"

js-hint:
		@jshint --config=js/.jshintrc $(JS_FILE)
		@echo "Running JSHint checks... done"

js-min:
		@make js-hint
		@uglifyjs $(JS_FILE) -nc > $(JS_TMP_FILE)
		@echo "/**\n * css-indicators by @ncuesta\n * Copyright 2012 José Nahuel Cuesta Luengo\n * MIT Licensed\n */" > $(COPYRIGHTJS)
		@cat $(COPYRIGHTJS) $(JS_TMP_FILE) > $(JS_MIN_FILE)
		@rm -f $(COPYRIGHTJS) $(JS_TMP_FILE)
		@echo "Minifying JS code... done"

all:
		@make clean
		@make css
		@make css-min
		@make js-min
		@echo "Make all... done"

.PHONY: all clean css css-min js-hint js-min