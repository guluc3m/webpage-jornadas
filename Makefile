CSS_C=sass
CSS_FLAGS=-c
CSS_SRC=static/style
CSS_OUT=static/style
CSS_TARGETS=$(patsubst $(CSS_SRC)/%.scss,%.css,$(wildcard $(CSS_SRC)/*.scss))

css: $(CSS_TARGETS)

.SECONDEXPANSION:
%.css: $(CSS_SRC)/$$*.scss
	$(CSS_C) $(CSS_FLAGS) $? $(CSS_OUT)/$@