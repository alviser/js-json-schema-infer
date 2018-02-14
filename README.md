# js-json-schema-infer
a tiny javascript library to infer schemas from JSON objects

based on the specifications and the examples found at
http://json-schema.org/

warning
===
implementation is still raw and incomplete: e.g. dictionaries contained in arrays are not handled correctly

usage
===
`getSchema(JSON_object)`

returns a JSON object containing the inferred schema