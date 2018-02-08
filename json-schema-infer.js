'use strict';

/*
  typeValue(value)
  returns a string representing the type of value as recognized by
  the typeof function with some more types added
  in case of dicitionaries it returns again a dictionary
  typing all its keys' values
*/

function typeValue(val) {
  if (Array.isArray(val)) {
    return 'array';
  }
  
  if (typeof val == 'object') {
    return getProperties(val);
  }
  
  return typeof val;
}

/*
  getProperties(JSONobject)
  returns a typed properties list composed by the same keys with
  values replaced with their types using the typeValue function
  in case of contained dictionaries it gets called recursively by
  the typeValue(val)
*/

function getProperties(j) {
  var k = Object.keys(j);
  
  k.forEach(function(name) {
    j[name] = typeValue(j[name]);
  })
  
  return j;
}


function getSchema(json_object) {
  var schema = {};

  schema['$schema'] = 'http://json-schema.org/draft-06/schema#';
  schema['title'] = 'JSON inferred schema';
  schema['description'] = 'JSON inferred schema';
  schema['type']  = 'object';
  schema['properties'] = getProperties(json_object);
  schema['required'] = Object.keys(schema['properties']);

  return schema;
}