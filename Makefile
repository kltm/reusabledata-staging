

all: index.html

# .PHONY: clean
# clean:
# 	rm docs/criteria.html
#./data-sources/compiled.json

.PHONY: check
check:
	kwalify -E -m ./scripts/source.schema.yaml
	kwalify -f ./scripts/source.schema.yaml ./data-sources/*.yaml

compiled.json:
	node ./scripts/yamls2json.js -i ./data-sources/ -o ./data-sources/compiled.json

index.html: compiled.json
	node ./scripts/tmp_static_output_gen.js -i ./data-sources/compiled.json -t ./scripts/tmp_static_output_gen.tmpl -o ./docs/index.html
